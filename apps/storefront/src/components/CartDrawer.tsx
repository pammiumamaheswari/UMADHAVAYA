import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    itemsSubtotal,
    taxAmount,
    shippingFee,
    totalAmount,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={closeCart} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#C5A059]/20 bg-[#FFFDF9] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#670A1E]" />
              <h2 className="font-cinzel text-lg font-bold tracking-wider text-[#670A1E]">
                YOUR ROYAL BAG ({items.length})
              </h2>
            </div>
            <button onClick={closeCart} className="p-1 text-stone-400 hover:text-stone-700">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#670A1E]/5 px-5 py-2.5 border-b border-[#C5A059]/15">
            {itemsSubtotal >= 5000 ? (
              <div className="text-xs text-emerald-800 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>You qualify for <strong>Complimentary Insured Shipping!</strong></span>
              </div>
            ) : (
              <div className="text-xs text-stone-600">
                Add <strong>₹{(5000 - itemsSubtotal).toLocaleString('en-IN')}</strong> more for complimentary insured delivery.
              </div>
            )}
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-[#C5A059] mx-auto mb-3 opacity-60" />
                <h3 className="font-royal text-xl text-stone-800 font-semibold">Your Bag is Empty</h3>
                <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                  Explore our royal heirloom collection and discover your signature silk drape.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-6 px-6 py-2.5 bg-[#670A1E] text-white text-xs font-semibold tracking-widest uppercase rounded shadow-sm hover:bg-[#721121]"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-white p-3 border border-stone-200/80 rounded-sm">
                  <img
                    src={item.product.images[0]?.url}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover rounded bg-stone-100 flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-semibold text-[#C5A059]">
                        {item.product.fabric}
                      </div>
                      <h4 className="font-royal text-base font-semibold text-stone-900 line-clamp-1">
                        {item.product.name}
                      </h4>
                      <div className="text-xs font-bold text-[#670A1E] mt-1">
                        ₹{item.product.price.toLocaleString('en-IN')}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                      <div className="flex items-center border border-stone-300 rounded bg-[#FAF7F2]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-0.5 text-stone-600 hover:text-black text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-0.5 text-stone-600 hover:text-black text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-stone-400 hover:text-rose-600 text-xs flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-[#C5A059]/20 space-y-3">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">₹{itemsSubtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5% Silk Standard)</span>
                  <span className="font-semibold text-stone-900">₹{taxAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-700">
                    {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#670A1E] pt-2 border-t border-stone-200">
                  <span>Total Amount</span>
                  <span>₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                onClick={closeCart}
                className="w-full py-3.5 bg-[#5B0E2D] hover:bg-[#721121] text-white text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 shadow-md transition-all rounded"
              >
                <span>Proceed To Royal Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
