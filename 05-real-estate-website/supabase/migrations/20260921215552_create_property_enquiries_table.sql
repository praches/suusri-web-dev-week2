/*
# Create property_enquiries table (single-tenant, no auth)

1. New Tables
- `property_enquiries`
- `id` (uuid, primary key)
- `name` (text, not null) — the enquirer's full name
- `email` (text, not null) — the enquirer's email address
- `phone` (text) — optional phone number
- `property_id` (text) — the id of the property being enquired about
- `property_title` (text) — the title of the property (denormalized for display)
- `message` (text) — the enquiry message
- `preferred_date` (date) — optional preferred viewing date
- `status` (text, default 'pending') — enquiry status: pending, contacted, closed
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `property_enquiries`.
- Allow anon + authenticated INSERT (public enquiry form, no sign-in required).
- Allow anon + authenticated SELECT (so the frontend can confirm submission).
- No UPDATE or DELETE from the anon key — only server-side management.

3. Notes
- This is a single-tenant app with no sign-in screen, so policies use `TO anon, authenticated`.
- The enquiry form is publicly accessible; anyone can submit an enquiry.
- SELECT is open so the form can display a success confirmation; in production you may want to restrict SELECT to authenticated admin users only.
*/

CREATE TABLE IF NOT EXISTS property_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  property_id text,
  property_title text,
  message text,
  preferred_date date,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE property_enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON property_enquiries;
CREATE POLICY "anon_insert_enquiries" ON property_enquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_enquiries" ON property_enquiries;
CREATE POLICY "anon_select_enquiries" ON property_enquiries FOR SELECT
TO anon, authenticated USING (true);
