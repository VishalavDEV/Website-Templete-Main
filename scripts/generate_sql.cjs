const fs = require('fs');

const content = fs.readFileSync('frontend/src/services/api.js', 'utf8');

// 1. Categories
const catStart = content.indexOf('const MOCK_CATEGORIES = [');
const catEnd = content.indexOf('];', catStart) + 2;
const categories = eval(content.slice(catStart + 'const MOCK_CATEGORIES = '.length, catEnd - 1));

// 2. Templates
const tplStart = content.indexOf('const MOCK_TEMPLATES = [');
const tplEnd = content.indexOf('];', tplStart) + 2;
const rawTemplates = eval(content.slice(tplStart + 'const MOCK_TEMPLATES = '.length, tplEnd - 1));

console.log(`Parsed ${categories.length} categories and ${rawTemplates.length} templates.`);

// Category Slug to ID Map (1..22)
const categoryMap = {};
categories.forEach((cat, index) => {
  categoryMap[cat.slug] = index + 1;
});
// Aliases
categoryMap['buisness'] = categoryMap['business'];
categoryMap['cooperate'] = categoryMap['corporate'];
categoryMap['block-magazine'] = categoryMap['blog-magazine'];

// Helper to escape SQL single quotes
function esc(str) {
  if (str === null || str === undefined) return 'NULL';
  return `'${String(str).replace(/'/g, "''").replace(/\\/g, "\\\\")}'`;
}

// ----------------------------------------------------
// SCHEMA SQL
// ----------------------------------------------------
const schemaSql = `-- ====================================================================
-- Website Template Marketplace Database Schema
-- Database: website_template_db
-- ====================================================================

CREATE DATABASE IF NOT EXISTS website_template_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE website_template_db;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS template_tags;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS bookmarks;
DROP TABLE IF EXISTS download_records;
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS licenses;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS newsletter_subscribers;
DROP TABLE IF EXISTS contact_messages;
DROP TABLE IF EXISTS templates;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS users;
SET FOREIGN_KEY_CHECKS = 1;

-- 1. USERS TABLE
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(191) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'ROLE_USER',
    avatar_url VARCHAR(500) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_user_email (email),
    INDEX idx_user_role (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. CATEGORIES TABLE
CREATE TABLE categories (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(191) NOT NULL UNIQUE,
    description TEXT,
    icon VARCHAR(100) DEFAULT 'Folder',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_category_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. TEMPLATES TABLE
CREATE TABLE templates (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    category_id BIGINT NOT NULL,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(191) NOT NULL UNIQUE,
    description TEXT,
    detailed_description LONGTEXT,
    preview_image VARCHAR(500) NOT NULL,
    demo_url VARCHAR(500) NOT NULL,
    download_file VARCHAR(500) NOT NULL,
    github_url VARCHAR(500) NULL,
    author VARCHAR(150) DEFAULT 'TechnoSprint Studio',
    version VARCHAR(50) DEFAULT '1.0.0',
    bootstrap_version VARCHAR(50) DEFAULT 'React / Vite / CSS',
    template_type VARCHAR(20) DEFAULT 'FREE',
    price DECIMAL(10, 2) DEFAULT 0.00,
    pages_count INT DEFAULT 8,
    downloads_count INT DEFAULT 0,
    views INT DEFAULT 0,
    rating DOUBLE DEFAULT 5.0,
    status VARCHAR(50) DEFAULT 'PUBLISHED',
    responsive BOOLEAN DEFAULT TRUE,
    animated BOOLEAN DEFAULT TRUE,
    featured BOOLEAN DEFAULT FALSE,
    popular BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_template_category FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    INDEX idx_template_slug (slug),
    INDEX idx_template_category (category_id),
    INDEX idx_template_type (template_type),
    INDEX idx_template_featured (featured),
    INDEX idx_template_popular (popular),
    INDEX idx_template_rating (rating)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. TAGS TABLE
CREATE TABLE tags (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_tag_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. TEMPLATE_TAGS TABLE (Many-to-Many)
CREATE TABLE template_tags (
    template_id BIGINT NOT NULL,
    tag_id BIGINT NOT NULL,
    PRIMARY KEY (template_id, tag_id),
    CONSTRAINT fk_tt_template FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE CASCADE,
    CONSTRAINT fk_tt_tag FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. REVIEWS TABLE
CREATE TABLE reviews (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    template_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    user_name VARCHAR(150),
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_review_template FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE CASCADE,
    CONSTRAINT fk_review_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_review_template (template_id),
    INDEX idx_review_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. BOOKMARKS / FAVORITES TABLE
CREATE TABLE bookmarks (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    template_id BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uk_user_template_bookmark (user_id, template_id),
    CONSTRAINT fk_bookmark_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_bookmark_template FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE CASCADE,
    INDEX idx_bookmark_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. DOWNLOAD_RECORDS TABLE
CREATE TABLE download_records (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NULL,
    template_id BIGINT NOT NULL,
    ip_address VARCHAR(45) NULL,
    download_token VARCHAR(255) NULL,
    downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_download_template FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE CASCADE,
    CONSTRAINT fk_download_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_download_template (template_id),
    INDEX idx_download_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. ORDERS TABLE
CREATE TABLE orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    order_number VARCHAR(100) NOT NULL UNIQUE,
    total_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    status VARCHAR(50) NOT NULL DEFAULT 'COMPLETED',
    payment_method VARCHAR(50) DEFAULT 'CREDIT_CARD',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_order_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_order_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 10. ORDER_ITEMS TABLE
CREATE TABLE order_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    template_id BIGINT NOT NULL,
    price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    license_type VARCHAR(50) DEFAULT 'Standard',
    CONSTRAINT fk_oi_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    CONSTRAINT fk_oi_template FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 11. LICENSES TABLE
CREATE TABLE licenses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    template_id BIGINT NOT NULL,
    license_key VARCHAR(100) NOT NULL UNIQUE,
    license_type VARCHAR(50) DEFAULT 'Standard',
    status VARCHAR(50) DEFAULT 'ACTIVE',
    expires_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_license_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_license_template FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE CASCADE,
    INDEX idx_license_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 12. PROJECTS TABLE (User Saved Work / Workspace)
CREATE TABLE projects (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    template_id BIGINT NOT NULL,
    name VARCHAR(200) NOT NULL,
    status VARCHAR(50) DEFAULT 'In Progress',
    custom_settings LONGTEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_project_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_project_template FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE CASCADE,
    INDEX idx_project_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 13. NEWSLETTER_SUBSCRIBERS TABLE
CREATE TABLE newsletter_subscribers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(191) NOT NULL UNIQUE,
    status VARCHAR(50) DEFAULT 'SUBSCRIBED',
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_newsletter_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 14. CONTACT_MESSAGES TABLE
CREATE TABLE contact_messages (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(191) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message LONGTEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'UNREAD',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_contact_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
`;

