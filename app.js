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
        resetBtn: document.getElementById('reset-filters-btn'),
        promptModal: document.getElementById('prompt-modal'),
        promptModalContent: document.getElementById('prompt-modal-content'),
        promptModalClose: document.getElementById('prompt-modal-close')
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
        return (hour >= 18 || hour < 6);
    } catch (e) {
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

        // Calculate counts for different categories:
        // - 'all': all products excluding prompts
        // - 'women'/'men': women/men products
        // - other categories: their original category products
        let count = 0;
        if (cat.id === 'all') {
            count = products.filter(p => p.category !== 'prompts').length;
        } else if (cat.id === 'women') {
            // Count only fashion + beauty products for women (matches filtering logic)
            count = products.filter(p =>
                ['fashion', 'beauty'].includes(p.category) &&
                ['women', 'unisex'].includes(p.gender)
            ).length;
        } else if (cat.id === 'men') {
            // Count only fashion + beauty products for men (matches filtering logic)
            count = products.filter(p =>
                ['fashion', 'beauty'].includes(p.category) &&
                ['men', 'unisex'].includes(p.gender)
            ).length;
        } else {
            count = products.filter(p => p.category === cat.id).length;
        }

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

    DOM.categoryContainer.querySelectorAll('.category-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            setCategory(category);
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
// Filtering Engine — gender-based filtering, prompts excluded from "All" tab
// ==========================================================================
function applyFilters() {
    const query = state.searchQuery.trim().toLowerCase();

    state.filteredProducts = products.filter(product => {
        // Handle "All" tab — includes all products except prompts
        if (state.activeCategory === 'all') {
            // For "All", include all products except prompts
            if (product.category === 'prompts') return false;

            // For the query matching, we need to search across all relevant fields including gender-based search
            if (!query) return true; // Already filtered by category above

            const titleMatch    = product.title.toLowerCase().includes(query);
            const descMatch     = product.description.toLowerCase().includes(query);
            const categoryMatch = product.category.toLowerCase().includes(query);
            const tagsMatch     = product.tags.some(t => t.toLowerCase().includes(query));
            const sourceMatch   = product.source.toLowerCase().includes(query);
            const genderMatch   = product.gender?.toLowerCase().includes(query);

            return (titleMatch || descMatch || categoryMatch || tagsMatch || sourceMatch || genderMatch);
        }

        // Handle gender-specific tabs — ONLY fashion and beauty are split by gender
        if (state.activeCategory === 'women') {
            // Women tab: only fashion + beauty products for women
            if (!['fashion', 'beauty'].includes(product.category)) return false;
            if (!['women', 'unisex'].includes(product.gender)) return false;
        } else if (state.activeCategory === 'men') {
            // Men tab: only fashion + beauty products for men
            if (!['fashion', 'beauty'].includes(product.category)) return false;
            if (!['men', 'unisex'].includes(product.gender)) return false;
        } else {
            // For other tabs (beauty, kids, toys, tech), match original category
            if (product.category !== state.activeCategory) return false;
        }

        if (!query) return true;

        const titleMatch    = product.title.toLowerCase().includes(query);
        const descMatch     = product.description.toLowerCase().includes(query);
        const categoryMatch = product.category.toLowerCase().includes(query);
        const tagsMatch     = product.tags.some(t => t.toLowerCase().includes(query));
        const sourceMatch   = product.source.toLowerCase().includes(query);
        const genderMatch   = product.gender?.toLowerCase().includes(query);

        return (titleMatch || descMatch || categoryMatch || tagsMatch || sourceMatch || genderMatch);
    });

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
// Product Card Rendering
// ==========================================================================
function createProductCardHTML(product, index) {
    // Source badge
    let sourceBadgeHTML = '';
    if (product.source === 'amazon') {
        sourceBadgeHTML = '<span class="badge badge-source-amazon">Amazon</span>';
    } else if (product.source === 'meesho') {
        sourceBadgeHTML = '<span class="badge badge-source-meesho">Meesho</span>';
    } else if (product.source === 'myntra') {
        sourceBadgeHTML = '<span class="badge badge-source-myntra">Myntra</span>';
    } else if (product.source === 'prompt') {
        sourceBadgeHTML = '<span class="badge badge-source-prompt">AI Prompt</span>';
    }

    // Tag badges (only decorative tags like "Party Wear")
    const tagsHTML = product.tags.map(tag => {
        return `<span class="badge badge-highlight">${tag}</span>`;
    }).join('');

    const isPrompt = product.category === 'prompts';
    const placeholderURL = `https://placehold.co/400x500/1e293b/f8fafc?text=${encodeURIComponent(product.category || 'Product')}`;

    if (isPrompt) {
        // Prompt card — opens modal instead of linking out
        return `
            <article class="product-card prompt-card" data-category="${product.category}" data-id="${product.id}" style="animation-delay: ${Math.min(index * 0.03, 0.3)}s">
                <div class="product-image-container">
                    <div class="badge-container-bottom">${sourceBadgeHTML}</div>
                    <div class="prompt-overlay">
                        <span class="prompt-overlay-icon">✨</span>
                        <span class="prompt-overlay-text">Tap to copy prompt</span>
                    </div>
                    <img
                        src="${product.image}"
                        alt="${product.title.replace(/"/g, '&quot;')}"
                        loading="lazy"
                        class="product-image"
                        onerror="this.onerror=null; this.src='${placeholderURL}';"
                    />
                </div>
                <div class="product-content">
                    <span class="product-category-label">AI Prompt</span>
                    <h3 class="product-title" title="${product.title.replace(/"/g, '&quot;')}">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <button
                        class="product-cta prompt-cta-btn"
                        data-prompt-id="${product.id}"
                        aria-label="View and copy prompt — ${product.title.replace(/"/g, '&quot;')}"
                    >
                        <span>✨ Copy Prompt</span>
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    </button>
                </div>
            </article>
        `;
    }

    // Price display — shown if set, hidden if null
    const priceHTML = product.price
        ? `<div class="product-price">
               <span class="price-value">₹${product.price.toLocaleString('en-IN')}</span>
               <span class="price-note" title="Price set by ${product.source === 'amazon' ? 'Amazon' : 'Meesho'} and may vary">approx.</span>
           </div>`
        : '';

    // Regular product card
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
                ${priceHTML}
                <a
                    href="${product.link}"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    class="product-cta"
                    aria-label="Shop Now — ${product.title.replace(/"/g, '&quot;')}"
                >
                    <span>Shop Now</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
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

        // Attach prompt card button listeners after render
        DOM.productsGrid.querySelectorAll('.prompt-cta-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.promptId;
                const product = products.find(p => p.id === id);
                if (product) openPromptModal(product);
            });
        });
    }
}

