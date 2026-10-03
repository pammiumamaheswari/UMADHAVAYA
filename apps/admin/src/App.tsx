import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AdminSidebar } from './components/AdminSidebar';
import { AdminHeader } from './components/AdminHeader';
import { Dashboard } from './pages/Dashboard';
import { OrdersList } from './pages/OrdersList';
import { ProductInventory } from './pages/ProductInventory';
import { CMSBanners } from './pages/CMSBanners';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex h-screen bg-[#0F172A] text-slate-100 overflow-hidden font-sans">
          <AdminSidebar />
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            <AdminHeader title="UMADHVAYA Enterprise Portal" />
            <main className="flex-1 overflow-y-auto p-6 sm:p-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<OrdersList />} />
                <Route path="/inventory" element={<ProductInventory />} />
                <Route path="/products" element={<ProductInventory />} />
                <Route path="/banners" element={<CMSBanners />} />
                <Route path="/analytics" element={<Dashboard />} />
                <Route path="/customers" element={<OrdersList />} />
                <Route path="/coupons" element={<Dashboard />} />
                <Route path="/audit-logs" element={<Dashboard />} />
                <Route path="/settings" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
