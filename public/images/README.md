# Image Placement Instructions

## Logo Images
Place your RISC logo images in the following locations:

### Required Images:
- `public/images/logo/risc-logo-full.png` - Full logo with text (for header) ✅ PLACEHOLDER CREATED
- `public/images/logo/risc-logo-horizontal.png` - Alternative horizontal layout ✅ PLACEHOLDER CREATED
- `public/images/logo/risc-logo-icon.png` - Icon only (for favicon and footer) ✅ PLACEHOLDER CREATED

### Image Specifications:
- Format: PNG with transparent background
- Full logo: ~200x80px recommended
- Horizontal logo: ~300x60px recommended  
- Icon: ~64x64px recommended
- Optimize for web (compressed but high quality)

## Background Images
Place your landscape background image in:

### Required Image:
- `public/images/backgrounds/landscape-hero.jpg` - Kurdish landscape for hero sections ✅ PLACEHOLDER CREATED

### Image Specifications:
- Format: JPG
- Size: ~1920x600px recommended
- Optimize for web (compressed but high quality)
- Should work well with dark overlay for text readability

## Current Status
✅ **Placeholder images created** - Replace the placeholder files with your actual images
✅ **Favicon updated** - Now uses PNG logo icon instead of SVG
✅ **Components ready** - Logo and PageHero components are fully functional

## Usage
Once you replace the placeholder images with your actual images, the website will automatically:
- Use the logo in the header and footer
- Use the landscape as default hero background
- Allow customization through the CMS admin panel

## CMS Control
All images can be changed later through the admin panel at `/admin/`:
- Logo settings in "Impostazioni Sito"
- Background images in "Sezioni Homepage" and individual pages

## Next Steps
1. Replace placeholder images with your actual RISC logo and landscape
2. Test the website with `npm run build && npm run preview`
3. Customize through the CMS admin panel as needed
