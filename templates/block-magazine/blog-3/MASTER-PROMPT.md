# MASTER BUILD PROMPT — AI & FUTURE TECHNOLOGY MAGAZINE

You are a senior frontend engineer, interaction designer, motion designer and editorial UX designer. Build a polished, production-quality FRONTEND-ONLY digital magazine called **Future Intelligence** (working name; keep branding configurable).

## Mission

Create a premium editorial publication about **AI & Future Technology**. It must feel like a real working magazine even though there is NO backend.

The site must include realistic local data, functional navigation, search, filters, bookmarks, newsletter interaction, article detail views, issue browsing, rankings, tool/model/company directories, author profiles, and a cinematic scroll-driven hero. Do not leave dead buttons or fake controls that do nothing.

The only data source for the prototype is local JSON / JavaScript data files in a temporary `data/` folder. Structure the code so the local data layer can later be replaced by an API without rewriting UI components.

## Functional reference

The uploaded Tech AI Magazine scrape is a FUNCTIONAL reference only. Use it to understand the kinds of magazine features a serious AI publication can have: latest issue, featured stories, topic navigation, tools, courses, companies, gadgets, daily-life use cases, books, foundation models, global news, rankings and issue archive. Do NOT copy its branding, visual design, article copy, images, logos or exact layout.

## Product identity

Name: Future Intelligence
Tagline: Understand the technology shaping tomorrow.
Positioning: AI news + analysis + explainers + tools + models + robotics + future technology + interactive stories + digital issues.

Visual character: **scientific editorial + cinematic + futuristic + restrained**.
Avoid crypto/hacker/cyberpunk clichés, excessive neon, giant gradients, noisy glassmorphism, random 3D objects and template-like landing-page sections.

## Visual system

- Background: near-black / deep charcoal
- Text: warm off-white
- Accent: electric cyan with restrained deep blue and subtle violet
- Thin borders and subtle surfaces
- Large editorial headlines
- Excellent reading width for article text
- Strong hierarchy and generous whitespace
- Images should feel cinematic and publication-grade
- Motion should support storytelling, never fight readability

Use a responsive type scale and spacing system. Do not overuse rounded cards.

## Primary navigation

Desktop navigation:
- Home
- Latest
- AI
- Future Tech
- Tools
- Models
- Companies
- Rankings
- Magazine
- Search
- Subscribe

Mobile: compact logo, search, menu.

## Homepage — exact experience

### 1. Cinematic hero

Full-viewport cinematic sequence using approximately **280–350 image frames** from our generated video.

Sequence story:

**VOID → DATA → NETWORK → BRAIN → AI → FUTURE**

The sequence is the signature of the website.

Implement with a sticky/pinned HTML canvas, not 350 `<img>` elements displayed simultaneously.

Assume assets are:

`/public/frames/0001.webp` through `/public/frames/0350.webp`

But make the following configurable:

```js
const FRAME_PATH = '/frames/';
const FRAME_COUNT = 350;
const FRAME_EXTENSION = 'webp';
```

Do not spread those constants throughout the application.

Canvas requirements:
- high-DPI rendering
- preserve aspect ratio
- cover viewport without stretching
- responsive resize handling
- requestAnimationFrame
- redraw only when target frame changes
- smooth scroll-to-frame mapping
- no layout thrashing
- clean event listener lifecycle

Preloading requirements:
- load first useful frames immediately
- progressive preload near the current frame
- cache a moving window of frames
- do not blindly decode every full-size image on mobile
- provide graceful fallback to a static keyframe when memory/network conditions are poor
- show a minimal editorial loading state such as “INITIALIZING THE FUTURE” with progress

Scroll mapping:
- hero section owns enough vertical height to give the sequence room to breathe
- sticky canvas stays pinned while the user scrolls
- scroll progress maps to frame index
- use a small smoothing factor / interpolation so tiny scroll changes do not create harsh frame jumps
- preserve exact final frame for transition into the magazine content

Hero overlay copy should transition with the sequence:

VOID: “Before intelligence, there was information.”
DATA: “Information began to move.”
NETWORK: “Connections created complexity.”
BRAIN: “Complexity became intelligence.”
AI: “Intelligence became programmable.”
FUTURE: “And intelligence began shaping civilization.”

Main headline at opening:
**THE FUTURE IS BEING BUILT NOW.**

Subheadline:
**A magazine about artificial intelligence and the technologies shaping tomorrow.**

Keep overlay copy sparse. No giant UI over the animation.

Respect `prefers-reduced-motion`: replace the sequence with one strong static keyframe plus a minimal opacity transition.