// ----------------------------------------------------
// SEED SQL
// ----------------------------------------------------
let seedSql = `-- ====================================================================
-- Website Template Marketplace Seed Data
-- ====================================================================
USE website_template_db;

-- 1. USERS
-- Default Admin password: "adminpassword" -> BCrypt: $2a$10$eD2gP2g7K4i5q6n7Xv8/DeV1/XjY0.v/1W6uU0B5eXG9jVfB1o5Ie (or standard BCrypt hash)
-- BCrypt for "adminpassword": $2a$10$w8T0M4B0.U4dOa5P8Z/w7e0xK1GqKk1cI2yQk/H0p6pQ/4CqQp0.S
-- Let us use standard BCrypt hash for "adminpassword":
INSERT INTO users (id, name, email, password, role) VALUES
(1, 'Admin User', 'admin@technosprint.com', '$2a$10$7KgxGgU94/pYkW0J0vX2iuzl53R3UvE9iK84jG7f1M3g6H6m8/C7m', 'ROLE_ADMIN'),
(2, 'Master Admin', 'admin@admin.com', '$2a$10$7KgxGgU94/pYkW0J0vX2iuzl53R3UvE9iK84jG7f1M3g6H6m8/C7m', 'ROLE_ADMIN'),
(3, 'Demo User', 'user@technosprint.com', '$2a$10$7KgxGgU94/pYkW0J0vX2iuzl53R3UvE9iK84jG7f1M3g6H6m8/C7m', 'ROLE_USER');

-- 2. CATEGORIES (22 Categories)
INSERT INTO categories (id, name, slug, description, icon) VALUES
`;

const catRows = categories.map((c, i) => {
  const id = i + 1;
  const name = esc(c.name);
  const slug = esc(c.slug);
  const desc = esc(c.description || `${c.name} website templates for high converting web experiences.`);
  const icon = esc(c.icon || 'Folder');
  return `(${id}, ${name}, ${slug}, ${desc}, ${icon})`;
});
seedSql += catRows.join(',\n') + ';\n\n';

