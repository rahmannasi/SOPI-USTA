import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const BRAND_DIR = path.resolve('public/brand');
const ICONS_DIR = path.resolve('public/icons');
const PUBLIC_DIR = path.resolve('public');

fs.mkdirSync(BRAND_DIR, { recursive: true });
fs.mkdirSync(ICONS_DIR, { recursive: true });

// Colors
const DEEP_NAVY = '#0B1426';
const SOPI_YELLOW = '#FFC700';
const WHITE = '#FFFFFF';
const LIGHT_GRAY = '#F4F6F8';
const TEXT_GRAY = '#6B7280';

// Clean, iconic house with integrated open-end wrench
// House outline: Gable roof with rounded apex, straight eaves, walls, rounded bottom
// Integrated Wrench: Professional open-end combination wrench angled dynamically at 45 degrees
function getSymbolSvg(primaryColor = SOPI_YELLOW, bg = 'none') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" fill="none">
  ${bg !== 'none' ? `<rect width="100" height="100" rx="20" fill="${bg}"/>` : ''}
  <!-- House Outline -->
  <path d="M 50 14 
           L 84 42 
           V 81 
           C 84 85 81 88 77 88 
           H 23 
           C 19 88 16 85 16 81 
           V 42 
           Z" 
        fill="none" 
        stroke="${primaryColor}" 
        stroke-width="7.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
  
  <!-- Integrated Open-End Wrench (Technical 45-degree angle) -->
  <g transform="translate(50, 56) rotate(-45)">
    <!-- Wrench Handle with grip detail -->
    <rect x="-4" y="2" width="8" height="28" rx="4" fill="${primaryColor}" />
    <!-- Wrench Head -->
    <path d="M -13 -4 
             C -13 -12.5 -7 -18 0 -18 
             C 7 -18 13 -12.5 13 -4 
             C 13 1.5 10 6 5.5 8.5 
             L -5.5 8.5 
             C -10 6 -13 1.5 -13 -4 Z" 
          fill="${primaryColor}" />
    <!-- Open Jaw Cutout -->
    <path d="M -5 -19 
             L 5 -19 
             L 5 -8 
             L 0 -4 
             L -5 -8 Z" 
          fill="${bg === 'none' ? DEEP_NAVY : bg}" />
    <!-- Inner Handle Cutout / Detail Hole -->
    <circle cx="0" cy="22" r="2.2" fill="${bg === 'none' ? DEEP_NAVY : bg}" />
  </g>
