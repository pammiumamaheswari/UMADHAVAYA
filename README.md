# 👑 UMADHVAYA — Luxury Saree E-Commerce & Enterprise Management Platform

> **UMADHVAYA (उमाध्वया)** is a production-grade, full-stack luxury saree commerce and business management monorepo designed for pure natural silk weaves, 24K gold zari heirlooms, and artisan weaver guilds.

---

## 🏛️ Architecture & Monorepo Structure

```
saree-business-platform/
├── apps/
│   ├── storefront/             # Ultra-luxury React/Vite storefront for UMADHVAYA patrons
│   └── admin/                  # Enterprise Dark-themed Admin & Staff portal
├── backend/                    # Express.js + Prisma + TypeScript + JWT Auth REST API
├── packages/
│   └── types/                  # Shared TypeScript interfaces & API contract DTOs
├── prisma/
│   ├── schema.prisma           # 25+ models (Users, Saree Specs, Orders, Cart, Vault, Razorpay, CMS)
│   └── seed/seed.ts            # Realistic Kanchipuram, Banarasi & Organza saree catalog
├── docker-compose.yml          # PostgreSQL 16 & Redis 7 services
├── .env.example                # Unified environment keys and credentials template
├── package.json                # Root monorepo workspace configuration
└── README.md
```

---

## ⚡ Quick Start & Commands to Run

### 1. Install Dependencies
```bash
npm install
```

### 2. Start PostgreSQL & Redis via Docker
```bash
docker compose up -d
```

### 3. Setup Database Schema & Seed Data
```bash
# Generate Prisma Client
npm run prisma:generate

# Push migrations to PostgreSQL
npm run prisma:migrate

# Seed authentic luxury sarees, categories & admin accounts
npm run prisma:seed
```

### 4. Start Development Servers Concurrently
```bash
# Run everything simultaneously:
npm run dev

# Or run individual apps:
npm run dev:storefront    # Port 5173 (UMADHVAYA Luxury Storefront)
npm run dev:admin         # Port 5174 (UMADHVAYA Admin Portal)
npm run dev:backend       # Port 5000 (Backend REST API)
```

---

## 🌐 Application URLs

| Application | URL | Description |
| :--- | :--- | :--- |
| **Storefront (Patron Web)** | `http://localhost:5173` | Customer-facing luxury saree website |
| **Admin & Staff Portal** | `http://localhost:5174` | Order fulfillment, inventory, and CMS portal |
| **Backend REST API** | `http://localhost:5000/api/v1` | Core Node.js / Express API |
| **API Health Check** | `http://localhost:5000/api/v1/health` | Health and platform status check |

---

## 🔑 Default Credentials (from Seed)

- **Super Admin / Owner**: `owner@umadhvaya.com` / `Admin@Umadhvaya2026`
- **Manager**: `manager@umadhvaya.com` / `Admin@Umadhvaya2026`
- **Privilege Coupon**: `ROYAL10` (10% off on cart totals)

---

## 📦 What Has Been Completed

1. **Monorepo Foundation**: Configured npm workspaces (`apps/storefront`, `apps/admin`, `backend`, `packages/types`).
2. **Database Architecture**: Comprehensive PostgreSQL schema with Prisma ORM containing all 25+ models:
   - Saree-specific attributes (Pure mulberry silk, 24K gold zari, HSN 5007, 5% GST, blouse lengths, Silk Mark certification).
   - Cart, Wishlist, Order items, Order status history timeline, Payments, Inventory vault transactions, and CMS banners.
3. **Database Seeding**: Master catalog seed with authentic Indian silk sarees (Kanchipuram Silk, Banarasi Katan, Organza Floral, Paithani Weaves).
4. **Backend REST API**:
   - Authentication (Register, Login, JWT access/refresh tokens, password hashing).
   - Products endpoint with category, fabric, occasion, and price filters.
   - Persistent Cart & Atomic Order checkout calculation (server-side price validation).
   - Razorpay payment order and signature verification services.
   - Admin routes with RBAC protection for dashboard stats, orders, and inventory.
   - Standardized JSON responses with request IDs and error handling.
5. **UMADHVAYA Storefront UI**:
   - Ultra-luxurious aesthetic with royal burgundy (`#5B0E2D`), emerald (`#0B4F3F`), pure gold accents (`#C5A059`), and Cormorant Garamond serif typography.
   - Announcement bar with Silk Mark certification assurance.
   - Hero slider with storytelling slides.
   - Dynamic saree cards with hover flip images and Silk Mark purity tags.
   - Interactive slide-in Cart drawer with tax and free-shipping calculations.
   - Filterable Shop catalog by weave, fabric, and price.
   - Product details page with saree specifications, unstitched blouse customizer, and buy-now flow.
   - Multi-step checkout with coupon code application (`ROYAL10`).
   - Order confirmation and patron account portals.
6. **Admin Management Portal**:
   - Dark-themed executive dashboard with sales metrics, vault stock meters, and recent orders.
   - Order fulfillment workflow (Packing, BlueDart shipping, tracking numbers).
   - Real-time inventory adjustment and low-stock alert monitoring.
   - CMS banner publisher.

---

## 🚀 Next Implementation Steps

1. **Razorpay Webhook Listener**: Configure live webhook verification and asynchronous BullMQ job processing.
2. **Automated Courier API Integration**: Connect BlueDart/Delhivery tracking APIs for real-time dispatch webhooks.
3. **Automated WhatsApp / Email Invoicing**: Connect Resend/Twilio for sending Silk Mark invoice PDFs to patrons.
4. **Vitest & Playwright E2E Test Suite**: Implement end-to-end user checkout and admin dispatch tests.
