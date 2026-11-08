# Department of Mathematics — Kurigram Government College
### কুড়িগ্রাম সরকারি কলেজ — গণিত বিভাগ

A modern, responsive, and full-stack departmental web portal built for the **Department of Mathematics, Kurigram Government College (KGC)**. This portal provides dynamic notice boards, academic curriculum guides, faculty directories, departmental news & events, interactive contact channels, and secure user portal authentication.

---

## 🌟 Key Features

### 🖥️ Frontend (Next.js 16 + React 19)
- **Responsive Navigation:** Institutional header with college crest, desktop dropdown menus (*Programs*, *People*), mobile drawer menu, and auth action buttons.
- **Dynamic Notice Board:** Category filters (*Exam*, *Admission*, *General*, *Scholarship*), live search bar, date badge calendar view, and downloadable circulars.
- **News & Scholarly Events:** Curated event cards with high-resolution imagery, published dates, and event descriptions.
- **Department Message Carousel:** Interactive slider featuring messages from the Head of Department and the College Principal.
- **Academic Programs:**
  - **Undergraduate:** 4-year B.Sc. (Honours) curriculum (Year 1 to 4 subject tracks) under the National University, Bangladesh.
  - **Postgraduate:** 1-year M.Sc. curriculum, research modules, and career pathways.
- **People & Staff Directory:**
  - **Faculty Members:** Head of Department highlighted profile card, Assistant Professors, and Lecturers with academic degrees, specialization, and official emails.
  - **Office Staffs:** Computer operators, laboratory attendants, and administrative staff contact points.
- **Institutional Pages:**
  - **About Us:** Institutional background, 1961 founding history, 1980 nationalization, and academic milestones.
  - **Academic Calendar:** Term schedules, in-course exams, finals, and holidays.
  - **Citizen Charter (সিটিজেন চার্টার):** Service commitments, timeframes, and grievance redressal contacts.
  - **Alumni Network:** Community network, reunion announcements, and registration.
  - **Contact & Inquiries:** Departmental office hours, phone/email directory, interactive inquiry form, and Google Map directions.
  - **Authentication Portal:** Role-based Login and Registration for Students, Faculty, and Alumni.
- **Interactive Footer:** College location details, quick links, external university links, live Google Map embed, and smooth scroll-to-top button.

### ⚙️ Backend (Express.js + MongoDB Atlas + JWT + Zod + Resend)
- **RESTful API:** Structured API endpoints for notices, news, messages, faculty, contact, and auth.
- **MongoDB Atlas & Mongoose:** Cloud-hosted NoSQL database with typed schemas.
- **Type-safe Validation (Zod):** Strict request body validation for registration, login, and contact forms.
- **Secure Authentication:** `bcryptjs` password hashing and `jsonwebtoken` (JWT) token-based authentication.
- **Email Notifications (Resend):**
  - Automated welcome confirmation email upon student/alumni registration.
  - Instant inquiry notification emails dispatched to the departmental administration.
