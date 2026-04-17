// ===== Global Variables =====
let transactions = [];
let chart = null;
const SPENDING_LIMIT = 1000000; // Rp 1,000,000

// ===== Category Configuration =====
const categoryConfig = {
    Food: { 
        name: 'Food',
        iconLight: 'assets/icons/food-light.svg',
        iconDark: 'assets/icons/food-dark.svg',
        colorLight: '#94a3b8',  // Soft blue-gray
        colorDark: '#64748b'    // Darker blue-gray for dark mode
    },
    Transport: { 
        name: 'Transport',
        iconLight: 'assets/icons/transport-light.svg',
        iconDark: 'assets/icons/transport-dark.svg',
        colorLight: '#a8a29e',  // Soft warm gray
        colorDark: '#78716c'    // Darker warm gray for dark mode
    },
    Fun: { 
        name: 'Fun',
        iconLight: 'assets/icons/fun-light.svg',
        iconDark: 'assets/icons/fun-dark.svg',
        colorLight: '#9ca3af',  // Soft cool gray
        colorDark: '#6b7280'    // Darker cool gray for dark mode
    }
};

// ===== DOM Elements =====
const elements = {
    form: document.getElementById('transactionForm'),
    itemName: document.getElementById('itemName'),
    amount: document.getElementById('amount'),
    category: document.getElementById('category'),
    transactionList: document.getElementById('transactionList'),
    totalBalance: document.getElementById('totalBalance'),
    sortSelect: document.getElementById('sortSelect'),
    themeToggle: document.getElementById('themeToggle'),
    limitAlert: document.getElementById('limitAlert'),
    limitAmount: document.getElementById('limitAmount'),
    chartCanvas: document.getElementById('expenseChart')
};

// ===== Initialize App =====
function init() {
    loadFromLocalStorage();
    renderTransactions();
    updateBalance();
    updateChart();
    checkSpendingLimit();
    setupEventListeners();
    loadThemePreference();
}

// ===== Event Listeners =====
function setupEventListeners() {
    elements.form.addEventListener('submit', handleFormSubmit);
    elements.sortSelect.addEventListener('change', handleSort);
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Auto-format amount input dengan titik pemisah ribuan
    elements.amount.addEventListener('input', handleAmountInput);
    elements.amount.addEventListener('keypress', handleAmountKeypress);
}

// ===== Handle Amount Input - Auto Format dengan Titik =====
function handleAmountInput(e) {
    let value = e.target.value;
    
    // Hapus semua karakter non-digit
    value = value.replace(/\D/g, '');
    
    // Jika kosong, biarkan kosong
    if (value === '') {
        e.target.value = '';
        return;
    }
    
    // Convert ke number dan format dengan titik
    const number = parseInt(value, 10);
    e.target.value = formatNumber(number);
}

// ===== Handle Amount Keypress - Hanya Angka =====
function handleAmountKeypress(e) {
    // Allow: backspace, delete, tab, escape, enter
    if ([8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        (e.keyCode === 65 && e.ctrlKey === true) ||
        (e.keyCode === 67 && e.ctrlKey === true) ||
        (e.keyCode === 86 && e.ctrlKey === true) ||
        (e.keyCode === 88 && e.ctrlKey === true)) {
        return;
    }
    
    // Hanya izinkan angka 0-9
    if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
}

// ===== Form Submission =====
function handleFormSubmit(e) {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
        return;
    }

    // Hapus titik dari amount dan convert ke number
    const amountValue = parseFloat(elements.amount.value.replace(/\./g, ''));

    // Create transaction object
    const transaction = {
        id: generateId(),
        name: elements.itemName.value.trim(),
        amount: amountValue,
        category: elements.category.value,
        date: new Date().toISOString(),
        timestamp: Date.now()
    };

    // Add to transactions array
    transactions.push(transaction);

    // Save to localStorage
    saveToLocalStorage();

    // Update UI
    renderTransactions();
    updateBalance();
    updateChart();
    checkSpendingLimit();

    // Reset form
    elements.form.reset();
    elements.itemName.value = '';
    elements.amount.value = '';
    elements.category.value = '';

    // Show success feedback
    showNotification('Transaksi berhasil ditambahkan!');
}

// ===== Form Validation =====
function validateForm() {
    const name = elements.itemName.value.trim();
    const amountText = elements.amount.value.trim();
    const category = elements.category.value;

    if (!name) {
        alert('Nama barang tidak boleh kosong!');
        elements.itemName.focus();
        return false;
    }

    // Hapus titik dari format dan convert ke number
    const amount = parseFloat(amountText.replace(/\./g, ''));

    if (!amountText || isNaN(amount) || amount <= 0) {
        alert('Jumlah harus lebih dari 0!');
        elements.amount.focus();
        return false;
    }

    if (!category) {
        alert('Silakan pilih kategori!');
        elements.category.focus();
        return false;
    }

    return true;
}

