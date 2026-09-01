# NeXus Digital — Backend

Lightweight Spring Boot REST API backend for the NeXus Digital business website.

**No database** — processes contact form submissions and logs them to the console.

## 🚀 Features

- `POST /api/contact` — Contact form submission endpoint
- `GET /api/health` — Health check
- Bean Validation (Jakarta) on all form fields
- Clean JSON error responses for validation failures
- CORS configured for React dev server (port 5173)
- Console logging of all enquiries

## 🧰 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Java | 17 | Language |
| Spring Boot | 3.2.5 | Web framework |
| Spring Web MVC | — | REST API |
| Spring Validation | — | Bean Validation (Jakarta) |
| Maven | 3.x | Build tool |

## 📁 Project Structure

```
backend/
├── src/
│   └── main/
│       ├── java/com/nexus/business/
│       │   ├── BusinessApplication.java   # Entry point
│       │   ├── config/
│       │   │   └── CorsConfig.java        # CORS configuration
│       │   ├── controller/
│       │   │   └── ContactController.java # REST endpoints
│       │   ├── model/
│       │   │   └── ContactRequest.java    # Request DTO
│       │   ├── response/
│       │   │   └── ApiResponse.java       # Response wrapper
│       │   └── service/
│       │       └── ContactService.java    # Business logic
│       └── resources/
│           └── application.properties    # Config
├── pom.xml
└── README.md
```

## ⚙️ Setup & Running

### Prerequisites

- Java 17+
- Maven 3.6+

### 1. Navigate to backend directory

```bash
cd backend
```

### 2. Start the Spring Boot server

```bash
mvn spring-boot:run
```

The server starts at **http://localhost:8080**

You'll see:
```
🚀 NeXus Digital Backend is running at http://localhost:8080
```

### 3. Build a JAR (optional)

```bash
mvn clean package
java -jar target/business-backend-1.0.0.jar
```

## 📡 API Documentation

### POST /api/contact

Submit a contact form enquiry.

**Request Body:**

```json
{
  "name": "Jane Smith",
  "email": "jane@company.com",
  "phone": "+91 98765 43210",
  "company": "ABC Corp",
  "subject": "Custom Software Development",
  "message": "We'd like to discuss building a custom ERP system for our business."
}
```

**Required fields:** `name`, `email`, `subject`, `message`
**Optional fields:** `phone`, `company`

**Success Response (200):**

```json
{
  "success": true,
  "message": "Your enquiry has been submitted successfully. We'll get back to you within 24 hours!"
}
```

**Validation Error Response (400):**

```json
{
  "success": false,
  "message": "Validation failed. Please check the highlighted fields.",
  "errors": {
    "email": "Please provide a valid email address",
    "message": "Message must be at least 10 characters"
  }
}
```

**Server Error Response (500):**

```json
{
  "success": false,
  "message": "An unexpected error occurred. Please try again."
}
```

---

### GET /api/health

Returns API status.

**Response (200):**

```json
{
  "success": true,
  "message": "NeXus Digital API is running"
}
```

## 🌐 CORS Configuration

Allowed origins (configured in `CorsConfig.java`):

- `http://localhost:5173` (Vite React dev server)
- `http://localhost:3000`
- `http://127.0.0.1:5173`

## 📋 Validation Rules

| Field | Validation |
|---|---|
| `name` | Required, 2–100 characters |
| `email` | Required, valid email format |
| `phone` | Optional, max 20 characters |
| `company` | Optional, max 100 characters |
| `subject` | Required, 3–150 characters |
| `message` | Required, 10–2000 characters |

## 🔒 No Database

This backend is intentionally database-free. Enquiries are logged to the server console. In a production deployment, you would add:

- `spring-boot-starter-mail` to send email notifications
- A message queue (e.g., RabbitMQ) to queue and process enquiries asynchronously
