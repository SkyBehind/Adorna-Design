# 🎨 Image Setup Guide for Adorna Design

This guide explains how to replace the placeholder images with your actual artwork and photography.

## 📁 Directory Structure

Create the following directory structure in your project:

```
/public/
├── images/
│   ├── hero/
│   │   ├── jewelry-hero.jpg
│   │   ├── lippie-hero.jpg
│   │   ├── crafts-hero.jpg
│   │   └── artist-hero.jpg
│   ├── gallery/
│   │   ├── jewelry/
│   │   │   ├── earrings-01.jpg
│   │   │   ├── earrings-02.jpg
│   │   │   ├── earrings-03.jpg
│   │   │   ├── earrings-04.jpg
│   │   │   ├── earrings-05.jpg
│   │   │   └── earrings-06.jpg
│   │   ├── lippie/
│   │   │   ├── lip-balm-01.jpg
│   │   │   ├── lip-balm-02.jpg
│   │   │   ├── lip-balm-03.jpg
│   │   │   ├── soap-01.jpg
│   │   │   ├── soap-02.jpg
│   │   │   └── soap-03.jpg
│   │   └── crafts/
│   │       ├── stained-glass-01.jpg
│   │       ├── stained-glass-02.jpg
│   │       ├── furniture-01.jpg
│   │       ├── furniture-02.jpg
│   │       ├── garden-01.jpg
│   │       └── garden-02.jpg
│   └── artist/
│       ├── gina-portrait.jpg
│       ├── gina-working-01.jpg
│       ├── gina-working-02.jpg
│       └── studio-space.jpg
```

## 🖼️ Image Specifications

### **Hero Images (Carousel Backgrounds)**
- **Location**: `/public/images/hero/`
- **Dimensions**: 1920x1080px minimum (16:9 aspect ratio)
- **Format**: JPG (optimized for web)
- **Quality**: High resolution, museum-quality
- **Style**: Dramatic lighting, artistic composition

#### Required Files:
1. `jewelry-hero.jpg` - Showcase of jewelry pieces with dramatic lighting
2. `lippie-hero.jpg` - Lip balms and soaps in natural/botanical setting
3. `crafts-hero.jpg` - Stained glass or furniture piece as focal point
4. `artist-hero.jpg` - Portrait or artistic shot of Gina in her studio

### **Gallery Images**
- **Dimensions**: 800x600px minimum (4:3 aspect ratio)
- **Format**: JPG (optimized for web)
- **Quality**: High detail, professional photography
- **Style**: Clean backgrounds, good lighting, multiple angles

#### Jewelry Gallery (`/public/images/gallery/jewelry/`)
- `earrings-01.jpg` through `earrings-06.jpg`
- Show different styles, angles, and lighting
- Include close-ups of craftsmanship details

#### Lippie & Lather Gallery (`/public/images/gallery/lippie/`)
- `lip-balm-01.jpg` through `lip-balm-03.jpg` - Different lip balm varieties
- `soap-01.jpg` through `soap-03.jpg` - Handmade soap collection

#### Crafts Gallery (`/public/images/gallery/crafts/`)
- `stained-glass-01.jpg`, `stained-glass-02.jpg` - Stained glass pieces
- `furniture-01.jpg`, `furniture-02.jpg` - Custom furniture pieces
- `garden-01.jpg`, `garden-02.jpg` - Garden design work

### **Artist Section Images**
- **Location**: `/public/images/artist/`
- **Style**: Personal, authentic, showing the artist at work

#### Required Files:
1. `gina-portrait.jpg` - Professional headshot or artistic portrait
2. `gina-working-01.jpg` - Action shot of Gina creating jewelry
3. `gina-working-02.jpg` - Gina working on other crafts (soap making, etc.)
4. `studio-space.jpg` - Overview of the creative workspace

## 🔧 Technical Requirements

### **File Optimization**
- **File Size**: Keep under 500KB per image for web performance
- **Compression**: Use 85-90% quality for JPGs
- **Color Profile**: sRGB for web compatibility

### **Naming Convention**
- Use lowercase letters only
- Use hyphens (-) instead of spaces or underscores
- Be descriptive but concise
- Include numbers for series (01, 02, 03, etc.)

### **Image Quality Guidelines**
- **Lighting**: Even, professional lighting preferred
- **Background**: Clean, uncluttered backgrounds
- **Focus**: Sharp focus on the artwork
- **Color**: Accurate color representation
- **Composition**: Follow rule of thirds, interesting angles

## 📝 Code Updates Required

After placing your images, you'll need to update the image paths in these files:

### **1. Update Hero Images in App.tsx**
Replace the Unsplash URLs in the `carouselSections` array:

```typescript
// Around line 25-60 in src/App.tsx
const carouselSections: CarouselSection[] = [
  {
    id: 'jewelry',
    // Change this line:
    image: '/images/hero/jewelry-hero.jpg',
    // ... rest of the configuration
  },
  {
    id: 'lippie',
    image: '/images/hero/lippie-hero.jpg',
    // ... rest of the configuration
  },
  {
    id: 'crafts',
    image: '/images/hero/crafts-hero.jpg',
    // ... rest of the configuration
  },
  {
    id: 'about',
    image: '/images/hero/artist-hero.jpg',
    // ... rest of the configuration
  }
];
```

### **2. Update Gallery Images**
Update the image arrays in each component:

- **Gallery.tsx**: Update jewelry image paths
- **LippieAndLather.tsx**: Update lip balm and soap image paths  
- **OtherCrafts.tsx**: Update crafts image paths
- **About.tsx**: Update artist image paths

## 🚀 Deployment Notes

- Images in `/public/` are served statically by Vite
- No build step required for image updates
- Docker container will include all images in the build
- For updates, rebuild the Docker container: `./deploy.sh`

## 📱 Responsive Considerations

The website automatically handles responsive images, but ensure:
- Images look good when cropped to different aspect ratios
- Important elements are centered in the frame
- Text overlays don't obscure crucial details

## ✅ Quality Checklist

Before replacing images, ensure:
- [ ] All required files are present and correctly named
- [ ] Images meet technical specifications
- [ ] File sizes are optimized for web
- [ ] Colors are accurate and vibrant
- [ ] Composition showcases the artwork effectively
- [ ] Lighting is professional and even
- [ ] Backgrounds are clean and non-distracting

---

*Need help with image optimization or have questions about the setup? The images should reflect the exceptional quality and artistry of Adorna Design's work.*
