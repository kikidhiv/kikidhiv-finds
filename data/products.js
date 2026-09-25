/**
 * KikiDhiv's Finds — Normalized Product Dataset
 * All product data extracted from the original inline HTML.
 * Schema: { id, title, description, category, image, link, source, tags[] }
 */
const products = [
    // ======================== FEATURED / NEW ARRIVALS ========================
    {
        id: 'tech-02',
        title: 'Portronics Oria Magnetic Clip-On Selfie Light',
        description: 'Type-C rechargeable magnetic clip-on selfie light with mirror & stand. Adjustable brightness & color temperature, multi-angle positioning. Includes metal ring for selfies, video calls & reels.',
        category: 'tech',
        image: 'images/Trending influencer ligh.jpg',
        link: 'https://www.amazon.in/dp/B0GLH9GBZC?&linkCode=ll2&tag=kikidhiv-21&linkId=7dcf393fbce4db59fe03a63f69b76536&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: ['Worth It', 'Content Creator']
    },

    // ======================== BEAUTY ========================
    {
        id: 'beauty-01',
        title: 'Invisible Earlobe Support Patches',
        description: 'Invisible earlobe support patches designed to help keep earrings in place comfortably.',
        category: 'beauty',
        image: 'images/Invisible Earlobe Support Patches.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:11562601?p_id=844886305&ext_id=dz0ug1&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'beauty-02',
        title: 'Nivea Women Pearl & Beauty Roll-On',
        description: 'Even-toned, smooth & beautiful underarms. 50ml radiance formula.',
        category: 'beauty',
        image: 'images/Nivea Women Pearl & Beauty Roll-On.jpg',
        link: 'https://www.amazon.in/dp/B09Y58XSZQ?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=a67afad7bd1ecb0e2506374d7b8af5bf&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: ['Highly Recommend', 'Daily Use']
    },
    {
        id: 'beauty-03',
        title: 'NIVEA MEN Deep Impact Roll-On',
        description: 'Long-lasting freshness with black carbon for effective body odour control.',
        category: 'beauty',
        image: 'images/NIVEA MEN Deep Impact Roll-On.jpg',
        link: 'https://www.amazon.in/dp/B07D9GF1NW?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=d602da392d70c816108d8e6bc8bffacf&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: ['Highly Recommend', 'Daily Use']
    },
    {
        id: 'beauty-04',
        title: 'TrendVave Makeup Storage Box',
        description: 'LED Mirror, adjustable sections & rechargeable light. Ideal for travel.',
        category: 'beauty',
        image: 'images/TrendVave Makeup Box.jpg',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569411?p_id=910441556&ext_id=f21x78&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'beauty-05',
        title: 'AHA BHA Underarm Roll-On',
        description: 'Alcohol-free fresh floral deodorant focused on clarifying skin textures smoothly.',
        category: 'beauty',
        image: 'images/AHA BHA Underarm Roll-On.jpg',
        link: 'https://www.amazon.in/dp/B0DVSNG7NC?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=549b0bccb31779ce8d405b3b0ffa4f5b&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: ['Highly Recommend', 'Daily Use']
    },
    {
        id: 'beauty-06',
        title: 'Electric Scalp Massager',
        description: 'Relaxation massage tool tailored for easy home-spa routines and grooming care.',
        category: 'beauty',
        image: 'images/Electric Scalp Massager.jpg',
        link: 'https://www.amazon.in/dp/B0DT693ZPM?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=452d09e41d327e33f9c1cd767d5edf07&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: ['Worth It']
    },
    {
        id: 'beauty-07',
        title: 'Clear Quartz Lip Gloss',
        description: 'Hydrating high-shine clear lip gloss formulation with a clean, weightless feel.',
        category: 'beauty',
        image: 'images/Clear Quartz Lip Gloss.jpg',
        link: 'https://www.amazon.in/dp/B0BV6JGSDZ?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=1eb683a0457598731ec41d23db631e9c&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },
    {
        id: 'beauty-08',
        title: 'Green Tea Makeup Wipes',
        description: 'Soft cotton refreshing wipes infused with organic green tea extracts and aloe vera.',
        category: 'beauty',
        image: 'images/Green Tea Makeup Wipes.jpg',
        link: 'https://www.amazon.in/dp/B0CVS2HFKJ?&linkCode=ll2&tag=kikidhiv-21&linkId=1d563f8f88952b83260d293df4109f3d&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },
    {
        id: 'beauty-09',
        title: 'Blender Sponge & Puff Kit',
        description: 'Premium reusable beauty sponge array complete with a specialized base cleanser.',
        category: 'beauty',
        image: 'images/Blender Sponge & Puff Kit.jpg',
        link: 'https://www.amazon.in/dp/B0G7FKJJDC?&linkCode=ll2&tag=kikidhiv-21&linkId=4bf71ba8c981afbb506a80a8035bad9c&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },
    {
        id: 'beauty-10',
        title: 'Photo Perfect HD Face Primer',
        description: 'Matte pore-blurring foundation gel base. Certified 100% vegan.',
        category: 'beauty',
        image: 'images/Photo Perfect HD Face Primer.jpg',
        link: 'https://www.amazon.in/dp/B07SDQJVQD?&linkCode=ll2&tag=kikidhiv-21&linkId=11d190bf9d059e37e11a6b493fe83ee8&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },
    {
        id: 'beauty-11',
        title: 'Hypercurl Waterproof Mascara',
        description: 'High-pigment curling definition that stays completely waterproof all day long.',
        category: 'beauty',
        image: 'images/Hypercurl Waterproof Mascara.jpg',
        link: 'https://www.amazon.in/dp/B0079Z0AMM?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=fb6c03159e20debdbaa8ed6da356acea&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },
    {
        id: 'beauty-12',
        title: 'Pure Skin Mattifying Compact',
        description: 'Oil-free setting compact face powder formulated with protective SPF 15 shield.',
        category: 'beauty',
        image: 'images/Pure Skin Mattifying Compact.jpg',
        link: 'https://www.amazon.in/dp/B07D2Q52KF?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=a1ffdffec7400d5eb3717cc8a172355e&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },
    {
        id: 'beauty-13',
        title: 'Barrier Repair Tinted Lip Balm',
        description: 'Deep cherry crimson moisture repair treatment packed with intense SPF 50 filters.',
        category: 'beauty',
        image: 'images/Barrier Repair Tinted Lip Balm.jpg',
        link: 'https://www.amazon.in/dp/B0DCBGMDPS?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=b7347bcfb140b2ebe2881d690960be18&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },
    {
        id: 'beauty-14',
        title: 'Waterproof Liquid Foundation',
        description: 'Long-wear breathable waterproof liquid formulation delivering a seamless base finish.',
        category: 'beauty',
        image: 'images/Waterproof Liquid Foundation.jpg',
        link: 'https://www.amazon.in/dp/B09GFZRQ4P?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=be5c36ee51497a94ba9ce3aa38b178aa&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },
    {
        id: 'beauty-15',
        title: 'Waterproof Matte Concealer',
        description: 'Full coverage matte treatment blend covering dark circles and spots perfectly.',
        category: 'beauty',
        image: 'images/Waterproof Matte Concealer.jpg',
        link: 'https://www.amazon.in/dp/B09GFZ5VD4?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=5df91f7a7847de339094ca6fc44a141b&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },
    {
        id: 'beauty-16',
        title: 'All-in-One Face & Eye Palette',
        description: 'Features 9 high-pigment eyeshadow segments matching highlighter and contour pans.',
        category: 'beauty',
        image: 'images/All-in-One Face & Eye Palette.jpg',
        link: 'https://www.amazon.in/dp/B0C28GD8X3?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=d00f05f8ac1af8c2398fd76e9685808c&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },
    {
        id: 'beauty-17',
        title: 'Colossal Bold Liquid Liner',
        description: 'Deep dramatic carbon black glide-on definition structure application.',
        category: 'beauty',
        image: 'images/Colossal Bold Liquid Liner.jpg',
        link: 'https://www.amazon.in/dp/B07S141T2R?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=467b2b773a4831e21e58ffa7b9bdea2b&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },
    {
        id: 'beauty-18',
        title: 'Dewy Finish Setting Spray',
        description: 'Refreshing finishing lock mist securing a luminous dewy finish setting seal look.',
        category: 'beauty',
        image: 'images/Dewy Finish Setting Spray.jpg',
        link: 'https://www.amazon.in/dp/B0CCJP6Y17?&linkCode=ll2&tag=kikidhiv-21&linkId=298fa6a7429b5f1e40afa1f7a414789f&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },
    {
        id: 'beauty-19',
        title: 'Total Repair 5 Hair Serum',
        description: 'Smooth protective polishing fluid smoothing down frizz split strands immediately.',
        category: 'beauty',
        image: 'images/Total Repair 5 Hair Serum.jpg',
        link: 'https://www.amazon.in/dp/B006LXC4SG?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=b227e0bbf873a391e06563a4e01b8339&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },

    // ======================== FASHION ========================
    {
        id: 'fashion-01',
        title: 'Women Anarkali Kurti',
        description: 'Elegant Anarkali kurti featuring delicate embroidery details.',
        category: 'fashion',
        image: 'images/Women Anarkali Kurti.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569530?p_id=391479571&ext_id=6h2rkj&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-02',
        title: 'Premium BodyShaper',
        description: 'Perfect fit body shaper for saree and ethnic wear.',
        category: 'fashion',
        image: 'images/BodyShaper.jpg',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569530?p_id=264154657&ext_id=4d9r1d&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-03',
        title: 'Printed White Crepe Dress',
        description: 'Stylish and comfortable printed crepe fabric dress.',
        category: 'fashion',
        image: 'images/Printed White Crepe Dress.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=3330319&ext_id=1zdov&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-04',
        title: 'Ethnic Top & Skirt Set',
        description: 'Cotton top and printed crepe skirt ethnic set.',
        category: 'fashion',
        image: 'images/Ethnic Top & Skirt Set.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=51428155&ext_id=uma7v&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-05',
        title: 'Zikzak Pattern Dress',
        description: 'Modern zigzag patterned dress for women.',
        category: 'fashion',
        image: 'images/Zikzak Dress.jpg',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=280106870&ext_id=4mrnue&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-06',
        title: 'Party Wear Kurta Set',
        description: 'Beautiful printed party wear kurta set for women.',
        category: 'fashion',
        image: 'images/Party Wear Kurta Set.jpg',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=337952359&ext_id=5l7hpj&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-07',
        title: 'Maternity Kaftan/Kurti',
        description: 'Stylish and comfortable maternity feeding dress.',
        category: 'fashion',
        image: 'images/Maternity Kaftan.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=422037264&ext_id=6z9q1c&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-08',
        title: 'Ready to Wear Saree',
        description: 'Hassle-free ready-to-wear party saree.',
        category: 'fashion',
        image: 'images/Ready to Wear Saree.jpg',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=433792288&ext_id=769o9s&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-09',
        title: 'Sweetheart Peplum Top',
        description: 'Chic sweetheart neck puff sleeve top.',
        category: 'fashion',
        image: 'images/Peplum Top.jpg',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=315977607&ext_id=584hvr&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-10',
        title: 'A-Line Denim Skirt',
        description: 'Stylish elastic waist denim skirt, below knee length.',
        category: 'fashion',
        image: 'images/A-Line Denim Skirt.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=382937048&ext_id=6bzo48&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-11',
        title: 'Wrap Skirt',
        description: 'Trending wrap-around skirt for women.',
        category: 'fashion',
        image: 'images/Wrap Skirt.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=305301658&ext_id=51ro9m&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-12',
        title: 'Casual Women Top',
        description: "Trendy women's top for daily wear.",
        category: 'fashion',
        image: 'images/Casual Women Top.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=549428777&ext_id=9345yh&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-13',
        title: "Men's Striped T-shirt",
        description: 'Trending striped t-shirt for men.',
        category: 'fashion',
        image: "images/Men's Striped T-shirt.avif",
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=570657682&ext_id=9fr6aa&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-14',
        title: 'Cotton Cargo Pant Jeans',
        description: 'Black cotton cargo pants for men.',
        category: 'fashion',
        image: 'images/Cotton Cargo Pant Jeans.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=487981536&ext_id=82j4yo&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-15',
        title: "Men's Casual T-Shirt",
        description: 'Regular fit, soft & breathable cotton blend t-shirt.',
        category: 'fashion',
        image: "images/Men's Casual T-Shirt.jpg",
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=567079372&ext_id=9dmh8s&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-16',
        title: 'Designer Maroon Kurti',
        description: 'Perfect for casual and college wear.',
        category: 'fashion',
        image: 'images/Designer Maroon Kurti.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:5569777?p_id=959039271&ext_id=fuzjfr&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-17',
        title: 'Rayon Green Flared Dress',
        description: 'Comfortable rayon fabric, calf-length flared dress with sleeves.',
        category: 'fashion',
        image: 'images/Rayon Green Flared Dress.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:4320693?p_id=478735701&ext_id=7x0ytx&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-18',
        title: 'Floral Printed Kurti Set',
        description: 'Complete ethnic set featuring floral printed kurti, matching pant, and dupatta.',
        category: 'fashion',
        image: 'images/Floral Printed Kurti Set.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:4320649?p_id=610989326&ext_id=a3rmdq&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },
    {
        id: 'fashion-19',
        title: 'Floral Calf-Length Dress',
        description: 'Beautiful floral print calf-length dress. Lightweight and breezy.',
        category: 'fashion',
        image: 'images/Floral Calf-Length Dress.avif',
        link: 'https://www.meesho.com/af_invite/47638213:instagram_stories:4320218?p_id=610592830&ext_id=a3j4fy&utm_source=instagram_stories',
        source: 'meesho',
        tags: []
    },

    // ======================== KIDS & STATIONERY ========================
    {
        id: 'kids-01',
        title: 'AMAZARA Baby Corner Guards',
        description: 'Pre-taped safety edge protectors with strong 3M adhesive for effective childproofing.',
        category: 'kids',
        image: 'images/Amazara Baby Corner Guards.jpg',
        link: 'https://www.amazon.in/dp/B07NSQFTLH?&linkCode=ll2&tag=kikidhiv-21&linkId=14c89bd1243eb02a686de4cdec6360a3&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: ['Highly Recommend']
    },
    {
        id: 'kids-02',
        title: 'Oliveware Leak-Proof Lunch Box',
        description: 'Spill-proof lunch box perfect for school. Keeps food fresh and secure.',
        category: 'kids',
        image: 'images/Oliveware Leak-Proof Lunch Box.jpg',
        link: 'https://www.amazon.in/dp/B0DBZTP8NL?&linkCode=ll2&tag=kikidhiv-21&linkId=92c41b6da4b556c4aea7dc8e4924ca2f&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: ['Daily Use']
    },
    {
        id: 'kids-03',
        title: 'STRONG LIFE Tiffin Lunch Bag',
        description: 'Durable, spacious, and insulated to keep meals warm until lunchtime.',
        category: 'kids',
        image: 'images/STRONG LIFE Tiffin Lunch Bag.jpg',
        link: 'https://www.amazon.in/dp/B0GRJ4GCSG?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=e885dc09ae1d96e33911301d41e47dc4&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: ['Daily Use']
    },
    {
        id: 'kids-04',
        title: 'ALVERO Leak-Proof 1L Bottle',
        description: 'One-liter leak-proof water bottle. BPA-free and perfect for school hydration.',
        category: 'kids',
        image: 'images/ALVERO Leak-Proof 1L Bottle.jpg',
        link: 'https://www.amazon.in/dp/B0H1JQG91M?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=e1a716ce25aaada5932e0b9628a51015&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: ['Daily Use']
    },
    {
        id: 'kids-05',
        title: 'Spiderman Magnetic Pencil Box',
        description: 'Fun themed magnetic pencil box. Durable and spacious for all stationery needs.',
        category: 'kids',
        image: 'images/Spiderman Pencil box.jpg',
        link: 'https://www.amazon.in/dp/B0GKVGKSR8?&linkCode=ll2&tag=kikidhiv-21&linkId=e9cd0834e9aba81a6251856a617412dd&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: ['Daily Use']
    },
    {
        id: 'kids-06',
        title: 'Spiderman 2B Pencils (20 Pack)',
        description: 'High-quality 2B pencils with fun graphics. Perfect for writing and drawing.',
        category: 'kids',
        image: 'images/Spiderman 2B Pencils.jpg',
        link: 'https://www.amazon.in/dp/B0FDB91QMS?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=99a0eb97acf817cb0b6e98a02d300813&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },

    // ======================== TOYS ========================
    {
        id: 'toys-01',
        title: 'Unicorn Slide with Basketball',
        description: 'Adorable indoor/outdoor theme slide setup suitable for kids aged 2-7 years.',
        category: 'toys',
        image: 'images/Unicorn Slide with Basketball.jpg',
        link: 'https://www.amazon.in/dp/B0G49DZHWK?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=89cfe7419b5338e9c0fbcf68562371d1&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: ['Worth It']
    },
    {
        id: 'toys-02',
        title: 'Dancing Cactus Recording Toy',
        description: 'Interactive companion that records and repeats voice prompts with built-in LEDs.',
        category: 'toys',
        image: 'images/Dancing Cactus Recording Toy.jpg',
        link: 'https://www.amazon.in/dp/B09QCYZT4S?&linkCode=ll2&tag=kikidhiv-21&linkId=5e6c00dd2cdddf73adac337fa8e7eab9&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },
    {
        id: 'toys-03',
        title: 'Rechargeable Tornado Stunt Car',
        description: 'Remote-controlled stunt car with 360° rotation capabilities and playful music tracks.',
        category: 'toys',
        image: 'images/Rechargeable Tornado Stunt Car.jpg',
        link: 'https://amzn.to/4e5BbxI',
        source: 'amazon',
        tags: []
    },
    {
        id: 'toys-04',
        title: 'Pop It Fidget Toy Pack',
        description: 'Set of 2 silicone pop-it sensory toys shaped like a dinosaur and a unicorn.',
        category: 'toys',
        image: 'images/Pop It Fidget Toy Pack.jpg',
        link: 'https://www.amazon.in/dp/B0DTV7QTFB?&linkCode=ll2&tag=kikidhiv-21&linkId=cf167a731b9675ea6ff9f0fbb3a8bd7f&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: []
    },

    // ======================== TECH ========================
    {
        id: 'tech-01',
        title: '20-in-1 Device Cleaning Kit',
        description: 'Complete toolkit supporting keyboards, displays, charging docks, and general hardware logs.',
        category: 'tech',
        image: 'images/20-in-1 Device Cleaning Kit.jpg',
        link: 'https://www.amazon.in/dp/B0F3P1PZ9D?th=1&linkCode=ll2&tag=kikidhiv-21&linkId=8368fae06fb5bd8a7970e4b151d4625d&ref_=as_li_ss_tl',
        source: 'amazon',
        tags: ['Worth It']
    },

    // ======================== PROMPTS ========================
    {
        id: 'prompts-01',
        title: 'Neon Portrait Prompt',
        description: 'Ultra-realistic cinematic neon silhouette portrait prompt for a young romantic couple against a black background with electric-blue rim light.',
        category: 'prompts',
        image: 'prompt_images/neon_portrait_prompt.PNG',
        link: '/prompt_txt_files/neon_portrait_prompt.txt',
        source: 'prompt',
        tags: ['Prompt', 'AI Art']
    }
];

// Category definitions with labels and emoji
const categories = [
    { id: 'all', label: 'All', emoji: '✨' },
    { id: 'fashion', label: 'Fashion', emoji: '👗' },
    { id: 'beauty', label: 'Beauty', emoji: '💄' },
    { id: 'kids', label: 'Kids & Stationery', emoji: '🎒' },
    { id: 'toys', label: 'Toys', emoji: '🧸' },
    { id: 'tech', label: 'Tech', emoji: '💻' },
    { id: 'prompts', label: 'Prompts', emoji: '🎨' }
];

export { products, categories };
