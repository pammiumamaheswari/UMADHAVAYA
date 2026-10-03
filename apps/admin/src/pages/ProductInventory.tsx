import React, { useState } from 'react';
import { Plus, Minus, AlertTriangle, CheckCircle, Package } from 'lucide-react';

interface SareeStock {
  id: string;
  sku: string;
  name: string;
  fabric: string;
  price: number;
  stock: number;
  threshold: number;
}

const INITIAL_STOCKS: SareeStock[] = [
  { id: '1', sku: 'UMD-KAN-001', name: 'Aadrika Crimson Red Pure Kanchipuram Silk', fabric: 'Mulberry Silk & 24K Gold', price: 48500, stock: 12, threshold: 3 },
  { id: '2', sku: 'UMD-BAN-002', name: 'Varanasi Noor Katan Silk Kadwa Banarasi', fabric: 'Pure Katan Silk', price: 39500, stock: 18, threshold: 3 },
  { id: '3', sku: 'UMD-ORG-003', name: 'Gulmohar Hand-Painted Organza Silk', fabric: 'Pure Silk Organza', price: 24500, stock: 15, threshold: 3 },
  { id: '4', sku: 'UMD-PAI-004', name: 'Mayura Royal Paithani Pure Silk Saree', fabric: 'Mulberry Silk', price: 42000, stock: 2, threshold: 3 },
];

export const ProductInventory: React.FC = () => {
  const [inventory, setInventory] = useState<SareeStock[]>(INITIAL_STOCKS);

  const adjustStock = (sku: string, delta: number) => {
    setInventory((prev) =>
      prev.map((item) =>
        item.sku === sku ? { ...item, stock: Math.max(0, item.stock + delta) } : item
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-4 rounded-lg">
        <div>
          <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
            Real-Time Saree Vault & Loom Inventory
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage stock availability and monitor low-stock heirloom looms.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
              <th className="p-4 font-semibold">SKU & Saree Name</th>
              <th className="p-4 font-semibold">Fabric Type</th>
              <th className="p-4 font-semibold">Unit Price</th>
              <th className="p-4 font-semibold">Available Stock</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Stock Adjustment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300">
            {inventory.map((item) => (
              <tr key={item.sku} className="hover:bg-slate-800/30">
                <td className="p-4">
                  <div className="font-mono font-bold text-[#E8D3A2]">{item.sku}</div>
                  <div className="font-semibold text-slate-100">{item.name}</div>
                </td>
                <td className="p-4">{item.fabric}</td>
                <td className="p-4 font-bold text-slate-100">₹{item.price.toLocaleString('en-IN')}</td>
                <td className="p-4 font-bold text-sm text-slate-100">{item.stock} Units</td>
                <td className="p-4">
                  {item.stock <= item.threshold ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-400 border border-rose-800">
                      <AlertTriangle className="w-3 h-3" /> LOW STOCK VAULT
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                      <CheckCircle className="w-3 h-3" /> OPTIMAL STOCK
                    </span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <div className="inline-flex items-center border border-slate-700 rounded bg-slate-800">
                    <button
                      onClick={() => adjustStock(item.sku, -1)}
                      className="px-2.5 py-1 text-slate-300 hover:text-white hover:bg-slate-700"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-3 font-mono font-bold text-xs">{item.stock}</span>
                    <button
                      onClick={() => adjustStock(item.sku, 1)}
                      className="px-2.5 py-1 text-slate-300 hover:text-white hover:bg-slate-700"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
