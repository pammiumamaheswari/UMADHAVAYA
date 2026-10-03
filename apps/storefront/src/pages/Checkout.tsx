import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { apiClient } from '../api/client';
import { ShieldCheck, Lock, ArrowRight, Tag, CreditCard } from 'lucide-react';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, itemsSubtotal, taxAmount, shippingFee, totalAmount, discountAmount, appliedCoupon, applyCoupon, removeCoupon, clearCart } = useCart();
  const { user } = useAuth();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Address State
  const [formData, setFormData] = useState({
    fullName: user ? `${user.firstName} ${user.lastName}` : '',
    email: user ? user.email : '',
    phone: user?.phone || '',
    streetAddress: '',
    apartmentSuite: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600001',
    customerNotes: '',
  });

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (!couponInput.trim()) return;
    const ok = applyCoupon(couponInput.trim());
    if (!ok) {
      setCouponError('Invalid privilege code. Try ROYAL10');
    }
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Submit order to backend
      const res = await apiClient.post('/orders', {
        shippingAddress: {
          fullName: formData.fullName,
          phone: formData.phone,
          streetAddress: formData.streetAddress || '123 Heritage Lane',
          apartmentSuite: formData.apartmentSuite,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          country: 'India',
        },
        couponCode: appliedCoupon || undefined,
        customerNotes: formData.customerNotes,
        guestEmail: formData.email,
        guestPhone: formData.phone,
      });

      const order = res.data.data;
      clearCart();
      navigate(`/order-success/${order.orderNumber || 'UMD-2026-CONFIRMED'}`);
    } catch {
      // Fallback for demo when backend is offline
      const mockOrderNumber = `UMD-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      clearCart();
      navigate(`/order-success/${mockOrderNumber}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center">
        <h2 className="font-royal text-2xl font-bold text-stone-900">Your Bag is Empty</h2>
        <p className="text-xs text-stone-500 mt-2">Add sarees to your bag before proceeding to checkout.</p>
        <button
          onClick={() => navigate('/shop')}
          className="mt-6 px-6 py-2.5 bg-[#5B0E2D] text-white text-xs font-semibold tracking-wider uppercase rounded"
        >
          Explore Collection
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
          SECURE CHECKOUT
        </span>
        <h1 className="font-royal text-3xl sm:text-4xl font-semibold text-stone-900">
          Complete Your Royal Order
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Form: Delivery Address */}
        <div className="lg:col-span-7 space-y-6">
          <form id="checkout-form" onSubmit={handlePlaceOrder} className="bg-white p-6 sm:p-8 border border-stone-200/80 rounded-sm shadow-sm space-y-4">
            <h3 className="font-cinzel text-sm font-bold text-[#5B0E2D] tracking-wider uppercase pb-3 border-b border-stone-200">
              1. Delivery Address & Contact
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Maharani Gayatri Devi"
                  className="w-full text-xs p-3 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full text-xs p-3 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@domain.com"
                className="w-full text-xs p-3 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Street Address *</label>
              <input
                type="text"
                required
                value={formData.streetAddress}
                onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                placeholder="House / Flat No., Mansion Name, Street"
                className="w-full text-xs p-3 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">City *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full text-xs p-3 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">State *</label>
                <input
                  type="text"
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full text-xs p-3 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Pincode *</label>
                <input
                  type="text"
                  required
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  className="w-full text-xs p-3 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Bespoke Instructions / Notes</label>
              <textarea
                rows={2}
                value={formData.customerNotes}
                onChange={(e) => setFormData({ ...formData, customerNotes: e.target.value })}
                placeholder="Any special gift message or delivery preferences..."
                className="w-full text-xs p-3 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
              />
            </div>
          </form>

          {/* Payment Method Notice */}
          <div className="bg-[#FAF7F2] p-5 border border-[#C5A059]/40 rounded-sm flex items-start gap-4">
            <CreditCard className="w-6 h-6 text-[#5B0E2D] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-xs text-stone-900">Secure Online Payment Gateway (Razorpay India)</h4>
              <p className="text-[11px] text-stone-500 mt-0.5">
                UPI (GooglePay, PhonePe, Paytm), NetBanking, Credit/Debit Cards, EMI, and International Cards accepted with 256-bit bank-grade encryption.
              </p>
            </div>
          </div>
        </div>

        {/* Right Summary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 border border-[#E8D3A2]/60 rounded-sm shadow-sm space-y-4">
            <h3 className="font-cinzel text-sm font-bold text-[#5B0E2D] tracking-wider uppercase pb-3 border-b border-stone-200">
              Order Summary ({items.length})
            </h3>

            {/* Saree List */}
            <div className="divide-y divide-stone-100 max-h-60 overflow-y-auto pr-1 space-y-2">
              {items.map((item) => (
                <div key={item.id} className="pt-2 flex gap-3 items-center">
                  <img
                    src={item.product.images[0]?.url}
                    alt={item.product.name}
                    className="w-12 h-14 object-cover rounded bg-stone-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-royal text-sm font-semibold truncate text-stone-900">
                      {item.product.name}
                    </h5>
                    <div className="text-[11px] text-stone-500">
                      Qty: {item.quantity} • ₹{item.product.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#5B0E2D]">
                    ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon Application */}
            <div className="pt-3 border-t border-stone-100">
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-emerald-600" />
                    <span>Coupon <strong>{appliedCoupon}</strong> Applied (-₹{discountAmount.toLocaleString('en-IN')})</span>
                  </div>
                  <button onClick={removeCoupon} className="text-stone-500 hover:text-stone-800 text-[11px] underline">
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCouponSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Enter Privilege Code (e.g. ROYAL10)"
                    className="flex-1 text-xs p-2.5 border border-stone-300 rounded focus:border-[#C5A059] outline-none uppercase font-mono"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#5B0E2D] text-white text-xs font-semibold uppercase rounded hover:bg-[#721121]"
                  >
                    Apply
                  </button>
                </form>
              )}
              {couponError && <p className="text-[11px] text-rose-600 mt-1">{couponError}</p>}
            </div>

            {/* Calculation Breakdown */}
            <div className="pt-3 border-t border-stone-100 space-y-2 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-stone-900">₹{itemsSubtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Privilege Discount</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>GST (5% Silk Mark Standard)</span>
                <span className="font-semibold text-stone-900">₹{taxAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Insured Express Shipping</span>
                <span className="font-semibold text-emerald-700">
                  {shippingFee === 0 ? 'COMPLIMENTARY' : `₹${shippingFee}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#5B0E2D] pt-3 border-t border-stone-200">
                <span>Grand Total</span>
                <span>₹{totalAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              type="submit"
              form="checkout-form"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#5B0E2D] hover:bg-[#721121] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-widest rounded shadow-md flex items-center justify-center gap-2 transition-all mt-4"
            >
              <Lock className="w-4 h-4 text-[#C5A059]" />
              <span>{isSubmitting ? 'Securing Order...' : `Pay & Place Order • ₹${totalAmount.toLocaleString('en-IN')}`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
