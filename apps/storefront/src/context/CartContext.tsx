import React, { createContext, useContext, useState, useEffect } from 'react';
import { SareeProduct } from '../data/mockData';
import { apiClient } from '../api/client';

export interface CartItem {
  id: string;
  product: SareeProduct;
  quantity: number;
  blouseOption?: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: SareeProduct, quantity?: number, blouseOption?: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  itemsSubtotal: number;
  taxAmount: number;
  shippingFee: number;
  totalAmount: number;
  totalItemsCount: number;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  discountAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('umadhvaya_cart_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discountAmount, setDiscountAmount] = useState(0);

  useEffect(() => {
    localStorage.setItem('umadhvaya_cart_items', JSON.stringify(items));
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = async (product: SareeProduct, quantity = 1, blouseOption = 'Unstitched Standard') => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: `cart_${product.id}_${Date.now()}`,
          product,
          quantity,
          blouseOption,
        },
      ];
    });
    setIsOpen(true);

    // Sync in background to API if backend server is up
    try {
      await apiClient.post('/cart/items', { productId: product.id, quantity });
    } catch {
      // Local state preserved
    }
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
    setAppliedCoupon(null);
    setDiscountAmount(0);
  };

  const itemsSubtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const applyCoupon = (code: string) => {
    if (code.toUpperCase() === 'ROYAL10') {
      const discount = Math.min(itemsSubtotal * 0.1, 5000);
      setDiscountAmount(discount);
      setAppliedCoupon('ROYAL10');
      return true;
    }
    return false;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscountAmount(0);
  };

  const taxableAmount = Math.max(0, itemsSubtotal - discountAmount);
  const taxAmount = Math.round(taxableAmount * 0.05);
  const shippingFee = itemsSubtotal > 5000 || items.length === 0 ? 0 : 250;
  const totalAmount = taxableAmount + taxAmount + shippingFee;
  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemsSubtotal,
        taxAmount,
        shippingFee,
        totalAmount,
        totalItemsCount,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        discountAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
