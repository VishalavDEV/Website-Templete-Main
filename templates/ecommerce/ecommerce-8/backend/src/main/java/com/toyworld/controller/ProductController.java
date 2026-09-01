package com.toyworld.controller;

import com.toyworld.model.Product;
import com.toyworld.model.Category;
import com.toyworld.model.Review;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class ProductController {

    private static final List<Product> products = new ArrayList<>();
    private static final List<Category> categories = new ArrayList<>();

    static {
        // Initialize Categories
        categories.add(new Category("cat1", "Cars & Vehicles", "cars-vehicles", "Zooming cars and racing tracks.", "car"));
        categories.add(new Category("cat2", "Building Toys", "building-toys", "Bricks that stack and assemble themselves.", "lego"));
        categories.add(new Category("cat3", "Dolls", "dolls", "Dolls that dance, wave, and spin.", "doll"));
        categories.add(new Category("cat4", "Robots & Action Figures", "robots-action-figures", "Futuristic mechanical companions.", "robot"));
        categories.add(new Category("cat5", "Plush Toys", "plush-toys", "Soft cuddly friends that wave hello.", "teddy"));
        categories.add(new Category("cat6", "Aircraft", "aircraft", "Planes and helicopters that fly in loops.", "airplane"));
        categories.add(new Category("cat7", "Trains", "trains", "Locomotives that steam and chug on railways.", "train"));
        categories.add(new Category("cat8", "STEM Toys", "stem-toys", "Rockets and sciences that launch your mind.", "rocket"));
        categories.add(new Category("cat9", "Outdoor Toys", "outdoor-toys", "Bouncing balls and backyard fun.", "ball"));
        categories.add(new Category("cat10", "Creative Toys", "creative-toys", "Roaring creative dinosaurs and play dough.", "dinosaur"));

        // Helper lists for static generation
        List<Review> carReviews = Arrays.asList(
            new Review("Sam Racer", 5.0, "Super fast and wheels actually rotate like crazy!", "2026-08-10"),
            new Review("Max Speed", 4.5, "Love the loop-the-loop stunt tracks, highly recommend.", "2026-08-15")
        );
        List<Review> dollReviews = Arrays.asList(
            new Review("Emily G.", 5.0, "The dancing is so cute! It lights up and spins.", "2026-08-11"),
            new Review("Aria Pink", 4.0, "Very pretty dress design and premium feel.", "2026-08-18")
        );
        List<Review> robotReviews = Arrays.asList(
            new Review("Techie Dad", 5.0, "My son loves the blinking eyes. Walking is very stable.", "2026-08-01"),
            new Review("Cypher", 4.8, "The transform click state works perfectly. So interactive!", "2026-08-12")
        );
        List<Review> legoReviews = Arrays.asList(
            new Review("BrickMaster", 5.0, "Classic Lego. Assembles into a spaceship. Outstanding details.", "2026-08-05")
        );

        // Add Mock Products
        // 1. Cars & Vehicles
        products.add(new Product(
            "p1", "Hot Wheels Die-Cast Supercar", "Hot Wheels", "cars-vehicles",
            1499.00, 10.0, 4.8,
            "A premium die-cast racer featuring active wheel spin mechanics, customized neon spoiler, and racing chassis. Put it on the track and watch it drift!",
            "/hotwheels_car.jpg", "car", 15,
            Arrays.asList("Electric Blue", "Racer Red", "Volt Green"),
            carReviews
        ));
        products.add(new Product(
            "p2", "Mattel Remote Control Cruiser", "Mattel", "cars-vehicles",
            3499.00, 15.0, 4.5,
            "All-terrain high speed RC cruiser with rechargeable battery and heavy duty suspension. Interactive motor sound ready.",
            "/hotwheels_car.jpg", "car", 8,
            Arrays.asList("Carbon Black", "Neon Yellow"),
            carReviews
        ));
        products.add(new Product(
            "p15", "Funskool Friction Racer", "Funskool", "cars-vehicles",
            799.00, 0.0, 4.3,
            "A fast friction-powered drag racer that zips across rooms and tracks without batteries.",
            "/hotwheels_car.jpg", "car", 18,
            Arrays.asList("Racer Red", "Speed Yellow"),
            carReviews
        ));

        // 2. Building Toys
        products.add(new Product(
            "p3", "LEGO Creator Spaceship Explorer", "LEGO", "building-toys",
            2999.00, 0.0, 4.9,
            "Assemble your own galactic cruiser. LEGO creator bricks lock together to form a highly detailed spacecraft with opening cargo bays.",
            "/lego_spaceship.jpg", "lego", 20,
            Arrays.asList("Original Space Kit"),
            legoReviews
        ));
        products.add(new Product(
            "p4", "LEGO Architecture Skyline Set", "LEGO", "building-toys",
            4999.00, 5.0, 4.7,
            "Recreate the world's most spectacular cities brick by brick. Pieces click into place to build custom modern skyscrapers.",
            "/lego_spaceship.jpg", "lego", 12,
            Arrays.asList("Skyline Set"),
            legoReviews
        ));
        products.add(new Product(
            "p16", "LEGO Creator Medieval Castle", "LEGO", "building-toys",
            3999.00, 10.0, 4.8,
            "Assemble a historic brick castle with working drawbridge, towers, and target banners.",
            "/lego_spaceship.jpg", "lego", 10,
            Arrays.asList("Castle Set"),
            legoReviews
        ));

        // 3. Dolls
        products.add(new Product(
            "p5", "Barbie Ballerina Dreamer", "Barbie", "dolls",
            1999.00, 20.0, 4.6,
            "The magic ballerina doll. When activated, she performs high-speed pirouettes and waves her arms with magical sparkling highlights.",
            "/barbie_doll.jpg", "doll", 25,
            Arrays.asList("Pink Tutu", "Violet Tutu"),
            dollReviews
        ));
        products.add(new Product(
            "p6", "Disney Princess Elsa Dance Edition", "Disney", "dolls",
            2499.00, 0.0, 4.7,
            "Singing and dancing Elsa doll. Breathes, waves, and does a winter snowflake dance on click.",
            "/barbie_doll.jpg", "doll", 18,
            Arrays.asList("Classic Sparkle Blue"),
            dollReviews
        ));
        products.add(new Product(
            "p17", "Hasbro Baby Alive Doll", "Hasbro", "dolls",
            2499.00, 15.0, 4.4,
            "Interactive baby doll that eats, speaks, and responds to standard play tools.",
            "/barbie_doll.jpg", "doll", 15,
            Arrays.asList("Original Pink Edition"),
            dollReviews
        ));

        // 4. Robots & Action Figures
        products.add(new Product(
            "p7", "Transformers Optimus Prime", "Transformers", "robots-action-figures",
            3999.00, 10.0, 4.9,
            "The legendary Autobot commander. He blinks his LED eyes, turns his head, and transforms into a semi-truck with heavy metal gear sounds.",
            "robot_optimus.svg", "robot", 10,
            Arrays.asList("Standard Edition"),
            robotReviews
        ));
        products.add(new Product(
            "p8", "Hasbro Mech-Warrior Cyber Bot", "Hasbro", "robots-action-figures",
            1899.00, 0.0, 4.3,
            "Interactive programmable mechanical buddy. Walks 2-3 steps, wiggles his lasers, and blinks in binary codes.",
            "robot_cyber.svg", "robot", 30,
            Arrays.asList("Matte Black", "Arctic White"),
            robotReviews
        ));
        products.add(new Product(
            "p18", "Hasbro Spider-Man Titan Figure", "Hasbro", "robots-action-figures",
            1599.00, 0.0, 4.6,
            "Action figure of Spider-Man with swinging arm and blinking web-shooters.",
            "robot_optimus.svg", "robot", 20,
            Arrays.asList("Red-Blue Suit"),
            robotReviews
        ));

        // 5. Plush Toys
        products.add(new Product(
            "p9", "Fisher-Price Waving Teddy Bear", "Fisher-Price", "plush-toys",
            999.00, 0.0, 4.8,
            "Ultra-soft snuggly plush bear that waves hello and wiggles his ears when you hover or tap. Perfect for bedtime hugs.",
            "teddy_bear.svg", "teddy", 40,
            Arrays.asList("Honey Brown", "Cream White"),
            Arrays.asList(new Review("Mama Bear", 5.0, "So soft, my daughter takes it everywhere.", "2026-08-02"))
        ));
        products.add(new Product(
            "p19", "Disney Mickey Mouse Plush", "Disney", "plush-toys",
            1299.00, 0.0, 4.9,
            "Soft cuddly plush of Mickey Mouse that waves hello and wiggles his ears.",
            "teddy_bear.svg", "teddy", 25,
            Arrays.asList("Classic Red Shorts"),
            Arrays.asList(new Review("Toy Fan", 5.0, "Classic Mickey, super soft and clean.", "2026-08-10"))
        ));
        products.add(new Product(
            "p20", "Funskool Snuggly Bunny Plush", "Funskool", "plush-toys",
            699.00, 10.0, 4.5,
            "Soft pastel bunny plush companion with waving movements and custom sound hook.",
            "teddy_bear.svg", "teddy", 15,
            Arrays.asList("Lilac Purple", "Cream Pink"),
            Arrays.asList(new Review("bunny lover", 4.5, "So cute and soft.", "2026-08-12"))
        ));

        // 6. Aircraft
        products.add(new Product(
            "p10", "Spin Master Jet Stream Airplane", "Spin Master", "aircraft",
            1799.00, 15.0, 4.4,
            "Sleek jet plane with active propeller engines. Watch it hover, bob up and down, and do a complete loop-the-loop when clicked.",
            "airplane_jet.svg", "airplane", 15,
            Arrays.asList("Fire Red", "Stealth Grey"),
            Arrays.asList(new Review("Flyer", 4.5, "The loop animation is fantastic. Super cute concept.", "2026-08-14"))
        ));
        products.add(new Product(
            "p21", "Hasbro Fly-Right Helicopter", "Hasbro", "aircraft",
            1499.00, 0.0, 4.3,
            "Helicopter toy with battery propeller blades. Bobs up and down and runs engine sound loops.",
            "airplane_jet.svg", "airplane", 15,
            Arrays.asList("Rescue Red", "Police Blue"),
            Arrays.asList(new Review("chopper", 4.0, "Propeller rotates nicely.", "2026-08-08"))
        ));
        products.add(new Product(
            "p22", "Nerf Dart-Firing Drone", "Nerf", "aircraft",
            2999.00, 10.0, 4.7,
            "Interactive remote drone that hovers, floats, and performs target flips on click.",
            "airplane_jet.svg", "airplane", 12,
            Arrays.asList("Nerf Elite Blue"),
            Arrays.asList(new Review("drone-man", 5.0, "Excellent drone.", "2026-08-11"))
        ));

        // 7. Trains
        products.add(new Product(
            "p11", "VTech Toot-Toot Steam Train", "VTech", "trains",
            2499.00, 10.0, 4.6,
            "Choo-choo! An interactive steam train that emits glowing smoke puffs, rings its bell, and chugs down the virtual track on hover.",
            "train_express.svg", "train", 22,
            Arrays.asList("Steam Locomotive Kit"),
            Arrays.asList(new Review("Grandpa Joe", 5.0, "Reminds me of classic trains. The sound design hooks are great.", "2026-08-08"))
        ));
        products.add(new Product(
            "p23", "LEGO City Cargo Train Set", "LEGO", "trains",
            5999.00, 5.0, 4.9,
            "Assemble a motorized cargo locomotive set with control track and cargo containers.",
            "/lego_spaceship.jpg", "train", 10,
            Arrays.asList("Cargo Set"),
            Arrays.asList(new Review("Train Lover", 5.0, "Tons of fun, LEGO quality.", "2026-08-09"))
        ));
        products.add(new Product(
            "p24", "Mattel Thomas & Friends Engine", "Mattel", "trains",
            1899.00, 0.0, 4.6,
            "Friction train engine that whistles, puffing steam and rolling wheels.",
            "train_express.svg", "train", 18,
            Arrays.asList("Thomas Blue"),
            Arrays.asList(new Review("parent", 4.5, "Thomas is classic.", "2026-08-11"))
        ));

        // 8. STEM Toys
        products.add(new Product(
            "p12", "Nerf Galactic Launch Rocket", "Nerf", "stem-toys",
            1299.00, 0.0, 4.7,
            "Launches deep into the sky! Rumble-activated booster flames, massive smoke clouds, and a complete vertical takeoff animation sequence.",
            "rocket_nerf.svg", "rocket", 35,
            Arrays.asList("Classic Nerf Orange"),
            Arrays.asList(new Review("Booster Guy", 5.0, "Rumbles before launch. A work of art!", "2026-08-16"))
        ));
        products.add(new Product(
            "p25", "VTech Science Experiment Kit", "VTech", "stem-toys",
            1999.00, 0.0, 4.6,
            "Interactive launcher base representing volcano rumbles and clean chemical takeoffs.",
            "rocket_nerf.svg", "rocket", 25,
            Arrays.asList("Junior Kit"),
            Arrays.asList(new Review("science", 4.5, "Very educational.", "2026-08-10"))
        ));
        products.add(new Product(
            "p26", "Hasbro Solar System Planetarium", "Hasbro", "stem-toys",
            1599.00, 10.0, 4.8,
            "Glowing orbital space kit representing spinning spheres, planets, and launches.",
            "rocket_nerf.svg", "rocket", 20,
            Arrays.asList("Standard Edition"),
            Arrays.asList(new Review("universe", 5.0, "Great learning toy.", "2026-08-12"))
        ));

        // 9. Outdoor Toys
        products.add(new Product(
            "p13", "Funskool Bouncing Neon Ball", "Funskool", "outdoor-toys",
            499.00, 0.0, 4.2,
            "High-bounce neon sphere that squashes and stretches as it rebounds from the bottom of your screen.",
            "ball_neon.svg", "ball", 50,
            Arrays.asList("Neon Pink", "Volt Yellow", "Laser Purple"),
            Arrays.asList(new Review("Bouncer", 4.0, "Super squishy. Bounces nicely.", "2026-08-09"))
        ));
        products.add(new Product(
            "p27", "Nerf Super Soaker Water Gun", "Nerf", "outdoor-toys",
            1299.00, 0.0, 4.5,
            "High-capacity water blaster that rebounds on target.",
            "ball_neon.svg", "ball", 30,
            Arrays.asList("Soaker Blue"),
            Arrays.asList(new Review("soak", 4.5, "Loads of water fun.", "2026-08-13"))
        ));
        products.add(new Product(
            "p28", "Funskool Bouncing Football", "Funskool", "outdoor-toys",
            599.00, 10.0, 4.4,
            "Air-filled standard football that squashes and bounces across the ground.",
            "ball_neon.svg", "ball", 40,
            Arrays.asList("Classic Hexagon"),
            Arrays.asList(new Review("footy", 4.5, "Strong build.", "2026-08-15"))
        ));

        // 10. Creative Toys
        products.add(new Product(
            "p14", "Crayola Clay Dinosaur Sculptor", "Crayola", "creative-toys",
            999.00, 25.0, 4.5,
            "Craft your own T-Rex with color clays. Hovering makes the dinosaur wag its tail, and clicking triggers a friendly creative roar!",
            "dino_crayola.svg", "dino", 15,
            Arrays.asList("Dino Clay Pack"),
            Arrays.asList(new Review("Art Teacher", 5.0, "So creative. Love how the dinosaur comes alive.", "2026-08-11"))
        ));
        products.add(new Product(
            "p29", "Play-Doh Mega Creative Oven", "Play-Doh", "creative-toys",
            1499.00, 0.0, 4.7,
            "Toy oven that squashes play-doh colors to shape custom pizzas and cakes.",
            "dino_crayola.svg", "dino", 20,
            Arrays.asList("Mega Oven Set"),
            Arrays.asList(new Review("dough", 4.8, "Kids love modeling.", "2026-08-14"))
        ));
        products.add(new Product(
            "p30", "Crayola Magic Light Paint Board", "Crayola", "creative-toys",
            1199.00, 15.0, 4.6,
            "Neon painting board that glows in the dark, responding to active stylus drawing.",
            "dino_crayola.svg", "dino", 25,
            Arrays.asList("Magic Board Set"),
            Arrays.asList(new Review("paints", 4.5, "Mess free painting.", "2026-08-16"))
        ));
    }

    @GetMapping("/products")
    public List<Product> getAllProducts(@RequestParam(required = false) String category) {
        if (category != null && !category.isEmpty()) {
            return products.stream()
                    .filter(p -> p.getCategory().equalsIgnoreCase(category))
                    .collect(Collectors.toList());
        }
        return products;
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable String id) {
        return products.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    @GetMapping("/products/search")
    public List<Product> searchProducts(@RequestParam String q) {
        String query = q.toLowerCase();
        return products.stream()
                .filter(p -> p.getName().toLowerCase().contains(query) ||
                             p.getBrand().toLowerCase().contains(query) ||
                             p.getCategory().toLowerCase().contains(query) ||
                             p.getDescription().toLowerCase().contains(query))
                .collect(Collectors.toList());
    }

    @GetMapping("/categories")
    public List<Category> getCategories() {
        return categories;
    }

    @GetMapping("/offers")
    public List<Product> getOffers() {
        return products.stream()
                .filter(p -> p.getDiscount() > 0)
                .collect(Collectors.toList());
    }
}
