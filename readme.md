# 🚀 TypeScript Express Starter Pack

A clean and minimal starter template using **Express.js** with **TypeScript** — ready for deployment on both **Render** and **Vercel** using separate branches.

---

## 📦 Installation

```bash
npm install
````

## 🛠️ Development

```bash
npm run dev       # Start development server
npm run build     # Build the project
npm start         # Run in production
```

---

## 🌐 Deployment Setup

This project uses **two branches** for deployment:

| Branch   | Platform | Notes                    |
| -------- | -------- | ------------------------ |
| `main`   | Render   | Manual build command set |
| `vercel` | Vercel   | Auto-detected by Vercel  |

Both branches use the **same `.env` file**.
➡️ Refer to **`.env.example`** for required variables.

---

## 🔹 Vercel Deployment (for `vercel` branch)

1. Go to [Vercel Dashboard](https://vercel.com).
2. Click **“Add New Project”** and import your GitHub repo.
3. In **Settings → Git**, set:
   - **Production Branch:** `vercel`
4. In **Settings → Environment Variables**, add variables shown in `.env.example`.

✅ That’s it!  
Vercel will automatically detect the project type and handle installation, build, and start without any extra configuration.

---

## 🔹 Render Deployment (for `main` branch)

1. Go to [Render Dashboard](https://render.com).

2. Click **“New Web Service” → “Deploy from GitHub”**.

3. Select your repo and set **branch** to `main`.

4. Set the following:

   * **Build Command:**

     ```
     npm install && npm run build
     ```
   * **Start Command:**

     ```
     npm start
     ```

5. Under **Environment**, add variables as shown in `.env.example`.

✅ Render will build and start your app properly.

---

## 📁 Project Structure

```
ts-express-starter-pack/
├── src/
│   └── app.ts
├── .env              # Used in both branches
├── .env.example      # Example environment file
├── package.json
├── tsconfig.json
└── README.md
```
