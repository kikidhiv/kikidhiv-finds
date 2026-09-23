```markdown
# KikiDhiv's Finds - Curated Affiliate Shopping Page

A modern, responsive affiliate shopping page showcasing handpicked products from Amazon and Meesho. Built with Tailwind CSS and vanilla JavaScript, featuring a sleek dark/light mode toggle.

![KikiDhiv's Finds Preview](images/KikiDhiv.PNG)

## 🚀 Features

- **🌓 Dark/Light Mode** - Toggle between themes with persistent localStorage preference (defaults to IST time-aware dark mode between 6PM-6AM)
- **🏷️ Category Filtering** - Browse products by Fashion, Beauty, Kids & Stationery, Toys, Tech, and Prompts
- **🔍 Real-Time Search** - Debounced 180ms search filtering across titles, descriptions, categories, tags, and sources
- **🏪 Platform Tags** - Visual indicators for Amazon and Meesho products
- **⭐ Priority Labels** - "Highly Recommend", "Daily Use", and "Worth It" badges on top picks
- **📱 Fully Responsive** - Premium Pinterest-inspired design optimized for mobile, tablet, and desktop (2 → 3 → 4 column grid)
- **✨ Smooth Animations** - Card fade-in animations and hover effects with GPU-accelerated transitions
- **🎨 Modern UI** - Glassmorphism sticky header, pill-shaped scroll-snap filters, rounded editorial cards with 4:5 image ratio
- **🔗 Affiliate Ready** - All product links include affiliate tags for Amazon (`kikidhiv-21`) and Meesho
- **⚡ Module-Based** - ES modules for clean separation of data and application logic

## 🛠️ Tech Stack

- **HTML5** - Semantic markup structure
- **Tailwind CSS** - Utility-first CSS framework (loaded via CDN)
- **Vanilla JavaScript** - No frameworks, pure JS for filtering and theme logic
- **CSS Custom Properties** - Theme variables for seamless light/dark transitions
- **Google Fonts** - Inter font family for clean typography

## 📂 Project Structure

```
kikidhivs-finds/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── app.js              # Application logic
├── data/
│   └── products.js     # Normalized product dataset
├── images/             # Product images directory
│   ├── KikiDhiv.PNG
│   ├── AHA BHA Underarm Roll-On.jpg
│   ├── Oliveware Leak-Proof Lunch Box.jpg
│   └── ... (30+ product images)
├── prompt_images/      # Prompt images
│   └── neon_portrait_prompt.PNG
├── prompt_txt_files/   # Prompt text files
│   └── neon_portrait_prompt.txt
└── README.md           # Project documentation
```

> **Note:** The CSS and JavaScript are now separate files (`styles.css` and `app.js`) for better maintainability. The site uses ES modules to import product data from `data/products.js`.

## 🎯 Product Categories

| Category | Description | Platform |
|----------|-------------|----------|
| **Fashion** | Dresses, kurti sets, ethnic wear | Meesho |
| **Beauty** | Makeup, skincare, haircare, tools | Amazon |
| **Kids & Stationery** | Lunch boxes, bottles, pencils | Amazon |
| **Toys** | Slides, fidget toys, RC cars | Amazon |
| **Tech** | Device cleaning kits, accessories | Amazon |

## 🔧 Setup & Usage

### 1. Clone or Download
```bash
git clone https://github.com/yourusername/kikidhivs-finds.git
cd kikidhivs-finds
```

### 2. Open in Browser
Simply open `index.html` in any modern web browser. No build tools or server required!

### 3. Customize
- **Products**: Add/edit product cards in the `<div id="products">` section
- **Images**: Place product images in the `images/` folder and update `src` attributes
- **Affiliate Links**: Replace the existing affiliate tags with your own Amazon/partner IDs
- **Profile**: Update the profile image, name, bio, and Instagram link

### 4. Deploy
Deploy to any static hosting service:
- **GitHub Pages** - Free and easy
- **Netlify** - Drag-and-drop deployment
- **Vercel** - One-click deploy

## 🎨 Theme Customization

The dark/light mode uses CSS custom properties defined in the `<style>` section. To modify colors:

```css
:root {
    --bg-primary: #f8fafc;      /* Light background */
    --text-primary: #0f172a;    /* Light text */
    /* ... more variables */
}

.dark {
    --bg-primary: #0f172a;      /* Dark background */
    --text-primary: #f1f5f9;    /* Dark text */
    /* ... more variables */
}
```

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| Mobile (< 640px) | 2 columns |
| Tablet (640px - 768px) | 2-3 columns |
| Desktop (768px - 1024px) | 3-4 columns |
| Wide (1024px+) | 4-5 columns |

## 🔗 Affiliate Disclosure

This page uses Amazon Associate and Meesho affiliate links. As an affiliate partner, commissions may be earned from qualifying purchases. All product recommendations are genuine and based on personal use.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Creator

**@KikiDhiv** - Sharing favorite finds in fashion, beauty, tech, and home.

- 📸 [Follow on Instagram](https://www.instagram.com/xyz/)

---

**Made with ❤️ using Tailwind CSS**
```