### 2. Latest stories

Create a real editorial feed from local data.

- one dominant lead story
- 3–6 secondary stories
- category labels
- author
- date
- reading time
- excerpt
- image
- article navigation

### 3. Frontier / featured stories

Large immersive editorial stories. Use varied layouts rather than identical cards.

### 4. Trending AI Tools

A compact discovery section with tool cards, scores/status labels and detail interactions.

### 5. Foundation Models / Under the Hood

Models directory preview with modality, focus and editorial status.

### 6. Future Technology

Robotics, quantum, BCI, autonomous systems, future computing.

### 7. Interactive Stories

Show a dedicated section for cinematic stories. The first is “The Rise of Intelligence”. Future stories can be placeholders, but opening/clicking a story must work.

### 8. AI 100 / Rankings

Show a compact ranked list with innovation, impact and momentum scores. Add tabs/filters that actually work on local data.

### 9. Magazine issues

Latest issue + archive preview. Clicking an issue opens its issue page/view.

### 10. Newsletter

Functional frontend-only form: validate email, show success state, update local in-memory “subscribers” count/state, and persist only for the current session if appropriate. Do not pretend an email was actually sent.

## Required routes/views

Implement a real SPA-style route system (or framework router if using Next.js/React Router):

- `/`
- `/latest`
- `/category/:slug`
- `/article/:slug`
- `/tools`
- `/tools/:id`
- `/models`
- `/models/:id`
- `/companies`
- `/companies/:id`
- `/rankings`
- `/magazine`
- `/magazine/:id`
- `/authors/:id`
- `/search`
- `/interactive`
- `/interactive/rise-of-intelligence`

Direct navigation to a route must not produce a blank screen.

## Article experience

Article pages should look editorial, not like a dashboard.

Structure:
- category
- large headline
- dek/subtitle
- author
- date
- reading time
- hero image
- reading progress indicator
- article body
- table of contents
- pull quote blocks
- inline media placeholders
- related stories
- “More from this topic”
- save/bookmark button
- share button with functional copy/share fallback or a visible “copied” state

Create at least 6–8 realistic local article records.

## Search

Build a global search experience over local JSON data.

Search across:
- article title
- excerpt
- category
- author
- tool name
- model name
- company name

Results should update as the user types, with debounce if useful.

Filters:
- All
- Articles
- Tools
- Models
- Companies
- Magazine

Show result counts and empty states.

## Bookmarks / saved stories

Add a bookmark button to article cards and article pages.

Frontend-only behavior:
- update instantly
- saved icon state changes
- saved stories can be viewed from a “Saved” area in the account/menu UI
- use localStorage for persistence only if suitable for the prototype
- never claim data is synced to a server

## Subscribe interaction

Subscribe CTA must work visually:
- validate email format
- loading state
- success state
- duplicate detection for current local data
- error state

Use a local mock subscription service module such as:

`src/lib/mockStore.js`

Keep the interface similar to a future async API:

```js
subscribe(email)
search(query)
saveArticle(articleId)
getArticles()
getIssue(issueId)
```

These functions should return Promises where appropriate so future API replacement is easy.

## Local mock backend illusion

There is NO backend.

Make it feel like there is one by creating a clean local repository/data layer:

```text
src/
  data/
    articles.json
    tools.json
    models.json
    companies.json
    rankings.json
    issues.json
    authors.json
    site-config.json
  lib/
    mockStore.js
    search.js
    bookmarks.js
```

The UI should call the data layer, not import random objects into every component.

Use asynchronous mock functions with small realistic delays only where it improves the product feel. Do NOT add delays everywhere; the site should still feel fast.

Centralize state where appropriate.

## Components

Suggested component system:

```text
components/
  Header
  MobileMenu
  SearchOverlay
  HeroSequence
  HeroStoryLabels
  SectionHeader
  ArticleCard
  FeaturedStory
  ToolCard
  ModelCard
  CompanyCard
  RankingList
  IssueCard
  AuthorByline
  BookmarkButton
  ShareButton
  NewsletterForm
  LoadingState
  EmptyState
  Footer
```

Avoid giant monolithic components.

## Data

Use the provided temporary JSON files as the initial local data source.

The data must be easy to replace later.

Do not use Lorem Ipsum.

Use editorial-quality placeholder copy about AI and future technology. Clearly keep content data separate from presentation.

## Article categories

