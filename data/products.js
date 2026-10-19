/**
 * KikiDhiv's Finds — Normalized Product Dataset
 * Schema: { id, title, description, category, image, link, source, price, tags[], promptText?, dateAdded, gender }
 * gender: 'women' | 'men' | 'unisex' — used for Men/Women tabs
 * dateAdded: ISO date string — products sort newest-first on the site
 * price: displayed on card, updated periodically as brands adjust (affiliate marketing)
 * tags[] = decorative labels only. Source badges render from `source` field automatically.
 */
const products = [
    {
        id: 'short-kurti-flared-palazzo-combo',
        title: 'Classy Short Kurti & Flared Palazzo Set',
        description: 'Designer Back Short Kurti paired with High Waist White Georgette Flared Palazzo Pants.',
        category: 'women',
        images: [
            'images/New_Classy_designer_Back_short_kurti.avif',
            'images/White_Georgette_Flared_Palazzo.avif'
        ],
        link: 'https://affiliate.meesho.com/collection/ODY2NzU3ODo6Ojo6OmF1dG9kbQ==',
        source: 'meesho',
        price: '243 - 274',
        tags: ['Matching Set'],
        dateAdded: '2026-10-17',
        gender: 'women'
    },
    {
        id: 'trendy-kurta-sharara-dupatta-set',
        title: 'Women\'s Trendy Design Kurta Sharara Dupatta Set',
        description: 'Embroidered Stitched Kurti/sharara set with Dupatta.',
        category: 'women',
        image: 'images/Ethnic Top & Skirt Set.avif',
        link: 'https://affiliate.meesho.com/collection/ODYzNjE3OTo6Ojo6OmF1dG9kbQ==',
        source: 'meesho',
        price: '569',
        tags: ['Ethnic Wear'],
        dateAdded: '2026-10-16',
        gender: 'women'
    },
    {
        id: 'spiderman-gaming-desk-mat-mouse-pad-set',
        title: 'Sigma One® Spider Theme Gaming Desk Mat & Mouse Pad Set',
        description: 'Premium Extended XXL Spiderman Gaming Desk Mat & Mouse Pad with Anti-Slip Rubber Base & Waterproof Surface.',
        category: 'accessories',
        images: [
            'images/Spider_Theme_Gaming_Mouse_Pad_1.png',
            'images/Spider_Theme_Gaming_Mouse_Pad_2.png'
        ],
        link: 'https://affiliate.meesho.com/collection/ODQ5NTgwMDo6Ojo6OmF1dG9kbQ==',
        source: 'meesho',
        price: '187',
        tags: ['Gaming'],
        dateAdded: '2026-10-14',
        gender: 'unisex'
    },
    {
        id: 'men-warli-fusion-shirts-collection',
        title: 'Men Warli Art Printed Cotton Blend Shirts Collection',
        description: 'Matching Black & Brown Full Sleeves Casual Ethnic Fusion Shirts with Warli Print.',
        category: 'men',
        images: [
            'images/Men Black Warli Printed Cotton Blend Shirt.avif',
            'images/Men’s Brown Warli Art Printed Cotton Blend Full Sleeve Shirt.avif'
        ],
        link: 'https://affiliate.meesho.com/collection/ODYwNzE4Njo6Ojo6OmF1dG9kbQ==',
        source: 'meesho',
        price: '381',
        tags: ['Collection'],
        dateAdded: '2026-10-14',
        gender: 'men'
    },
    {
        id: 'men-lycra-half-sleeve-combo',
        title: 'Men Lycra Trendy Half Sleeve Shirt (Combo Pack of 3)',
        description: 'Casual Party and Office Wear Shirt. Combo Pack of 3 (Buy 2 Get 1 Free).',
        category: 'men',
        image: 'images/Men_Lycra_Trendy_Half_Sleeve_Shirt (Combo Pack of 3).avif',
        link: 'https://affiliate.meesho.com/collection/ODM3NDQ3NTo6Ojo6OmF1dG9kbQ==',
        source: 'meesho',
        price: '487',
        tags: ['Combo Pack'],
        dateAdded: '2026-10-12',
        gender: 'men'
    },
    {
        id: 'mahedi-anarkali-gown',
        title: 'Mahedi Anarkali Gown',
        description: 'Ethnic Anarkali Gown.',
        category: 'women',
        image: 'images/Mahedi Anarkali Gown.avif',
        link: 'https://affiliate.meesho.com/collection/Nzk4OTc1Mjo6Ojo6OmF1dG9kbQ==',
        source: 'meesho',
        price: '557',
        tags: ['Ethnic Wear'],
        dateAdded: '2026-10-07',
        gender: 'women'
    },
    {
        id: 'designer-maroon-kurti',
        title: 'Designer Maroon Kurti',
        description: 'Kurti for Casual & College Wear.',
        category: 'women',
        image: 'images/Designer Maroon Kurti.avif',
        link: 'https://affiliate.meesho.com/collection/Nzg3MjIzNjo6Ojo6OmF1dG9kbQ==',
        source: 'meesho',
        price: '228',
        tags: ['Ethnic Wear'],
        dateAdded: '2026-10-06',
        gender: 'women'
    },
    {
        id: 'indoprimo-men-satin-shirt',
        title: 'IndoPrimo Men’s Stylish Satin Shirt',
        description: 'Full Sleeve Shirt for Party, Formal, Daily and Casual Wear.',
        category: 'men',
        image: 'images/Party_wear_shirt.jpg',
        link: 'https://www.amazon.in/dp/B0GK8D6Q4N?th=1&psc=1&linkCode=ll2&tag=kikidhiv-21&linkId=61acf5b75d9c4c3be781fe418a67880c&ref_=as_li_ss_tl',
        source: 'amazon',
        price: '449',
        tags: ['Men Fashion'],
        dateAdded: '2026-10-01',
        gender: 'men'
    },
    {
        id: 'portronics-oria-selfie-light',
        title: 'Portronics Oria Type-C Rechargeable Magnetic Selfie Light',
        description: 'Magnetic Clip-On Selfie Light with Mirror & Stand, Adjustable Brightness & Color Temperature.',
        category: 'accessories',
        image: 'images/Selfie Light with Mirror.jpg',
        link: 'https://www.amazon.in/dp/B0GLH9GBZC?&linkCode=ll2&tag=kikidhiv-21&linkId=fa5b02da969dfc75979f87081c247e3d&ref_=as_li_ss_tl',
        source: 'amazon',
        price: '1299',
        tags: ['Accessories'],
        dateAdded: '2026-09-25',
        gender: 'unisex'
    },
    {
        id: 'invisible-earlobe-patches',
        title: 'Invisible Earlobe Support Patches',
        description: '100 PCS (10 sheets) Ear Stickers for Heavy Earrings. Protects Ear Lobe from Tearing.',
        category: 'women',
        image: 'images/Invisible Earlobe Support Patches.avif',
        link: 'https://affiliate.meesho.com/collection/NzAyNjcyNjo6Ojo6OmF1dG9kbQ==',
        source: 'meesho',
        price: '68',
        tags: ['Beauty'],
        dateAdded: '2026-09-24',
        gender: 'women'
    },
    {
        id: 'red-saree-silk-cinematic-prompt',
        title: 'Red Silk Saree & Kajal Cinematic AI Prompt',
        description: 'Hyper-realistic 3-panel cinematic portrait prompt featuring dramatic chiaroscuro lighting, kajal eye details, and oxidised bangles.',
        category: 'prompts',
        image: 'prompt_images/Red_saree_prompt.PNG',
        promptText: `Hyper-realistic 3-panel (zig zag panel) cinematic portrait, 8K, vertical 9:16. Preserve the exact face and body features, identity, proportions, and natural skin tone from the reference image.\nPanel 1: Close-up of a beautiful woman with long wavy, slightly wind-swept hair falling across her face. Sharp eyes gaze upward-right, catching a sharp diagonal beam of natural light across her cheekbone and nose.\nGlossy mauve lips, dark wine red colour silk outfit, dramatic chiaroscuro shadows, visible skin and hair texture, pleasent mood.\nPanel 2: Dramatic close-up of her expressive dark-brown eye with bold black kajal, long lashes, and a small black bindi against a soft natural background.\nPanel 3: Close-up of her graceful hands adorned with stacked black oxidised bangles.\nUltra-detailed, photorealistic, cinematic lighting.`,
        source: 'prompt',
        dateAdded: '2026-08-25',
        gender: 'women',
        tags: ['AI Prompt']
    },
    {
        id: 'neon-silhouette-couple-portrait-prompt',
        title: 'Neon Silhouette Couple Portrait AI Prompt',
        description: 'Cinematic electric-blue neon rim lighting silhouette portrait prompt for romantic couple photography.',
        category: 'prompts',
        image: 'prompt_images/neon_portrait_prompt.PNG',
        promptText: `Create an ultra-realistic cinematic neon silhouette portrait of a young romantic couple standing close together against a completely black background. Their bodies are illuminated only by a glowing electric-blue neon rim light, creating a dramatic outline effect while keeping most facial details in shadow. The young man stands in profile, facing the woman, with one hand casually in his pocket, wearing a classic white full-sleeve button-up shirt with sleeves rolled up and dark trousers.`,
        source: 'prompt',
        dateAdded: '2026-08-12',
        gender: 'unisex',
        tags: ['AI Prompt']
    }
];

// Category definitions with labels and emoji
const categories = [
    { id: 'all',     label: 'All',               emoji: '✨' },
    { id: 'women',   label: 'Women',             emoji: '👩' },
    { id: 'men',     label: 'Men',               emoji: '👨' },
    { id: 'kids',    label: 'Kids & Stationery',  emoji: '🎒' },
    { id: 'toys',    label: 'Toys',               emoji: '🧸' },
    { id: 'accessories', label: 'Accessories',        emoji: '🎧' },
    { id: 'prompts', label: 'Prompts',            emoji: '🎨' }
];

export { products, categories };
