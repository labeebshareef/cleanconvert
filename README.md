# CleanConvert

**No BS. Just Image Tools.**

CleanConvert is a fast, privacy-respecting, and SEO-optimized image conversion and editing utility built with Next.js. The app is fully browser-side — no backend, no database, no uploads — designed for developers, designers, and power users who want instant, clutter-free image tools.

## 🚀 Features

- **Multi-Format Support**: Convert between JPG, PNG, WEBP, AVIF, BMP, TIFF, ICO, SVG formats
- **Batch Processing**: Process multiple images at once with ZIP file support
- **Image Editing**: Resize, crop, compress, and strip EXIF data
- **100% Private**: No uploads, no servers, no tracking - everything runs in your browser
- **Multiple Input Methods**: Drag & drop, clipboard paste, or file picker
- **Live Preview**: See changes in real-time before downloading
- **No Limits**: Process unlimited images with no file size restrictions

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5+ with App Router
- **Styling**: TailwindCSS
- **Components**: shadcn/ui
- **Image Processing**: browser-image-compression, Canvas API
- **File Handling**: JSZip for batch operations
- **Analytics**: Google Analytics (GA4)
- **Deployment**: Vercel (Edge optimized)

## 🏗️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/labeebshareef/cleanconvert.git
   cd cleanconvert
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
cleanconvert/
├── app/                    # Next.js App Router pages
│   ├── convert/           # Image conversion page
│   ├── resize/            # Image resizing page
│   ├── optimize/          # Image optimization page
│   ├── batch/             # Batch processing page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── image-converter.tsx
│   ├── image-resizer.tsx
│   └── ...
├── lib/                  # Utility functions
│   ├── image-processor.ts
│   └── zip-processor.ts
└── public/               # Static assets
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for optional configurations:

```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your-ga-id

# Google AdSense (optional)
NEXT_PUBLIC_ADSENSE_ID=your-adsense-id
```

### Core Web Vitals Optimization

The app is optimized for Core Web Vitals:
- **LCP**: < 2.5s (optimized images and fonts)
- **CLS**: < 0.1 (stable layout)
- **TBT**: < 200ms (efficient JavaScript)

## 🌐 SEO Features

- **Semantic HTML**: Proper heading structure and landmarks
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: JSON-LD for better search results

## 📱 Responsive Design

- **Mobile-first**: Optimized for mobile devices
- **Tablet Support**: Responsive layout for tablets
- **Desktop**: Full-featured desktop experience
- **Accessibility**: WCAG 2.1 AA compliant

## 🚀 Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/labeebshareef/cleanconvert)

Or manually:

1. Push to GitHub
2. Connect to Vercel
3. Deploy with Edge Runtime for optimal performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support and questions, please open an issue on GitHub or contact through the project repository.

---

**CleanConvert** - No BS. Just Image Tools. Zero Uploads. Zero Storage. Zero Clutter.