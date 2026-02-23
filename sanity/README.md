# Sanity Studio drop-in template

Template ini menyiapkan schema `companyContent` yang kompatibel dengan loader pada project ini (`CMS_PROVIDER=sanity`).

## File yang disediakan

- `companyContent.schema.ts`
- `schemaTypes/index.ts`
- `sanity.config.ts`
- `sanity.cli.ts`
- `seed/companyContent.ndjson`
- `seed/README.md`

## Cara pakai di Sanity Studio v3

1. Copy seluruh isi folder `sanity/` ini ke root project Sanity Studio Anda.
2. Install dependency studio:

```bash
npm install sanity @sanity/vision
```

3. Isi env untuk studio (misal di `.env`):

```env
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

4. Jalankan studio, buat 1 document dengan type `companyContent`, lalu publish.
5. Isi env di website:
  - `CMS_PROVIDER=sanity`
  - `SANITY_PROJECT_ID=...`
  - `SANITY_DATASET=production`
  - `SANITY_API_VERSION=2025-02-01`
  - (opsional) `SANITY_READ_TOKEN=...`

## Quick seed import

Untuk konten awal instan, jalankan import seed (lihat detail di `seed/README.md`).

## Catatan query

Default query website:

```groq
*[_type == "companyContent"][0]{
  hero,
  metrics,
  features,
  storySteps,
  testimonials,
  cta
}
```

Anda bisa override dengan `SANITY_QUERY` jika perlu.
