create table if not exists deal_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  property_address text,
  city text,
  asking_price text,
  lot_size text,
  zoning text,
  property_type text,
  name text,
  email text,
  phone text,
  notes text,
  status text not null default 'new'
);

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  email text,
  message text,
  status text not null default 'new'
);
