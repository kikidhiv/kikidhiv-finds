// ============================================
// Minimalist Affiliate Page JavaScript
// ============================================

(function () {
    'use strict';

    // State Management
    const state = {
        currentCategory: 'all',
    };

    // DOM Elements
    const DOM = {
        productCards: document.querySelectorAll('.product-card'),
        noResults: document.getElementById('no-results'),
        productGrid: document.getElementById('products'),
        categoryButtons: document.querySelectorAll('.category-btn'),
    };

    // ============================================
    // UI Updates
    // ============================================
    function updateCategoryButtons(category) {
        DOM.categoryButtons.forEach(btn => {
            // Remove 'btn-' prefix if it exists to match the category
            const btnCategory = btn.id ? btn.id.replace('btn-', '') : btn.textContent.toLowerCase();
            if (btnCategory === category) {
                btn.classList.add('category-btn-active');
            } else {
                btn.classList.remove('category-btn-active');
            }
        });
    }

    // ============================================
    // Filter Logic
    // ============================================
    function applyFilters() {
        let visibleCount = 0;

        DOM.productCards.forEach(card => {
            const cardCategory = card.dataset.category;

            const categoryMatch = state.currentCategory === 'all' || cardCategory === state.currentCategory;

            if (categoryMatch) {
                card.style.display = 'flex'; // Use flex to maintain card layout
                card.style.animation = 'none';
                card.offsetHeight; // Trigger reflow
                card.style.animation = 'fadeIn 0.4s ease-out';
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
            DOM.productGrid.style.display = 'grid'; // Reset to grid display
        }
    }

    // Expose functions globally for inline HTML onclick handlers
    window.filterCategory = function (category) {
        state.currentCategory = category;
        updateCategoryButtons(category);
        applyFilters();
    };

    window.resetFilters = function () {
        state.currentCategory = 'all';
        updateCategoryButtons('all');
        applyFilters();
    };

    // ============================================
    // Initialize
    // ============================================
    function init() {
        updateCategoryButtons('all');
        applyFilters();
        console.log('Minimalist Finds Page - Ready!');
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();