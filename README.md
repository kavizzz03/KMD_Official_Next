# 🍬 KMD Sweet House — Official Web Application

[![Next.js](https://img.shields.io/badge/Next.js-14%2B-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

An optimized, highly accessible web application built for **KMD Sweet House**, located in Thunnana, Hanwella. The platform showcases traditional Sri Lankan sweets, Jaggery Murukku, spicy Murukku, and handmade confectionery, catering to both high-volume wholesale buyers and individual retail customers across the Western Province.

---

## ⚡ Key Highlights

* **Structured Local SEO & JSON-LD:** Full Schema.org (`Bakery` / `FoodEstablishment`) integration with geo-targeting headers (`Hanwella, LK`) and OpenGraph metadata.
* **Direct Order & Inquiry Routing:** Integrated WhatsApp click-to-chat API triggers for quick wholesale order placement.
* **Tailored Architecture:** App Router dynamic layout architecture optimized for fast initial rendering (Core Web Vitals & LCP optimized).
* **Modern Typography & Styling:** Local font embedding using `@next/font/local` (Fraunces & Manrope) with custom CSS grain overlay styling.

---

## 🛠 Tech Stack & Dependencies

* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS + Custom Global CSS Rules
* **UI Components:** Custom Scroll Progress Indicator, Floating Action Triggers, Responsive Navigation Drawer
* **Icons & Media:** Optimized CDN asset delivery and Next.js `Image` optimization

---

## 📁 Repository Structure

```text
KMD_Official_Next/
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles and ambient canvas grain
│   │   ├── layout.tsx          # Root layout, metadata, SEO schemas, & global components
│   │   └── page.tsx            # Landing page showcasing product catalog & order workflows
│   ├── components/             # Reusable UI components (Navbar, Footer, Progress, WhatsApp)
│   └── fonts/                  # Local font declarations (Fraunces, Manrope)
├── public/                     # Static media and favicons
├── README.md                   # Project documentation
└── LICENSE                     # MIT License
---

## 👨‍💻 Credits & Lead Developers

This project was designed, architected, and developed by:

* **Lead Engineer:** Kavindu Bogahawatte ([@kavizzz03](https://github.com/kavizzz03))
* **Development Organization:** Vexel IT

---

## 📄 License

This project is licensed under the MIT License — see the [`LICENSE`](LICENSE) file for full details. 

Copyright © 2026 **Kavindu Bogahawatte (Kavizz)** & **Vexel IT**. All rights reserved.

 Getting StartedPrerequisitesNode.js 18.17 or laternpm / pnpm / yarnInstallation & Local SetupClone the repository:Bashgit clone [https://github.com/kavizzz03/KMD_Official_Next.git](https://github.com/kavizzz03/KMD_Official_Next.git)
cd KMD_Official_Next
Install project dependencies:Bashnpm install
Configure Environment Variables:Create a .env.local file in the root folder:Code snippetNEXT_PUBLIC_SITE_URL=[https://kmdsweethouse.com](https://kmdsweethouse.com)
Launch the development server:Bashnpm run dev
Navigate to http://localhost:3000 to view the application.📜 Build & Deployment CommandsCommandDescriptionnpm run devStarts the development server on local environmentnpm run buildBuilds the application for production deploymentnpm run startRuns the built application in production modenpm run lintRuns ESLint checks across all codebase modules📄 LicenseThis repository is distributed under the MIT License. See the LICENSE file for details.
---

### Command to Commit and Push to GitHub

Run these commands in your terminal to push the updated `README.md` to your `design-2` branch:

```bash
git add README.md
git commit -m "docs: update README with enhanced architecture and repo details"
git push origin design-2