</svg>`;
}

// Full Horizontal Logo (Symbol + SOPI Wordmark + Tagline)
function getFullLogoSvg({
  symbolColor = SOPI_YELLOW,
  textColor = DEEP_NAVY,
  taglineColor = TEXT_GRAY,
  bg = 'none',
  includeTagline = true
}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80" fill="none">
  ${bg !== 'none' ? `<rect width="320" height="80" rx="12" fill="${bg}"/>` : ''}
  
  <!-- Symbol (left side, 60x60 centered in 80x80) -->
  <g transform="translate(10, 10)">
    <!-- House Outline -->
    <path d="M 30 8 
             L 51 25.5 
             V 50 
             C 51 52.5 49 54.5 46.5 54.5 
             H 13.5 
             C 11 54.5 9 52.5 9 50 
             V 25.5 
             Z" 
          fill="none" 
          stroke="${symbolColor}" 
          stroke-width="4.8" 
          stroke-linecap="round" 
          stroke-linejoin="round"/>
    
    <!-- Integrated Wrench -->
    <g transform="translate(30, 35) rotate(-45)">
      <rect x="-2.5" y="1" width="5" height="17" rx="2.5" fill="${symbolColor}" />
      <path d="M -8 -2.5 
               C -8 -7.5 -4 -11 0 -11 
               C 4 -11 8 -7.5 8 -2.5 
               C 8 1 6 3.8 3.4 5.2 
               L -3.4 5.2 
               C -6 3.8 -8 1 -8 -2.5 Z" 
            fill="${symbolColor}" />
      <path d="M -3.2 -11.5 
               L 3.2 -11.5 
               L 3.2 -5 
               L 0 -2.5 
               L -3.2 -5 Z" 
            fill="${bg === 'none' ? (textColor === WHITE ? DEEP_NAVY : WHITE) : bg}" />
      <circle cx="0" cy="13.5" r="1.4" fill="${bg === 'none' ? (textColor === WHITE ? DEEP_NAVY : WHITE) : bg}" />
    </g>
  </g>

  <!-- Wordmark "SOPI" - Precise Geometric Vectors for Crisp Rendering Everywhere -->
  <g transform="translate(82, ${includeTagline ? '20' : '26'})" fill="${textColor}">
    <!-- S -->
    <path d="M 28 3.5 
             C 28 1.5 25 0 20 0 
             H 9 
             C 3.5 0 0 3.5 0 9 
             C 0 15 4 17.5 12 19 
             C 21 20.8 23.5 22.5 23.5 26.5 
             C 23.5 30.5 19.5 32.5 15 32.5 
             C 9.5 32.5 5 29.5 4.5 25 
             L -1.5 25 
             C -0.8 32.5 6 38 15 38 
             C 24 38 29.5 33 29.5 26 
             C 29.5 19 24.5 16.5 17 15 
             C 8.5 13.2 6 11.5 6 8 
             C 6 4.5 9.5 3 14 3 
             C 18.5 3 22 4.5 22.5 8 
             Z" />
    <!-- O -->
    <path d="M 48 0 
             C 37 0 31.5 8 31.5 19 
             C 31.5 30 37 38 48 38 
             C 59 38 64.5 30 64.5 19 
             C 64.5 8 59 0 48 0 Z 
             M 48 5.8 
             C 55 5.8 58.5 11 58.5 19 
             C 58.5 27 55 32.2 48 32.2 
             C 41 32.2 37.5 27 37.5 19 
             C 37.5 11 41 5.8 48 5.8 Z" />
    <!-- P -->
    <path d="M 68.5 0.5 
             H 84 
             C 91.5 0.5 96 4.5 96 11.5 
             C 96 18.5 91.5 22.5 84 22.5 
             H 74.5 
             V 37.5 
             H 68.5 
             Z 
             M 74.5 6 
             V 17 
             H 83.5 
             C 87.5 17 90 15 90 11.5 
             C 90 8 87.5 6 83.5 6 
             Z" />
    <!-- I -->
    <rect x="100.5" y="0.5" width="6" height="37" rx="1.5" />
  </g>

  <!-- Tagline: "Your Home, Our Job" -->
  ${includeTagline ? `
  <text x="83" y="66" 
        font-family="system-ui, -apple-system, 'Plus Jakarta Sans', 'Segoe UI', Roboto, sans-serif" 
        font-size="10.5" 
        font-weight="700" 
        letter-spacing="0.14em" 
        fill="${taglineColor}">
    YOUR HOME, OUR JOB
  </text>` : ''}
</svg>`;
}

