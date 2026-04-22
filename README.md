# Tyrone Ray Mateo — Portfolio

A modern, interactive personal portfolio built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**, backed by a secure **Node/Express + Nodemailer** contact API.

- Light / dark theme with system preference + `localStorage` persistence.
- Sections: Hero, About, Skills, Experience, Projects, Education, Resume, Contact.
- Resume preview modal + direct PDF download.
- Rate-limited, validated contact form that delivers to Gmail.
- Fully responsive, animated, accessibility-conscious, and deployment-ready.

---

## Project Structure

```
Portfolio/
├── client/     # Vite + React frontend
└── server/     # Express + Nodemailer backend
```

---

## 1. Prerequisites

- **Node.js** ≥ 18.17 (recommended 20 LTS)
- **npm** ≥ 9
- A **Gmail account** with **2-Step Verification enabled** (required to create an App Password).

### Generating a Gmail App Password

1. Visit <https://myaccount.google.com/security>.
2. Enable **2-Step Verification** if it isn't already on.
3. Go to **App passwords** (<https://myaccount.google.com/apppasswords>).
4. Create a new App Password (name it e.g. "Portfolio Contact").
5. Copy the 16-character password — this is `GMAIL_APP_PASSWORD`. **Never use your regular Gmail login password.**

---

## 2. Local Development

### Backend

```bash
cd server
cp .env.example .env          # on Windows PowerShell: Copy-Item .env.example .env
# Edit .env and fill in GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO
npm install
npm run dev                   # http://localhost:5000
```

Verify it's running: open <http://localhost:5000/api/health> — should return `{ "ok": true, ... }`.

### Frontend

```bash
cd client
cp .env.example .env.local    # on Windows PowerShell: Copy-Item .env.example .env.local
npm install
npm run dev                   # http://localhost:5173
```

The Vite dev server proxies `/api/*` to the backend, so the contact form works out of the box.

### Optional: add a profile photo

Drop a square JPG at `client/public/profile.jpg` (1:1 ratio works best). The Hero section falls back to a "TR" monogram if no image is present.

---

## 3. Customization

| What                 | Where                                             |
| -------------------- | ------------------------------------------------- |
| Name, bio, socials   | `client/src/data/profile.ts`                      |
| Navigation items     | `client/src/data/navigation.ts`                   |
| Projects (add/edit)  | `client/src/data/projects.ts`                     |
| Skills + proficiency | `client/src/data/skills.ts`                       |
| Experience timeline  | `client/src/data/experience.ts`                   |
| Education + certs    | `client/src/data/education.ts`                    |
| Resume PDF           | `client/public/resume.pdf` (replace this file)    |
| Theme colors         | `client/tailwind.config.js` + `src/styles/globals.css` |

### Adding a new project

Open `client/src/data/projects.ts` and append an entry:

```ts
{
  id: 'my-new-project',
  title: 'My New Project',
  description: 'What it does, why it matters, what you learned.',
  stack: ['React', 'Node.js', 'PostgreSQL'],
  year: '2026',
  image: '/projects/my-new-project.png', // drop image into client/public/projects/
  links: { github: 'https://github.com/...', live: 'https://...' },
}
```

---

## 4. Production Builds

```bash
# Frontend
cd client && npm run build     # output: client/dist

# Backend
cd server && npm run build && npm start     # output: server/dist
```

---

## 5. Deployment

### Frontend → Vercel (recommended)

1. Push the repo to GitHub.
2. Create a new Vercel project; set **Root Directory** to `client`.
3. Vercel auto-detects Vite. Build command `npm run build`, output `dist`.
4. Add env var: `VITE_API_URL = https://<your-backend-url>/api`.

### Frontend → Netlify

- Base directory: `client`, Build command: `npm run build`, Publish directory: `client/dist`.
- Env var: `VITE_API_URL`.

### Backend → Render (free tier)

1. Create a new **Web Service** from your GitHub repo.
2. **Root Directory:** `server`.
3. **Build Command:** `npm install && npm run build`.
4. **Start Command:** `npm start`.
5. Add environment variables:
   - `NODE_ENV=production`
   - `PORT=10000` (Render assigns this via `$PORT`; Express reads it automatically)
   - `CLIENT_ORIGIN=https://<your-frontend-url>`
   - `GMAIL_USER=your.email@gmail.com`
   - `GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx`
   - `CONTACT_TO=tyroneraymateo2003@gmail.com`

### Backend → Railway

Similar to Render. Set root to `server`, run `npm run build`, start with `npm start`, add the same env vars.

### After deploying

- On Vercel, set `VITE_API_URL` to the live backend URL (e.g., `https://portfolio-api.onrender.com/api`) and redeploy.
- On the backend, ensure `CLIENT_ORIGIN` matches the deployed frontend origin exactly (no trailing slash).

---

## 6. Security Notes

- `helmet` adds strict default HTTP headers.
- `cors` only allows requests from origins listed in `CLIENT_ORIGIN`.
- `express-rate-limit` caps `/api/contact` at **5 requests per 15 minutes per IP**.
- `express-validator` enforces field types and length limits.
- A honeypot `website` field silently traps naive bots.
- Nodemailer uses a Gmail **App Password** (not your login), and secrets are never committed (`.env` is gitignored).

---

## 7. Performance

- Tailwind JIT purges unused CSS; final stylesheet is ~10 KB gzipped.
- Vite code-splits React and Framer Motion into separate chunks.
- Images use `loading="lazy"` and proper `alt` text.
- Smooth scroll, focus rings, and `prefers-reduced-motion` support are built in.

---

## 8. Scripts Reference

### client/

| Command           | What it does                        |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Vite dev server at `:5173`          |
| `npm run build`   | Type-check + production build       |
| `npm run preview` | Preview the production build        |

### server/

| Command           | What it does                        |
| ----------------- | ----------------------------------- |
| `npm run dev`     | `tsx watch` with hot reload         |
| `npm run build`   | Compile TypeScript to `dist/`       |
| `npm start`       | Run compiled server                 |

---

## License

Personal project — feel free to fork and adapt for your own portfolio.