- **Database Seeder:** One-click script (`npm run seed`) to populate initial departmental notices, faculty, messages, and news into MongoDB Atlas.
- **Resilient Fallback Design:** The frontend includes smart API fallbacks ensuring 100% uptime and graceful rendering even during server maintenance.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | [Next.js](https://nextjs.org/) 16 (App Router), [React](https://react.dev/) 19, [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/) 4 |
| **Backend** | [Express.js](https://expressjs.com/), [Node.js](https://nodejs.org/), [TypeScript](https://www.typescriptlang.org/) |
| **Database** | [MongoDB Atlas](https://www.mongodb.com/atlas) with [Mongoose](https://mongoosejs.com/) |
| **Validation** | [Zod](https://zod.dev/) |
| **Authentication** | [JSON Web Tokens (JWT)](https://jwt.io/), [bcryptjs](https://github.com/dcodeIO/bcrypt.js) |
| **Email Service**| [Resend](https://resend.com/) |
| **Typography** | Google Fonts ([Poppins](https://fonts.google.com/specimen/Poppins)) |

---

## 📁 Project Architecture

```
kgc-math/
├── public/                       # Static assets (favicons, college logo, event images)
├── src/                          # Next.js App Router Frontend
│   ├── app/                      # Page routes
│   │   ├── about-us/             # Institutional history & background
│   │   ├── academic-calendar/    # Departmental academic calendar
│   │   ├── alumni/               # Alumni association
│   │   ├── citizen-charter/      # Public service charter
│   │   ├── contact/              # Interactive inquiry form & campus map
│   │   ├── login/                # Role-based student/faculty portal login
│   │   ├── news-events/          # Conferences, seminars & receptions
│   │   ├── notices/              # Filterable and searchable notice board
│   │   ├── people/
│   │   │   ├── faculty-members/  # Academic faculty directory
│   │   │   └── office-staffs/    # Support staff directory
│   │   ├── programs/
│   │   │   ├── postgraduate/     # M.Sc. in Mathematics
│   │   │   └── undergraduate/    # B.Sc. (Honours) in Mathematics
│   │   ├── register/             # Portal account registration
│   │   ├── globals.css           # Global Tailwind CSS & brand styling
│   │   ├── layout.tsx            # Root layout (Metadata, Navbar, Footer)
│   │   └── page.tsx              # Home landing page
│   ├── components/               # Modular UI components
│   │   ├── Footer.tsx            # Comprehensive footer with Google Map
│   │   ├── MessageFromDepartment.tsx # Carousel of departmental messages
│   │   ├── Navbar.tsx            # Responsive navigation header
│   │   ├── NewsEvents.tsx        # News & event grid
│   │   ├── NoticeBoard.tsx       # Notice board component
│   │   └── WelcomeSection.tsx    # Welcome introduction hero
│   └── lib/
│       └── api.ts                # API client connecting frontend to Express backend
│
└── server/                       # Express.js REST API Backend
    ├── src/
    │   ├── config/               # Database connection (MongoDB Atlas)
    │   ├── middlewares/          # JWT auth & Zod validation middlewares
    │   ├── models/               # Mongoose schemas (User, Notice, News, Faculty, Contact)
    │   ├── routes/               # API route definitions
    │   ├── schemas/              # Zod validation schemas
    │   ├── services/             # Resend email notification service
    │   ├── index.ts              # Express application bootstrap
    │   └── seed.ts               # Database seed script
    ├── package.json
    └── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** v18.17+ or v20+
- **npm** or **pnpm** / **yarn**
- **MongoDB Atlas** account (or local MongoDB instance)
- **Resend** API key (optional for email delivery)

---

### 2. Backend Setup (`server/`)

1. Open your terminal and navigate to the `server/` directory:
   ```bash
   cd server
   npm install
   ```

2. Create a `.env` file in `server/` (refer to `.env.example`):
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/kgc_math?retryWrites=true&w=majority
   JWT_SECRET=super_secret_jwt_key_kgc_math_2026
   JWT_EXPIRES_IN=7d
   RESEND_API_KEY=re_your_resend_api_key_here
   RESEND_FROM_EMAIL=Department of Mathematics <onboarding@resend.dev>
   CLIENT_URL=http://localhost:3000
   ```

3. Populate initial departmental data into MongoDB Atlas:
   ```bash
   npm run seed
   ```

4. Start the Express development server:
   ```bash
   npm run dev
   ```
   *The backend API will run at `http://localhost:5000/api`.*

---

### 3. Frontend Setup

1. In the root directory (`kgc-math/`), install dependencies:
   ```bash
   npm install
   ```

2. (Optional) Create `.env.local` in the root directory if pointing to a remote backend:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

3. Start the Next.js development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API Endpoints Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/health` | Service health status check |
| **POST** | `/api/auth/register` | Register new user (Zod validated, hashes password, triggers Resend email) |
| **POST** | `/api/auth/login` | Authenticate user & return JWT token |
| **GET** | `/api/auth/me` | Fetch authenticated user profile (JWT protected) |
| **GET** | `/api/notices` | Retrieve notices (supports `?category=`, `?search=`, `?limit=`) |
| **POST** | `/api/notices` | Create a new departmental notice |
| **GET** | `/api/news` | Retrieve news & event announcements (supports `?limit=`) |
| **POST** | `/api/news` | Create a new news/event item |
| **GET** | `/api/messages` | Retrieve messages from Department Head and Principal |
| **GET** | `/api/faculties` | Retrieve faculty members directory |
| **POST** | `/api/contact` | Submit contact inquiry (Zod validated, dispatches Resend notification) |

---

## 🧪 Production Build

To verify and generate optimized production builds:

```bash
# Build Frontend
npm run build

# Build Backend
cd server
npm run build
```

---

## 🏛️ About Kurigram Government College

- **Established:** July 1, 1961
- **Nationalized:** March 1, 1980
- **Location:** College Road, Krishnapur, Kurigram Sadar, Kurigram-5600, Bangladesh
- **Affiliation:** National University, Bangladesh (College Code: 3001, EIIN: 122331)

---

## 📄 License
This project is proprietary and maintained for the **Department of Mathematics, Kurigram Government College**. Developed by ICT Cell / Academic Web Team.
