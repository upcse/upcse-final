/*
  # Insert Initial Data

  1. Core Team Members
    - Insert three core team members with their details and flip card content
  2. Events
    - Insert upcoming ICSE national games event
  3. District Secretaries
    - Insert initial district secretaries for top UP districts
*/

-- Insert core team members
INSERT INTO core_team_members (name, designation, photo_url, flip_card_content, display_order) 
VALUES 
(
  'Shri Anandeshwar Panday',
  'General Secretary UPCSE',
  'storage/v1/object/public/core_team_members/1-ap.png',
  '{
    "positions": [
      "Treasurer - Indian Olympic association",
      "General secretary - South AHF",
      "President - Indian Hapkido Federation",
      "Standard committee member - Olympic council of Asia"
    ]
  }'::jsonb,
  1
),
(
  'Smt. Neelam Mishra',
  'TBA - UPCSE',
  'storage/v1/object/public/core_team_members/2-nm.png',
  '{
    "positions": [
      "Athlete",
      "International master''s athelete",
      "101+ International & National medals combined",
      "Social Worker",
      "Government Employee",
      "Ambassador - SVEEP and Beti Bachao Beti Padhao"
    ]
  }'::jsonb,
  2
),
(
  'Shri Pankaj Pandey',
  'TBA - UPCSE',
  'storage/v1/object/public/core_team_members/3-pp.png',
  '{
    "positions": [
      "National Player MPED"
    ]
  }'::jsonb,
  3
);

-- Insert upcoming event
INSERT INTO events (
  title,
  description,
  event_type,
  start_date,
  end_date,
  venue,
  registration_deadline,
  highlights
) 
VALUES (
  '24th ICSE national games',
  'National level sports competition organized by ICSE',
  'upcoming',
  '2025-04-24',
  '2025-04-29',
  'Madgaon, Goa',
  '2025-03-30',
  ARRAY[
    'A golden opportunity for selection in International games for Thailand, Europe & Nepal'
  ]
);

-- Insert district secretaries for top UP districts
INSERT INTO district_secretaries (name, district, photo_url, contact_number, email)
VALUES 
('John Doe', 'Lucknow', 'storage/v1/object/public/district_secretaries/lucknow.jpg', '+91 9876543210', 'lucknow@upcse.info'),
('Jane Smith', 'Kanpur', 'storage/v1/object/public/district_secretaries/kanpur.jpg', '+91 9876543211', 'kanpur@upcse.info'),
('Raj Kumar', 'Varanasi', 'storage/v1/object/public/district_secretaries/varanasi.jpg', '+91 9876543212', 'varanasi@upcse.info'),
('Priya Singh', 'Agra', 'storage/v1/object/public/district_secretaries/agra.jpg', '+91 9876543213', 'agra@upcse.info'),
('Amit Verma', 'Prayagraj', 'storage/v1/object/public/district_secretaries/prayagraj.jpg', '+91 9876543214', 'prayagraj@upcse.info'),
('Meera Gupta', 'Gorakhpur', 'storage/v1/object/public/district_secretaries/gorakhpur.jpg', '+91 9876543215', 'gorakhpur@upcse.info'),
('Suresh Kumar', 'Meerut', 'storage/v1/object/public/district_secretaries/meerut.jpg', '+91 9876543216', 'meerut@upcse.info'),
('Anita Sharma', 'Ghaziabad', 'storage/v1/object/public/district_secretaries/ghaziabad.jpg', '+91 9876543217', 'ghaziabad@upcse.info');

-- Insert sample certificates
INSERT INTO certificates (certificate_no, student_name, district, sport, event, year)
VALUES 
('UPCSE-2024-001', 'Rahul Kumar', 'Lucknow', 'Athletics', '100m Sprint', '2024'),
('UPCSE-2024-002', 'Priya Sharma', 'Kanpur', 'Swimming', '50m Freestyle', '2024'),
('UPCSE-2024-003', 'Amit Singh', 'Varanasi', 'Wrestling', 'Freestyle 65kg', '2024');

-- Insert sample gallery images
INSERT INTO gallery (image_url, caption, alt_text, display_order)
SELECT 
  'storage/v1/object/public/gallery/image_' || generate_series || '.jpg',
  'Sports Event ' || generate_series,
  'Sports activity photo ' || generate_series,
  generate_series
FROM generate_series(1, 48);

-- Insert sample news
INSERT INTO news (title, content, image_url)
VALUES 
(
  'UPCSE Announces State Games 2024',
  'Uttar Pradesh Council for Sports & Education is proud to announce the upcoming State Games 2024. The event will feature multiple sports disciplines and showcase talent from across the state.',
  'storage/v1/object/public/news/state-games-2024.jpg'
),
(
  'Success at National Championship',
  'UPCSE athletes shine at the National Championship, bringing home multiple medals across various sports categories.',
  'storage/v1/object/public/news/national-championship.jpg'
);