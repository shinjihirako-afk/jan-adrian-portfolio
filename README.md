# Jan Adrian Gregorio — Portfolio App

A complete full-stack personal portfolio web application built with React, Node.js, Express.js, and MongoDB.

**Live site:** [https://janadriang.vercel.app](https://janadriang.vercel.app) *(replace after deployment)*  
**Backend API:** [https://jan-adrian-api.onrender.com](https://jan-adrian-api.onrender.com) *(replace after deployment)*

---

## ✨ Features

- **Hero Section** — Name, role, animated intro, CTA buttons
- **About Section** — Bio, stats, and highlights
- **Skills Section** — Organized by category with progress bars
- **Projects Section** — Cards fetched live from MongoDB API
- **Contact Form** — Validated form that POSTs to Express API, saved to MongoDB
- **Dark Mode** — Toggle with localStorage persistence
- **Responsive Design** — Mobile-first with Tailwind CSS
- **Email Notifications** — Optional Nodemailer integration for contact alerts
- **Smooth Scrolling** — Navbar with active section highlighting

---

## 🗂️ Project Structure

```
jan-adrian-portfolio/
├── frontend/                    # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Sticky nav with dark mode toggle
│   │   │   ├── Hero.jsx         # Landing section
│   │   │   ├── About.jsx        # Bio and stats
│   │   │   ├── Skills.jsx       # Tech stack
│   │   │   ├── Projects.jsx     # Projects from API
│   │   │   ├── Contact.jsx      # Contact form
│   │   │   └── Footer.jsx       # Footer with social links
│   │   ├── App.jsx              # Root component (dark mode state)
│   │   ├── main.jsx             # ReactDOM entry point
│   │   └── index.css            # Tailwind + custom styles
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/                     # Express + MongoDB API
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/
│   │   ├── projectController.js # Project CRUD logic
│   │   └── contactController.js # Contact form logic
│   ├── models/
│   │   ├── Project.js           # Project mongoose schema
│   │   └── Contact.js           # Contact mongoose schema
│   ├── routes/
│   │   ├── projectRoutes.js     # GET /api/projects
│   │   └── contactRoutes.js     # POST /api/contact
│   ├── seed/
│   │   └── seedProjects.js      # Sample data seeder
│   ├── server.js                # Express entry point
│   ├── .env.example
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

- **Node.js** v18 or higher — [Download](https://nodejs.org)
- **MongoDB** — [MongoDB Atlas (free)](https://www.mongodb.com/atlas) or local MongoDB
- **Git** — [Download](https://git-scm.com)

---

### 1. Clone the Repository

```bash
git clone https://github.com/janadriang/portfolio.git
cd jan-adrian-portfolio
```

---

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file by copying the example:

```bash
cp .env.example .env
```

Open `.env` and fill in your values:

```env
MONGODB_URI=mongodb+srv://youruser:yourpassword@cluster0.xxxxx.mongodb.net/portfolio
PORT=5000
FRONTEND_URL=http://localhost:5173

# Optional — for email notifications on contact form
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=your_email@gmail.com
```

> 💡 **MongoDB Atlas setup:** Go to [cloud.mongodb.com](https://cloud.mongodb.com) → Create free cluster → Get your connection string → Replace `youruser` and `yourpassword`.

Start the backend server:

```bash
npm run dev
```

The API will run at: `http://localhost:5000`

Test it by visiting: `http://localhost:5000/` — you should see a JSON response.

---

### 3. Seed Sample Project Data

```bash
# Still inside the backend folder
npm run seed
```

This populates MongoDB with 6 sample projects. You'll see:
```
✅ MongoDB Connected: ...
🗑️  Cleared existing projects.
✅ Seeded 6 projects successfully.
```

---

### 4. Set Up the Frontend

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file:

```bash
cp .env.example .env
```

The default `.env` contents work for local development:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend dev server:

```bash
npm run dev
```

The site will open at: `http://localhost:5173`

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Fetch all projects |
| GET | `/api/projects/:id` | Fetch one project by ID |
| POST | `/api/contact` | Submit a contact message |
| GET | `/` | Health check |

### Example: POST /api/contact

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hi! I'd love to connect."
}
```

**Success response:**
```json
{
  "success": true,
  "message": "Message received! I will get back to you soon.",
  "data": { "id": "...", "name": "John Doe", "email": "john@example.com", "createdAt": "..." }
}
```

---

## ☁️ Deployment

### Frontend → Vercel

1. Push your repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import your GitHub repo.
3. Set **Root Directory** to `frontend`.
4. Add environment variable:
   - `VITE_API_URL` = `https://your-backend.onrender.com/api`
5. Click **Deploy**.

Your site will be live at `https://your-project.vercel.app`.

---

### Backend → Render

1. Go to [render.com](https://render.com) → **New Web Service**.
2. Connect your GitHub repo.
3. Set **Root Directory** to `backend`.
4. **Build command:** `npm install`
5. **Start command:** `node server.js`
6. Add environment variables:
   - `MONGODB_URI` = your Atlas connection string
   - `PORT` = `5000`
   - `FRONTEND_URL` = `https://your-project.vercel.app`
7. Click **Create Web Service**.

---

### After Deploying Both

1. Copy your Render backend URL (e.g., `https://jan-portfolio-api.onrender.com`).
2. Update in Vercel settings: `VITE_API_URL` = `https://jan-portfolio-api.onrender.com/api`.
3. Redeploy frontend on Vercel.
4. Update `server.js` `allowedOrigins` array with your real Vercel URL.

---

## 🛠️ Customization

### Update Your Info

- **Name/Role/Bio:** Edit `frontend/src/components/Hero.jsx` and `About.jsx`
- **Skills:** Edit the `SKILL_CATEGORIES` array in `Skills.jsx`
- **Social links:** Search for `janadriang` across components and replace with your handles
- **Email:** Replace `janadriang@email.com` with your real email

### Add Real Projects

You can add projects via MongoDB Atlas UI or by editing `backend/seed/seedProjects.js` and re-running `npm run seed`.

### Enable Email Notifications

1. Create a Gmail App Password: Google Account → Security → 2FA → App Passwords.
2. Set `EMAIL_USER`, `EMAIL_PASS`, and `EMAIL_TO` in your backend `.env`.

---

## 🛡️ Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Fonts | Syne, DM Sans, JetBrains Mono |
| Email | Nodemailer (optional) |
| Deploy | Vercel (frontend), Render (backend) |

---

## 📄 License

MIT License — free to use and modify for your own portfolio.

---

Built with 💚 by **Jan Adrian Gregorio** — Quezon City, Philippines