// 3. TEMPLATES (220 Templates)
seedSql += `-- 3. TEMPLATES (220 Templates)
INSERT INTO templates (
    id, category_id, name, slug, description, detailed_description,
    preview_image, demo_url, download_file, template_type, price,
    pages_count, downloads_count, bootstrap_version, version,
    status, rating, responsive, animated, featured, popular, views
) VALUES
`;

const templateRows = rawTemplates.map((t, idx) => {
  const id = idx + 1; // Sequential unique ID 1..220
  const catSlug = (t.category && t.category.slug) ? t.category.slug : 'business';
  const categoryId = categoryMap[catSlug] || 1;
  
  const name = esc(t.name);
  const slug = esc(t.slug);
  const desc = esc(t.description || `${t.name} clean responsive template.`);
  const detailedDesc = esc(t.detailedDescription || t.description || `${t.name} is a high-performance web template built with modern web technologies.`);
  const previewImg = esc(t.previewImage || '/images/placeholder.jpg');
  const demoUrl = esc(t.demoUrl || `/templates/${catSlug}/${t.slug}/index.html`);
  const downloadFile = esc(t.downloadFile || `/downloads/${t.slug}.zip`);
  const templateType = esc(t.templateType || 'FREE');
  const price = t.price !== undefined ? Number(t.price) : 0.00;
  const pagesCount = t.pagesCount || 8;
  const downloadsCount = t.downloadsCount || (1200 + (idx * 37) % 5000);
  const bootstrapVersion = esc(t.bootstrapVersion || 'React / Vite / CSS');
  const version = esc(t.version || '1.0.0');
  const status = esc(t.status || 'PUBLISHED');
  const rating = t.rating !== undefined ? Number(t.rating) : 4.8;
  const responsive = t.responsive !== false ? 'TRUE' : 'FALSE';
  const animated = t.animated !== false ? 'TRUE' : 'FALSE';
  const featured = (t.featured || idx % 10 === 0) ? 'TRUE' : 'FALSE';
  const popular = (t.popular || idx % 7 === 0) ? 'TRUE' : 'FALSE';
  const views = t.views || (3000 + (idx * 89) % 15000);

  return `(${id}, ${categoryId}, ${name}, ${slug}, ${desc}, ${detailedDesc}, ${previewImg}, ${demoUrl}, ${downloadFile}, ${templateType}, ${price}, ${pagesCount}, ${downloadsCount}, ${bootstrapVersion}, ${version}, ${status}, ${rating}, ${responsive}, ${animated}, ${featured}, ${popular}, ${views})`;
});

seedSql += templateRows.join(',\n') + ';\n\n';

// 4. SAMPLE REVIEWS
seedSql += `-- 4. SAMPLE REVIEWS
INSERT INTO reviews (template_id, user_id, user_name, rating, comment) VALUES
(1, 3, 'Sarah Jenkins', 5, 'Exceptional template! Extremely easy to customize and the animations are buttery smooth.'),
(2, 3, 'Michael Chang', 5, 'Super clean code structure. The responsive design adapted flawlessly to all our mobile screens.'),
(3, 3, 'Elena Rostova', 4, 'Great styling and typography. Saved our agency dozens of hours of design work.'),
(4, 3, 'David Miller', 5, 'One of the best marketplace templates we have used. The live preview matches the code exactly.'),
(5, 3, 'Amara Okafor', 5, 'Brilliant architecture and very fast load times. Highly recommend to everyone.');

-- 5. SAMPLE NEWSLETTER SUBSCRIBERS
INSERT INTO newsletter_subscribers (email, status) VALUES
('alex.designer@creativehub.io', 'SUBSCRIBED'),
('dev.marcus@frontendstack.dev', 'SUBSCRIBED'),
('hannah.growth@startupstudio.co', 'SUBSCRIBED');

-- 6. SAMPLE CONTACT MESSAGES
INSERT INTO contact_messages (name, email, subject, message, status) VALUES
('Liam Vance', 'liam.vance@agencyprime.com', 'Custom Enterprise Licensing Inquiry', 'Hello, we are looking to license several templates across 20+ client projects. Do you offer an agency bulk plan?', 'UNREAD'),
('Sophia Laurent', 'sophia.laurent@designlab.fr', 'Template Feature Request', 'Loved the photography template! Would love to see additional gallery filter options in the next version.', 'READ');
`;

// Write schema.sql, seed.sql, database.sql
fs.writeFileSync('schema.sql', schemaSql, 'utf8');
fs.writeFileSync('seed.sql', seedSql, 'utf8');
fs.writeFileSync('database.sql', schemaSql + '\n\n' + seedSql, 'utf8');

console.log('Successfully generated schema.sql, seed.sql, and database.sql!');
