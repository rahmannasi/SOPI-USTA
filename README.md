# SOPI USTA — Istanbul Home Technical Services

**Your Home, Our Job.**

A multilingual web application for **SOPI**, helping customers in Istanbul describe household maintenance issues and prepare service requests for submission through WhatsApp.

The website presents technical services for homes and workplaces, with a focus on Istanbul, Beşiktaş, and Ortaköy.

## Overview

Built with **React** and **TypeScript**, SOPI guides visitors from selecting a problem to reviewing their contact and location details.

The interface combines a navy, yellow, and white visual identity with responsive layouts and support for Turkish, Persian, and English.

## Features

- **Guided Service Requests** — Select a service category, specify the issue, and provide additional details.
- **Location & Contact Details** — Enter the service area, address, name, and phone number.
- **Request Review** — Review and edit information before opening WhatsApp.
- **WhatsApp Integration** — Generate a prefilled message containing the service request.
- **Photo Preview** — Select and preview a local photo of the issue.
- **Multilingual Interface** — Turkish, Persian, and English, with right-to-left layout support for Persian.
- **Saved Language Preference** — Remember the selected language between visits.
- **Mobile Contact Controls** — Quick access to phone calls and WhatsApp.
- **PWA Support** — Web app manifest, service worker, and installation guidance for supported browsers.

## Service Areas

The service catalog covers plumbing, electrical issues, gas, hot water, and minor repairs and maintenance.

## How Requests Work

1. Select the service category and specific problem.
2. Describe the issue.
3. Enter the service location and contact information.
4. Review the request.
5. Open WhatsApp with the generated message and send it manually.

Selected photos are previewed locally. They are not automatically attached to the WhatsApp message and must be added separately in WhatsApp.

The current request flow runs in the browser and does not store requests in a backend database.

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | React, TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Language management | React Context, localStorage |
| PWA | vite-plugin-pwa |

## Getting Started

### Prerequisites

- Node.js and npm compatible with the project's dependencies

### Installation

```bash
git clone https://github.com/rahmannasi/SOPI-USTA.git
cd SOPI-USTA
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Production Build

```bash
npm run build
```

The production files are generated in the `dist/` directory.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Generate the production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run TypeScript checks |

## Customization

- **Translations and service categories:** `src/translations.ts`
- **Contact constants:** `src/constants.ts`
- **WhatsApp destination and message generation:** `src/translations.ts`
- **Request workflow:** `src/components/ProblemSelector.tsx`
- **Brand assets:** `public/brand/`
- **Web app manifest:** `public/manifest.webmanifest`

## Deployment

Deploy the generated `dist/` directory to a static hosting provider with HTTPS for production PWA functionality.

Installation availability depends on the user's browser and device.

## Credits

**Project:** SOPI USTA  
**Design & Development:** [rahmannasi](https://github.com/rahmannasi)
