# Chronicle & Co. Magazine — Frontend

A fully responsive typography-first blog and magazine publishing web application built with React, TypeScript, Tailwind CSS, and React Router, designed to integrate with a Java Spring Boot REST API backend.

## Architecture & Folder Structure

```
/src
  ├── /components       # Reusable UI elements (Navbar, Footer, PostCard, PostSlider, Skeletons)
  ├── /pages            # Page components (Home, CategoryArchive, SingleArticle, Author, Search, About, Contact)
  ├── /services         # API service layer (supports mock fallback & Spring Boot REST API endpoints)
  ├── /data             # Mock JSON data structured to match Spring Boot REST DTOs
  ├── /types.ts         # TypeScript interfaces (Post, Author, Category, Comment)
  ├── App.tsx           # React Router root configuration
  └── index.css         # Tailwind CSS entry point
```

## Connecting to a Java Spring Boot Backend

By default, the application runs on high-end mock data with simulated network latency so it works instantly out of the box. To connect it to your Java Spring Boot REST backend:

1. **Configure Environment Variable**:
   Create a `.env` file in the root directory (or set in Cloud Run environment variables):
   ```env
   VITE_API_BASE_URL="http://localhost:8080"
   ```

2. **Expected Spring Boot REST Endpoints**:
   Implement the following REST controllers in your Spring Boot application:
   - `GET /api/posts` — Returns `List<Post>`
   - `GET /api/posts/slug/{slug}` — Returns single `Post`
   - `GET /api/posts/category/{categorySlug}` — Returns filtered `List<Post>`
   - `GET /api/posts/author/{authorId}` — Returns `List<Post>` by author
   - `GET /api/posts/search?q={query}` — Returns matching `List<Post>`
   - `GET /api/categories` — Returns `List<Category>`
   - `GET /api/authors` — Returns `List<Author>`
   - `GET /api/posts/{postId}/comments` — Returns `List<Comment>`
   - `POST /api/posts/{postId}/comments` — Accepts `{ content, authorName }`, returns saved `Comment`
   - `POST /api/newsletter/subscribe` — Accepts `{ email }`, returns success status
