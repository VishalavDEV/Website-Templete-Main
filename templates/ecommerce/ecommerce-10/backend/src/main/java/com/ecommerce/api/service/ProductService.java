package com.ecommerce.api.service;

import com.ecommerce.api.model.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private final List<Product> products = new ArrayList<>();

    public ProductService() {
        initializeProducts();
    }

    private void initializeProducts() {
        // Categories: Ladies, Gents, Girls, Boys, Babies, Accessories, Footwear, Bags, Watches
        
        // ------------------ LADIES (8) ------------------
        products.add(new Product("L001", "Lavender Dream Maxi Dress", "Ladies", "women", 3499.00, 15,
                4.8, 120, Arrays.asList("XS", "S", "M", "L", "XL"), Arrays.asList("Lavender", "Soft Purple", "White"),
                "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=80",
                "A premium silk maxi dress designed for evening elegance. Flowy fabric and beautiful soft purple hues.",
                "LuxeWeave", 45, true, true, false));

        products.add(new Product("L002", "Pastel Lilac Silk Saree", "Ladies", "women", 5999.00, 10,
                4.9, 85, Arrays.asList("Free Size"), Arrays.asList("Lilac", "Gold-Purple"),
                "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80",
                "Traditionally handwoven premium silk saree with delicate gold border detailing and a gorgeous lilac hue.",
                "HeritageSutra", 12, true, false, true));

        products.add(new Product("L003", "Elegant Kurti Set", "Ladies", "women", 2499.00, 20,
                4.5, 98, Arrays.asList("S", "M", "L", "XL"), Arrays.asList("Lavender", "Soft Pink"),
                "https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&auto=format&fit=crop&q=80",
                "Premium cotton lavender kurti set with matching trousers and an organza dupatta.",
                "AuraChic", 34, false, false, true));

        products.add(new Product("L004", "Chiffon Pleated Wrap Top", "Ladies", "women", 1299.00, 5,
                4.2, 45, Arrays.asList("XS", "S", "M", "L"), Arrays.asList("Soft Lilac", "Creamy White", "Amethyst"),
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
                "Lightweight chiffon wrap top featuring a flattering pleated waist and adjustable waist tie.",
                "UrbanChic", 60, false, true, false));

        products.add(new Product("L005", "Slim Fit High Rise Jeans", "Ladies", "women", 1999.00, 0,
                4.4, 210, Arrays.asList("26", "28", "30", "32"), Arrays.asList("Indigo Blue", "Pastel Violet"),
                "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80",
                "High-rise skinny stretch denim designed to fit snugly. Sturdy construction for all-season wear.",
                "BlueCore", 110, false, false, false));

        products.add(new Product("L006", "Soft Cashmere Lavender Sweater", "Ladies", "women", 4499.00, 25,
                4.7, 72, Arrays.asList("S", "M", "L", "XL"), Arrays.asList("Lavender", "Cloud Gray"),
                "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=80",
                "Spun from ultra-soft Mongolian cashmere, this sweater is warm, lightweight, and colored in pastel purple.",
                "LuxeWeave", 25, false, false, true));

        products.add(new Product("L007", "Boho Lavender Summer Dress", "Ladies", "women", 2299.00, 15,
                4.6, 56, Arrays.asList("S", "M", "L"), Arrays.asList("Lavender Floral", "White Floral"),
                "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=80",
                "Casual bohemian tiered dress featuring a soft lavender floral print. Ideal for sunny day outs.",
                "MeadowGlow", 40, true, true, false));

        products.add(new Product("L008", "Premium Lavender Denim Jacket", "Ladies", "women", 2799.00, 30,
                4.5, 39, Arrays.asList("XS", "S", "M", "L"), Arrays.asList("Faded Lavender", "Slate Purple"),
                "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80",
                "Classic distressed denim jacket custom dyed in light lavender wash. Buttons finished in antique silver.",
                "IndigoDenim", 18, false, false, true));

        // ------------------ GENTS (8) ------------------
        products.add(new Product("M001", "Urban Techwear Jacket", "Gents", "men", 4999.00, 10,
                4.7, 65, Arrays.asList("M", "L", "XL", "XXL"), Arrays.asList("Dark Purple", "Midnight Black"),
                "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&auto=format&fit=crop&q=80",
                "Water-resistant utility techwear jacket featuring multi-pocket layout, custom straps, and purple details.",
                "Veloce", 50, true, true, true));

        products.add(new Product("M002", "Premium Linen Lavender Shirt", "Gents", "men", 1499.00, 15,
                4.4, 92, Arrays.asList("S", "M", "L", "XL"), Arrays.asList("Lavender", "Pure White", "Soft Pink"),
                "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
                "Breathable linen-cotton blend shirt. Styled with clean collar lines and custom wood buttons.",
                "AuraSport", 75, true, false, false));

        products.add(new Product("M003", "Classic Fit Denim Jeans", "Gents", "men", 2199.00, 0,
                4.3, 180, Arrays.asList("30", "32", "34", "36"), Arrays.asList("Classic Indigo", "Wash Black"),
                "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=80",
                "Standard straight-cut denim jeans constructed from heavy raw cotton weave.",
                "BlueCore", 90, false, false, false));

        products.add(new Product("M004", "Slim Fit Lavender Polo", "Gents", "men", 1299.00, 20,
                4.6, 114, Arrays.asList("S", "M", "L", "XL"), Arrays.asList("Pastel Purple", "Deep Violet", "Heather Gray"),
                "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80",
                "Durable piqué cotton polo shirt. Embroidered logo detailing, soft rib cuffs, lavender hue.",
                "AuraSport", 120, false, true, true));

        products.add(new Product("M005", "Warm Knit Purple Cardigan", "Gents", "men", 2499.00, 25,
                4.8, 38, Arrays.asList("M", "L", "XL"), Arrays.asList("Plum Purple", "Navy Blue"),
                "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80",
                "Heavy-knit chunky cardigan with a soft shawl collar. Premium blend of lamb wool and acrylic.",
                "LuxeWeave", 30, false, false, true));

        products.add(new Product("M006", "Waterproof Sport Windbreaker", "Gents", "men", 2999.00, 10,
                4.5, 47, Arrays.asList("S", "M", "L", "XL"), Arrays.asList("Neon Lilac", "Pitch Black"),
                "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&auto=format&fit=crop&q=80",
                "Ultra-light windbreaker built with moisture-wicking technology. Features reflective safety piping.",
                "Veloce", 42, false, false, false));

        products.add(new Product("M007", "Smart Casual Cotton Trousers", "Gents", "men", 1899.00, 0,
                4.2, 85, Arrays.asList("30", "32", "34", "36"), Arrays.asList("Sand Khaki", "Lavender Slate"),
                "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80",
                "Chino-cut trousers stitched from organic stretch cotton. Highly comfortable for executive wear.",
                "UrbanChic", 88, false, true, false));

        products.add(new Product("M008", "Graphic Oversized Street Tee", "Gents", "men", 999.00, 15,
                4.6, 154, Arrays.asList("S", "M", "L", "XL", "XXL"), Arrays.asList("Lavender Graphic", "Charcoal Black"),
                "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=80",
                "Bold aesthetic graphics screen-printed on a heavy cotton drop-shoulder silhouette.",
                "CyberStreet", 150, true, true, false));

        // ------------------ GIRLS (6) ------------------
        products.add(new Product("G001", "Lavender Ruffled Party Dress", "Girls", "girls", 1499.00, 20,
                4.7, 43, Arrays.asList("4-5Y", "6-7Y", "8-9Y", "10-11Y"), Arrays.asList("Lavender Pink", "Light Violet"),
                "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=600&auto=format&fit=crop&q=80",
                "Beautiful formal party dress with layered organza ruffles, bow sash, and keyhole button back.",
                "TinySteps", 28, true, true, false));

        products.add(new Product("G002", "Floral Kid's Sundress", "Girls", "girls", 999.00, 10,
                4.5, 29, Arrays.asList("4-5Y", "6-7Y", "8-9Y"), Arrays.asList("Floral Purple", "Yellow Daisy"),
                "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80",
                "A breezy cotton dress decorated with cute hand-painted lavender floral bouquets.",
                "MeadowGlow", 45, false, false, true));

        products.add(new Product("G003", "Denim Kids Overall Skirt", "Girls", "girls", 1299.00, 0,
                4.4, 33, Arrays.asList("6-7Y", "8-9Y", "10-11Y"), Arrays.asList("Bleach Denim", "Indigo Blue"),
                "https://images.unsplash.com/photo-1519235186428-45a47ba02f18?w=600&auto=format&fit=crop&q=80",
                "Sturdy denim skirt overalls featuring cross-back straps, custom front pockets, and metal hardware.",
                "IndigoDenim", 30, false, true, false));

        products.add(new Product("G004", "Top & Cotton Shorts Set", "Girls", "girls", 999.00, 15,
                4.2, 19, Arrays.asList("4-5Y", "6-7Y", "8-9Y"), Arrays.asList("Violet & White", "Peach Pink"),
                "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&auto=format&fit=crop&q=80",
                "Coordinated summer kit containing a ruffle-sleeve lavender top and comfy elasticated white shorts.",
                "TinySteps", 60, true, false, false));

        products.add(new Product("G005", "Cozy Lilac Kid's Hoodie", "Girls", "girls", 1499.00, 10,
                4.8, 55, Arrays.asList("6-7Y", "8-9Y", "10-11Y", "12Y"), Arrays.asList("Lilac", "Heather Gray"),
                "https://images.unsplash.com/photo-1611590524163-b4724beb4c43?w=600&auto=format&fit=crop&q=80",
                "Super soft fleece hoodie with a metallic lilac brand stamp. Complete with front kangaroo pocket.",
                "AuraSport", 52, false, false, true));

        products.add(new Product("G006", "Sparkly Lavender Tulle Skirt", "Girls", "girls", 899.00, 5,
                4.6, 17, Arrays.asList("4-5Y", "6-7Y", "8-9Y"), Arrays.asList("Glitter Lavender", "Fairytale Pink"),
                "https://images.unsplash.com/photo-1502485019198-a625bd53e9a1?w=600&auto=format&fit=crop&q=80",
                "A dreamy ballerina-inspired skirt crafted from multiple layers of glittery lavender tulle.",
                "TinySteps", 40, false, true, false));

        // ------------------ BOYS (6) ------------------
        products.add(new Product("B001", "Active Wear Sporty Hoodie", "Boys", "boys", 1499.00, 15,
                4.6, 50, Arrays.asList("6-7Y", "8-9Y", "10-11Y", "12-13Y"), Arrays.asList("Charcoal & Purple", "Solid Navy"),
                "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&auto=format&fit=crop&q=80",
                "Premium sweat hoodie with moisture-wicking features. Ideal for outdoor games and school active hours.",
                "AuraSport", 38, true, true, false));

        products.add(new Product("B002", "Classic Button Down Shirt", "Boys", "boys", 1199.00, 10,
                4.4, 28, Arrays.asList("4-5Y", "6-7Y", "8-9Y", "10-11Y"), Arrays.asList("Light Lavender Stripe", "Navy Solid"),
                "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80",
                "Smart vertical stripe oxford shirt, finished with double-stitched buttons and long rollable sleeves.",
                "UrbanChic", 50, false, false, true));

        products.add(new Product("B003", "Ripped Denim Boy's Shorts", "Boys", "boys", 999.00, 0,
                4.3, 31, Arrays.asList("6-7Y", "8-9Y", "10-11Y"), Arrays.asList("Faded Blue", "Midnight Gray"),
                "https://images.unsplash.com/photo-1471286174240-e72e900f9e0d?w=600&auto=format&fit=crop&q=80",
                "Cool distressed denim shorts with adjustable waist inserts and pre-rolled bottom cuffs.",
                "IndigoDenim", 45, false, true, false));

        products.add(new Product("B004", "Casual Hooded Cotton Jacket", "Boys", "boys", 1899.00, 20,
                4.7, 24, Arrays.asList("6-7Y", "8-9Y", "10-11Y"), Arrays.asList("Olive-Green", "Purple Camo"),
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
                "Durable utility canvas jacket with removable hood, lined with cozy soft checkered fabric.",
                "Veloce", 25, true, false, false));

        products.add(new Product("B005", "Printed Street Kid's Tee", "Boys", "boys", 799.00, 10,
                4.5, 44, Arrays.asList("4-5Y", "6-7Y", "8-9Y", "10-11Y"), Arrays.asList("Lavender Graphic", "Yellow Glow"),
                "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&auto=format&fit=crop&q=80",
                "Playful skate graphic tee in pure organic cotton, featuring eco-friendly water-based ink.",
                "CyberStreet", 110, false, false, true));

        products.add(new Product("B006", "Cargo Joggers in Charcoal", "Boys", "boys", 1299.00, 5,
                4.4, 38, Arrays.asList("6-7Y", "8-9Y", "10-11Y"), Arrays.asList("Charcoal", "Army Green", "Plum"),
                "https://images.unsplash.com/photo-1519235186428-45a47ba02f18?w=600&auto=format&fit=crop&q=80",
                "Sturdy ripstop joggers with deep snap cargo pockets and comfortable rib cuffs.",
                "UrbanChic", 65, false, true, false));

        // ------------------ BABIES (6) ------------------
        products.add(new Product("K001", "Soft Cotton Romper Set", "Babies", "babies", 999.00, 15,
                4.9, 88, Arrays.asList("0-3M", "3-6M", "6-12M", "12-18M"), Arrays.asList("Lavender Dreams", "Minty Lilac"),
                "https://images.unsplash.com/photo-1519689680058-324335c77ebe?w=600&auto=format&fit=crop&q=80",
                "Super combed organic cotton rompers with smooth shoulder snaps and elastic foot cuffs.",
                "TinySteps", 100, true, true, true));

        products.add(new Product("K002", "Pastel Lilac Sleep Suit", "Babies", "babies", 899.00, 10,
                4.8, 62, Arrays.asList("Newborn", "0-3M", "3-6M", "6-12M"), Arrays.asList("Pastel Lilac", "Cloud White"),
                "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80",
                "Keep your baby snug in this footed sleepsuit featuring two-way front zippers and anti-scratch mittens.",
                "TinySteps", 90, true, false, false));

        products.add(new Product("K003", "Toddler Warm Knit Set", "Babies", "babies", 1499.00, 20,
                4.7, 41, Arrays.asList("6-12M", "12-18M", "18-24M", "2T"), Arrays.asList("Warm Oatmeal", "Lilac Gray"),
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
                "Cozy winter set with a mock neck knit sweater and matching elasticated pants.",
                "LunaCraft", 35, false, false, true));

        products.add(new Product("K004", "Adorable Denim Dungarees", "Babies", "babies", 1299.00, 5,
                4.5, 34, Arrays.asList("12-18M", "18-24M", "2T", "3T"), Arrays.asList("Soft Bleach Blue"),
                "https://images.unsplash.com/photo-1519235186428-45a47ba02f18?w=600&auto=format&fit=crop&q=80",
                "Baby denim dungarees featuring adorable cloud patch embroideries and easy-change snaps.",
                "IndigoDenim", 40, false, true, false));

        products.add(new Product("K005", "Floral Baby Frock", "Babies", "babies", 999.00, 15,
                4.6, 23, Arrays.asList("3-6M", "6-12M", "12-18M", "18-24M"), Arrays.asList("Lilac Blossom", "Cream Rose"),
                "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&auto=format&fit=crop&q=80",
                "Lightweight flowy frock in soft cotton with gathered sleeves and diaper cover.",
                "MeadowGlow", 48, false, false, false));

        products.add(new Product("K006", "Plush Bear Fleece Jacket", "Babies", "babies", 1299.00, 10,
                4.9, 52, Arrays.asList("6-12M", "12-18M", "18-24M", "2T"), Arrays.asList("Lavender Bear", "Oatmeal Bear"),
                "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80",
                "Adorable jacket made from thick faux sherpa with little teddy ears on the hood.",
                "LunaCraft", 32, true, true, false));

        // ------------------ FOOTWEAR (6) ------------------
        products.add(new Product("F001", "Lavender Haze Sneakers", "Footwear", "women", 3499.00, 10,
                4.8, 145, Arrays.asList("36", "37", "38", "39", "40", "41"), Arrays.asList("Lavender Haze", "Cloud Silver"),
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
                "Premium lifestyle running sneakers with lightweight mesh, gel cushioning, and lavender highlights.",
                "AeroSoft", 55, true, true, true));

        products.add(new Product("F002", "Minimalist Leather Loafers", "Footwear", "men", 3999.00, 15,
                4.5, 93, Arrays.asList("40", "41", "42", "43", "44"), Arrays.asList("Espresso Black", "Plum Suede"),
                "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&auto=format&fit=crop&q=80",
                "Elegant handcrafted calfskin loafers. Memory foam insoles ensure premium comfort all day long.",
                "Veloce", 35, true, false, false));

        products.add(new Product("F003", "Chunky White Platform Trainers", "Footwear", "women", 2999.00, 0,
                4.6, 210, Arrays.asList("36", "37", "38", "39", "40"), Arrays.asList("Pure White", "White-Purple Glow"),
                "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
                "Highly popular chunky sneakers with orthopedic arch support and iridescent purple heels.",
                "AeroSoft", 85, false, true, true));

        products.add(new Product("F004", "Elegant Purple Strappy Heels", "Footwear", "women", 3499.00, 20,
                4.7, 66, Arrays.asList("35", "36", "37", "38", "39"), Arrays.asList("Deep Amethyst", "Soft Lavender"),
                "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80",
                "High stiletto heels featuring delicate satin wraps and sparkling amethyst gemstone buckles.",
                "LuxeWeave", 22, false, false, true));

        products.add(new Product("F005", "Casual Suede Desert Boots", "Footwear", "men", 4499.00, 25,
                4.3, 49, Arrays.asList("41", "42", "43", "44", "45"), Arrays.asList("Sandy Suede", "Dusty Violet"),
                "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&auto=format&fit=crop&q=80",
                "Classic desert ankle boots lined with leather, featuring crepe rubber outsoles.",
                "UrbanChic", 29, false, true, false));

        products.add(new Product("F006", "Premium Leather Slip-ons", "Footwear", "men", 2499.00, 10,
                4.4, 78, Arrays.asList("40", "41", "42", "43"), Arrays.asList("Navy Blue", "Smoky Plum"),
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80",
                "Perforated breathable leather slip-on shoes with durable slip-resistant rubber outsoles.",
                "AeroSoft", 50, false, false, false));

        // ------------------ BAGS (6) ------------------
        products.add(new Product("A001", "Glassmorphic Lavender Handbag", "Bags", "women", 4599.00, 15,
                4.9, 112, Arrays.asList("One Size"), Arrays.asList("Lavender Frost", "Crystal Clear"),
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80",
                "Featuring premium frosted glassmorphic details combined with full-grain lavender calfskin leather.",
                "LunaCraft", 18, true, true, true));

        products.add(new Product("A002", "Sleek Urban Leather Backpack", "Bags", "men", 3999.00, 10,
                4.6, 75, Arrays.asList("One Size"), Arrays.asList("Midnight Black", "Royal Plum"),
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
                "Compact tech backpack with padded 16-inch laptop pocket, waterproof zippers, and charging slot.",
                "Veloce", 35, true, false, false));

        products.add(new Product("A003", "Mini Lavender Crossbody Bag", "Bags", "women", 1999.00, 5,
                4.5, 82, Arrays.asList("One Size"), Arrays.asList("Faded Lavender", "Soft Rose"),
                "https://images.unsplash.com/photo-1566150905458-1bf1fc15aae9?w=600&auto=format&fit=crop&q=80",
                "Compact crossbody bag with a chunky gold-toned chain strap, sized for phone, wallet, and cosmetics.",
                "LunaCraft", 60, false, true, true));

        products.add(new Product("A004", "Premium Canvas Travel Tote", "Bags", "women", 2499.00, 20,
                4.4, 49, Arrays.asList("One Size"), Arrays.asList("Oatmeal & Lilac", "Oatmeal & Black"),
                "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
                "Sturdy woven canvas tote bag with thick genuine leather straps and a large zipped main compartment.",
                "UrbanChic", 45, false, false, false));

        products.add(new Product("A005", "Metallic Lilac Clutch", "Bags", "women", 1699.00, 10,
                4.7, 34, Arrays.asList("One Size"), Arrays.asList("Metallic Lilac", "Shimmer Gold"),
                "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?w=600&auto=format&fit=crop&q=80",
                "Chic sparkling clutch with a removable chain strap, ideal for cocktail events and wedding guest looks.",
                "LuxeWeave", 30, false, true, true));

        products.add(new Product("A006", "Structured Shoulder Bag", "Bags", "women", 3499.00, 0,
                4.5, 68, Arrays.asList("One Size"), Arrays.asList("Soft Lavender", "Sleek Tan"),
                "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop&q=80",
                "Sleek envelope-style handbag with polished gold clasps. Ideal for office-to-evening transitions.",
                "LunaCraft", 24, false, false, false));

        // ------------------ WATCHES (6) ------------------
        products.add(new Product("W001", "Minimalist Amethyst Dial Watch", "Watches", "women", 4999.00, 10,
                4.8, 86, Arrays.asList("One Size"), Arrays.asList("Silver Amethyst", "Gold Amethyst"),
                "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80",
                "Features a beautiful natural Amethyst stone dial paired with a premium stainless steel mesh strap.",
                "ChronoLux", 15, true, true, true));

        products.add(new Product("W002", "Rose Gold Lavender Strap Watch", "Watches", "women", 3999.00, 15,
                4.6, 54, Arrays.asList("One Size"), Arrays.asList("Lavender Leather", "Pink Leather"),
                "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
                "Classic watch with double-layered dial accents, premium leather strap in lavender, and rose gold hardware.",
                "ChronoLux", 22, true, false, false));

        products.add(new Product("W003", "Futuristic Digital Cyber-Watch", "Watches", "men", 7999.00, 20,
                4.7, 43, Arrays.asList("One Size"), Arrays.asList("Neon Lilac Glow", "Stealth Black"),
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
                "Advanced watch with customizable RGB interface, glowing lavender details, and full smart sports tracker.",
                "CyberStreet", 10, false, true, true));

        products.add(new Product("W004", "Classic Silver Chronograph", "Watches", "men", 5999.00, 5,
                4.5, 91, Arrays.asList("One Size"), Arrays.asList("Silver & Blue Dial", "Silver & Purple Dial"),
                "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=80",
                "Sophisticated analogue timepiece with precise quartz movements and custom calendar dials.",
                "ChronoLux", 28, false, false, false));

        products.add(new Product("W005", "Sport Waterproof Smart Band", "Watches", "men", 2999.00, 30,
                4.4, 154, Arrays.asList("One Size"), Arrays.asList("Lavender Band", "Black Band"),
                "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&auto=format&fit=crop&q=80",
                "Water-resistant tracker with active sleep, heart-rate monitors, and long-lasting 10-day battery life.",
                "AuraSport", 65, false, true, false));

        products.add(new Product("W006", "Elegant Marble Dial Watch", "Watches", "women", 4999.00, 0,
                4.7, 47, Arrays.asList("One Size"), Arrays.asList("White Marble", "Purple Marble"),
                "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&auto=format&fit=crop&q=80",
                "Individually cut genuine marble dial with minimalist tick marks and high-grade silver casing.",
                "ChronoLux", 14, false, false, false));

        // ------------------ GENERAL ACCESSORIES (8) ------------------
        products.add(new Product("Z001", "Silk Lavender Scarf", "Accessories", "women", 899.00, 10,
                4.7, 72, Arrays.asList("One Size"), Arrays.asList("Lavender Satin", "Orchid Ombre"),
                "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=600&auto=format&fit=crop&q=80",
                "100% premium mulberry silk scarf. Features a hand-rolled hem and a modern geometric lavender pattern.",
                "LuxeWeave", 40, true, false, false));

        products.add(new Product("Z002", "Retro Lavender Sunglasses", "Accessories", "unisex", 799.00, 15,
                4.4, 115, Arrays.asList("One Size"), Arrays.asList("Lavender Glass", "Tinted Lilac"),
                "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
                "Statement retro sunglasses featuring robust acetate frames and high UV protective lavender tinted lenses.",
                "CyberStreet", 80, true, true, true));

        products.add(new Product("Z003", "Gold Plated Amethyst Pendant", "Accessories", "women", 2499.00, 20,
                4.8, 51, Arrays.asList("One Size"), Arrays.asList("18K Gold"),
                "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
                "Naturally sourced raw amethyst gemstone suspended from a fine 18-karat gold-plated chain link.",
                "LuxeWeave", 15, false, false, true));

        products.add(new Product("Z004", "Premium Leather Lavender Belt", "Accessories", "unisex", 999.00, 5,
                4.2, 38, Arrays.asList("S", "M", "L"), Arrays.asList("Lavender Nappa", "Orchid Suede"),
                "https://images.unsplash.com/photo-1624222247344-550fb8ecf7db?w=600&auto=format&fit=crop&q=80",
                "Crafted from premium soft Nappa leather and completed with a polished rounded gold-alloy buckle.",
                "UrbanChic", 50, false, true, false));

        products.add(new Product("Z005", "Wide Brim Straw Hat", "Accessories", "women", 1199.00, 0,
                4.3, 44, Arrays.asList("One Size"), Arrays.asList("Natural Straw", "Lilac Straw"),
                "https://images.unsplash.com/photo-1572451479139-6a308211d8be?w=600&auto=format&fit=crop&q=80",
                "Sun protective hand-woven straw hat. Features an elegant lavender ribbon wrap details.",
                "MeadowGlow", 35, false, false, false));

        products.add(new Product("Z006", "Aura Silver Hoop Earrings", "Accessories", "women", 599.00, 10,
                4.6, 92, Arrays.asList("One Size"), Arrays.asList("Silver Core"),
                "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80",
                "Chic sterling silver hoop earrings with custom micro-set purple zircon crystal accents.",
                "AuraChic", 75, false, true, false));

        products.add(new Product("Z007", "Lavish Pearl Hairband Set", "Accessories", "girls", 499.00, 0,
                4.7, 59, Arrays.asList("One Size"), Arrays.asList("Pearl & Lilac"),
                "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=600&auto=format&fit=crop&q=80",
                "Includes three pieces: a faux pearl band, a velvet lilac twist band, and a cute gold-tone crown clip.",
                "TinySteps", 90, false, false, false));

        products.add(new Product("Z008", "Retro Pattern Socks Pack", "Accessories", "unisex", 599.00, 15,
                4.5, 128, Arrays.asList("Medium", "Large"), Arrays.asList("Pattern Pack"),
                "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=600&auto=format&fit=crop&q=80",
                "Includes three pairs of organic cotton ribbed crew socks styled in check, stripe, and wave lavender motifs.",
                "AuraSport", 200, false, false, false));
    }

    public List<Product> getAllProducts() {
        return products;
    }

    public Product getProductById(String id) {
        return products.stream()
                .filter(p -> p.getId().equalsIgnoreCase(id))
                .findFirst()
                .orElse(null);
    }

    public List<Product> getProductsByCategory(String category) {
        return products.stream()
                .filter(p -> p.getCategory().equalsIgnoreCase(category))
                .collect(Collectors.toList());
    }

    public List<Product> getProductsByGender(String gender) {
        return products.stream()
                .filter(p -> p.getGender().equalsIgnoreCase(gender) || p.getGender().equalsIgnoreCase("unisex"))
                .collect(Collectors.toList());
    }

    public List<Product> getTrendingProducts() {
        return products.stream()
                .filter(Product::isTrending)
                .collect(Collectors.toList());
    }

    public List<Product> getNewArrivals() {
        return products.stream()
                .filter(Product::isNewArrival)
                .collect(Collectors.toList());
    }

    public List<Product> getFeaturedProducts() {
        return products.stream()
                .filter(Product::isFeatured)
                .collect(Collectors.toList());
    }

    public List<Product> getSaleProducts() {
        return products.stream()
                .filter(p -> p.getDiscount() > 0)
                .collect(Collectors.toList());
    }

    public List<Product> searchProducts(String query) {
        if (query == null || query.trim().isEmpty()) {
            return products;
        }
        String cleanQuery = query.toLowerCase().trim();
        return products.stream()
                .filter(p -> p.getName().toLowerCase().contains(cleanQuery)
                        || p.getBrand().toLowerCase().contains(cleanQuery)
                        || p.getCategory().toLowerCase().contains(cleanQuery)
                        || p.getDescription().toLowerCase().contains(cleanQuery))
                .collect(Collectors.toList());
    }
}
