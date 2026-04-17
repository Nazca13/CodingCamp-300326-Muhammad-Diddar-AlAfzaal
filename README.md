# Expense & Budget Visualizer

Aplikasi web untuk melacak pengeluaran harian dengan visualisasi yang bersih dan profesional. Dibangun dengan HTML5, CSS3, dan Vanilla JavaScript tanpa framework.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Daftar Isi

- [Fitur](#-fitur)
- [Demo](#-demo)
- [Teknologi](#️-teknologi)
- [Instalasi](#-instalasi)
- [Struktur Proyek](#-struktur-proyek)
- [Fitur Detail](#-fitur-detail)
- [Desain & UI](#-desain--ui)
- [Browser Support](#-browser-support)
- [Deployment](#-deployment)
- [Screenshots](#-screenshots)
- [License](#-license)

---

## ✨ Fitur

### Fitur Utama (MVP)

✅ **Total Balance Display**
- Menampilkan total pengeluaran secara real-time
- Update otomatis setiap ada perubahan transaksi
- Format mata uang Rupiah (Rp)

✅ **Input Form dengan Validasi**
- Field: Nama Barang, Jumlah, Kategori
- Validasi field tidak boleh kosong
- Validasi jumlah harus lebih dari 0
- 3 Kategori: Food, Transport, Fun

✅ **Transaction List**
- Daftar scrollable dengan custom scrollbar
- Menampilkan nama, jumlah, kategori, dan tanggal
- Tombol delete untuk setiap transaksi
- Konfirmasi sebelum menghapus
- Smooth animations saat menambah/menghapus

✅ **Visual Pie Chart**
- Menggunakan Chart.js library
- Menampilkan distribusi pengeluaran per kategori
- Update otomatis saat data berubah
- Warna soft yang tidak mencolok
- Responsive di semua device
- Tooltip dengan informasi detail

✅ **Local Storage**
- Data tersimpan di browser
- Tidak hilang saat refresh
- Auto-save setiap perubahan

### Fitur Tambahan (3 Challenges)

🎯 **1. Sort Transactions**
- Urutkan berdasarkan tanggal (Terbaru/Terlama)
- Urutkan berdasarkan jumlah (Tertinggi/Terendah)
- Dropdown select yang mudah digunakan

🎯 **2. Highlight Spending**
- Highlight otomatis transaksi > Rp 100,000
- Alert banner jika total > Rp 1,000,000
- Visual feedback dengan border dan background

🎯 **3. Dark/Light Mode Toggle**
- Toggle button dengan SVG icons
- Smooth transition antar tema
- Preferensi tersimpan di Local Storage
- Warna chart menyesuaikan tema

---

## 🎨 Demo

### Live Demo
🔗 [View Live Demo](https://nazca13.github.io/CodingCamp-300326-Muhammad-Diddar-AlAfzaal/)

### Quick Start
```bash
# Clone repository
git clone https://github.com/Nazca13/CodingCamp-300326-Muhammad-Diddar-AlAfzaal.git

# Buka folder
cd CodingCamp-300326-Muhammad-Diddar-AlAfzaal

# Buka index.html di browser
open index.html  # macOS
start index.html # Windows
```

---

## 🛠️ Teknologi

| Teknologi | Deskripsi |
|-----------|-----------|
| **HTML5** | Semantic markup untuk struktur |
| **CSS3** | Modern styling dengan CSS Variables |
| **Vanilla JavaScript** | Logic tanpa framework/library |
| **Chart.js v4.4.0** | Library untuk pie chart visualization |
| **Local Storage API** | Client-side data persistence |
| **SVG Icons** | Scalable vector icons (Feather Icons) |

### Kenapa Vanilla JavaScript?

- ✅ No build process required
- ✅ Faster load time
- ✅ Easier to understand
- ✅ No dependencies (except Chart.js)
- ✅ Better for learning fundamentals

---

## 📦 Instalasi

### Prerequisites
- Browser modern (Chrome, Firefox, Edge, Safari)
- Text editor (VS Code, Sublime, dll) - opsional
- Git - untuk clone repository

### Langkah Instalasi

1. **Clone atau Download Repository**
   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```

2. **Buka Folder Proyek**
   ```bash
   cd repository-name
   ```

3. **Buka di Browser**
   - Double click `index.html`, atau
   - Drag `index.html` ke browser, atau
   - Gunakan Live Server di VS Code

**Tidak perlu instalasi npm, build, atau server!**

---

## 📁 Struktur Proyek

```
expense-budget-visualizer/
│
├── index.html              # Main HTML file
├── README.md              # Dokumentasi proyek
├── DEPLOYMENT.md          # Panduan deployment
├── .gitignore            # Git ignore file
│
├── css/
│   └── style.css         # Single CSS file (all styles)
│
├── js/
│   └── script.js         # Single JavaScript file (all logic)
│
└── assets/
    └── icons/
        ├── README.md           # Icon documentation
        ├── moon-light.svg      # Dark mode toggle (light)
        ├── sun-dark.svg        # Light mode toggle (dark)
        ├── wallet-light.svg    # Balance icon (light)
        ├── wallet-dark.svg     # Balance icon (dark)
        ├── food-light.svg      # Food category (light)
        ├── food-dark.svg       # Food category (dark)
        ├── transport-light.svg # Transport category (light)
        ├── transport-dark.svg  # Transport category (dark)
        ├── fun-light.svg       # Fun category (light)
        ├── fun-dark.svg        # Fun category (dark)
        ├── trash-light.svg     # Delete button (light)
        ├── trash-dark.svg      # Delete button (dark)
        ├── alert-light.svg     # Alert icon (light)
        └── alert-dark.svg      # Alert icon (dark)
```

---

## 🎯 Fitur Detail

### 1. Input Form & Validation

```javascript
// Validasi yang diimplementasikan:
- Nama barang tidak boleh kosong
- Jumlah harus angka dan > 0
- Kategori harus dipilih
- Alert jika validasi gagal
- Auto-format jumlah dengan titik pemisah ribuan (12000 → 12.000)
- Hanya menerima input angka pada field jumlah
```

### 2. Transaction Management

- **Add**: Form submission dengan validasi
- **Display**: Render dengan format yang rapi
- **Delete**: Konfirmasi sebelum hapus
- **Sort**: 4 opsi sorting
- **Persist**: Auto-save ke Local Storage

### 3. Chart Visualization

**Chart Features:**
- Responsive sizing
- Hover effects
- Percentage display
- Legend dengan color indicators
- Smooth animations
- Warna yang jelas dan mudah dibedakan

**Warna Chart (Vibrant Colors):**

| Kategori | Light Mode | Dark Mode |
|----------|------------|-----------|
| Food | `#10b981` (Green) | `#34d399` (Light Green) |
| Transport | `#3b82f6` (Blue) | `#60a5fa` (Light Blue) |
| Fun | `#ef4444` (Red) | `#f87171` (Light Red) |

### 4. Theme System

```javascript
// Light Mode
Background: #ffffff, #f5f5f5
Text: #1a1a1a, #4a4a4a
Border: #e5e5e5

// Dark Mode  
Background: #1a1a1a, #2d2d2d
Text: #f5f5f5, #d0d0d0
Border: #3a3a3a
```

---

## 🎨 Desain & UI

### Design Principles

1. **Minimalism** - Clean, tidak berlebihan
2. **Hierarchy** - Visual hierarchy yang jelas
3. **Consistency** - Konsisten di semua elemen
4. **Accessibility** - Mudah digunakan semua orang
5. **Responsiveness** - Bekerja di semua device

### Typography

- **Font Family**: System fonts (-apple-system, Segoe UI, Roboto)
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Font Smoothing**: Antialiased untuk rendering yang smooth

### Spacing System

- **Small**: 8px, 12px, 16px
- **Medium**: 20px, 24px, 32px
- **Large**: 40px, 48px, 60px

### Border Radius

- **Small**: 6px (buttons, inputs)
- **Medium**: 10px (cards)
- **Large**: 14px (sections)

---

## 📱 Responsive Design

### Breakpoints

| Device | Width | Chart Size | Padding |
|--------|-------|------------|---------|
| **Desktop** | 769px+ | 320px | 24px |
| **Tablet** | 481-768px | 260px (max 320px) | 16px |
| **Mobile** | 320-480px | 240px (max 280px) | 16px |

### Mobile Optimizations

- ✅ Touch-friendly buttons (min 44px)
- ✅ Readable font sizes (min 14px)
- ✅ Stacked layouts untuk form
- ✅ Smaller chart untuk mobile
- ✅ Optimized spacing
- ✅ Custom scrollbar

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Fully Supported |
| Firefox | Latest | ✅ Fully Supported |
| Safari | Latest | ✅ Fully Supported |
| Edge | Latest | ✅ Fully Supported |
| Opera | Latest | ✅ Fully Supported |

### Required Browser Features

- ✅ ES6+ JavaScript
- ✅ CSS Variables
- ✅ Flexbox
- ✅ Local Storage API
- ✅ Canvas API (untuk Chart.js)

---

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Settings → Pages
   - Source: main branch
   - Folder: / (root)
   - Save

3. **Access Website**
   ```
   https://username.github.io/repository-name/
   ```

📖 **Panduan lengkap**: Lihat [DEPLOYMENT.md](DEPLOYMENT.md)

### Alternative Hosting

- **Netlify**: Drag & drop folder
- **Vercel**: Import dari GitHub
- **Surge**: `surge` command
- **Firebase Hosting**: `firebase deploy`

---

## 📸 Screenshots

### Light Mode
```
[Desktop View]
- Clean white background
- Black text and icons
- Soft colored pie chart
- Professional look
```

### Dark Mode
```
[Desktop View]
- Dark background (#1a1a1a)
- White text and icons
- Darker colored pie chart
- Easy on the eyes
```

### Mobile View
```
[Mobile View]
- Responsive layout
- Smaller chart (240-280px)
- Touch-friendly buttons
- Optimized spacing
```

---

## 📝 Technical Constraints

### ✅ Requirements Met

| Constraint | Status |
|------------|--------|
| HTML5 only | ✅ |
| CSS3 only (no Tailwind) | ✅ |
| Vanilla JS (no frameworks) | ✅ |
| 1 CSS file only | ✅ |
| 1 JS file only | ✅ |
| Local Storage | ✅ |
| No backend | ✅ |
| Chart.js for visualization | ✅ |
| Mobile responsive | ✅ |

---

## 🧪 Testing Checklist

### Functionality Tests

- [ ] Form validation bekerja
- [ ] Transaksi bisa ditambah
- [ ] Transaksi bisa dihapus
- [ ] Sort berfungsi (4 opsi)
- [ ] Chart update otomatis
- [ ] Local Storage menyimpan data
- [ ] Data persist setelah refresh
- [ ] Dark mode toggle bekerja
- [ ] Highlight spending bekerja
- [ ] Alert muncul saat > limit

### Responsive Tests

- [ ] Desktop (1920px)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Mobile Small (320px)

### Browser Tests

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## 🤝 Contributing

Ini adalah project assignment, tapi feedback dan suggestions welcome!

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

MIT License - Feel free to use this project for learning purposes.

```
Copyright (c) 2026 Muhammad Diddar Al'Afzaal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👨‍💻 Author

**Muhammad Diddar Al'Afzaal**
- GitHub: [@Nazca13](https://github.com/Nazca13)
- Email: nazca13developer@gmail.com
- Project Repository: [CodingCamp-300326-Muhammad-Diddar-AlAfzaal](https://github.com/Nazca13/CodingCamp-300326-Muhammad-Diddar-AlAfzaal)
- Live Demo: [https://nazca13.github.io/CodingCamp-300326-Muhammad-Diddar-AlAfzaal/](https://nazca13.github.io/CodingCamp-300326-Muhammad-Diddar-AlAfzaal/)

---

## 🙏 Acknowledgments

- **Chart.js** - Amazing charting library
- **Feather Icons** - Beautiful SVG icons
- **Coding Camp** - For the assignment and learning opportunity
- **MDN Web Docs** - For excellent documentation

---

## 📚 Resources

- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [MDN Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Feather Icons](https://feathericons.com/)

---

## 🐛 Known Issues

Tidak ada known issues saat ini. Jika menemukan bug, silakan buat issue di GitHub.

---

## 🔮 Future Enhancements

Ide untuk pengembangan selanjutnya:

- [ ] Export data ke CSV/PDF
- [ ] Multiple currency support
- [ ] Budget planning feature
- [ ] Monthly/yearly reports
- [ ] Custom categories
- [ ] Data backup/restore
- [ ] PWA support
- [ ] Multi-language support

---

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:

1. Baca dokumentasi ini
2. Check [DEPLOYMENT.md](DEPLOYMENT.md)
3. Lihat [Issues](https://github.com/Nazca13/CodingCamp-300326-Muhammad-Diddar-AlAfzaal/issues)
4. Contact via email: nazca13developer@gmail.com

---

**⭐ Jika project ini membantu, berikan star di GitHub!**

---

*Dibuat dengan ❤️ untuk Coding Camp Assignment*