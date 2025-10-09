# TalentFlow

A modern web application for managing job postings and candidates in a streamlined recruitment process. TalentFlow provides job boards, candidate tracking, and detailed profile management in an interactive and responsive interface.

---

## Features

### Job Management
- Create and manage job listings
- View all active jobs on a unified job board
- Access detailed job descriptions and related candidate lists

### Candidate Management
- View all candidates with their details and stages
- Access comprehensive candidate profiles with personal and application data
- Manage candidate pipelines using an intuitive Kanban-style board
- Filter and sort candidates by various parameters

### Authentication
- Secure login functionality for protected access

### Mock API & Data
- Integrated with Mock Service Worker (MSW) for simulating API endpoints
- Local database simulation for seamless frontend development

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React (with Vite) |
| **Language** | JavaScript (ES6+) |
| **Routing** | React Router |
| **Build Tool** | Vite |
| **Styling** | CSS Modules / Global CSS |
| **State Management** | Local state with lightweight global store |
| **API Simulation** | MSW (Mock Service Worker) |
| **Deployment** | Vercel |

---

## Project Structure

```
talentflow/
├── public/                 # Static assets and mock service worker
├── src/
│   ├── api/               # API abstraction for jobs and candidates
│   ├── assets/            # Static images or icons
│   ├── components/        # Reusable UI components (cards, filters, etc.)
│   ├── db/                # Local mock data source
│   ├── hooks/             # Custom React hooks
│   ├── mocks/             # MSW handlers and browser setup
│   ├── pages/             # Application pages
│   │   └── candidate/     # Candidate-related pages and views
│   ├── store/             # State management files
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # Main HTML file
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── vercel.json            # Deployment configuration
└── README.md              # Project documentation
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm, pnpm, or bun package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Subhadip006/talentflow.git
   cd talentflow
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

---

## Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

TalentFlow is configured for deployment on **Vercel**.

### Option 2: GitHub Integration

Connect your GitHub repository to Vercel for automatic deployments on every push.

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure and deploy

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Powered by [React](https://react.dev/)
- API mocking by [MSW](https://mswjs.io/)