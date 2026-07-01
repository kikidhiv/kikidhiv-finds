(function () {
    'use strict';

    const state = {
        currentCategory: 'all',
        isDark: false
    };

    const DOM = {
        html: document.documentElement,
        themeToggle: document.getElementById('theme-toggle'),
        categoryButtons: document.querySelectorAll('.category-btn'),
        productCards: document.querySelectorAll('.product-card'),
        noResults: document.getElementById('no-results'),
        productGrid: document.getElementById('products')
    };

    // ============================================
    // Theme Logic (Time-Aware IST)
    // ============================================
    
    function getThemeByIST() {
        const now = new Date();
        const istString = now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
        const istTime = new Date(istString);
        const hour = istTime.getHours();
        
        // True if time is between 18:00 (6 PM) and 05:59 (6 AM)
        return (hour >= 18 || hour < 6);
    }

    function applyTheme(isDark) {
        state.isDark = isDark;
        if (isDark) {
            DOM.html.classList.add('dark');
            if (DOM.themeToggle) {
                DOM.themeToggle.innerHTML = '☀️ Light';
                DOM.themeToggle.setAttribute('aria-label', 'Switch to light mode');
            }
        } else {
            DOM.html.classList.remove('dark');
            if (DOM.themeToggle) {
                DOM.themeToggle.innerHTML = '🌙 Dark';
                DOM.themeToggle.setAttribute('aria-label', 'Switch to dark mode');
            }
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    function toggleTheme() {
        applyTheme(!state.isDark);
    }

    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            applyTheme(true);
        } else if (savedTheme === 'light') {
            applyTheme(false);
        } else {
            applyTheme(getThemeByIST());
        }
    }

    // ============================================
    // Filtering Logic
    // ============================================

    // Expose to window for inline onclick handlers
    window.filterCategory = function(category) {
        state.currentCategory = category;
        
        DOM.categoryButtons.forEach(btn => {
            const btnCategory = btn.id ? btn.id.replace('btn-', '') : btn.textContent.trim().toLowerCase();
            if (btnCategory === category) {
                btn.classList.add('category-btn-active');
            } else {
                btn.classList.remove('category-btn-active');
            }
        });

        let visibleCount = 0;
        DOM.productCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const categoryMatch = state.currentCategory === 'all' || cardCategory === state.currentCategory;

            if (categoryMatch) {
                card.style.display = 'flex';
                card.style.animation = 'none';
                card.offsetHeight; // reflow
                card.style.animation = 'fadeIn 0.4s ease-out';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (visibleCount === 0) {
            DOM.noResults?.classList.remove('hidden');
            if (DOM.productGrid) DOM.productGrid.style.display = 'none';
        } else {
            DOM.noResults?.classList.add('hidden');
            if (DOM.productGrid) DOM.productGrid.style.display = 'grid';
        }
    };

    window.resetFilters = function() {
        filterCategory('all');
    };

    // ============================================
    // Initialization
    // ============================================

    function init() {
        initTheme();
        filterCategory('all');

        if (DOM.themeToggle) {
            DOM.themeToggle.addEventListener('click', toggleTheme);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();