async function build() {
  console.log('Generating SOPI brand SVG and PNG assets...');

  // 1. Primary light logo
  const logoLightSvg = getFullLogoSvg({
    symbolColor: SOPI_YELLOW,
    textColor: DEEP_NAVY,
    taglineColor: TEXT_GRAY,
    bg: 'none'
  });
  fs.writeFileSync(path.join(BRAND_DIR, 'sopi-logo.svg'), logoLightSvg);

  // 2. Primary dark logo
  const logoDarkSvg = getFullLogoSvg({
    symbolColor: SOPI_YELLOW,
    textColor: WHITE,
    taglineColor: '#94A3B8',
    bg: 'none'
  });
  fs.writeFileSync(path.join(BRAND_DIR, 'sopi-logo-dark.svg'), logoDarkSvg);

  // 3. Monochrome logo
  const logoMonoSvg = getFullLogoSvg({
    symbolColor: DEEP_NAVY,
    textColor: DEEP_NAVY,
    taglineColor: DEEP_NAVY,
    bg: 'none'
  });
  fs.writeFileSync(path.join(BRAND_DIR, 'sopi-logo-monochrome.svg'), logoMonoSvg);

  // 4. Symbol only
  const symbolSvg = getSymbolSvg(SOPI_YELLOW, 'none');
  fs.writeFileSync(path.join(BRAND_DIR, 'sopi-symbol.svg'), symbolSvg);

  // 5. Symbol dark
  const symbolDarkSvg = getSymbolSvg(SOPI_YELLOW, DEEP_NAVY);
  fs.writeFileSync(path.join(BRAND_DIR, 'sopi-symbol-dark.svg'), symbolDarkSvg);

  // 6. Favicon SVG
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <rect width="100" height="100" rx="22" fill="${DEEP_NAVY}"/>
  <!-- House Outline -->
  <path d="M 50 16 L 82 43 V 80 C 82 84 79 87 75 87 H 25 C 21 87 18 84 18 80 V 43 Z" 
        fill="none" stroke="${SOPI_YELLOW}" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Integrated Wrench -->
  <g transform="translate(50, 56) rotate(-45)">
    <rect x="-4" y="2" width="8" height="26" rx="4" fill="${SOPI_YELLOW}" />
    <path d="M -13 -4 C -13 -12 -7 -17.5 0 -17.5 C 7 -17.5 13 -12 13 -4 C 13 1.5 10 5.5 5.5 8 L -5.5 8 C -10 5.5 -13 1.5 -13 -4 Z" fill="${SOPI_YELLOW}" />
    <path d="M -5 -18 L 5 -18 L 5 -7 L 0 -3.5 L -5 -7 Z" fill="${DEEP_NAVY}" />
    <circle cx="0" cy="21" r="2.2" fill="${DEEP_NAVY}" />
  </g>
</svg>`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.svg'), faviconSvg);

  // 7. Raster PNGs with Sharp
  // A. favicon-32x32.png
  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'));

  // B. favicon-16x16.png
  await sharp(Buffer.from(faviconSvg))
    .resize(16, 16)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'favicon-16x16.png'));

  // C. apple-touch-icon.png (180x180)
  await sharp(Buffer.from(faviconSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));

  // D. PWA 192x192
  await sharp(Buffer.from(faviconSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(ICONS_DIR, 'icon-192.png'));

  // E. PWA 512x512
  await sharp(Buffer.from(faviconSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(ICONS_DIR, 'icon-512.png'));

  // F. Maskable 512x512 icon (needs safe zone margin: 15% padding around the symbol on deep navy solid canvas)
  const maskableSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="${DEEP_NAVY}"/>
  <!-- Symbol scaled into 72% safe zone (368x368 placed at x=72, y=72) -->
  <g transform="translate(72, 72) scale(3.68)">
    <path d="M 50 16 L 82 43 V 80 C 82 84 79 87 75 87 H 25 C 21 87 18 84 18 80 V 43 Z" 
          fill="none" stroke="${SOPI_YELLOW}" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/>
    <g transform="translate(50, 56) rotate(-45)">
      <rect x="-4" y="2" width="8" height="26" rx="4" fill="${SOPI_YELLOW}" />
      <path d="M -13 -4 C -13 -12 -7 -17.5 0 -17.5 C 7 -17.5 13 -12 13 -4 C 13 1.5 10 5.5 5.5 8 L -5.5 8 C -10 5.5 -13 1.5 -13 -4 Z" fill="${SOPI_YELLOW}" />
      <path d="M -5 -18 L 5 -18 L 5 -7 L 0 -3.5 L -5 -7 Z" fill="${DEEP_NAVY}" />
      <circle cx="0" cy="21" r="2.2" fill="${DEEP_NAVY}" />
    </g>
  </g>
</svg>`;
  await sharp(Buffer.from(maskableSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(ICONS_DIR, 'icon-maskable-512.png'));

  console.log('All brand & PWA assets generated successfully!');
}

build().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
