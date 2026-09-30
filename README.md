# Flowering Pot — Local Plant Nursery Website

A modern, premium, mobile-first website for **Flowering Pot**, a local plant nursery business located in **R.K. Puram, Sector 5, New Delhi**, managed by nursery owner **Nikhil Kanojiya**.

Designed specifically to showcase healthy, acclimatized plants, build trust with local Delhi customers, and convert traffic directly into **WhatsApp enquiries** rather than a traditional e-commerce cart.

---

## 🌿 Key Features

### 1. Direct WhatsApp Conversion (No E-Commerce Friction)
- **Zero Cart Confusion**: No "Add to Cart", shopping cart, checkout, or online payments.
- **Contextual Pre-filled Enquiries**: Every plant card and detail page features a prominent **"WhatsApp About This Plant"** button that automatically constructs an inquiry:
  > *"Hi, I'm interested in the [PLANT NAME] listed on your website. Is it currently available?"*
- **Direct Link**: Opens WhatsApp instantly with owner Nikhil Kanojiya at `+91 9716574035`.
- **Dual Conversion Zones**: Plant detail pages display *"Interested in this plant? 9716574035"* both near the price and at the bottom of the page.
- **Mobile-First Action Bar**: Fixed bottom bar on mobile screens with instant WhatsApp, Call, and Navigation actions.

### 2. Pages & Sections
- **Home Page**:
  - Hero with botanical imagery, headline *"Bring More Green Into Your Space"*, subheadline *"Discover beautiful indoor and outdoor plants from Flowering Pot"*, and primary CTAs (*"Browse Plants"* & *"WhatsApp Us"*).
  - Popular Categories, Featured Plants, Nursery Intro, Why Choose Us, Services, Testimonials, Nursery Gallery, and Location section with Google Maps.
- **Plants Catalog**:
  - Product cards featuring plant photo, name, botanical variety, price in ₹ INR, category, availability badge, short description, *"View Details"*, and *"WhatsApp About This Plant"*.
  - Category filters: *All Plants*, *Indoor Plants*, *Outdoor Plants*, *Flowering Plants*, *Succulents*, *Fruit Plants*, *Trees*, and *Other categories*.
  - Real-time search by plant name, botanical name, or category.
  - Sorting (Featured, Price: Low to High, Price: High to Low, Name) and In-Stock filters.
- **Plant Detail Page**:
  - Direct shareable URLs (`#/plant/:id`).
  - High-res photo gallery with multi-photo thumbnail selector.
  - Comprehensive care grid: Plant Size, Sunlight Requirements, Watering Needs, and Care Instructions.
  - Contextual availability states (Unavailable items clearly display *"Currently Unavailable"*).
- **About Us**:
  - Authentic story of Flowering Pot, 3+ years of nursery experience in R.K. Puram, founder profile of Nikhil Kanojiya, nursery grounds photos, and local business trust factors.
- **Services**:
  - Detailed showcases for: *Plant sales*, *Pots and planters*, *Home delivery (New Delhi)*, *Balcony gardening*, *Garden maintenance*, *Landscaping*, and *Plant doctor / consultation*.
  - Dedicated WhatsApp enquiry button for each service.
- **Contact & Location**:
  - Phone: `9716574035`
  - WhatsApp: `9716574035`
  - Address: `R.k Puram, Sector 5, New Delhi`
  - Opening Hours: `9:00 AM to 7:00 PM (All 7 Days)`
  - Delivery: `New Delhi & NCR`
  - Interactive Google Maps embed + "Get Directions", "Call Us", and "WhatsApp Us" CTAs.
  - Interactive quick enquiry message builder.

### 3. Owner Admin Dashboard (`#/admin`)
- **Secure PIN Access**: Protected by a 4-digit PIN (Default PIN: `1234`, customizable anytime).
- **No-Code Plant Management**:
  - **Add New Plant**: Form with photo file upload (FileReader / base64 or URL), plant name, price, category, description, availability, plant size, sunlight, watering, care instructions, and featured toggle.
  - **Edit Plant**: Update photos, prices, categories, and descriptions with instant reflection on the live site.
  - **One-Click Toggles**: Quickly switch plants between *Available* and *Currently Unavailable*, or toggle *Featured* status on the homepage.
  - **Delete Plant**: Easily remove items.
  - **Persistent Storage**: Uses `localStorage` so changes persist across reloads.
  - **One-Click Reset**: Safety button to restore initial 16 nursery plants.

---

## 🛠️ Technology Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Botanical Design Palette (`#2D5A27`, `#FAF7F2`, `#C17743`)
- **Typography**: Google Fonts (*Playfair Display* + *Plus Jakarta Sans*)
- **Icons**: Lucide React
- **Micro-Interactions**: Canvas Confetti for publishing celebrations
- **SEO**: Schema.org JSON-LD structured data for `GardenStore` / `Florist`, dynamic document titles, Open Graph tags.

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🔐 Owner Admin Access
- Access URL: Navigate to `#/admin` or click the lock icon in the top header.
- **Default PIN**: `1234`
