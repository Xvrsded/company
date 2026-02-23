# Sanity Studio (standalone)

Ini adalah project Sanity Studio terpisah dari Next.js app.

## Setup

1. Masuk ke folder studio
2. Install dependency
3. Copy env example
4. Jalankan studio

```bash
cd sanity-studio
npm install
copy .env.example .env
npm run dev
```

## Seed content

```bash
npm run seed
```

Perintah ini import file `../sanity/seed/companyContent.ndjson` ke dataset `production`.
