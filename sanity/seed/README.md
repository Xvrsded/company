# Sanity seed content

Gunakan file `companyContent.ndjson` untuk import cepat dokumen awal `companyContent`.

## Import ke dataset

Paling cepat dari project website ini:

```bash
npm run sanity:seed
```

Untuk dataset staging:

```bash
npm run sanity:seed:staging
```

Untuk dataset custom (mis. `qa`):

```bash
npm run sanity:seed:custom -- qa
```

Jika argumen dataset tidak diberikan, script memakai `SANITY_DATASET` dari env, lalu fallback ke `production`.

Manual command:

```bash
sanity dataset import ./seed/companyContent.ndjson production --replace
```

Atau jika folder seed ini Anda copy ke root studio:

```bash
sanity dataset import ./sanity/seed/companyContent.ndjson production --replace
```

## Catatan

- Flag `--replace` akan menimpa document dengan `_id` yang sama (`companyContent-main`).
- Setelah import, publish dokumen jika status masih draft.
- Website akan membaca dokumen ini via query default `*[_type == "companyContent"][0]{...}`.
