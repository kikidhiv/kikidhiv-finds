// KikiDhiv's Finds - Main JavaScript Functionality
(function () {
    'use strict';

    // State management
    let currentPlatform = 'all';
    let currentCategory = 'all';

    // DOM references
    const productCards = document.querySelectorAll('.product-card');
    const filterStatus = document.getElementById('filter-status');
    const platformNavButtons = document.querySelectorAll('.platform-nav');
    const categoryButtons = document.querySelectorAll('.cat-btn');
    const html = document.documentElement;
    const themeIconLight = document.getElementById('theme-icon-light');
    const themeIconDark = document.getElementById('theme-icon-dark');
    const marketplace = document.getElementById('marketplace');

    // Theme management
    function setThemeUI(isDark) {
        if (isDark) {
            html.classList.add('dark');
            if (themeIconLight) {
                themeIconLight.classList.add('hidden');
                themeIconLight.classList.remove('block');
            }
            if (themeIconDark) {
                themeIconDark.classList.remove('hidden');
                themeIconDark.classList.add('block');
            }
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            if (themeIconLight) {
                themeIconLight.classList.remove('hidden');
                themeIconLight.classList.add('block');
            }
            if (themeIconDark) {
                themeIconDark.classList.add('hidden');
                themeIconDark.classList.remove('block');
            }
            localStorage.setItem('theme', 'light');
        }
    }

    // Initialize theme
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setThemeUI(false);
        } else if (savedTheme === 'dark') {
            setThemeUI(true);
        } else {
            // Default to dark mode
            setThemeUI(true);
        }
    }

    // Expose toggleTheme globally
    window.toggleTheme = function () {
        const isDark = html.classList.contains('dark');
        setThemeUI(!isDark);
    };

    // Platform filter UI update
    function updatePlatformNavUI(platform) {
        platformNavButtons.forEach((btn) => {
            const btnId = btn.id;
            if (!btnId) return;

            // Extract platform from button ID
            let btnPlatform = btnId.replace('nav-', '').replace('mob-', '');

            if (btnPlatform === platform || (platform === 'all' && btnPlatform === 'all')) {
                btn.classList.add('text-pink-600', 'dark:text-pink-400', 'font-semibold');
                btn.classList.remove('text-slate-500', 'dark:text-gray-400');
            } else {
                btn.classList.remove('text-pink-600', 'dark:text-pink-400', 'font-semibold');
                btn.classList.add('text-slate-500', 'dark:text-gray-400');
            }
        });
    }

    // Category button UI update
    function updateCategoryUI(category) {
        categoryButtons.forEach((btn) => {
            const btnCat = btn.id.replace('btn-', '');
            if (btnCat === category) {
                btn.className =
                    'cat-btn px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-gray-900 shadow-md transition-all active:scale-95 cursor-pointer';
            } else {
                btn.className =
                    'cat-btn px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-gray-900/60 text-slate-700 dark:text-gray-400 border border-slate-200 dark:border-gray-800 hover:bg-slate-50 dark:hover:bg-gray-800 transition-all active:scale-95 cursor-pointer';
            }
        });
    }

    // Apply filters to product cards
    function applyFilters() {
        productCards.forEach((card) => {
            const cardPlatform = card.getAttribute('data-platform');
            const cardCategory = card.getAttribute('data-category');

            const platformMatch =
                currentPlatform === 'all' || cardPlatform === currentPlatform;
            const categoryMatch =
                currentCategory === 'all' || cardCategory === currentCategory;

            if (platformMatch && categoryMatch) {
                card.style.display = 'flex';
                // Trigger reflow for animation
                void card.offsetWidth;
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
                card.classList.remove('fade-in');
            }
        });

        // Update filter status text
        if (filterStatus) {
            if (currentPlatform === 'amazon') {
                filterStatus.innerHTML = '📦 Showing Amazon Finds';
            } else if (currentPlatform === 'meesho') {
                filterStatus.innerHTML = '🛍️ Showing Meesho Finds';
            } else {
                filterStatus.innerHTML = '✨ Showing all platforms';
            }
        }
    }

    // Expose filter functions globally
    window.filterPlatform = function (platform) {
        currentPlatform = platform;
        updatePlatformNavUI(platform);
        applyFilters();

        // Smooth scroll to marketplace
        if (marketplace) {
            marketplace.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    window.filterCategory = function (category) {
        currentCategory = category;
        updateCategoryUI(category);
        applyFilters();
    };

    // Initialize everything
    function init() {
        initTheme();
        updatePlatformNavUI('all');
        updateCategoryUI('all');
        applyFilters();

        // Add keyboard accessibility for filter buttons
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const activeElement = document.activeElement;
                if (activeElement && activeElement.classList.contains('platform-nav')) {
                    e.preventDefault();
                    activeElement.click();
                }
                if (activeElement && activeElement.classList.contains('cat-btn')) {
                    e.preventDefault();
                    activeElement.click();
                }
            }
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();