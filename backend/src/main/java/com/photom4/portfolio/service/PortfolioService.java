package com.photom4.portfolio.service;

import com.photom4.portfolio.model.PortfolioItem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class PortfolioService {

    private final List<PortfolioItem> items = new ArrayList<>();

    public PortfolioService() {
        items.add(new PortfolioItem(
                "1",
                "Alpine Serenity",
                "nature",
                "Nature",
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
                "Misty sunrise reflecting on the pristine alpine lake waters.",
                "2026-05-12",
                Arrays.asList("Mountain", "Lake", "Dawn")
        ));

        items.add(new PortfolioItem(
                "2",
                "Trailblazer Wanderlust",
                "bagpacker",
                "Bagpacker",
                "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
                "A lone backpacker looking out over the expansive canyon vista.",
                "2026-06-03",
                Arrays.asList("Travel", "Adventure", "Hiker")
        ));

        items.add(new PortfolioItem(
                "3",
                "Heritage Rhythms",
                "culture",
                "Culture",
                "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
                "Traditional festival colors and street celebration portraits.",
                "2026-06-20",
                Arrays.asList("Tradition", "Portraits", "Street")
        ));

        items.add(new PortfolioItem(
                "4",
                "Spring Blossom Symphony",
                "bouquet",
                "Bouquet",
                "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
                "Artisan hand-tied botanical arrangement in natural morning light.",
                "2026-07-04",
                Arrays.asList("Floral", "Still Life", "Botanical")
        ));

        items.add(new PortfolioItem(
                "5",
                "Emerald Forest Whispers",
                "nature",
                "Nature",
                "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
                "Lush green canopy filtered by morning sunbeams.",
                "2026-07-15",
                Arrays.asList("Forest", "Woods", "Sunlight")
        ));

        items.add(new PortfolioItem(
                "6",
                "Nomad Horizons",
                "bagpacker",
                "Bagpacker",
                "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
                "Exploring uncharted coastal trails with just a camera and backpack.",
                "2026-07-28",
                Arrays.asList("Coastal", "Solo", "Journey")
        ));

        items.add(new PortfolioItem(
                "7",
                "Ancient Architecture",
                "culture",
                "Culture",
                "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
                "Intricate carvings and timeless arches in historic temples.",
                "2026-08-05",
                Arrays.asList("Historic", "Monument", "Art")
        ));

        items.add(new PortfolioItem(
                "8",
                "Vintage Rose Petals",
                "bouquet",
                "Bouquet",
                "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
                "Soft romantic palette with delicate garden roses and eucalyptus.",
                "2026-08-18",
                Arrays.asList("Pastel", "Wedding", "Romance")
        ));
    }

    public List<PortfolioItem> getAllItems() {
        return items;
    }

    public List<PortfolioItem> getItemsByCategory(String category) {
        if (category == null || category.equalsIgnoreCase("all")) {
            return items;
        }
        return items.stream()
                .filter(item -> item.getCategory().equalsIgnoreCase(category))
                .toList();
    }

    public List<String> getCategories() {
        return Arrays.asList("all", "nature", "bagpacker", "culture", "bouquet");
    }
}
