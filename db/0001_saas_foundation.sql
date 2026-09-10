-- JF Barbershop / Base Digital SaaS foundation
-- PostgreSQL / Neon

create extension if not exists pgcrypto;

create table if not exists businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  logo_url text,
  description text,
  address text,
  city text,
  phone text,
  instagram text,
  google_maps_url text,
  opening_hours jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references businesses(id) on delete cascade,
  email text not null unique,
  name text,
  role text not null default 'owner' check (role in ('owner', 'admin', 'editor')),
  created_at timestamptz not null default now()
);

create table if not exists barbers (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references businesses(id) on delete cascade,
  name text not null,
  specialty text,
  phone text,
  image_url text,
  active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references businesses(id) on delete cascade,
  name text not null,
  description text,
  category text,
  price numeric(12,2) not null default 0,
  image_url text,
  active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists gallery_items (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references businesses(id) on delete cascade,
  image_url text not null,
  alt text,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references businesses(id) on delete cascade,
  name text not null,
  description text,
  price numeric(12,2),
  duration_minutes integer,
  active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists users_business_id_idx on users(business_id);
create index if not exists barbers_business_id_idx on barbers(business_id);
create index if not exists products_business_id_idx on products(business_id);
create index if not exists gallery_business_id_idx on gallery_items(business_id);
create index if not exists services_business_id_idx on services(business_id);

-- Seed inicial: el primer tenant del SaaS.
insert into businesses (name, slug, description, address, city)
values (
  'JF Barbershop',
  'jf-barbershop',
  'Barbería venezolana.',
  'Presidente Luis Sáenz Peña 338',
  'CABA, Buenos Aires'
)
on conflict (slug) do nothing;
