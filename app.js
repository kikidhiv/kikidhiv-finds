/**
 * KikiDhiv's Finds — Application Architecture & Filtering Engine
 * Fast, responsive, accessible shopping storefront logic
 */

import { products, categories } from './data/products.js';

// ==========================================================================
// Application State
// ==========================================================================
const state = {
    activeCategory: 'all',
    searchQuery: '',
    isDark: false,
    filteredProducts: [...products]
};

// ==========================================================================
// DOM Elements Cache (will be filled after DOM is ready)
// ==========================================================================
let DOM = {};

function cacheDOM() {
    DOM = {
        html: document.documentElement,
        themeToggle: document.getElementById('theme-toggle'),
        themeIcon: document.getElementById('theme-icon'),
        themeText: document.getElementById('theme-text'),
        categoryContainer: document.getElementById('category-container'),
        searchInput: document.getElementById('search-input'),
        searchClear: document.getElementById('search-clear'),
        productsGrid: document.getElementById('products-grid'),
        resultsCount: document.getElementById('results-count'),
        emptyState: document.getElementById('empty-state'),
        resetBtn: document.getElementById('reset-filters-btn')
    };
}

// ==========================================================================
// Theme Logic (Time-Aware IST & LocalStorage)
// ==========================================================================
function getThemeByIST() {
    try {
        const now = new Date();
        const istString = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
        const istTime = new Date(istString);
        const hour = istTime.getHours();
        // True if time is between 18:00 (6 PM) and 05:59 (6 AM)
        return (hour >= 18 || hour < 6);
    } catch (e) {
        // Fallback to local hour if timezone fails
        const hour = new Date().getHours();
        return (hour >= 18 || hour < 6);
    }
}

function applyTheme(isDark) {
    state.isDark = isDark;
    if (isDark) {
        DOM.html.classList.add('dark');
        if (DOM.themeIcon) DOM.themeIcon.textContent = '☀️';
        if (DOM.themeText) DOM.themeText.textContent = 'Light';
        if (DOM.themeToggle) DOM.themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
        DOM.html.classList.remove('dark');
        if (DOM.themeIcon) DOM.themeIcon.textContent = '🌙';
        if (DOM.themeText) DOM.themeText.textContent = 'Dark';
        if (DOM.themeToggle) DOM.themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
    localStorage.setItem('kikidhiv_theme', isDark ? 'dark' : 'light');
}

function toggleTheme() {
    applyTheme(!state.isDark);
}

function initTheme() {
    const savedTheme = localStorage.getItem('kikidhiv_theme');
    if (savedTheme === 'dark') {
        applyTheme(true);
    } else if (savedTheme === 'light') {
        applyTheme(false);
    } else {
        applyTheme(getThemeByIST());
    }
}

// ==========================================================================
// Category Pills Rendering & Handling
// ==========================================================================
function renderCategoryPills() {
    if (!DOM.categoryContainer) return;

    DOM.categoryContainer.innerHTML = categories.map(cat => {
        const isActive = cat.id === state.activeCategory;
        const count = cat.id === 'all'
            ? products.length
            : products.filter(p => p.category === cat.id).length;

        return `
            <button
                type="button"
                role="tab"
                aria-selected="${isActive}"
                data-category="${cat.id}"
                class="category-pill ${isActive ? 'active' : ''}"
                id="pill-${cat.id}"
            >
                <span>${cat.emoji}</span>
                <span>${cat.label}</span>
                <span class="opacity-60 text-xs font-normal">(${count})</span>
            </button>
        `;
    }).join('');

    // Attach listeners
    DOM.categoryContainer.querySelectorAll('.category-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            setCategory(category);

            // Smooth scroll active button into view on mobile
            btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
    });
}

function updateActivePill() {
    const pills = DOM.categoryContainer?.querySelectorAll('.category-pill');
    pills?.forEach(pill => {
        const isActive = pill.dataset.category === state.activeCategory;
        pill.classList.toggle('active', isActive);
        pill.setAttribute('aria-selected', isActive);
    });
}

// ==========================================================================
// Filtering Engine (Dual Filter: Category + Real-Time Search)
// ==========================================================================
function applyFilters() {
    const query = state.searchQuery.trim().toLowerCase();

    state.filteredProducts = products.filter(product => {
        // Category match
        const matchesCategory = state.activeCategory === 'all' || product.category === state.activeCategory;

        // Search query match (title, description, category, tags, source)
        if (!query) return matchesCategory;

        const titleMatch = product.title.toLowerCase().includes(query);
        const descMatch = product.description.toLowerCase().includes(query);
        const categoryMatch = product.category.toLowerCase().includes(query);
        const tagsMatch = product.tags.some(t => t.toLowerCase().includes(query));
        const sourceMatch = product.source.toLowerCase().includes(query);

        return matchesCategory && (titleMatch || descMatch || categoryMatch || tagsMatch || sourceMatch);
    });

    state.filteredProducts.sort((a,b) => (a.category==="prompts"?-1:b.category==="prompts"?1:0));
    renderProducts();
    updateResultsMeta();
}

function setCategory(category) {
    if (state.activeCategory === category) return;
    state.activeCategory = category;
    updateActivePill();
    applyFilters();
}

function resetAllFilters() {
    state.activeCategory = 'all';
    state.searchQuery = '';
    if (DOM.searchInput) DOM.searchInput.value = '';
    if (DOM.searchClear) DOM.searchClear.style.display = 'none';
    updateActivePill();
    applyFilters();
}

