<h1 align="center">🟢 বাজার দর | BazarDor</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Status-Live-16A34A?style=for-the-badge" alt="Live Project" />
</p>

<h3 align="center">
  Smart Shopping Starts with the Right Price.
</h3>

<p align="center">
  A modern, Bengali-first market price tracking platform built to help people in Bangladesh explore everyday grocery prices, compare market rates, and make informed shopping decisions.
</p>

<p align="center">
  <a href="https://bazardor-nine-rust.vercel.app/">
    <img src="https://img.shields.io/badge/🚀_Explore_Live_Site-05893E?style=for-the-badge" alt="Explore Live Site" />
  </a>
  <a href="https://github.com/poranmia2222/bazardor">
    <img src="https://img.shields.io/badge/💻_View_Source_Code-171717?style=for-the-badge" alt="View Source Code" />
  </a>
</p>

---

## 🌿 About the Project

**বাজার দর (BazarDor)** is a market price information platform designed with accessibility, simplicity, and usability in mind.

It brings essential product prices, historical price comparisons, and market-level pricing information together in one convenient place. With a clean interface and Bengali-friendly presentation, users can explore available market data and make more informed everyday purchasing decisions.

> **আমাদের লক্ষ্য:** বাজারের দামের তথ্য সবার কাছে সহজভাবে পৌঁছে দেওয়া, যাতে কেনাকাটা হয় আরও সচেতন ও সাশ্রয়ী।

---

## ✨ Key Features

<table>
  <tr>
    <td width="50%">
      <h3>📊 Market Price Tracking</h3>
      Explore available prices of everyday essentials through a clean and easy-to-understand interface.
    </td>
    <td width="50%">
      <h3>📈 Price History & Trends</h3>
      Compare current prices with previous records to understand price increases and decreases.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🗂️ Category-Based Browsing</h3>
      Browse products by category and sort them by price to find suitable shopping options.
    </td>
    <td width="50%">
      <h3>🏪 Market Comparison</h3>
      Explore available price ranges across different markets to compare reported rates.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🔐 Authentication & Profile</h3>
      Register, sign in with supported providers, manage your profile, and access protected pages.
    </td>
    <td width="50%">
      <h3>📱 Responsive Experience</h3>
      Enjoy a modern interface designed to make market information accessible across screen sizes.
    </td>
  </tr>
</table>

---

## 🧰 Tech Stack

<p>
  <strong>Frontend & Framework</strong><br/>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

<p>
  <strong>Styling & UI</strong><br/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/daisyUI-1AD1A5?style=flat-square&logo=daisyui&logoColor=white" alt="daisyUI" />
</p>

<p>
  <strong>Authentication & Data</strong><br/>
  <img src="https://img.shields.io/badge/Better_Auth-18181B?style=flat-square" alt="Better Auth" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

<p>
  <strong>Deployment & Utilities</strong><br/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/react--hot--toast-FF6B6B?style=flat-square" alt="React Hot Toast" />
</p>

---

## 🚀 Getting Started

Follow these steps to run BazarDor locally.

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)
- A MongoDB database for authentication
- OAuth credentials for any social login providers you enable

### 1. Clone the Repository

```bash
git clone https://github.com/poranmia2222/bazardor.git
```

### 2. Navigate to the Project

```bash
cd bazardor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root and configure the variables required by your application.

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URL=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Configure only the providers enabled in your project. Ensure that these variable names match your actual configuration and that all required values are set.

**Security note:** Never commit `.env.local` or real credentials to GitHub.

### 5. Start the Development Server

```bash
npm run dev
```

### 6. Open in Your Browser

Visit [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Links

| Resource | Link |
|---|---|
| 🌐 Live Website | [BazarDor](https://bazardor-nine-rust.vercel.app/) |
| 💻 Source Code | [GitHub Repository](https://github.com/poranmia2222/bazardor) |
| 👨‍💻 Developer | [Poran Mia](https://github.com/poranmia2222) |
| 🔗 LinkedIn | [Connect with me](https://www.linkedin.com/in/poranmia/) |

---

## 🎯 Project Vision

BazarDor aims to make everyday market price information easier to access through a modern, user-friendly web application built for people in Bangladesh.

This project also represents hands-on experience in modern web development, including:

- Server-side and client-side rendering with Next.js
- Reusable React components and TypeScript
- REST API integration and data presentation
- Authentication and session management
- Responsive UI development
- Production deployment with Vercel

---

## 👨‍💻 About the Developer

**Poran Mia**  
Graphic Designer · Aspiring Full-Stack Developer

I enjoy combining design and development to build intuitive, practical, and visually appealing web experiences. BazarDor is one of my projects focused on applying modern web technologies to a real-world everyday problem.

<p>
  <a href="https://github.com/poranmia2222">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/poranmia/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</p>

---

<p align="center">
  <strong>💚 Built with care for smarter shopping in Bangladesh.</strong>
  <br/><br/>
  <strong>বাজার দর — সঠিক দামের খোঁজে।</strong>
</p>
