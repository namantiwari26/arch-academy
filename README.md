# ARCH Academy — Premium Coaching Institute Platform

A modern, highly animated, multi-page website designed and engineered for **ARCH**, a next-generation coaching institute specializing in **JEE Advanced**, **NEET UG**, **Olympiads**, and **Foundation (Grades 8–10)**.

Designed with clean layouts, lavender glassmorphism, precise typography, smooth physics-based animations, and responsive desktop-first components.

---

## 🎨 Design System & Visual Identity
- **Primary Violet:** `#5B3DF5` (Hover: `#4A2FE0`)
- **Deep Navy Text:** `#14103A`
- **Lavender Canvas:** `#F3F0FF` / `#EEEAFF`
- **Soft Gray Subtext:** `#5B5877`
- **Accent Purple:** `#E4DDFF`
- **Typography:** `Inter Variable` with tight tracking (`-0.03em`) on bold headings, weighted from 500 to 800.
- **Glassmorphism:** Frosted-glass panels (`backdrop-blur-md`, `bg-white/70`, `border-white/80`) with soft multi-layer purple elevation shadows.

---

## 🚀 Pages & Features

### 1. Home (`/`)
- **Floating Glass Navbar:** Center pill with ARCH logo, links, and *"Enroll Now"* button. Transitions to deeper frosted opacity on scroll, with smart auto-hide on scroll down and reveal on scroll up. Includes mobile drawer navigation.
- **Hero Section:** Full-bleed natural student study photography with lavender gradient overlay, *"Future Focused Learning"* chip, headline `"Learn Smarter. Grow Faster."`, dual CTA pills, and a 3D cursor-tilting library photo card with frosted stats (`10K+ Students Trained | 96% Success Rate`).
- **Exam Marquee Ticker:** Continuous scrolling strip of exam categories and key differentiators.
- **Modern Education Section:** Clean split section with student photography, chip, `"Built For The Next Generation."` heading, short violet underline, and dual large statistics (`120+ Expert Mentors` & `35+ Advanced Programs`).
- **Popular Programs:** 3 rounded cards (*JEE Preparation*, *NEET Coaching*, *Foundation Courses*) featuring soft violet icon tiles, curriculum bullets, and direct enrollment triggers.
- **Feature Banner:** Full-width photography with lavender gradient overlay and frosted typography panel (`"Education That Feels Inspiring."`).
- **Overlapping Bottom Info Cards:** Glass panels for **"Visit Campus"** (address, telephone, email) and **"Class Timings"** (weekday, Saturday, Sunday schedules).
- **Why Choose ARCH:** 4-pillar interactive feature grid highlighting IIT/AIIMS alum faculty, 28-student micro-batches, AI test analytics, and 24/7 ergonomic study pods.
- **Faculty Spotlight:** Teaser showing top IIT/AIIMS academic deans.
- **Testimonial Slider:** Interactive swipeable student and parent review slider.
- **FAQ Accordion:** Expandable accordion addressing batch size, admissions, test series, and board integration.

### 2. Courses (`/courses`)
- Interactive stream filter tabs (*All*, *JEE*, *NEET*, *Foundation*, *Boards*).
- Comprehensive program cards detailing duration, batch size, weekly schedule, annual fees, and syllabus check-lists.
- Instant *"Enroll"* button opening the pre-populated modal.

### 3. Mentors (`/mentors`)
- 6 distinguished faculty profile cards (IIT Bombay, IIT Delhi, AIIMS New Delhi, IISc alumni) with subject specializations, student counts, and pedagogical quotes.
- Highlights ARCH's 1-on-1 weekly mentor cabin hours policy.

### 4. Results (`/results`)
- Big stats overview (`AIR 14`, `AIR 27`, `96.4%` qualification rate, `380+` selections).
- 8 student topper profile cards with rank badges and verified classroom credentials.
- Multi-year audited results data table (`2026`, `2025`, `2024`).

### 5. Contact (`/contact`)
- Validated demo reservation form with phone, email, and grade validation.
- Interactive confetti celebration and personalized admission pass generator upon submission.
- Campus address, telephone, email cards, and modern map locator.

---

## 🛠️ Tech Stack
- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Motion & Interactions:**
  - Framer Motion (Page transitions, AnimatePresence, spring micro-interactions)
  - GSAP & ScrollTrigger (Scroll synchronization)
  - Lenis (Smooth momentum scrolling)
  - Canvas Confetti (Admission celebration)
- **Icons:** Lucide React
- **Typography:** `@fontsource-variable/inter`

---

## 💻 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/namantiwari26/arch-academy.git

# Enter project directory
cd arch-academy

# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173/](http://localhost:5173/) to view the site.