// ==========================================================================
// Product Card Rendering (Performance Optimized & Semantic)
// ==========================================================================
function createProductCardHTML(product, index) {
    // Source badge
    let sourceBadgeHTML = '';
    if (product.source === 'amazon') {
        sourceBadgeHTML = '<span class="badge badge-source-amazon">Amazon</span>';
    } else if (product.source === 'meesho') {
        sourceBadgeHTML = '<span class="badge badge-source-meesho">Meesho</span>';
    } else if (product.source === 'prompt') {
        sourceBadgeHTML = '<span class="badge badge-source-prompt">AI Prompt</span>';
    }

    // Tag badges
    const tagsHTML = product.tags.map(tag => {
        let tagClass = 'badge-highlight';
        if (tag === 'Daily Use') tagClass = 'badge-daily';
        if (tag === 'Worth It') tagClass = 'badge-worth';
        return `<span class="badge ${tagClass}">${tag}</span>`;
    }).join('');

    // CTA Label & Icon
    const isPrompt = product.category === 'prompts';
    const ctaText = isPrompt ? 'View Full Prompt' : 'Shop Now';
    const ctaIcon = isPrompt
        ? `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>`
        : `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>`;

    const placeholderCategory = product.category || 'Product';
    const placeholderURL = `https://placehold.co/400x500/1e293b/f8fafc?text=${encodeURIComponent(placeholderCategory)}`;

    return `
        <article class="product-card" data-category="${product.category}" data-id="${product.id}" style="animation-delay: ${Math.min(index * 0.03, 0.3)}s">
            <div class="product-image-container">
                ${tagsHTML ? `<div class="badge-container-top">${tagsHTML}</div>` : ''}
                <div class="badge-container-bottom">${sourceBadgeHTML}</div>
                <img
                    src="${product.image}"
                    alt="${product.title.replace(/"/g, '&quot;')}"
                    loading="lazy"
                    class="product-image"
                    onerror="this.onerror=null; this.src='${placeholderURL}';"
                />
            </div>
            <div class="product-content">
                <span class="product-category-label">${product.category}</span>
                <h3 class="product-title" title="${product.title.replace(/"/g, '&quot;')}">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <a
                    href="${product.link}"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    class="product-cta"
                    aria-label="${ctaText} - ${product.title.replace(/"/g, '&quot;')}"
                >
                    <span>${ctaText}</span>
                    ${ctaIcon}
                </a>
            </div>
        </article>
    `;
}

function renderProducts() {
    if (!DOM.productsGrid) return;

    if (state.filteredProducts.length === 0) {
        DOM.productsGrid.style.display = 'none';
        if (DOM.emptyState) DOM.emptyState.style.display = 'block';
    } else {
        DOM.productsGrid.style.display = 'grid';
        if (DOM.emptyState) DOM.emptyState.style.display = 'none';
        DOM.productsGrid.innerHTML = state.filteredProducts.map((p, i) => createProductCardHTML(p, i)).join('');
    }
}

function updateResultsMeta() {
    if (!DOM.resultsCount) return;

    const count = state.filteredProducts.length;
    const catObj = categories.find(c => c.id === state.activeCategory);
    const catName = catObj ? catObj.label : 'All';

    if (state.searchQuery) {
        DOM.resultsCount.textContent = `Found ${count} ${count === 1 ? 'item' : 'items'} matching "${state.searchQuery}"`;
    } else if (state.activeCategory !== 'all') {
        DOM.resultsCount.textContent = `Showing ${count} ${count === 1 ? 'find' : 'finds'} in ${catName}`;
    } else {
        DOM.resultsCount.textContent = `Showing all ${count} curated finds`;
    }
}

// ==========================================================================
// Debounce Utility
// ==========================================================================
function debounce(func, wait = 200) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================================================
// Event Listeners Setup
// ==========================================================================
function initEvents() {
    // Theme toggle
    DOM.themeToggle?.addEventListener('click', toggleTheme);

    // Search input with debouncing
    const handleSearch = debounce((e) => {
        state.searchQuery = e.target.value;
        if (DOM.searchClear) {
            DOM.searchClear.style.display = state.searchQuery ? 'flex' : 'none';
        }
        applyFilters();
    }, 180);

    DOM.searchInput?.addEventListener('input', handleSearch);

    // Clear search button
    DOM.searchClear?.addEventListener('click', () => {
        if (DOM.searchInput) {
            DOM.searchInput.value = '';
            DOM.searchInput.focus();
        }
        state.searchQuery = '';
        DOM.searchClear.style.display = 'none';
        applyFilters();
    });

    // Keyboard shortcut: Escape clears search
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && state.searchQuery) {
            if (DOM.searchInput) DOM.searchInput.value = '';
            state.searchQuery = '';
            if (DOM.searchClear) DOM.searchClear.style.display = 'none';
            applyFilters();
        }
    });

    // Reset filters button
    DOM.resetBtn?.addEventListener('click', resetAllFilters);
}

// ==========================================================================
// Application Bootstrap
// ==========================================================================
function init() {
    try {
        console.log('[KikiDhivsFinds] init');
        cacheDOM();
        console.log('[KikiDhivsFinds] DOM cached', !!DOM.themeToggle);
        initTheme();
        renderCategoryPills();
        applyFilters();
        initEvents();
    } catch (e) {
        console.error('[KikiDhivsFinds] init error:', e);
        // Show error in UI maybe
        if (DOM.resultsCount) {
            DOM.resultsCount.textContent = 'Error loading finds';
        }
    }
}

// Execute when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
