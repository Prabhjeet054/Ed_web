# Edvora

Edvora is a free learning platform dedicated to empowering students from Class 1 to Class 12 with quality educational content — at zero cost.

## Features

- **Class-wise Resources:** Access study materials for Physics, Chemistry, and Mathematics for both Class 11 and 12.
- **Interactive Navigation:** Easily select class, subject, and chapter to view relevant resources.
- **Animated UI:** Smooth transitions and collapsible menus for a modern user experience.
- **Resource Links:** Direct links to Google Drive for notes and study materials.
- **Responsive Design:** Works well on both desktop and mobile devices.
- **Student Reviews:** See what other students think about Edvora.
- **Contact Section:** Get in touch for queries or feedback.

## Live Website

[https://edvora-ecru.vercel.app](https://edvora-ecru.vercel.app)

## How It Works

- **Landing Page:** Introduction to Edvora, reviews from students, and contact information.
- **Resources Page:**  
  - Select your class (11 or 12).
  - Choose a subject (Physics, Chemistry, Mathematics).
  - Expand a topic to see chapters.
  - Click a chapter to view its resources, including notes and Google Drive links.
  - Animated transitions and skeleton loaders provide a smooth experience.
- **Navigation:**  
  - Navbar allows quick access to Reviews and Contact sections via smooth scrolling.

## Tech Stack

- **React** (with functional components and hooks)
- **Material UI (MUI)** for UI components and styling
- **Framer Motion** for animations
- **Swiper** for review carousel (on landing page)
- **Vercel** for deployment

## Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ed-website.git
   cd ed-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   or (if using Create React App)
   ```bash
   npm start
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Folder Structure

- `src/pages/` — Main pages (LandingPage, ResourcesPage)
- `src/components/` — Reusable components (Navbar, etc.)
- `src/index.css` — Global styles
- `src/App.jsx` — Main app routing and theme

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

**Live Website:** [https://edvora-ecru.vercel.app](https://edvora-ecru.vercel.app)
