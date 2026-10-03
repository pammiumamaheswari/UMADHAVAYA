import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Layers,
  Boxes,
  Users,
  Tag,
  Image,
  FileText,
  BarChart3,
  ShieldAlert,
  Settings,
} from 'lucide-react';
import { AdminLogo } from './Logo';

const NAV_ITEMS = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Order Management', path: '/orders', icon: ShoppingBag },
  { name: 'Saree Inventory', path: '/inventory', icon: Boxes },
  { name: 'Catalog & Weaves', path: '/products', icon: Layers },
  { name: 'Patron Customers', path: '/customers', icon: Users },
  { name: 'Coupons & Offers', path: '/coupons', icon: Tag },
  { name: 'CMS & Banners', path: '/banners', icon: Image },
  { name: 'Sales Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Audit Logs', path: '/audit-logs', icon: ShieldAlert },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-[#0B070A] border-r border-slate-800/80 flex flex-col justify-between">
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-800/80 flex items-center">
          <AdminLogo />
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-md text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#670A1E] text-[#E8D3A2] shadow-sm border-l-4 border-[#C5A059]'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Staff User Footer */}
      <div className="p-4 border-t border-slate-800/80 bg-[#070305]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#670A1E] border border-[#C5A059] flex items-center justify-center text-xs font-bold text-[#E8D3A2]">
            MU
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-slate-200 truncate">Maharaja Umadhvaya</div>
            <div className="text-[10px] text-[#C5A059] font-mono">ROLE: OWNER / SUPER ADMIN</div>
          </div>
        </div>
      </div>
    </aside>
  );
};
