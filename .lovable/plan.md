
# Plan: Update Registration Form with New Sections

## Summary
Rename "Apply" to "Register My Interest" throughout, expand the Safeguarding & DBS section, add Travel Experience section, Personal Interests checkboxes, open-ended questions, privacy/safeguarding notices, and a declaration with signature field.

## Changes

### 1. Rename Apply → Register My Interest
- **ApplyPage.tsx**: Update page title, heading, meta description, and submit button text
- **Navbar.tsx**: Change "Book Now" link text if it points to /apply (keep route as `/apply` to avoid breaking links, or rename to `/register` with a redirect)
- **Footer.tsx**: Update any "Apply" references

### 2. Expand Safeguarding & DBS Section (conditional, people-facing tracks)
Replace the current simple DBS/safeguarding fields with:
- "Do you hold a valid DBS check?" — Yes / No / In progress
- If yes: "What level?" — Basic / Standard / Enhanced
- If yes: "Expiry date of your DBS certificate" (date field)
- "Have you ever had a DBS application refused or had concerns raised?" — Yes / No (with reassurance note: "Answering yes does not automatically disqualify you")
- "Have you recently completed Safeguarding Training?" — Yes / No
- If no: "Are you willing to complete safeguarding training before your placement is confirmed?" — Yes / No (keep existing UNICEF training link)
- Remove old file upload fields (or keep them — will keep upload for DBS certificate if they have one)

### 3. Add Travel Experience Section (new, after dates/profession)
- "Have you travelled to India before?" — Yes / No
- "How comfortable are you with solo travel?" — scale 1–5 (radio buttons or slider)
- "Any specific concerns about travelling to India?" — textarea

### 4. Add Personal Interests & Sightseeing Preferences (new section)
Multi-select checkboxes for: History & heritage, Architecture, Shopping & markets, Street food, Restaurants & fine dining, Music & live performance, Theatre & arts, Spiritual & religious sites, Photography, Nature & wildlife, Wellness & yoga, Other (free text input appears when checked)

### 5. Add Open-Ended Questions (new section)
- "What do you hope to get out of your Meaningful Miles experience?" — textarea
- "Is there anything else you'd like us to know?" — textarea

### 6. Update Footer Notices & Declaration (before submit)
- **Privacy notice**: styled box with the provided privacy text
- **Safeguarding notice**: styled box with the provided safeguarding text
- **Declaration checkbox** (required): "I confirm that the information provided is accurate and complete…" (full text as provided)
- **Signature field**: text input labelled "Type your full name as your signature"
- Keep existing consent checkbox
- Submit button text → "Submit My Enquiry →"

### 7. State Management
Add new state variables for the additional fields (travelledIndia, soloComfort, interests array, dbsLevel, dbsExpiry, dbsRefused, willingSafeguarding, etc.)

### File touched
- `src/pages/ApplyPage.tsx` — main changes
- `src/components/Navbar.tsx` — rename link text if needed