// ===== Render Transactions =====
function renderTransactions() {
    const listContainer = elements.transactionList;

    if (transactions.length === 0) {
        listContainer.innerHTML = '<p class="empty-state">Belum ada transaksi. Tambahkan transaksi pertama Anda!</p>';
        return;
    }

    listContainer.innerHTML = transactions.map(transaction => {
        const config = categoryConfig[transaction.category];
        const date = new Date(transaction.date);
        const formattedDate = formatDate(date);
        const isHighlight = transaction.amount > 100000; // Highlight if > Rp 100,000

        return `
            <div class="transaction-item ${isHighlight ? 'highlight' : ''}" data-id="${transaction.id}">
                <div class="transaction-info">
                    <div class="transaction-name">${transaction.name}</div>
                    <div class="transaction-meta">
                        <span class="transaction-category">
                            <img src="${config.iconLight}" alt="${config.name}" class="category-icon light-icon">
                            <img src="${config.iconDark}" alt="${config.name}" class="category-icon dark-icon">
                            ${transaction.category}
                        </span>
                        <span class="transaction-date">${formattedDate}</span>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span class="transaction-amount">Rp ${formatNumber(transaction.amount)}</span>
                    <button class="btn btn-danger" onclick="deleteTransaction('${transaction.id}')">
                        <img src="assets/icons/trash-light.svg" alt="Delete" class="btn-danger-icon light-icon">
                        <img src="assets/icons/trash-dark.svg" alt="Delete" class="btn-danger-icon dark-icon">
                        Hapus
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// ===== Delete Transaction =====
function deleteTransaction(id) {
    if (!confirm('Yakin ingin menghapus transaksi ini?')) {
        return;
    }

    transactions = transactions.filter(t => t.id !== id);
    saveToLocalStorage();
    renderTransactions();
    updateBalance();
    updateChart();
    checkSpendingLimit();
    showNotification('Transaksi berhasil dihapus!');
}

// ===== Update Balance =====
function updateBalance() {
    const total = transactions.reduce((sum, t) => sum + t.amount, 0);
    elements.totalBalance.textContent = `Rp ${formatNumber(total)}`;
}

// ===== Check Spending Limit =====
function checkSpendingLimit() {
    const total = transactions.reduce((sum, t) => sum + t.amount, 0);
    
    if (total > SPENDING_LIMIT) {
        elements.limitAlert.classList.remove('hidden');
        elements.limitAmount.textContent = formatNumber(SPENDING_LIMIT);
    } else {
        elements.limitAlert.classList.add('hidden');
    }
}

// ===== Update Chart =====
function updateChart() {
    const categoryTotals = calculateCategoryTotals();
    const categories = Object.keys(categoryTotals);
    const amounts = Object.values(categoryTotals);

    // If no data, show empty state
    if (amounts.length === 0 || amounts.every(a => a === 0)) {
        if (chart) {
            chart.destroy();
            chart = null;
        }
        elements.chartCanvas.parentElement.innerHTML = '<p class="empty-state">Belum ada data untuk ditampilkan</p>';
        return;
    }

    // Restore canvas if it was replaced
    if (!document.getElementById('expenseChart')) {
        elements.chartCanvas.parentElement.innerHTML = '<canvas id="expenseChart"></canvas>';
        elements.chartCanvas = document.getElementById('expenseChart');
    }

    const isDarkMode = document.body.classList.contains('dark-mode');
    const colors = categories.map(cat => isDarkMode ? categoryConfig[cat].colorDark : categoryConfig[cat].colorLight);
    const textColor = isDarkMode ? '#f5f5f5' : '#1a1a1a';
    const gridColor = isDarkMode ? '#3a3a3a' : '#e5e5e5';

    const chartData = {
        labels: categories,
        datasets: [{
            data: amounts,
            backgroundColor: colors,
            borderWidth: 2,
            borderColor: isDarkMode ? '#2d2d2d' : '#ffffff',
            hoverOffset: 8,
            hoverBorderWidth: 3,
            hoverBorderColor: isDarkMode ? '#f5f5f5' : '#1a1a1a'
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    font: {
                        size: 13,
                        family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
                        weight: '500'
                    },
                    color: textColor,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            tooltip: {
                backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
                titleColor: textColor,
                bodyColor: textColor,
                borderColor: gridColor,
                borderWidth: 1,
                padding: 12,
                displayColors: true,
                boxWidth: 12,
                boxHeight: 12,
                callbacks: {
                    label: function(context) {
                        const value = context.parsed || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `Rp ${formatNumber(value)} (${percentage}%)`;
                    }
                }
            }
        }
    };

    if (chart) {
        chart.data = chartData;
        chart.options = chartOptions;
        chart.update();
    } else {
        chart = new Chart(elements.chartCanvas, {
            type: 'pie',
            data: chartData,
            options: chartOptions
        });
    }
}

// ===== Calculate Category Totals =====
function calculateCategoryTotals() {
    const totals = {};
    
    transactions.forEach(t => {
        if (!totals[t.category]) {
            totals[t.category] = 0;
        }
        totals[t.category] += t.amount;
    });

    return totals;
}

// ===== Sort Transactions =====
function handleSort() {
    const sortType = elements.sortSelect.value;

    switch (sortType) {
        case 'date-desc':
            transactions.sort((a, b) => b.timestamp - a.timestamp);
            break;
        case 'date-asc':
            transactions.sort((a, b) => a.timestamp - b.timestamp);
            break;
        case 'amount-desc':
            transactions.sort((a, b) => b.amount - a.amount);
            break;
        case 'amount-asc':
            transactions.sort((a, b) => a.amount - b.amount);
            break;
    }

    renderTransactions();
}

// ===== Theme Toggle =====
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    
    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update chart colors if exists
    if (chart) {
        updateChart();
    }
}

// ===== Load Theme Preference =====
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// ===== Local Storage Functions =====
function saveToLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('transactions');
    if (saved) {
        transactions = JSON.parse(saved);
    }
}

// ===== Utility Functions =====
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formatDate(date) {
    const options = { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('id-ID', options);
}

function showNotification(message) {
    // Simple notification - could be enhanced with a toast library
    console.log(message);
}

// ===== Initialize App on Load =====
document.addEventListener('DOMContentLoaded', init);
