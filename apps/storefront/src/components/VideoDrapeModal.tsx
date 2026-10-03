import React, { useState } from 'react';
import { X, Video, CheckCircle2, Sparkles } from 'lucide-react';

interface VideoDrapeModalProps {
  isOpen: boolean;
  onClose: () => void;
  sareeName?: string;
}

export const VideoDrapeModal: React.FC<VideoDrapeModalProps> = ({
  isOpen,
  onClose,
  sareeName = 'Curated Heirloom Silk Saree',
}) => {
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 11:30 AM (IST)');
  const [patronName, setPatronName] = useState('');
  const [patronPhone, setPatronPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const timeSlots = [
    '11:00 AM - 11:30 AM (IST)',
    '02:30 PM - 03:00 PM (IST)',
    '04:30 PM - 05:00 PM (IST)',
    '06:30 PM - 07:00 PM (IST)',
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-[#FFFDF9] border-2 border-[#C5A059] rounded-sm max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PRIVATE BRIDAL CONCIERGE</span>
              </div>
              <h3 className="font-royal text-2xl sm:text-3xl font-bold text-stone-900">
                Book a Private Video Drape
              </h3>
              <p className="text-xs text-stone-500 font-light max-w-sm mx-auto">
                Experience a 1-on-1 private video session. A master stylist will drape{' '}
                <strong className="text-[#670A1E]">{sareeName}</strong> under natural sunlight.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-medium text-stone-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={patronName}
                  onChange={(e) => setPatronName(e.target.value)}
                  placeholder="e.g. Maharani Gayatri Devi"
                  className="w-full p-2.5 border border-stone-300 rounded focus:border-[#670A1E] outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-stone-700 mb-1">WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={patronPhone}
                  onChange={(e) => setPatronPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full p-2.5 border border-stone-300 rounded focus:border-[#670A1E] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-stone-700 mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2.5 border border-stone-300 rounded focus:border-[#670A1E] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-stone-700 mb-1">Select Time Slot *</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full p-2.5 border border-stone-300 rounded focus:border-[#670A1E] outline-none font-medium"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#670A1E] hover:bg-[#7D0C25] text-white text-xs font-bold uppercase tracking-widest rounded shadow-md flex items-center justify-center gap-2 transition-all mt-4"
            >
              <Video className="w-4 h-4 text-[#E8D3A2]" />
              <span>Confirm VIP Video Appointment</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#670A1E] text-[#E8D3A2] flex items-center justify-center mx-auto shadow-gold-glow">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-royal text-2xl font-bold text-stone-900">
              Your Video Drape Is Confirmed
            </h3>
            <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
              Namaste <strong>{patronName}</strong>, our senior saree curator will connect with you on WhatsApp/Video call on{' '}
              <strong>{date || 'your selected date'}</strong> at <strong>{timeSlot}</strong> to present the {sareeName}.
            </p>
            <button
              onClick={() => {
                setIsBooked(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#C5A059] text-stone-950 font-bold text-xs uppercase tracking-wider rounded"
            >
              Return to Collection
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
