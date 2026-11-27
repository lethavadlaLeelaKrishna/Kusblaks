# Kubslaks

Kubslaks is a construction and engineering company website built with React and Vite. It presents the company's services, projects, reviews, contact options, quote and consultation forms, and client/admin dashboards.

## Features

- Responsive construction company website
- Residential, commercial, industrial, infrastructure, institutional, and modular service pages
- Portfolio and customer review sections
- Project enquiry, free quote, and consultation booking forms
- Content-aware site search
- Client login and project dashboard
- Admin dashboard for managing tasks, client credentials, contracts, and messages
- WhatsApp, email, and phone contact actions
- Lazy-loaded routes and reusable page layouts

## Technology Stack

- React 19
- Vite 8
- React Router 7
- Tailwind CSS 4
- Bootstrap 5
- Lucide React
- Font Awesome

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the local URL shown by Vite, normally `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint
```

## Application Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/services` | All services |
| `/services/residential` | Residential construction |
| `/services/commercial` | Commercial construction |
| `/services/industrial` | Industrial construction |
| `/services/infrastructure` | Infrastructure and civil engineering |
| `/services/institutional` | Institutional construction |
| `/services/modular` | Modular and prefabricated construction |
| `/about` | About the company |
| `/portfolio` | Projects and portfolio |
| `/reviews` | Customer reviews |
| `/quote` | Free quote request |
| `/consultation` | Consultation booking |
| `/contact` | Contact page |
| `/client-login` | Client sign-in |
| `/client-dashboard` | Client project dashboard |
| `/admin` | Admin dashboard |
| `/privacy` | Privacy policy |
| `/terms` | Terms and conditions |

## Project Structure

```text
src/
  components/       Shared header, footer, cursor, and calendar components
  layout/           Main application layout
  pages/            Route-level website pages and dashboards
  router/           React Router configuration
  assets/           Local images and visual assets
  App.jsx           Application root
  main.jsx          React entry point
  App.css
  index.css
public/             Public static files
```

## Data Storage

The current implementation uses browser storage, including `localStorage`, for demo client/admin data and dashboard state. It does not include a connected database or production authentication backend. Credentials and sensitive production data should not be stored in browser storage.

## Contact

- Address: Chinnna Kondrupadu, Guntur, Andhra Pradesh 522019, India
- Phone: +91 9010529521
- Email: kubslaks@gmail.com