function updateResultsMeta() {
    if (!DOM.resultsCount) return;
    const count = state.filteredProducts.length;
    const catObj = categories.find(c => c.id === state.activeCategory);
    const catName = catObj ? catObj.label : 'All';

    if (state.searchQuery) {
        DOM.resultsCount.textContent = `Found ${count} ${count === 1 ? 'item' : 'items'} matching "${state.searchQuery}"`;
    } else if (state.activeCategory === 'prompts') {
        DOM.resultsCount.textContent = `${count} AI ${count === 1 ? 'prompt' : 'prompts'} — tap any card to copy`;
    } else if (state.activeCategory !== 'all') {
        DOM.resultsCount.textContent = `Showing ${count} ${count === 1 ? 'find' : 'finds'} in ${catName}`;
    } else {
        DOM.resultsCount.textContent = `Showing all ${count} curated finds`;
    }
}

// ==========================================================================
// Prompt Quick-Copy Modal
// ==========================================================================
function openPromptModal(product) {
    if (!DOM.promptModal || !DOM.promptModalContent) return;

    const promptText = product.promptText || '';

    DOM.promptModalContent.innerHTML = `
        <div class="pm-header">
            <div class="pm-header-text">
                <p class="pm-label">AI Prompt</p>
                <h2 class="pm-title">${product.title}</h2>
            </div>
            <button class="pm-close" id="prompt-modal-close" aria-label="Close prompt">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>

        <div class="pm-body">
            <img
                src="${product.image}"
                alt="${product.title}"
                class="pm-image"
                onerror="this.style.display='none'"
            />
            <p class="pm-description">${product.description}</p>

            <div class="pm-prompt-box">
                <div class="pm-prompt-label-row">
                    <span class="pm-prompt-label">Prompt Text</span>
                </div>
                <pre class="pm-prompt-text" id="prompt-text-content">${escapeHTML(promptText)}</pre>
            </div>

            <button class="pm-copy-btn" id="pm-copy-btn" aria-label="Copy prompt to clipboard">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                <span>Copy Prompt</span>
            </button>
        </div>
    `;

    // Wire up close
    DOM.promptModal.querySelector('#prompt-modal-close')?.addEventListener('click', closePromptModal);

    // Wire up copy
    DOM.promptModal.querySelector('#pm-copy-btn')?.addEventListener('click', function () {
        const textEl = document.getElementById('prompt-text-content');
        const text = textEl ? textEl.innerText : promptText;
        const btn = this;

        navigator.clipboard.writeText(text).then(() => {
            showCopied(btn);
        }).catch(() => {
            // Fallback selection method
            try {
                const range = document.createRange();
                range.selectNodeContents(textEl);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                document.execCommand('copy');
                sel.removeAllRanges();
                showCopied(btn);
            } catch (err) {
                btn.querySelector('span').textContent = 'Select & copy manually';
            }
        });
    });

    DOM.promptModal.hidden = false;
    DOM.promptModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function showCopied(btn) {
    const span = btn.querySelector('span');
    const originalText = span.textContent;
    btn.classList.add('is-copied');
    span.textContent = 'Copied!';
    setTimeout(() => {
        btn.classList.remove('is-copied');
        span.textContent = originalText;
    }, 2200);
}

function closePromptModal() {
    if (!DOM.promptModal) return;
    DOM.promptModal.hidden = true;
    DOM.promptModal.classList.remove('is-open');
    document.body.style.overflow = '';
}

function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// ==========================================================================
// Debounce Utility
// ==========================================================================
function debounce(func, wait = 200) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => { clearTimeout(timeout); func(...args); };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================================================
// Event Listeners Setup
// ==========================================================================
function initEvents() {
    DOM.themeToggle?.addEventListener('click', toggleTheme);

    const handleSearch = debounce((e) => {
        state.searchQuery = e.target.value;
        if (DOM.searchClear) {
            DOM.searchClear.style.display = state.searchQuery ? 'flex' : 'none';
        }
        applyFilters();
    }, 180);

    DOM.searchInput?.addEventListener('input', handleSearch);

    DOM.searchClear?.addEventListener('click', () => {
        if (DOM.searchInput) {
            DOM.searchInput.value = '';
            DOM.searchInput.focus();
        }
        state.searchQuery = '';
        DOM.searchClear.style.display = 'none';
        applyFilters();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (DOM.promptModal && !DOM.promptModal.hidden) {
                closePromptModal();
            } else if (state.searchQuery) {
                if (DOM.searchInput) DOM.searchInput.value = '';
                state.searchQuery = '';
                if (DOM.searchClear) DOM.searchClear.style.display = 'none';
                applyFilters();
            }
        }
    });

    // Close modal on backdrop click
    DOM.promptModal?.addEventListener('click', (e) => {
        if (e.target === DOM.promptModal) closePromptModal();
    });

    DOM.resetBtn?.addEventListener('click', resetAllFilters);
}

// ==========================================================================
// Application Bootstrap
// ==========================================================================
function init() {
    try {
        cacheDOM();
        initTheme();
        renderCategoryPills();
        applyFilters();
        initEvents();
    } catch (e) {
        console.error('[KikiDhivsFinds] init error:', e);
        if (DOM.resultsCount) DOM.resultsCount.textContent = 'Error loading finds';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
