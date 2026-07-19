# story-app
Story-App

# 📖 Story App

[![Deploy to GitHub Pages](https://github.com/Kusnadi34/story-app/actions/workflows/deploy.yml/badge.svg)](https://github.com/Kusnadi34/story-app/actions/workflows/deploy.yml)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

**Story App** adalah aplikasi web cerita interaktif yang dibangun dengan arsitektur frontend modern. Proyek ini menggunakan **Webpack** sebagai module bundler, **Bootstrap 5** untuk UI yang responsif, dan **Lit** untuk Web Components yang ringan dan reusable.

> 🚀 **Live Demo**: [https://kusnadi34.github.io/story-app/](https://kusnadi34.github.io/story-app/)

---

## ✨ Fitur Utama

- 📱 **Fully Responsive** – Tampilan optimal di desktop, tablet, dan smartphone (termasuk Android 5.0+).
- 🧩 **Web Components** – Menggunakan Lit untuk komponen UI yang terisolasi dan mudah dikelola (Header, Footer, Story List, dll).
- 🎨 **SCSS 7-1 Pattern** – Struktur CSS yang terorganisir, bersih, dan mudah di-scale.
- ⚡ **Build Tools Modern** – Webpack 5, Babel, PostCSS, dan Sass untuk performa optimal.
- 📄 **Data Dummy** – Menggunakan JSON untuk simulasi data cerita.
- 🌐 **Deploy Otomatis** – Terintegrasi dengan GitHub Actions untuk deploy ke GitHub Pages.

---

## 🛠️ Tech Stack

| Kategori          | Teknologi                                                                 |
|-------------------|---------------------------------------------------------------------------|
| **Bundler**       | [Webpack](https://webpack.js.org/) 5                                      |
| **Bahasa**        | JavaScript (ES6+) dengan [Babel](https://babeljs.io/)                     |
| **CSS Preprocessor** | [Sass/SCSS](https://sass-lang.com/) (7-1 Pattern)                     |
| **UI Framework**  | [Bootstrap](https://getbootstrap.com/) 5                                 |
| **Web Components**| [Lit](https://lit.dev/) 2                                                |
| **Hosting**       | [GitHub Pages](https://pages.github.com/)                                |
| **CI/CD**         | [GitHub Actions](https://github.com/features/actions)                    |

---

## 📂 Struktur Proyek
story-app/
├── .github/
│ └── workflows/
│ └── deploy.yml # CI/CD untuk deploy ke GitHub Pages
├── src/
│ ├── data/
│ │ └── story-dummy.json # Data dummy cerita
│ ├── js/
│ │ ├── components/ # Web Components (Lit)
│ │ │ ├── app-header.js
│ │ │ ├── app-footer.js
│ │ │ ├── story-list.js
│ │ │ ├── add-story-form.js
│ │ │ └── profile-card.js
│ │ └── index.js # Entry point JavaScript
│ ├── public/
│ │ └── favicon.png
│ ├── sass/
│ │ ├── abstracts/ # Variabel, Mixins
│ │ ├── base/ # Reset CSS
│ │ ├── components/ # Style Komponen
│ │ ├── layout/ # Grid, Footer
│ │ ├── pages/ # Style per halaman(Home, Add, Profile)
│ │ └── main.scss # Entry point SCSS
│ └── views/
│ └── index.html # Template HTML
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
├── package.json
└── README.md


---

## 🚀 Cara Menjalankan di Lokal (Untuk Developer)

> **Catatan**: Jika Anda menggunakan HP Android 5.0, Anda tidak perlu menjalankan ini. Cukup buka Live Demo di atas. Kode ini diperuntukkan untuk pengembang yang memiliki PC/Laptop.

### Prasyarat
- Node.js (versi 18 atau lebih baru)
- npm atau yarn

### Instalasi & Menjalankan Development Server

1. Clone repository:
   ```bash
   git clone https://github.com/Kusnadi34/story-app.git
   cd story-app
   
2. Install dependencies:

bash
npm install

3. Jalankan mode development (hot reload):

bash
npm run start-dev
Buka http://localhost:8080 di browser.

4. Build untuk production:

bash
npm run build

Hasil build akan tersimpan di folder /dist.

🔒 Lisensi

Proyek ini dilisensikan di bawah MIT License – bebas digunakan, dimodifikasi, dan didistribusikan.

🙏 Kontribusi

Karena ini adalah proyek submission/tugas, pull request tidak diperlukan saat ini. Namun, jika Anda menemukan bug atau memiliki saran, silakan buka Issue di repository ini.

Dibuat dengan ❤️ oleh Kusnadi34