Primary:
- AI News
- Generative AI
- AI Agents
- Foundation Models
- Machine Learning
- AI Research
- AI Tools
- Robotics
- Humanoid Robots
- Quantum Computing
- Future Computing
- Brain-Computer Interfaces
- Autonomous Systems
- AI Infrastructure
- AI Companies

## Magazine issue system

Create a magazine archive page with covers, dates, titles and featured stories.

Each issue page should show:
- cover
- issue title
- date
- editor’s note
- feature stories
- table of contents
- read issue CTA

The “Read issue” interaction can open an attractive frontend-only issue viewer with pages/sections driven by local data.

## Rankings

Create an AI 100 page.

Features:
- ranking number
- entity name
- type
- innovation score
- impact score
- momentum score
- category filter
- sort control

Changing filters/sort must update visible rows.

## Interactions

Every visible actionable element should work.

Examples:
- navigation changes route/view
- search opens
- menu opens/closes
- bookmarks toggle
- share produces feedback
- filters work
- sort works
- issue cards open
- tool/model/company cards open detail views
- “show more” reveals additional data or navigates
- newsletter validates and shows success/error states
- ranking tabs work
- article cards open articles
- breadcrumb links work
- back/forward browser navigation should remain sensible

NEVER include a button that looks functional but is intentionally dead.

If a feature cannot truly connect to a backend, implement a transparent local mock interaction instead.

## Performance

The biggest performance risk is the image sequence.

Optimize aggressively:
- WebP/AVIF support
- responsive frame variants if available
- progressive loading
- frame cache/window
- decode images asynchronously when possible
- requestAnimationFrame
- avoid rendering hidden content unnecessarily
- lazy-load below-the-fold media
- avoid huge JS bundles
- keep third-party dependencies minimal
- clean up observers and event listeners

Do not let the cinematic hero make normal article browsing laggy.

## Accessibility

- semantic HTML
- one logical H1 per page where appropriate
- keyboard accessible buttons/links
- visible focus
- `aria-label` for icon-only controls
- descriptive alt text
- reduced-motion mode
- proper color contrast
- no information conveyed by color alone

## SEO-ready frontend

Even without a backend, structure pages with:
- semantic headings
- meaningful page titles
- meta descriptions via the framework's metadata mechanism
- canonical-friendly routes
- article structured data placeholders if supported by the framework

Do not fabricate real publication claims, statistics, users or company relationships.

## Mobile experience

The mobile layout is not a shrunken desktop.

Hero:
- keep the cinematic sequence
- reduce frame preload window
- use smaller frame assets if available
- maintain readable overlay copy

Content:
- single-column editorial reading
- horizontal scrollers only where necessary
- touch-friendly controls
- no horizontal page overflow

## Error handling

Provide polished states for:
- frame load failure
- missing article
- empty search
- missing issue
- invalid route
- newsletter validation failure

The site should never show a blank page.

## Development ergonomics

Put all configurable values in one place where practical:
- site name
- hero frame count
- frame path
- categories
- theme accent
- issue list

Use clean comments only where the behavior is not obvious.

Do not over-engineer.

## Acceptance criteria

The implementation is successful only when all of these are true:

1. The site looks like a premium AI magazine, not a SaaS landing page.
2. The cinematic hero scrolls smoothly through the 280–350 frame sequence.
3. The hero tells the visual story VOID → DATA → NETWORK → BRAIN → AI → FUTURE.
4. Frames are loaded intelligently and do not freeze the page.
5. Search actually searches the local dataset.
6. Category filters actually filter.
7. Bookmarks actually toggle and persist appropriately.
8. Ranking controls actually work.
9. Magazine issue cards open issue views.
10. Article cards open article views.
11. Tool/model/company cards open detail views.
12. Newsletter interaction has real validation and feedback.
13. Every visible button has a meaningful action.
14. Mobile works.
15. Reduced-motion mode works.
16. There are no dead-end routes or blank pages.
17. All mock/backend-like behavior is isolated behind a replaceable local data layer.
18. No backend, database, authentication server or API is required for the prototype.

## Build priority

Build in this exact order:

PHASE 1 — shell + theme + routing + local data layer
PHASE 2 — cinematic canvas hero and frame loader
PHASE 3 — homepage editorial sections
PHASE 4 — article/category/search experiences
PHASE 5 — tools/models/companies/rankings
PHASE 6 — magazine issues + interactive story page
PHASE 7 — bookmarks/share/newsletter local interactions
PHASE 8 — accessibility, mobile, performance and polish

Before considering the site complete, test every route and every interactive control.

The final product should feel as though a real editorial platform is running behind the interface—even though everything is currently powered by local mock data.
