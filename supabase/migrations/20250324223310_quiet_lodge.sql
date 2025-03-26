/*
  # Initial Schema Setup for UPCSE Website

  1. Storage Setup
    - Create buckets for different asset types:
      - logos
      - gallery
      - core_team_members
      - news
      - events

  2. Tables
    - core_team_members
    - events
    - news
    - gallery
    - certificates
    - district_secretaries

  3. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated admin writes
*/

-- Create core_team_members table
CREATE TABLE IF NOT EXISTS core_team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  designation text NOT NULL,
  photo_url text NOT NULL,
  flip_card_content jsonb NOT NULL,
  display_order int NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_type text NOT NULL CHECK (event_type IN ('upcoming', 'past')),
  start_date date NOT NULL,
  end_date date,
  venue text,
  registration_deadline date,
  highlights text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create news table
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  image_url text,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  caption text,
  alt_text text,
  display_order int,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create certificates table
CREATE TABLE IF NOT EXISTS certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  certificate_no text UNIQUE NOT NULL,
  student_name text NOT NULL,
  district text NOT NULL,
  sport text NOT NULL,
  event text NOT NULL,
  year text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create district_secretaries table
CREATE TABLE IF NOT EXISTS district_secretaries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  district text NOT NULL,
  photo_url text,
  contact_number text,
  email text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE core_team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE district_secretaries ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on core_team_members" ON core_team_members
  FOR SELECT TO public USING (true);

CREATE POLICY "Allow public read access on events" ON events
  FOR SELECT TO public USING (true);

CREATE POLICY "Allow public read access on news" ON news
  FOR SELECT TO public USING (true);

CREATE POLICY "Allow public read access on gallery" ON gallery
  FOR SELECT TO public USING (true);

CREATE POLICY "Allow public read access on certificates" ON certificates
  FOR SELECT TO public USING (true);

CREATE POLICY "Allow public read access on district_secretaries" ON district_secretaries
  FOR SELECT TO public USING (true);

-- Create policies for authenticated admin writes
CREATE POLICY "Allow authenticated admin writes on core_team_members" ON core_team_members
  FOR ALL TO authenticated USING (auth.uid() IN (SELECT id FROM auth.users WHERE role = 'admin'))
  WITH CHECK (auth.uid() IN (SELECT id FROM auth.users WHERE role = 'admin'));

CREATE POLICY "Allow authenticated admin writes on events" ON events
  FOR ALL TO authenticated USING (auth.uid() IN (SELECT id FROM auth.users WHERE role = 'admin'))
  WITH CHECK (auth.uid() IN (SELECT id FROM auth.users WHERE role = 'admin'));

CREATE POLICY "Allow authenticated admin writes on news" ON news
  FOR ALL TO authenticated USING (auth.uid() IN (SELECT id FROM auth.users WHERE role = 'admin'))
  WITH CHECK (auth.uid() IN (SELECT id FROM auth.users WHERE role = 'admin'));

CREATE POLICY "Allow authenticated admin writes on gallery" ON gallery
  FOR ALL TO authenticated USING (auth.uid() IN (SELECT id FROM auth.users WHERE role = 'admin'))
  WITH CHECK (auth.uid() IN (SELECT id FROM auth.users WHERE role = 'admin'));

CREATE POLICY "Allow authenticated admin writes on certificates" ON certificates
  FOR ALL TO authenticated USING (auth.uid() IN (SELECT id FROM auth.users WHERE role = 'admin'))
  WITH CHECK (auth.uid() IN (SELECT id FROM auth.users WHERE role = 'admin'));

CREATE POLICY "Allow authenticated admin writes on district_secretaries" ON district_secretaries
  FOR ALL TO authenticated USING (auth.uid() IN (SELECT id FROM auth.users WHERE role = 'admin'))
  WITH CHECK (auth.uid() IN (SELECT id FROM auth.users WHERE role = 'admin'));