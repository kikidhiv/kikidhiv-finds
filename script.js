// ============================================
// KikiDhiv's Finds - Premium JavaScript
// ============================================

(function () {
    'use strict';

    // State Management
    const state = {
        currentPlatform: 'all',
        currentCategory: 'all',
        isDark: true
    };

    // DOM Elements
    const DOM = {
        html: document.documentElement,
        productCards: document.querySelectorAll('.product-card'),
        filterStatus: document.getElementById('filter-status'),
        noResults: document.getElementById('no-results'),
        productGrid: document.getElementById('products'),
        backToTop: document.getElementById('back-to-top'),
        sunIcon: document.getElementById('sun-icon'),
        moonIcon: document.getElementById('moon-icon'),
        navButtons: document.querySelectorAll('[id^="nav-"]'),
        categoryButtons: document.querySelectorAll('[id^="btn-"]'),
        mobNavButtons: document.querySelectorAll('[id^="nav-mob-"]'),
    };

    // ============================================
    // Theme Management
    // ============================================
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'light') {
            setTheme(false);
        } else if (savedTheme === 'dark') {
            setTheme(true);
        } else {
            setTheme(prefersDark);
        }
    }

    function setTheme(isDark) {
        state.isDark = isDark;
        
        if (isDark) {
            DOM.html.classList.add('dark');
            DOM.sunIcon?.classList.remove('hidden');
            DOM.moonIcon?.classList.add('hidden');
        } else {
            DOM.html.classList.remove('dark');
            DOM.sunIcon?.classList.add('hidden');
            DOM.moonIcon?.classList.remove('hidden');
        }
        
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    window.toggleTheme = function () {
        setTheme(!state.isDark);
    };

    // ============================================
    // UI Updates
    // ============================================
    function updateNavButtons(platform) {
        // Desktop nav buttons
        DOM.navButtons.forEach(btn => {
            const btnPlatform = btn.id.replace('nav-', '');
            if (btnPlatform === platform) {
                btn.className = 'nav-btn-active px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300';
            } else {
                btn.className = 'nav-btn px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300';
            }
        });

        // Mobile nav buttons
        DOM.mobNavButtons.forEach(btn => {
            const btnPlatform = btn.id.replace('nav-mob-', '');
            if (btnPlatform === platform) {
                btn.className = 'nav-btn-mob-active flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300';
            } else {
                btn.className = 'nav-btn-mob flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300';
            }
        });
    }

    function updateCategoryButtons(category) {
        DOM.categoryButtons.forEach(btn => {
            const btnCategory = btn.id.replace('btn-', '');
            if (btnCategory === category) {
                btn.className = 'category-btn category-btn-active';
            } else {
                btn.className = 'category-btn';
            }
        });
    }

    function updateFilterStatus() {
        let status = '';
        if (state.currentPlatform === 'amazon') {
            status = '📦 Showing Amazon products';
        } else if (state.currentPlatform === 'meesho') {
            status = '🛍️ Showing Meesho products';
        } else {
            status = '✨ Showing all products';
        }

        if (state.currentCategory !== 'all') {
            status += ` in ${state.currentCategory.charAt(0).toUpperCase() + state.currentCategory.slice(1)}`;
        }

        if (DOM.filterStatus) {
            DOM.filterStatus.textContent = status;
        }
    }

    // ============================================
    // Filter Logic
    // ============================================
    function applyFilters() {
        let visibleCount = 0;

        DOM.productCards.forEach(card => {
            const cardPlatform = card.dataset.platform;
            const cardCategory = card.dataset.category;

            const platformMatch = state.currentPlatform === 'all' || cardPlatform === state.currentPlatform;
            const categoryMatch = state.currentCategory === 'all' || cardCategory === state.currentCategory;

            if (platformMatch && categoryMatch) {
                card.style.display = '';
                card.style.animation = 'none';
                card.offsetHeight; // Trigger reflow
                card.style.animation = 'slideUp 0.5s ease-out';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide no results state
        if (visibleCount === 0) {
            DOM.noResults?.classList.remove('hidden');
            DOM.productGrid.style.display = 'none';
        } else {
            DOM.noResults?.classList.add('hidden');
            DOM.productGrid.style.display = '';
        }

        updateFilterStatus();
    }

    window.filterPlatform = function (platform) {
        state.currentPlatform = platform;
        updateNavButtons(platform);
        applyFilters();
        
        // Scroll to products
        document.getElementById('products')?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    };

    window.filterCategory = function (category) {
        state.currentCategory = category;
        updateCategoryButtons(category);
        applyFilters();
    };

    window.resetFilters = function () {
        state.currentPlatform = 'all';
        state.currentCategory = 'all';
        updateNavButtons('all');
        updateCategoryButtons('all');
        applyFilters();
    };

    // ============================================
    // Back to Top
    // ============================================
    function handleScroll() {
        if (DOM.backToTop) {
            if (window.scrollY > 500) {
                DOM.backToTop.classList.add('visible');
            } else {
                DOM.backToTop.classList.remove('visible');
            }
        }
    }

    window.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ============================================
    // Keyboard Navigation
    // ============================================
    function handleKeyboard(e) {
        // Escape to reset filters
        if (e.key === 'Escape') {
            window.resetFilters();
        }
    }

    // ============================================
    // Initialize
    // ============================================
    function init() {
        // Set initial theme
        initTheme();

        // Set initial UI states
        updateNavButtons('all');
        updateCategoryButtons('all');
        applyFilters();

        // Event listeners
        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('keydown', handleKeyboard);

        // Handle system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches);
            }
        });

        // Initial scroll check
        handleScroll();

        console.log('✨ KikiDhiv\'s Finds - Ready!');
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();