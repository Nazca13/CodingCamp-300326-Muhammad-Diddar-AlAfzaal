# Expense & Budget Visualizer

Aplikasi web untuk melacak pengeluaran harian dengan visualisasi yang bersih dan profesional. Dibangun dengan HTML5, CSS3, dan Vanilla JavaScript.

## 🎯 Fitur Utama (MVP)

- ✅ **Total Balance** - Menampilkan total pengeluaran yang update otomatis
- ✅ **Input Form** - Form dengan validasi untuk Nama Barang, Jumlah, dan Kategori (Food, Transport, Fun)
- ✅ **Transaction List** - Daftar scrollable dengan tombol Delete untuk setiap item
- ✅ **Visual Chart** - Pie chart menggunakan Chart.js yang menampilkan distribusi per kategori
- ✅ **Local Storage** - Data tersimpan dan tidak hilang saat refresh browser

## 🚀 Fitur Tambahan

1. **Sort Transactions** - Mengurutkan transaksi berdasarkan:
   - Tanggal (Terbaru/Terlama)
   - Jumlah (Tertinggi/Terendah)

2. **Highlight Spending** - Sistem peringatan pengeluaran:
   - Highlight transaksi di atas Rp 100,000
   - Alert jika total pengeluaran melebihi Rp 1,000,000

3. **Dark/Light Mode Toggle** - Tema yang dapat disesuaikan dengan preferensi pengguna

## 🎨 Desain

- Color palette hitam-putih yang profesional
- Minimalis dan bersih
- Hirarki visual yang jelas
- Fully responsive (Mobile, Tablet, Desktop)
- Smooth animations dan transitions
- SVG icons untuk tampilan yang tajam

## 📁 Struktur Proyek

```
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── icons/
│       ├── README.md
│       ├── moon-light.svg
│       ├── sun-dark.svg
│       ├── wallet-light.svg
│       ├── wallet-dark.svg
│       ├── food-light.svg
│       ├── food-dark.svg
│       ├── transport-light.svg
│       ├── transport-dark.svg
│       ├── fun-light.svg
│       ├── fun-dark.svg
│       ├── trash-light.svg
│       ├── trash-dark.svg
│       ├── alert-light.svg
│       └── alert-dark.svg
└── README.md
```

## 🛠️ Teknologi

- **HTML5** - Struktur aplikasi
- **CSS3** - Styling dengan CSS Variables untuk theming
- **Vanilla JavaScript** - Logic aplikasi tanpa framework
- **Chart.js** - Library untuk visualisasi pie chart
- **Local Storage API** - Penyimpanan data client-side

## 🚀 Cara Menjalankan

1. Clone repository ini
2. Buka file `index.html` di browser modern (Chrome, Firefox, Edge, Safari)
3. Aplikasi siap digunakan!

Tidak perlu instalasi atau setup server.

## 📱 Responsive Design

Aplikasi ini fully responsive dan bekerja dengan baik di:
- 📱 Mobile (320px - 480px)
- 📱 Tablet (481px - 768px)
- 💻 Desktop (769px+)

## 🎨 Color Palette

### Light Mode
- Background: `#ffffff`, `#f5f5f5`
- Text: `#1a1a1a`, `#4a4a4a`, `#6b6b6b`
- Border: `#e5e5e5`
- Accent: `#1a1a1a`

### Dark Mode
- Background: `#1a1a1a`, `#0f0f0f`, `#2d2d2d`
- Text: `#f5f5f5`, `#d0d0d0`, `#a0a0a0`
- Border: `#3a3a3a`
- Accent: `#f5f5f5`

## 📝 Constraints

### Technical Constraints
- ✅ HTML untuk struktur
- ✅ CSS untuk styling (no Tailwind)
- ✅ Vanilla JavaScript (no React, Vue, dll)
- ✅ No backend server required
- ✅ Browser Local Storage API
- ✅ Client-side only

### Non-Functional Requirements
- ✅ Clean, minimal interface
- ✅ Easy to understand and use
- ✅ No complex setup required
- ✅ Fast load time
- ✅ Responsive UI interactions
- ✅ User-friendly aesthetic
- ✅ Clear visual hierarchy
- ✅ Readable typography

## 🔧 Browser Compatibility

Aplikasi ini bekerja di browser modern:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Edge (latest)
- ✅ Safari (latest)

## 📄 License

MIT License - Feel free to use this project for learning purposes.

## 👨‍💻 Developer

Dibuat untuk memenuhi assignment Coding Camp - Expense & Budget Visualizer

---

**Note**: Aplikasi ini menggunakan SVG icons dari Feather Icons (MIT License) yang telah disesuaikan dengan color palette proyek.