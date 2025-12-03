# BabyBliss – Mini Baby Products E-Commerce (MERN + PWA)

BabyBliss is a demo-only mini e-commerce website for baby products, inspired by FirstCry.com.

- Built with MERN (MongoDB, Express, React, Node.js)
- Responsive (mobile, tablet, desktop)
- PWA-ready (installable, offline support)
- Demo push notifications via Web Notifications API
- Animations using GSAP and Framer Motion
- No real payments – checkout is simulated only.

## Features

- Home page with hero banner, categories, featured products, testimonials, newsletter
- Product listing with filters and sorting
- Product detail page with similar products
- Cart + checkout (demo order)
- Basic auth (register, login)
- Demo notifications (“Send Notification” button)
- PWA (manifest + service worker)

## Tech Stack

- Frontend: React (Vite), React Router DOM, Context API, Tailwind CSS, Framer Motion, GSAP, Axios
- Backend: Node.js, Express, MongoDB, Mongoose, JWT
- PWA: `manifest.json`, custom `service-worker.js`

## Folder Structure

```text
babybliss/
  client/           # React + Vite + Tailwind + PWA
  server/           # Express + MongoDB API
