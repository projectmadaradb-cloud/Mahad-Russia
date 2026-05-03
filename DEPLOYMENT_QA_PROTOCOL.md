# QA and Deployment Protocol (Rule of Separation)

## 1) Extract and verify English business copy before production lock

Use this file to validate claims with legal/commercial stakeholders before freezing Russian UI copy.

### Homepage (English extraction)
- We supply Indian workforce to Russian mega-projects with rapid mobilization.
- We can produce an initial shortlist within 72 hours for large-volume requests.
- We have Gulf track record (Saudi Arabia, UAE, Qatar, Oman).
- We can structure waves up to 5,000 candidates aligned to project launch windows.
- We run centralized visa document operations for large labor batches.

### About (English extraction)
- Mahad Manpower operates as a B2B labor mobilization provider, not a retail staffing broker.
- Corporate management and compliance controls are centralized from India.
- Delivery is scalable from pilot groups to mass mobilization by project phase.
- Candidate identity, qualification, and legal-status checks are multi-layered.

### Compliance (English extraction)
- Mobilization is synchronized between Indian exit procedures and Russian labor architecture.
- We align labor waves with quota/permit constraints and project phases.
- We perform Indian exit-clearance document controls for outbound workers.
- We align onboarding with Russian EOR workflow.

### Construction Services (English extraction)
- We provide masons, steel fixers, and general labor by construction workload profile.
- Delivery model is KPI-based and aligned to schedule pressure of EPC/general contractors.

### Logistics Services (English extraction)
- We provide warehouse staff, pickers/loaders, and drivers for high-throughput operations.
- We scale workforce pools for peak SLA windows in distribution operations.

## 2) Environment variables on deployment platform (Vercel/AWS)
- NEXT_PUBLIC_SITE_URL=https://mahadmanpowers.ru
- NEXT_PUBLIC_SITE_HOST=mahadmanpowers.ru
- NEXT_PUBLIC_YANDEX_VERIFICATION=<token from Yandex Webmaster>
- YANDEX_INDEXNOW_KEY=<secure random key>
- YANDEX_INDEXNOW_KEY_LOCATION=https://mahadmanpowers.ru/<key>.txt

## 3) Build and launch gate
- npm install
- npm run typecheck
- npm run build
- Deploy to production domain

## 4) Yandex Webmaster post-launch
- Verify ownership with meta tag.
- Submit https://mahadmanpowers.ru/sitemap.xml manually.
- Request recrawl for core URLs: /, /about, /compliance, /services/construction, /services/logistics.
