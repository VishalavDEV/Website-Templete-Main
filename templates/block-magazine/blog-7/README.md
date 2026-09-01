# THE BLOCK OBSERVER — Premier React Magazine & Publication UI Template

A high-end, bright editorial digital magazine and online publication template built with **React**, **Vite**, **Tailwind CSS**, and **SCSS**. Designed with an uncompromising focus on typographic hierarchy, editorial aesthetics, unhurried reading ergonomics, and rich interactive frontend features.

---

## 🌟 Highlights & Aesthetics

- **Bright Paper Canvas**: High-end warm paper palette (`#FAF9F5` canvas, `#FFFFFF` surfaces, rich carbon ink `#141413`, vermilion `#D43825`, and ochre gold `#C28B38` accents).
- **Editorial Typography**: Pairing *Cinzel* and *Playfair Display* for mastheads and drop caps with *Newsreader* for long-form reading and *Plus Jakarta Sans* for UI elements.
- **Asymmetrical Editorial Layouts**: Lead story hero with split imagery, ranked 01–05 trending counters, 3-column opinion columnists, visual photo essays, and print magazine issue showcases.
- **Reading Ritual Features**:
  - Top viewport reading progress bar
  - Font size adjuster (`A-` / `A` / `A+`)
  - Simulated audio narration player with time scrubber, play/pause, and playback speed control
  - LocalStorage-backed Reading List / Bookmark drawer
  - Dynamic table of contents that highlights the active section on scroll
  - Interactive reader letters / comment threads with moderation simulation and agree votes
- **Instant Search Dialog**: Global `Cmd/Ctrl + K` search modal with real-time indexing across articles, tags, authors, and categories.
- **100% Frontend & Mock Data**: Clean modular architecture with zero server/database dependencies.

---

## 📂 Architecture

```
templates/block-magazine/
├── src/
│   ├── components/
│   │   ├── common/         # Badge, Toast, Divider
│   │   ├── navigation/     # TopBar, Masthead, Navbar, Footer, MobileMenu
│   │   ├── editorial/      # HeroLeadStory, ArticleCard, TrendingList, OpinionColumnists,
│   │   │                   # PhotoEssayGallery, IssueShowcase, AudioPlayerBar, CategoryBlock, BreakingNewsTicker
│   │   ├── article/        # ArticleHeader, ReadingToolbar, ArticleBody, ArticleSidebar,
│   │   │                   # AuthorBio, CommentsSection, RelatedArticles
│   │   ├── engagement/     # NewsletterBanner, NewsletterModal, BookmarkDrawer
│   │   └── utility/        # SearchModal, ScrollToTop, Breadcrumbs
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx       # Standard multi-tier layout with drawers & overlays
│   │   └── ArticleLayout.jsx    # Specialized layout with live reading progress bar
│   │
│   ├── pages/
│   │   ├── Home.jsx             # Flagship front page with breaking news and multi-desk curation
│   │   ├── Article.jsx          # Deep reading experience with audio and dynamic TOC
│   │   ├── Category.jsx         # Desk hub with subtopic tags and Grid/List switcher
│   │   ├── Search.jsx           # Dedicated search catalog with keyword & desk filters
│   │   ├── Author.jsx           # Author folio with bio, bibliography, and honors
│   │   ├── About.jsx            # Editorial mission, masthead directory, and timeline
│   │   ├── Contact.jsx          # Bureau desks, addresses, and letter transmission form
│   │   └── NotFound.jsx         # Editorial 404 archive redirection
│   │
│   ├── data/                    # Rich datasets for articles, categories, authors, issues
│   ├── hooks/                   # Custom hooks: useBookmarks, useReadingProgress, useStickyHeader
│   ├── context/                 # Global MagazineContext (bookmarks, search, audio, fontSize)
│   └── styles/                  # SCSS design tokens, typography, reset, and Tailwind integration
│
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Navigate to the template folder
```bash
cd templates/block-magazine
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 📄 License
MIT License. Free for commercial and editorial publication projects.
