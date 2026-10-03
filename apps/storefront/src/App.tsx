import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { OrderSuccess } from './pages/OrderSuccess';
import { Account } from './pages/Account';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { About } from './pages/About';
import { FindYourSaree } from './pages/FindYourSaree';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <Router>
              <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1818]">
                <AnnouncementBar />
                <Navbar />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/shop/:category" element={<Shop />} />
                    <Route path="/products/:slug" element={<ProductDetail />} />
                    <Route path="/find-your-saree" element={<FindYourSaree />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-success/:id" element={<OrderSuccess />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/wishlist" element={<Account />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/about" element={<About />} />
                  </Routes>
                </main>
                <CartDrawer />
                <Footer />
              </div>
            </Router>
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
