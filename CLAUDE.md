# NOTICO MAX — Marketing Website + Admin Portal

## Project Overview

This is the marketing website for **NOTICO MAX**, a productivity desktop app (Electron + Next.js). The website serves two purposes:

1. **Public marketing site** — landing page, features, pricing, download links
2. **Hidden admin portal** (`/admin/...`) — internal dashboard for managing users, resetting passwords, upgrading tiers, and customer support

The website connects to the **same MongoDB Atlas database** as the main NOTICO MAX app. It reads and writes to the same `users` collection.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS 4 + shadcn/ui (new-york style)
- **Database**: MongoDB Atlas via Mongoose
- **Auth**: NextAuth.js (for admin login only — the public site needs no auth)
- **Icons**: Lucide React
- **Deployment**: Vercel (or similar)

---

## shadcn/ui Configuration

Use the exact same configuration as the main app:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### Required packages

```bash
npm install class-variance-authority clsx tailwind-merge lucide-react next-themes radix-ui
npm install -D @tailwindcss/postcss tailwindcss tw-animate-css shadcn
```

### Utility function (`src/lib/utils.ts`)

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Theme / CSS Variables

Copy this exact globals.css to match the app's look and feel. Uses OKLCH color space.

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## Design Patterns

### Styling conventions used in the app

- Rounded corners: `rounded-xl` for cards, `rounded-lg` for buttons/inputs
- Card pattern: `rounded-xl border bg-card p-5` with `hover:border-primary/40 hover:shadow-md transition-all`
- Muted text: `text-muted-foreground`, smaller muted: `text-muted-foreground/60`
- Icon sizes: `h-3.5 w-3.5` for inline, `h-4 w-4` for standard, `h-12 w-12` for hero empty states
- Icon containers: `flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10`
- Spacing: `p-4 md:p-6` for page padding, `space-y-4` or `space-y-6` for vertical rhythm
- Grid layouts: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`
- Empty states: centered `flex flex-col items-center justify-center py-20 text-muted-foreground` with icon, heading, subtext, and CTA button
- Hover effects on action buttons: `opacity-0 group-hover:opacity-100 transition-opacity`
- Destructive actions: `hover:text-destructive`
- Toast notifications via `sonner` — use `toast.success()`, `toast.error()`
- Color accents: green for success (`text-green-500`), red for errors (`text-red-500`), orange for quizzes (`text-orange-500`, `bg-orange-500/10`)
- Progress bars: `h-1.5 rounded-full bg-muted overflow-hidden` with inner `bg-primary` div
- Score color coding: `>= 70% green, >= 50% yellow, < 50% red`
- Tables: `rounded-xl border overflow-hidden` wrapper, `bg-muted/40` header row, `hover:bg-muted/30 transition-colors` body rows

### shadcn/ui components available

Install these via `npx shadcn@latest add <name>`:

- badge, button, card, command, dialog, dropdown-menu, input, label, popover, select, separator, sheet, sonner, switch, tabs, textarea, tooltip

### Font

Uses Geist Sans and Geist Mono (Next.js built-in). Set via `--font-geist-sans` and `--font-geist-mono` CSS variables.

---

## MongoDB Connection

### Connection string

```
MONGODB_URI=<set-in-env-local-and-railway>
```

### Database connection pattern (`src/lib/mongodb.ts`)

```typescript
import mongoose from "mongoose";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache ?? { conn: null, promise: null };
if (!global.mongooseCache) global.mongooseCache = cached;

async function dbConnect(): Promise<typeof mongoose> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI not configured");
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, { serverSelectionTimeoutMS: 10000, connectTimeoutMS: 10000 })
      .then((m) => m)
      .catch(async (err) => {
        console.warn("[mongodb] First attempt failed, retrying...", err.message);
        await new Promise((r) => setTimeout(r, 2000));
        return mongoose.connect(uri, { serverSelectionTimeoutMS: 15000, connectTimeoutMS: 15000 });
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
```

---

## User Model (Mongoose)

This is the exact schema used in the NOTICO MAX app. The marketing website reads/writes the **same** collection.

```typescript
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  emailVerified?: Date;
  image?: string;
  hashedPassword?: string;
  tier: "free" | "pro";
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  stripePriceId?: string;
  stripeCurrentPeriodEnd?: Date;
  apiToken?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserDocument extends IUser, Document {}

const UserSchema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    emailVerified: { type: Date },
    image: { type: String },
    hashedPassword: { type: String },
    tier: { type: String, enum: ["free", "pro"], default: "free", index: true },
    stripeCustomerId: { type: String, sparse: true },
    stripeSubscriptionId: { type: String },
    stripePriceId: { type: String },
    stripeCurrentPeriodEnd: { type: Date },
    apiToken: { type: String, sparse: true, unique: true },
  },
  { timestamps: true }
);

const User: Model<IUserDocument> =
  mongoose.models.User || mongoose.model<IUserDocument>("User", UserSchema);

