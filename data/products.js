/**
 * KikiDhiv's Finds — Normalized Product Dataset
 * Schema: { id, title, description, category, image, link, source, price, tags[], promptText? }
 * price: displayed on card, updated periodically as brands adjust (affiliate marketing)
 * tags[] = decorative labels only. Source badges render from `source` field automatically.
 */
const products = [

    // ======================== #1 PINNED — NEW ARRIVAL ========================
    {
        id: 'fashion-new-01',
        title: "IndoPrimo Men's Satin Shirt Trio",
        description: 'Premium satin shirts in a trio pack — perfect for parties, formals, and casual wear. Smooth, lightweight, effortlessly stylish.',
        category: 'fashion',
        image: 'images/Party_wear_shirt.jpg',
        link: 'https://link.amazon/B03s4ReYv',
        source: 'amazon',
        price: 499,
        tags: ['Party Wear']
    },

    // ======================== FASHION ========================
    {
        id: 'fashion-18',
        title: 'Floral Printed Kurti Set',
        description: 'Complete ethnic set featuring floral printed kurti, matching pant, and dupatta. A full look, all in one go.',
        category: 'fashion',
        image: 'images/Floral Printed Kurti Set.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:4320649?p_id=610989326&ext_id=a3rmdq&utm_source=instagram_stories',
        source: 'meesho',
        price: 537,
        tags: []
    },
    {
        id: 'fashion-19',
        title: 'Floral Calf-Length Dress',
        description: 'Beautiful floral print calf-length dress. Lightweight, breezy, and made for sunny outings and weekend brunches.',
        category: 'fashion',
        image: 'images/Floral Calf-Length Dress.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:4320218?p_id=610592830&ext_id=a3j4fy&utm_source=instagram_stories',
        source: 'meesho',
        price: 290,
        tags: []
    },
    {
        id: 'fashion-01',
        title: 'Women Anarkali Kurti',
        description: 'Elegant Anarkali kurti featuring delicate embroidery details. A timeless silhouette for festivals, family events, and casual days.',
        category: 'fashion',
        image: 'images/Women Anarkali Kurti.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569530?p_id=391479571&ext_id=6h2rkj&utm_source=instagram_stories',
        source: 'meesho',
        price: 331,
        tags: []
    },
    {
        id: 'fashion-17',
        title: 'Rayon Green Flared Dress',
        description: 'Comfortable rayon calf-length flared dress with sleeves. Effortlessly chic for casual hangouts and outings.',
        category: 'fashion',
        image: 'images/Rayon Green Flared Dress.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:4320693?p_id=478735701&ext_id=7x0ytx&utm_source=instagram_stories',
        source: 'meesho',
        price: 326,
        tags: []
    },
    {
        id: 'fashion-04',
        title: 'Ethnic Top & Skirt Set',
        description: 'Cotton top and printed crepe skirt ethnic set. A curated two-piece for a put-together ethnic look without the effort.',
        category: 'fashion',
        image: 'images/Ethnic Top & Skirt Set.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=51428155&ext_id=uma7v&utm_source=instagram_stories',
        source: 'meesho',
        price: 449,
        tags: []
    },
    {
        id: 'fashion-16',
        title: 'Designer Maroon Kurti',
        description: 'Rich maroon kurti with designer detailing. Perfect for casual wear, college, and everyday ethnic looks.',
        category: 'fashion',
        image: 'images/Designer Maroon Kurti.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=959039271&ext_id=fuzjfr&utm_source=instagram_stories',
        source: 'meesho',
        price: 226,
        tags: []
    },
    {
        id: 'fashion-11',
        title: 'Wrap Skirt',
        description: 'Trending wrap-around skirt for women. Versatile style that pairs with everything from kurtis to crop tops.',
        category: 'fashion',
        image: 'images/Wrap Skirt.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=305301658&ext_id=51ro9m&utm_source=instagram_stories',
        source: 'meesho',
        price: 387,
        tags: []
    },
    {
        id: 'fashion-10',
        title: 'A-Line Denim Skirt',
        description: 'Stylish elastic waist denim skirt, below knee length. A classic wardrobe staple that never goes out of style.',
        category: 'fashion',
        image: 'images/A-Line Denim Skirt.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=382937048&ext_id=6bzo48&utm_source=instagram_stories',
        source: 'meesho',
        price: 512,
        tags: []
    },
    {
        id: 'fashion-07',
        title: 'Maternity Kaftan/Kurti',
        description: 'Stylish and comfortable maternity feeding dress. Thoughtfully designed for new and expecting moms who still want to look their best.',
        category: 'fashion',
        image: 'images/Maternity Kaftan.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=422037264&ext_id=6z9q1c&utm_source=instagram_stories',
        source: 'meesho',
        price: 364,
        tags: []
    },
    {
        id: 'fashion-12',
        title: 'Casual Women Top',
        description: "Trendy women's top for daily wear. Easy to style, comfortable to carry all day.",
        category: 'fashion',
        image: 'images/Casual Women Top.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=549428777&ext_id=9345yh&utm_source=instagram_stories',
        source: 'meesho',
        price: 344,
        tags: []
    },
    {
        id: 'fashion-13',
        title: "Men's Striped T-shirt",
        description: "Trending striped t-shirt for men. Clean lines and a modern fit that works from brunch to hangouts.",
        category: 'fashion',
        image: "images/Men's Striped T-shirt.avif",
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=570657682&ext_id=9fr6aa&utm_source=instagram_stories',
        source: 'meesho',
        price: 217,
        tags: []
    },
    {
        id: 'fashion-14',
        title: 'Cotton Cargo Pant Jeans',
        description: 'Black cotton cargo pants for men. Functional and stylish with a relaxed fit for everyday wear.',
        category: 'fashion',
        image: 'images/Cotton Cargo Pant Jeans.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=487981536&ext_id=82j4yo&utm_source=instagram_stories',
        source: 'meesho',
        price: 391,
        tags: []
    },

    // ======================== BEAUTY ========================
    {
        id: 'beauty-16',
        title: 'All-in-One Face & Eye Palette',
        description: '9 high-pigment eyeshadows paired with a highlighter and contour pan — a full face in one compact palette.',
        category: 'beauty',
        image: 'images/All-in-One Face & Eye Palette.jpg',
        link: 'https://www.amazon.in/dp/B0C28GD8X3?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=d00f05f8ac1af8c2398fd76e9685808c&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 347,
        tags: []
    },
    {
        id: 'beauty-06',
        title: 'Electric Scalp Massager',
        description: 'Rechargeable electric scalp massager for effortless home-spa relaxation. Great for stress relief, hair health, and that feel-good evening routine.',
        category: 'beauty',
        image: 'images/Electric Scalp Massager.jpg',
        link: 'https://www.amazon.in/dp/B0DT693ZPM?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=452d09e41d327e33f9c1cd767d5edf07&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 799,
        tags: []
    },
    {
        id: 'tech-02',
        title: 'Portronics Oria Magnetic Clip-On Selfie Light',
        description: 'Type-C rechargeable magnetic clip-on selfie light with mirror & stand. Adjustable brightness & colour temperature — a must-have for reels and video calls.',
        category: 'tech',
        image: 'images/Trending influencer ligh.jpg',
        link: 'https://www.amazon.in/dp/B0GLH9GBZC?&linkCode=ll2&tag=kikidhiv-21&linkId=7dcf393fbce4db59fe03a63f69b76536&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 1299,
        tags: []
    },
    {
        id: 'beauty-07',
        title: 'Clear Quartz Lip Gloss',
        description: 'Hydrating high-shine clear lip gloss with a clean, weightless feel. Glossy, non-sticky, and effortlessly pretty.',
        category: 'beauty',
        image: 'images/Clear Quartz Lip Gloss.jpg',
        link: 'https://www.amazon.in/dp/B0BV6JGSDZ?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=1eb683a0457598731ec41d23db631e9c&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 176,
        tags: []
    },
    {
        id: 'beauty-13',
        title: 'Barrier Repair Tinted Lip Balm',
        description: 'Deep cherry crimson tinted balm with SPF 50. Moisture-repair treatment that looks as good as it feels.',
        category: 'beauty',
        image: 'images/Barrier Repair Tinted Lip Balm.jpg',
        link: 'https://www.amazon.in/dp/B0DCBGMDPS?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=b7347bcfb140b2ebe2881d690960be18&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 199,
        tags: []
    },
    {
        id: 'beauty-11',
        title: 'Hypercurl Waterproof Mascara',
        description: 'High-pigment curling mascara that lifts, lengthens, and stays waterproof all day. Big lashes, zero smudge.',
        category: 'beauty',
        image: 'images/Hypercurl Waterproof Mascara.jpg',
        link: 'https://www.amazon.in/dp/B0079Z0AMM?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=fb6c03159e20debdbaa8ed6da356acea&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 246,
        tags: []
    },
    {
        id: 'beauty-17',
        title: 'Colossal Bold Liquid Liner',
        description: 'Deep carbon black precision liner for dramatic, defined eyes. Glides on sharp and stays put all day.',
        category: 'beauty',
        image: 'images/Colossal Bold Liquid Liner.jpg',
        link: 'https://www.amazon.in/dp/B07S141T2R?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=467b2b773a4831e21e58ffa7b9bdea2b&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 147,
        tags: []
    },
    {
        id: 'beauty-18',
        title: 'Dewy Finish Setting Spray',
        description: 'Refreshing finishing mist that locks in makeup with a luminous dewy glow. The final step your routine is missing.',
        category: 'beauty',
        image: 'images/Dewy Finish Setting Spray.jpg',
        link: 'https://www.amazon.in/dp/B0CCJP6Y17?&linkCode=ll2&tag=kikidhiv-21&linkId=298fa6a7429b5f1e40afa1f7a414789f&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 438,
        tags: []
    },
    {
        id: 'beauty-10',
        title: 'Photo Perfect HD Face Primer',
        description: 'Matte pore-blurring gel base that smooths skin before foundation. Certified 100% vegan.',
        category: 'beauty',
        image: 'images/Photo Perfect HD Face Primer.jpg',
        link: 'https://www.amazon.in/dp/B07SDQJVQD?&linkCode=ll2&tag=kikidhiv-21&linkId=11d190bf9d059e37e11a6b493fe83ee8&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 277,
        tags: []
    },
    {
        id: 'beauty-14',
        title: 'Waterproof Liquid Foundation',
        description: 'Long-wear breathable waterproof foundation for a seamless, skin-like base that lasts through the day.',
        category: 'beauty',
        image: 'images/Waterproof Liquid Foundation.jpg',
        link: 'https://www.amazon.in/dp/B09GFZRQ4P?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=be5c36ee51497a94ba9ce3aa38b178aa&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 488,
        tags: []
    },
    {
        id: 'beauty-15',
        title: 'Waterproof Matte Concealer',
        description: 'Full-coverage matte concealer that erases dark circles, spots, and imperfections — and stays put all day.',
        category: 'beauty',
        image: 'images/Waterproof Matte Concealer.jpg',
        link: 'https://www.amazon.in/dp/B09GFZ5VD4?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=5df91f7a7847de339094ca6fc44a141b&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 413,
        tags: []
    },
    {
        id: 'beauty-12',
        title: 'Pure Skin Mattifying Compact',
        description: 'Oil-free setting compact powder with SPF 15. Keeps shine at bay and your base looking fresh all day.',
        category: 'beauty',
        image: 'images/Pure Skin Mattifying Compact.jpg',
        link: 'https://www.amazon.in/dp/B07D2Q52KF?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=a1ffdffec7400d5eb3717cc8a172355e&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 207,
        tags: []
    },
    {
        id: 'beauty-09',
        title: 'Blender Sponge & Puff Kit',
        description: 'Premium reusable beauty sponge set with a specialised cleanser. Flawless blending, easy to clean.',
        category: 'beauty',
        image: 'images/Blender Sponge & Puff Kit.jpg',
        link: 'https://www.amazon.in/dp/B0G7FKJJDC?&linkCode=ll2&tag=kikidhiv-21&linkId=4bf71ba8c981afbb506a80a8035bad9c&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 139,
        tags: []
    },
    {
        id: 'beauty-19',
        title: 'Total Repair 5 Hair Serum',
        description: 'Smoothing hair serum that instantly tames frizz and seals split ends. One pump for visibly healthier-looking hair.',
        category: 'beauty',
        image: 'images/Total Repair 5 Hair Serum.jpg',
        link: 'https://www.amazon.in/dp/B006LXC4SG?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=b227e0bbf873a391e06563a4e01b8339&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 219,
        tags: []
    },
    {
        id: 'beauty-08',
        title: 'Green Tea Makeup Wipes',
        description: 'Soft cotton wipes infused with organic green tea and aloe vera. Gentle, refreshing, and kind to skin.',
        category: 'beauty',
        image: 'images/Green Tea Makeup Wipes.jpg',
        link: 'https://www.amazon.in/dp/B0CVS2HFKJ?&linkCode=ll2&tag=kikidhiv-21&linkId=1d563f8f88952b83260d293df4109f3d&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 107,
        tags: []
    },
    {
        id: 'beauty-05',
        title: 'AHA BHA Underarm Roll-On',
        description: 'Alcohol-free floral deodorant with AHA & BHA to gradually clarify and smooth underarm skin.',
        category: 'beauty',
        image: 'images/AHA BHA Underarm Roll-On.jpg',
        link: 'https://www.amazon.in/dp/B0DVSNG7NC?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=549b0bccb31779ce8d405b3b0ffa4f5b&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 399,
        tags: []
    },
    {
        id: 'beauty-02',
        title: 'Nivea Women Pearl & Beauty Roll-On',
        description: 'Even-toned and smooth underarm roll-on with a 50ml radiance formula for beautiful underarms.',
        category: 'beauty',
        image: 'images/Nivea Women Pearl & Beauty Roll-On.jpg',
        link: 'https://www.amazon.in/dp/B09Y58XSZQ?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=a67afad7bd1ecb0e2506374d7b8af5bf&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 117,
        tags: []
    },
    {
        id: 'beauty-03',
        title: 'NIVEA MEN Deep Impact Roll-On',
        description: 'Long-lasting freshness with activated black carbon for powerful body odour control.',
        category: 'beauty',
        image: 'images/NIVEA MEN Deep Impact Roll-On.jpg',
        link: 'https://www.amazon.in/dp/B07D9GF1NW?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=d602da392d70c816108d8e6bc8bffacf&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 137,
        tags: []
    },
    {
        id: 'beauty-01',
        title: 'Invisible Earlobe Support Patches',
        description: 'Invisible support patches that keep heavy earrings in place all day, comfortably and securely.',
        category: 'beauty',
        image: 'images/Invisible Earlobe Support Patches.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:11562601?p_id=844886305&ext_id=dz0ug1&utm_source=instagram_stories',
        source: 'meesho',
        price: 68,
        tags: []
    },

    // ======================== TOYS ========================
    {
        id: 'toys-01',
        title: 'Unicorn Slide with Basketball',
        description: 'Dreamy unicorn-themed indoor/outdoor slide setup for kids aged 2–7. Big fun, adorable design.',
        category: 'toys',
        image: 'images/Unicorn Slide with Basketball.jpg',
        link: 'https://www.amazon.in/dp/B0G49DZHWK?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=89cfe7419b5338e9c0fbcf68562371d1&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 2899,
        tags: []
    },
    {
        id: 'toys-03',
        title: 'Rechargeable Tornado Stunt Car',
        description: 'Remote-controlled stunt car with 360° rotation and playful built-in music. Hours of high-energy play.',
        category: 'toys',
        image: 'images/Rechargeable Tornado Stunt Car.jpg',
        link: 'https://amzn.to/4e5BbxI',
        source: 'amazon',
        price: 669,
        tags: []
    },
    {
        id: 'toys-02',
        title: 'Dancing Cactus Recording Toy',
        description: 'Interactive cactus that records and repeats whatever you say — with dancing moves and built-in LEDs.',
        category: 'toys',
        image: 'images/Dancing Cactus Recording Toy.jpg',
        link: 'https://www.amazon.in/dp/B09QCYZT4S?&linkCode=ll2&tag=kikidhiv-21&linkId=5e6c00dd2cdddf73adac337fa8e7eab9&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 499,
        tags: []
    },
    {
        id: 'toys-04',
        title: 'Pop It Fidget Toy Pack',
        description: 'Set of 2 silicone pop-it sensory toys — a dinosaur and a unicorn. Simple, satisfying, and endlessly fun.',
        category: 'toys',
        image: 'images/Pop It Fidget Toy Pack.jpg',
        link: 'https://www.amazon.in/dp/B0DTV7QTFB?&linkCode=ll2&tag=kikidhiv-21&linkId=cf167a731b9675ea6ff9f0fbb3a8bd7f&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 195,
        tags: []
    },

    // ======================== KIDS & STATIONERY ========================
    {
        id: 'kids-05',
        title: 'Spiderman Magnetic Pencil Box',
        description: 'Fun Spiderman magnetic pencil box — durable, spacious, and guaranteed to be the coolest in class.',
        category: 'kids',
        image: 'images/Spiderman Pencil box.jpg',
        link: 'https://www.amazon.in/dp/B0GKVGKSR8?&linkCode=ll2&tag=kikidhiv-21&linkId=e9cd0834e9aba81a6251856a617412dd&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 259,
        tags: []
    },
    {
        id: 'kids-06',
        title: 'Spiderman 2B Pencils (20 Pack)',
        description: 'High-quality 2B pencils with fun Spiderman graphics. Great for writing, drawing, and making school feel exciting.',
        category: 'kids',
        image: 'images/Spiderman 2B Pencils.jpg',
        link: 'https://www.amazon.in/dp/B0FDB91QMS?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=99a0eb97acf817cb0b6e98a02d300813&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 200,
        tags: []
    },
    {
        id: 'kids-03',
        title: 'STRONG LIFE Tiffin Lunch Bag',
        description: 'Durable, spacious, and insulated lunch bag to keep meals warm right until lunchtime.',
        category: 'kids',
        image: 'images/STRONG LIFE Tiffin Lunch Bag.jpg',
        link: 'https://www.amazon.in/dp/B0GRJ4GCSG?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=e885dc09ae1d96e33911301d41e47dc4&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 249,
        tags: []
    },
    {
        id: 'kids-01',
        title: 'AMAZARA Baby Corner Guards',
        description: 'Pre-taped safety edge protectors with strong 3M adhesive — effective childproofing you can trust.',
        category: 'kids',
        image: 'images/Amazara Baby Corner Guards.jpg',
        link: 'https://www.amazon.in/dp/B07NSQFTLH?&linkCode=ll2&tag=kikidhiv-21&linkId=14c89bd1243eb02a686de4cdec6360a3&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 199,
        tags: []
    },

    // ======================== TECH ========================
    {
        id: 'tech-01',
        title: '20-in-1 Device Cleaning Kit',
        description: 'Complete cleaning toolkit for keyboards, screens, charging ports, and all your devices. One kit to keep everything spotless.',
        category: 'tech',
        image: 'images/20-in-1 Device Cleaning Kit.jpg',
        link: 'https://www.amazon.in/dp/B0F3P1PZ9D?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=8368fae06fb5bd8a7970e4b151d4625d&ref_=as_li_ss_tl',
        source: 'amazon',
        price: 479,
        tags: []
    },

    // ======================== PROMPTS ========================
    {
        id: 'prompts-01',
        title: 'Neon Portrait Prompt',
        description: 'Ultra-realistic cinematic neon silhouette portrait for a young romantic couple against a black background with electric-blue rim light.',
        category: 'prompts',
        image: 'prompt_images/neon_portrait_prompt.PNG',
        link: '/prompt_txt_files/neon_portrait_prompt.txt',
        source: 'prompt',
        promptText: '--ar 9:16 --v 6.1 --style raw --no blur,distortion,deformation\n\nHyper-realistic 3-panel cinematic portrait, vertical 9:16 aspect ratio, 8K resolution. A young romantic couple standing intimately together against a pure black background. The scene is dramatically lit with electric-blue rim lighting that traces their silhouettes with a neon glow effect. The rim light creates a stunning halo effect around both figures. The lighting is moody and atmospheric with volumetric light beams. The couple is wearing elegant evening attire. The portrait has a cinematic, dramatic quality reminiscent of high-end fashion photography. Ultra-detailed skin texture, natural skin tones, soft focus background, professional color grading. Preserve exact face and body features exactly as described. Sharp focus on eyes, studio-quality lighting setup with blue LED accent lights.',
        tags: []
    },
    {
        id: 'prompt-red-saree',
        title: 'Red Saree Portrait Prompt',
        description: 'Hyper-realistic 3-panel cinematic portrait, 8K, vertical 9:16. Preserve exact face and body features.',
        category: 'prompts',
        image: 'prompt_images/Red_saree_prompt.PNG',
        link: 'prompt_txt_files/Red_saree_prompt.txt',
        source: 'prompt',
        promptText: '--ar 9:16 --v 6.1 --style raw --no blur,distortion,deformation\n\nHyper-realistic 3-panel cinematic portrait, vertical 9:16 aspect ratio, 8K resolution. A stunning young Indian woman wearing a vibrant red traditional saree with golden border work. She is posing gracefully with traditional hand gestures (mudra). The background features a subtle Indic temple or Heritage palace interior with warm ambient lighting. The portrait showcases intricate details of the saree fabric, gold jewelry, and traditional bindi. The lighting is soft and flattering with warm golden hour tones. Professional fashion photography style with rich colors and sharp details. Ultra-detailed fabric texture, realistic skin tones, perfect composition. The subject has a confident, elegant expression. Preserve exact face and body features exactly as described.',
        tags: []
    }
];

// Category definitions with labels and emoji
const categories = [
    { id: 'all',     label: 'All',               emoji: '✨' },
    { id: 'fashion', label: 'Fashion',            emoji: '👗' },
    { id: 'beauty',  label: 'Beauty',             emoji: '💄' },
    { id: 'kids',    label: 'Kids & Stationery',  emoji: '🎒' },
    { id: 'toys',    label: 'Toys',               emoji: '🧸' },
    { id: 'tech',    label: 'Tech',               emoji: '💻' },
    { id: 'prompts', label: 'Prompts',            emoji: '🎨' }
];

export { products, categories };
