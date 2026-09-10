# Base Digital SaaS — JF Barbershop

## Goal

JF Barbershop is the first tenant of a reusable Base Digital SaaS. The public website and admin panel must use the same tenant data.

```text
Admin panel
   ↓
Authentication
   ↓
user.business_id
   ↓
PostgreSQL / Neon
   ↓
Public website
```

## Tenant model

Every business-owned record has a `business_id`.

```text
businesses
 ├── users
 ├── barbers
 ├── products
 ├── gallery_items
 └── services
```

This prevents building JF as a one-off application and lets Base Digital add another business without redesigning the data model.

## First release

Joel must be able to:

- log into `/admin`
- edit business information
- create/edit/delete barbers
- change barber phone numbers
- upload/change barber photos
- create/edit/delete products
- change product prices
- upload/change product photos
- hide/show products and barbers
- add/remove gallery photos
- see a preview/link to the public website

## Image storage

Images should live in object storage (Vercel Blob), while PostgreSQL stores only the resulting URL and metadata.

```text
Phone/PC → upload → Blob → image URL → PostgreSQL
```

## Public site

The public page must eventually stop using hardcoded arrays for barbers, products and gallery items. It should read active records for the current business slug.

## Future SaaS

Do not add subscriptions, billing or appointments yet. The schema is intentionally ready for future modules without making the first release unnecessarily complex.