export default User;
```

### Key fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | User's display name |
| `email` | string | Unique, indexed |
| `hashedPassword` | string? | bcryptjs hash (12 rounds). Null for OAuth-only users |
| `tier` | `"free"` \| `"pro"` | Current subscription tier |
| `stripeCustomerId` | string? | Stripe customer ID |
| `stripeSubscriptionId` | string? | Active Stripe subscription |
| `stripeCurrentPeriodEnd` | Date? | When current billing period ends |
| `apiToken` | string? | Format: `ntk_{nanoid(32)}` |
| `createdAt` / `updatedAt` | Date | Auto-managed by Mongoose timestamps |

---

## Admin Portal API Routes to Build

The admin portal needs these API routes. All admin routes should be protected by a hardcoded admin secret or admin email whitelist (NOT the regular user auth).

### Authentication

Use a simple approach: check a `ADMIN_SECRET` environment variable or whitelist specific admin emails. Example:

```typescript
// src/lib/admin-auth.ts
import { NextResponse } from "next/server";

export function requireAdmin(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return null; // authorized
}
```

### API Routes

#### `GET /api/admin/users` — List all users
- Query params: `?page=1&limit=20&search=email@example.com&tier=free|pro`
- Returns: `{ users: IUser[], total: number, page: number, totalPages: number }`
- Sort by `createdAt` descending (newest first)

#### `GET /api/admin/users/[id]` — Get single user
- Returns full user document (excluding hashedPassword)

#### `PATCH /api/admin/users/[id]` — Update user
- Body: `{ tier?: "free" | "pro", name?: string, email?: string }`
- Used for upgrading/downgrading tiers, editing user info

#### `POST /api/admin/users/[id]/reset-password` — Reset password
- Body: `{ newPassword: string }`
- Hash with bcryptjs (12 rounds), update `hashedPassword` field
- Only works for users with credential accounts (hashedPassword exists)

#### `DELETE /api/admin/users/[id]` — Delete user
- Permanently removes user from database
- Should also clean up related data (items, folders, shared notes)

#### `GET /api/admin/stats` — Dashboard stats
- Returns: `{ totalUsers: number, proUsers: number, freeUsers: number, newUsersToday: number, newUsersThisWeek: number, newUsersThisMonth: number }`

### Related Mongoose models the admin might query

These models exist in the app's database and can be read by the admin portal:

```typescript
// Items (notes, URLs, reminders)
// Collection: "items"
{
  clientId: string;
  userId: string;
  type: "note" | "url" | "reminder";
  title: string;
  content: string;
  url?: string;
  tags: string[];
  pinned: boolean;
  folderId?: string;
  deleted: boolean;
}

// Folders
// Collection: "folders"
{
  clientId: string;
  userId: string;
  name: string;
  color: string;
  deleted: boolean;
}

// SharedNotes
// Collection: "sharednotes"
{
  shareId: string;      // nanoid(12)
  itemClientId: string;
  userId: string;
  title: string;
  content: string;
  type: "note" | "url" | "reminder";
}

// SharedQuizzes
// Collection: "sharedquizzes"
{
  shareId: string;
  quizClientId: string;
  userId: string;
  name: string;
  questions: [{ question: string, options: [{ text: string, isCorrect: boolean }] }];
}
```

---

## Admin Portal Pages

### `/admin/login` — Admin login
- Simple password input that checks against `ADMIN_SECRET` env var
- Store auth token in localStorage or cookie
- Redirect to `/admin` on success

### `/admin` — Dashboard
- Stats cards: total users, pro users, free users, new signups (today/week/month)
- Recent signups table (last 10 users)

### `/admin/users` — User management
- Searchable, paginated table of all users
- Columns: Name, Email, Tier (badge), Created, Actions
- Search by name or email
- Filter by tier (All / Free / Pro)
- Click row to view user details

### `/admin/users/[id]` — User detail
- Full user info display
- Actions:
  - **Upgrade/Downgrade tier**: Toggle between free and pro
  - **Reset password**: Input new password, confirm, submit
  - **Delete user**: With confirmation dialog

---

## Marketing Website Pages

### `/` — Landing page
- Hero section with app name, tagline, download CTA
- Feature showcase (notes, study tools, sync, sharing)
- Pricing section (free vs pro)
- Download buttons (Windows, future: Mac)
- Footer with links

### `/pricing` — Pricing page
- Free tier vs Pro tier comparison
- Feature list for each
- CTA to download app

### `/download` — Download page
- Latest version download link
- System requirements
- Changelog/release notes

---

## Environment Variables

```env
MONGODB_URI=<set-in-env-local-and-railway>
ADMIN_SECRET=<choose-a-strong-secret>
NEXTAUTH_SECRET=<if-needed-for-admin-auth>
```

---

## Important Notes

- The admin portal must be **hidden** — no links to it from the public marketing pages. Access only via direct URL `/admin/login`.
- Never expose `hashedPassword` in API responses.
- When changing a user's tier, update the `tier` field directly. Do NOT touch Stripe fields unless also managing Stripe subscriptions.
- The marketing site is a **separate Next.js project** from the Electron app. It connects to the **same MongoDB database**.
- Use dark mode as default (matches the app's aesthetic). Support light mode toggle.
- The app logo is at `/logo.png` — include it in the marketing site's public folder.
