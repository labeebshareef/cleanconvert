export interface ConversionFAQ {
  question: string;
  answer: string;
}

export interface ConversionData {
  slug: string;
  sourceFormat: string;
  targetFormat: string;
  sourceLabel: string;
  targetLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  subtitle: string;
  whyTitle: string;
  whyIntro: string;
  benefits: string[];
  howToSteps: string[];
  comparisonTitle: string;
  sourceDescription: string;
  targetDescription: string;
  faqs: ConversionFAQ[];
  featureList: string[];
}

export const conversions: Record<string, ConversionData> = {
  'jpg-to-png': {
    slug: 'jpg-to-png',
    sourceFormat: 'jpg',
    targetFormat: 'png',
    sourceLabel: 'JPG',
    targetLabel: 'PNG',
    title: 'Convert JPG to PNG Online Free - No Upload',
    metaTitle: 'Convert JPG to PNG Online Free - No Upload',
    metaDescription:
      'Convert JPG to PNG format instantly with our free online converter. No uploads required, 100% browser-based. Add transparency support, preserve quality. Fast JPG to PNG conversion.',
    keywords: [
      'convert JPG to PNG',
      'JPG to PNG converter',
      'JPEG to PNG',
      'free image converter',
      'online JPG to PNG',
      'add transparency to JPG',
    ],
    h1: 'Convert JPG to PNG Online Free',
    subtitle:
      'Convert JPG images to PNG format instantly. Perfect for adding transparency or ensuring lossless quality. No uploads, completely free.',
    whyTitle: 'Why Convert JPG to PNG?',
    whyIntro:
      'PNG format offers lossless compression and transparency support, making it ideal for logos, graphics with text, and images that need transparent backgrounds. Convert your JPG files to PNG to:',
    benefits: [
      'Add transparency support for web graphics',
      'Preserve image quality without compression artifacts',
      'Create logos and graphics with transparent backgrounds',
      'Maintain crisp text and sharp edges in graphics',
    ],
    howToSteps: [
      'Upload your JPG files using the converter above',
      'The output format is automatically set to PNG',
      'Click "Convert" to process your images',
      'Download your converted PNG files',
    ],
    comparisonTitle: 'JPG vs PNG: Key Differences',
    sourceDescription:
      'Best for photographs with many colors. Uses lossy compression for smaller file sizes but doesn\'t support transparency.',
    targetDescription:
      'Best for graphics, logos, and images with text. Uses lossless compression and supports transparency, but creates larger files.',
    faqs: [
      {
        question: 'Does converting JPG to PNG improve image quality?',
        answer:
          'Converting JPG to PNG preserves the current quality and prevents further quality loss from re-compression. However, it cannot restore detail already lost during the original JPG compression.',
      },
      {
        question: 'Will the file size increase when converting JPG to PNG?',
        answer:
          'Yes, PNG files are typically larger than JPG because PNG uses lossless compression. The tradeoff is perfect quality preservation and transparency support.',
      },
      {
        question: 'Can I add a transparent background after converting to PNG?',
        answer:
          'The conversion produces a PNG with the original background intact. To make backgrounds transparent, you would need an image editor. However, the PNG format now supports transparency if you edit it later.',
      },
    ],
    featureList: [
      'Convert JPG to PNG',
      'Preserve image quality',
      'Add transparency support',
      'Batch JPG to PNG conversion',
      'No file uploads required',
      'Privacy-focused processing',
    ],
  },

  'jpg-to-webp': {
    slug: 'jpg-to-webp',
    sourceFormat: 'jpg',
    targetFormat: 'webp',
    sourceLabel: 'JPG',
    targetLabel: 'WEBP',
    title: 'Convert JPG to WEBP Free — Reduce Size 60%',
    metaTitle: 'Convert JPG to WEBP Free — Reduce Size 60%',
    metaDescription:
      'Convert JPG to WEBP format and reduce file sizes by up to 60% while keeping excellent quality. Free online JPG to WEBP converter. No uploads, browser-based.',
    keywords: [
      'convert JPG to WEBP',
      'JPG to WEBP converter',
      'reduce JPG size',
      'WEBP format',
      'image compression',
      'free WEBP converter',
    ],
    h1: 'Convert JPG to WEBP Online Free',
    subtitle:
      'Convert JPG images to WEBP format for better web performance. Reduce file sizes by up to 60% while maintaining excellent quality.',
    whyTitle: 'Why Convert JPG to WEBP?',
    whyIntro:
      'WEBP is a modern image format developed by Google that provides superior compression to JPG while maintaining quality. Benefits include:',
    benefits: [
      'Reduce file sizes by 25-60% compared to JPG',
      'Faster website loading and improved Core Web Vitals',
      'Better SEO rankings due to improved page speed',
      'Supported by all modern browsers',
      'Both lossy and lossless compression options',
    ],
    howToSteps: [
      'Upload your JPG images using the converter above',
      'WEBP is selected as the output format',
      'Adjust quality (recommended: 80-90% for photos)',
      'Click "Convert" to process your images',
      'Download your optimized WEBP files',
    ],
    comparisonTitle: 'JPG vs WEBP Comparison',
    sourceDescription:
      'Universal compatibility, good compression, established format. Works on every device and browser.',
    targetDescription:
      'Superior compression, smaller files, supports transparency and animation. Ideal for web use with modern browser support.',
    faqs: [
      {
        question: 'How much smaller are WEBP files compared to JPG?',
        answer:
          'WEBP files are typically 25-60% smaller than equivalent JPG files at similar visual quality. The exact savings depend on the image content and quality settings.',
      },
      {
        question: 'Do all browsers support WEBP?',
        answer:
          'Yes, all modern browsers including Chrome, Firefox, Safari, and Edge support WEBP. Only very old browsers (IE11) lack support.',
      },
      {
        question: 'Is WEBP good for photography?',
        answer:
          'WEBP is excellent for web-displayed photography. It offers comparable visual quality to JPG at significantly smaller file sizes, making your photo galleries load faster.',
      },
    ],
    featureList: [
      'Convert JPG to WEBP',
      'Reduce file size up to 60%',
      'Maintain photo quality',
      'Batch conversion support',
      'No uploads required',
      'Adjustable quality settings',
    ],
  },

  'jpg-to-avif': {
    slug: 'jpg-to-avif',
    sourceFormat: 'jpg',
    targetFormat: 'avif',
    sourceLabel: 'JPG',
    targetLabel: 'AVIF',
    title: 'Convert JPG to AVIF Free - Next-Gen Format',
    metaTitle: 'Convert JPG to AVIF Free - Next-Gen Format',
    metaDescription:
      'Convert JPG to AVIF format for next-generation image compression. Reduce file sizes by 50% while maintaining superior quality. Free online JPG to AVIF converter, no uploads.',
    keywords: [
      'convert JPG to AVIF',
      'JPG to AVIF converter',
      'next-gen image format',
      'image compression',
      'reduce file size',
      'AVIF converter',
    ],
    h1: 'Convert JPG to AVIF Online Free',
    subtitle:
      'Convert JPG images to AVIF format for next-generation compression. Reduce file sizes by 50% while maintaining superior quality.',
    whyTitle: 'Why Convert JPG to AVIF?',
    whyIntro:
      'AVIF is the newest image format offering exceptional compression efficiency. Converting JPG to AVIF provides:',
    benefits: [
      '50% smaller file sizes compared to JPG',
      'Better image quality at the same file size',
      'Support for HDR and wide color gamut',
      'Superior compression for photographs',
      'Future-proof format for modern web',
    ],
    howToSteps: [
      'Upload your JPG files using the converter above',
      'Select AVIF as your output format',
      'Adjust quality settings (recommended: 50-70 for AVIF)',
      'Click "Convert" to process your images',
      'Download your optimized AVIF files',
    ],
    comparisonTitle: 'JPG vs AVIF: The Future of Images',
    sourceDescription:
      'Universal compatibility, good compression, established format, works everywhere.',
    targetDescription:
      'Next-gen compression, smaller files, better quality, HDR support, but limited older browser support.',
    faqs: [
      {
        question: 'How much smaller are AVIF files than JPG?',
        answer:
          'AVIF files are typically 50% smaller than JPG at the same visual quality. For some images, savings can reach 60-70%.',
      },
      {
        question: 'Which browsers support AVIF?',
        answer:
          'AVIF is supported by Chrome, Firefox, Safari 16+, and Edge. Browser support has grown rapidly since 2023.',
      },
      {
        question: 'Should I use AVIF or WEBP?',
        answer:
          'AVIF offers better compression than WEBP but takes longer to encode. Use AVIF for maximum quality and size optimization; use WEBP for broader compatibility and faster encoding.',
      },
    ],
    featureList: [
      'Convert JPG to AVIF',
      'Reduce file size by 50%',
      'Superior image quality',
      'Next-gen compression',
      'Batch JPG to AVIF conversion',
      'No file uploads required',
    ],
  },

  'png-to-jpg': {
    slug: 'png-to-jpg',
    sourceFormat: 'png',
    targetFormat: 'jpg',
    sourceLabel: 'PNG',
    targetLabel: 'JPG',
    title: 'Convert PNG to JPG Online Free — Smaller Files',
    metaTitle: 'Convert PNG to JPG Online Free — Smaller Files',
    metaDescription:
      'Convert PNG to JPG format to drastically reduce file sizes. Free online PNG to JPG converter with quality control. No uploads, instant browser-based conversion.',
    keywords: [
      'convert PNG to JPG',
      'PNG to JPG converter',
      'PNG to JPEG',
      'reduce PNG file size',
      'free image converter',
      'compress PNG',
    ],
    h1: 'Convert PNG to JPG Online Free',
    subtitle:
      'Convert PNG images to JPG format for dramatically smaller file sizes. Ideal for photos, email attachments, and social media.',
    whyTitle: 'Why Convert PNG to JPG?',
    whyIntro:
      'JPG format uses lossy compression to produce much smaller files than PNG, making it ideal when transparency is not needed:',
    benefits: [
      'Reduce file sizes by 70-90% for photos',
      'Faster email sending and social media uploads',
      'Universal compatibility across all devices',
      'Smaller storage footprint',
      'Faster website loading times',
    ],
    howToSteps: [
      'Upload your PNG files using the converter above',
      'Select JPG as the output format',
      'Set quality level (85-95% recommended for photos)',
      'Click "Convert" to process your images',
      'Download your smaller JPG files',
    ],
    comparisonTitle: 'PNG vs JPG: When Size Matters',
    sourceDescription:
      'Lossless compression, supports transparency, ideal for graphics, but produces large files for photographs.',
    targetDescription:
      'Lossy compression, much smaller files for photos, universal support, but no transparency and slight quality reduction.',
    faqs: [
      {
        question: 'Will I lose quality converting PNG to JPG?',
        answer:
          'JPG uses lossy compression so there is some quality reduction. At 90-95% quality the difference is virtually imperceptible for photographs. For graphics with text, quality loss may be more visible.',
      },
      {
        question: 'What happens to transparency when converting PNG to JPG?',
        answer:
          'JPG does not support transparency. Transparent areas in your PNG will be filled with a white background in the resulting JPG file.',
      },
      {
        question: 'What quality setting should I use?',
        answer:
          'For photos: 85-95% offers the best balance. For web images: 75-85%. For thumbnails or previews: 60-75%.',
      },
    ],
    featureList: [
      'Convert PNG to JPG',
      'Reduce file sizes 70-90%',
      'Adjustable quality settings',
      'Batch conversion support',
      'No file uploads required',
      'Instant browser processing',
    ],
  },

  'png-to-webp': {
    slug: 'png-to-webp',
    sourceFormat: 'png',
    targetFormat: 'webp',
    sourceLabel: 'PNG',
    targetLabel: 'WEBP',
    title: 'Convert PNG to WEBP Free - Reduce Size 80%',
    metaTitle: 'Convert PNG to WEBP Free - Reduce Size 80%',
    metaDescription:
      'Convert PNG to WEBP format and reduce file sizes by up to 80% while maintaining quality. Free online PNG to WEBP converter. No uploads, instant browser-based conversion.',
    keywords: [
      'convert PNG to WEBP',
      'PNG to WEBP converter',
      'reduce image size',
      'web optimization',
      'image compression',
      'free WEBP converter',
    ],
    h1: 'Convert PNG to WEBP Online Free',
    subtitle:
      'Convert PNG images to WEBP format for better web performance. Reduce file sizes by up to 80% while maintaining excellent quality.',
    whyTitle: 'Why Convert PNG to WEBP?',
    whyIntro:
      'WEBP is a modern image format that provides superior compression compared to PNG while maintaining excellent quality. Benefits include:',
    benefits: [
      'Reduce file sizes by 70-80% compared to PNG',
      'Faster website loading times',
      'Better SEO performance due to improved page speed',
      'Support for transparency (like PNG)',
      'Widely supported by modern browsers',
    ],
    howToSteps: [
      'Upload your PNG files using the converter above',
      'Select WEBP as your output format',
      'Adjust quality settings if needed (recommended: 80-90%)',
      'Click "Convert" to process your images',
      'Download your optimized WEBP files',
    ],
    comparisonTitle: 'PNG vs WEBP Comparison',
    sourceDescription:
      'Lossless compression, perfect quality, supports transparency, but larger file sizes.',
    targetDescription:
      'Excellent compression (lossy and lossless), smaller file sizes, supports transparency, ideal for web use.',
    faqs: [
      {
        question: 'Does WEBP support transparency like PNG?',
        answer:
          'Yes! WEBP supports alpha transparency just like PNG, so your transparent backgrounds will be preserved during conversion.',
      },
      {
        question: 'How much smaller will my files be?',
        answer:
          'WEBP files are typically 70-80% smaller than equivalent PNG files. A 2 MB PNG might become 400 KB in WEBP with similar visual quality.',
      },
      {
        question: 'Should I still keep PNG originals?',
        answer:
          'It is a good practice to keep your original PNG files for editing. Use WEBP versions for web deployment and distribution.',
      },
    ],
    featureList: [
      'Convert PNG to WEBP',
      'Reduce file size up to 80%',
      'Maintain image quality',
      'Support transparency',
      'Batch PNG to WEBP conversion',
      'No file uploads required',
    ],
  },

  'png-to-avif': {
    slug: 'png-to-avif',
    sourceFormat: 'png',
    targetFormat: 'avif',
    sourceLabel: 'PNG',
    targetLabel: 'AVIF',
    title: 'Convert PNG to AVIF Free — Best Compression',
    metaTitle: 'Convert PNG to AVIF Free — Best Compression',
    metaDescription:
      'Convert PNG to AVIF for the best possible image compression. Maintain transparency while reducing file sizes by up to 90%. Free, browser-based, no uploads.',
    keywords: [
      'convert PNG to AVIF',
      'PNG to AVIF converter',
      'AVIF compression',
      'next-gen image format',
      'reduce PNG size',
      'free AVIF converter',
    ],
    h1: 'Convert PNG to AVIF Online Free',
    subtitle:
      'Convert PNG images to AVIF for maximum compression. Reduce file sizes by up to 90% while preserving transparency and quality.',
    whyTitle: 'Why Convert PNG to AVIF?',
    whyIntro:
      'AVIF delivers the best compression ratios available, making it perfect for replacing large PNG files on the web:',
    benefits: [
      'Up to 90% smaller files compared to PNG',
      'Preserves alpha transparency',
      'HDR and wide color gamut support',
      'Dramatically faster page loads',
      'Future-proof next-generation format',
    ],
    howToSteps: [
      'Upload your PNG files using the converter above',
      'Select AVIF as the output format',
      'Set quality (50-70% recommended for AVIF)',
      'Click "Convert" to process',
      'Download your compressed AVIF files',
    ],
    comparisonTitle: 'PNG vs AVIF',
    sourceDescription:
      'Lossless, perfect quality, transparency, but very large file sizes. Best for editing and archiving.',
    targetDescription:
      'Next-gen compression, dramatically smaller, supports transparency, HDR, and animation. Best for web delivery.',
    faqs: [
      {
        question: 'Can AVIF keep transparency from my PNG?',
        answer:
          'Yes, AVIF fully supports alpha transparency. Your transparent backgrounds will be preserved during conversion.',
      },
      {
        question: 'Is AVIF better than WEBP for PNG conversion?',
        answer:
          'AVIF typically achieves 20-30% better compression than WEBP for the same visual quality. However, WEBP has slightly broader browser support.',
      },
      {
        question: 'How long does PNG to AVIF conversion take?',
        answer:
          'AVIF encoding is more computationally intensive than WEBP, so it takes slightly longer. Most images convert in under 5 seconds in your browser.',
      },
    ],
    featureList: [
      'Convert PNG to AVIF',
      'Up to 90% size reduction',
      'Preserve transparency',
      'HDR color support',
      'Batch conversion',
      'No file uploads needed',
    ],
  },

  'webp-to-jpg': {
    slug: 'webp-to-jpg',
    sourceFormat: 'webp',
    targetFormat: 'jpg',
    sourceLabel: 'WEBP',
    targetLabel: 'JPG',
    title: 'Convert WEBP to JPG Online Free',
    metaTitle: 'Convert WEBP to JPG Online Free',
    metaDescription:
      'Convert WEBP to JPG format for maximum compatibility across all devices and platforms. Free online WEBP to JPG converter. No uploads, instant browser-based conversion.',
    keywords: [
      'convert WEBP to JPG',
      'WEBP to JPG converter',
      'WEBP to JPEG',
      'image compatibility',
      'free WEBP converter',
      'universal format',
    ],
    h1: 'Convert WEBP to JPG Online Free',
    subtitle:
      'Convert WEBP images to JPG format for maximum compatibility. Perfect for social media, email, and older devices.',
    whyTitle: 'Why Convert WEBP to JPG?',
    whyIntro:
      'While WEBP offers excellent compression, JPG remains the most universally supported image format. Convert WEBP to JPG when you need:',
    benefits: [
      'Maximum compatibility across all devices and platforms',
      'Support for older browsers and software',
      'Social media uploads (some platforms prefer JPG)',
      'Email attachments and document embedding',
      'Print-ready images',
    ],
    howToSteps: [
      'Upload your WEBP files using the converter above',
      'Select JPG as your output format',
      'Adjust quality settings (recommended: 85-95% for photos)',
      'Click "Convert" to process your images',
      'Download your converted JPG files',
    ],
    comparisonTitle: 'WEBP vs JPG: When to Use Each',
    sourceDescription:
      'Best for web use, smaller file sizes, modern browsers, supports transparency.',
    targetDescription:
      'Best for universal compatibility, photography, print media, social media, and older systems.',
    faqs: [
      {
        question: 'Why do I need to convert WEBP to JPG?',
        answer:
          'Some email clients, older software, and social media platforms may not accept WEBP. JPG is universally supported everywhere.',
      },
      {
        question: 'Will the file size increase?',
        answer:
          'Yes, JPG files are typically larger than WEBP at the same quality. The tradeoff is universal compatibility.',
      },
      {
        question: 'What quality should I use for WEBP to JPG?',
        answer:
          '85-95% for high-quality photos. 70-85% for general web images. 95-100% for print preparation.',
      },
    ],
    featureList: [
      'Convert WEBP to JPG',
      'Universal compatibility',
      'Quality control options',
      'Batch WEBP to JPG conversion',
      'No file uploads required',
      'Privacy-focused processing',
    ],
  },

  'webp-to-png': {
    slug: 'webp-to-png',
    sourceFormat: 'webp',
    targetFormat: 'png',
    sourceLabel: 'WEBP',
    targetLabel: 'PNG',
    title: 'Convert WEBP to PNG Free — Lossless Quality',
    metaTitle: 'Convert WEBP to PNG Free — Lossless Quality',
    metaDescription:
      'Convert WEBP to PNG format for lossless quality and editing compatibility. Preserve transparency. Free online WEBP to PNG converter, no uploads required.',
    keywords: [
      'convert WEBP to PNG',
      'WEBP to PNG converter',
      'lossless conversion',
      'preserve transparency',
      'free image converter',
      'WEBP converter',
    ],
    h1: 'Convert WEBP to PNG Online Free',
    subtitle:
      'Convert WEBP images to PNG for lossless quality and maximum editing compatibility. Transparency is fully preserved.',
    whyTitle: 'Why Convert WEBP to PNG?',
    whyIntro:
      'PNG is the universal lossless format supported by every image editor. Convert WEBP to PNG when you need:',
    benefits: [
      'Full compatibility with all image editors',
      'Lossless format for further editing without quality loss',
      'Preserve transparency from WEBP originals',
      'Universal support in presentations and documents',
      'Print-ready output',
    ],
    howToSteps: [
      'Upload your WEBP images above',
      'PNG is set as the output format',
      'Click "Convert" to process',
      'Download your lossless PNG files',
    ],
    comparisonTitle: 'WEBP vs PNG',
    sourceDescription:
      'Modern format, tiny file sizes, great for web, but limited support in editing tools.',
    targetDescription:
      'Universal lossless format, perfect for editing, supports transparency, works everywhere.',
    faqs: [
      {
        question: 'Will I lose quality converting WEBP to PNG?',
        answer:
          'No. PNG is lossless, so it preserves every pixel from the WEBP source. No additional quality loss occurs.',
      },
      {
        question: 'Why are PNG files larger than WEBP?',
        answer:
          'PNG uses lossless compression which preserves every detail, resulting in larger files. WEBP uses lossy or more efficient lossless compression.',
      },
      {
        question: 'Is transparency preserved?',
        answer:
          'Yes, both WEBP and PNG support alpha transparency. Your transparent areas remain intact during conversion.',
      },
    ],
    featureList: [
      'Convert WEBP to PNG',
      'Lossless quality',
      'Preserve transparency',
      'Editor compatible',
      'Batch conversion',
      'No uploads needed',
    ],
  },

  'avif-to-jpg': {
    slug: 'avif-to-jpg',
    sourceFormat: 'avif',
    targetFormat: 'jpg',
    sourceLabel: 'AVIF',
    targetLabel: 'JPG',
    title: 'Convert AVIF to JPG Online Free',
    metaTitle: 'Convert AVIF to JPG Online Free',
    metaDescription:
      'Convert AVIF to JPG for universal compatibility. Free online AVIF to JPG converter. No uploads, browser-based, works on all devices.',
    keywords: [
      'convert AVIF to JPG',
      'AVIF to JPG converter',
      'AVIF to JPEG',
      'open AVIF file',
      'free AVIF converter',
      'AVIF compatibility',
    ],
    h1: 'Convert AVIF to JPG Online Free',
    subtitle:
      'Convert AVIF images to JPG for maximum device and software compatibility. Quick, free, and private.',
    whyTitle: 'Why Convert AVIF to JPG?',
    whyIntro:
      'AVIF is still gaining support across platforms. Convert to JPG when you need broad compatibility:',
    benefits: [
      'Share images with anyone, regardless of their device',
      'Upload to any social media platform',
      'Embed in documents and presentations',
      'Print without compatibility issues',
      'Open in any image viewer or editor',
    ],
    howToSteps: [
      'Upload your AVIF files above',
      'Select JPG as the output format',
      'Choose quality level (85-95% recommended)',
      'Click "Convert" to process',
      'Download your JPG files',
    ],
    comparisonTitle: 'AVIF vs JPG',
    sourceDescription:
      'Best compression, smallest files, HDR support, but requires modern browsers and software.',
    targetDescription:
      'Universal format, works everywhere, ideal for sharing and printing, mature ecosystem.',
    faqs: [
      {
        question: 'Why can\'t I open AVIF files on my computer?',
        answer:
          'AVIF is a newer format. Older operating systems and software may not have built-in support. Converting to JPG solves this instantly.',
      },
      {
        question: 'Will the file be much larger as JPG?',
        answer:
          'Yes, JPG at comparable visual quality will be larger than AVIF. This is the tradeoff for universal compatibility.',
      },
      {
        question: 'Does this work offline?',
        answer:
          'Our converter runs entirely in your browser, so after the page loads it can work without an internet connection.',
      },
    ],
    featureList: [
      'Convert AVIF to JPG',
      'Universal compatibility',
      'Quality control',
      'Batch conversion',
      'No uploads needed',
      'Works offline after load',
    ],
  },

  'avif-to-png': {
    slug: 'avif-to-png',
    sourceFormat: 'avif',
    targetFormat: 'png',
    sourceLabel: 'AVIF',
    targetLabel: 'PNG',
    title: 'Convert AVIF to PNG Free — Lossless Output',
    metaTitle: 'Convert AVIF to PNG Free — Lossless Output',
    metaDescription:
      'Convert AVIF to PNG for lossless quality and editing compatibility. Preserve transparency and detail. Free, no uploads, browser-based.',
    keywords: [
      'convert AVIF to PNG',
      'AVIF to PNG converter',
      'lossless AVIF conversion',
      'open AVIF as PNG',
      'free AVIF to PNG',
      'AVIF editor support',
    ],
    h1: 'Convert AVIF to PNG Online Free',
    subtitle:
      'Convert AVIF images to PNG for lossless quality, transparency support, and universal editor compatibility.',
    whyTitle: 'Why Convert AVIF to PNG?',
    whyIntro:
      'PNG provides a universal lossless format that every tool understands. Convert AVIF to PNG when:',
    benefits: [
      'Your image editor doesn\'t support AVIF',
      'You need lossless quality for further editing',
      'You want to preserve transparency',
      'You need to share with non-technical users',
      'You\'re preparing images for print',
    ],
    howToSteps: [
      'Upload your AVIF images above',
      'PNG is selected as the output',
      'Click "Convert"',
      'Download your lossless PNG files',
    ],
    comparisonTitle: 'AVIF vs PNG',
    sourceDescription:
      'Latest compression technology, tiny files, requires modern software support.',
    targetDescription:
      'Universal lossless format, transparency support, massive editor and tool compatibility.',
    faqs: [
      {
        question: 'Can I edit the PNG in Photoshop after conversion?',
        answer:
          'Absolutely. PNG is universally supported by Photoshop, GIMP, Figma, Canva, and every major image editor.',
      },
      {
        question: 'Is transparency preserved from AVIF to PNG?',
        answer:
          'Yes, both AVIF and PNG support full alpha transparency. Transparent regions are perfectly preserved.',
      },
      {
        question: 'Why is the PNG file so much larger?',
        answer:
          'PNG uses lossless compression which preserves every pixel. AVIF uses advanced lossy compression to achieve much smaller sizes.',
      },
    ],
    featureList: [
      'Convert AVIF to PNG',
      'Lossless output',
      'Transparency preserved',
      'Editor compatible',
      'Batch conversion',
      'No uploads required',
    ],
  },

  'bmp-to-jpg': {
    slug: 'bmp-to-jpg',
    sourceFormat: 'bmp',
    targetFormat: 'jpg',
    sourceLabel: 'BMP',
    targetLabel: 'JPG',
    title: 'Convert BMP to JPG Free — Shrink Files 95%',
    metaTitle: 'Convert BMP to JPG Free — Shrink Files 95%',
    metaDescription:
      'Convert BMP to JPG and reduce file sizes by up to 95%. Free online BMP to JPG converter. No uploads, instant browser-based conversion.',
    keywords: [
      'convert BMP to JPG',
      'BMP to JPG converter',
      'BMP to JPEG',
      'compress BMP',
      'reduce BMP size',
      'free BMP converter',
    ],
    h1: 'Convert BMP to JPG Online Free',
    subtitle:
      'Convert uncompressed BMP images to JPG and reduce file sizes by up to 95%. Fast, free, and private.',
    whyTitle: 'Why Convert BMP to JPG?',
    whyIntro:
      'BMP files are uncompressed and extremely large. Converting to JPG dramatically reduces file sizes:',
    benefits: [
      'Reduce file sizes by 90-95%',
      'Make images shareable via email and messaging',
      'Free up disk space',
      'Enable web publishing',
      'Maintain good photographic quality',
    ],
    howToSteps: [
      'Upload your BMP files above',
      'Select JPG as the output format',
      'Set quality level (85-95% for photos)',
      'Click "Convert"',
      'Download your compressed JPG files',
    ],
    comparisonTitle: 'BMP vs JPG',
    sourceDescription:
      'Uncompressed, pixel-perfect, huge file sizes, legacy format.',
    targetDescription:
      'Lossy compression, dramatically smaller, universal support, web-ready.',
    faqs: [
      {
        question: 'Why are BMP files so large?',
        answer:
          'BMP stores every pixel without compression. A single 12-megapixel photo can be over 36 MB as BMP but only 3-5 MB as JPG.',
      },
      {
        question: 'Will converting to JPG affect image quality?',
        answer:
          'At 90-95% quality, the visual difference is imperceptible for photographs. The file size reduction is dramatic.',
      },
      {
        question: 'Can I convert BMP screenshots to JPG?',
        answer:
          'Yes, though for screenshots with text, consider PNG instead for crisper results. JPG works well for photographs.',
      },
    ],
    featureList: [
      'Convert BMP to JPG',
      'Shrink files 95%',
      'Quality control',
      'Batch support',
      'No uploads',
      'Instant conversion',
    ],
  },

  'bmp-to-png': {
    slug: 'bmp-to-png',
    sourceFormat: 'bmp',
    targetFormat: 'png',
    sourceLabel: 'BMP',
    targetLabel: 'PNG',
    title: 'Convert BMP to PNG Free — Lossless Compression',
    metaTitle: 'Convert BMP to PNG Free — Lossless Compression',
    metaDescription:
      'Convert BMP to PNG for lossless compression and smaller files. Free online converter, no uploads. Reduce BMP file sizes without losing quality.',
    keywords: [
      'convert BMP to PNG',
      'BMP to PNG converter',
      'lossless BMP compression',
      'reduce BMP size',
      'free BMP to PNG',
      'compress BMP losslessly',
    ],
    h1: 'Convert BMP to PNG Online Free',
    subtitle:
      'Convert BMP images to PNG for lossless compression. Reduce file sizes while preserving every pixel of quality.',
    whyTitle: 'Why Convert BMP to PNG?',
    whyIntro:
      'PNG offers lossless compression that dramatically shrinks BMP files without losing a single pixel of quality:',
    benefits: [
      'Lossless compression — zero quality loss',
      'Significantly smaller files than BMP',
      'Add transparency support',
      'Web-ready format',
      'Universal editor and browser support',
    ],
    howToSteps: [
      'Upload your BMP files above',
      'PNG is set as the output',
      'Click "Convert"',
      'Download your compressed PNG files',
    ],
    comparisonTitle: 'BMP vs PNG',
    sourceDescription:
      'Uncompressed, no quality loss, but enormous file sizes. Legacy Windows format.',
    targetDescription:
      'Lossless compression, much smaller, transparency support, universal web format.',
    faqs: [
      {
        question: 'Is PNG conversion truly lossless from BMP?',
        answer:
          'Yes, PNG lossless compression preserves every pixel identically. The image will look exactly the same but the file will be much smaller.',
      },
      {
        question: 'How much smaller will my BMP become as PNG?',
        answer:
          'PNG files are typically 50-80% smaller than equivalent BMP files, depending on image content. Images with large areas of solid color compress extremely well.',
      },
      {
        question: 'Should I use PNG or JPG for my BMP files?',
        answer:
          'Use PNG for screenshots, graphics, and images with text. Use JPG for photographs where smaller file size is more important than pixel-perfect quality.',
      },
    ],
    featureList: [
      'Convert BMP to PNG',
      'Lossless compression',
      'Zero quality loss',
      'Transparency support',
      'Batch conversion',
      'No uploads needed',
    ],
  },

  'tiff-to-jpg': {
    slug: 'tiff-to-jpg',
    sourceFormat: 'tiff',
    targetFormat: 'jpg',
    sourceLabel: 'TIFF',
    targetLabel: 'JPG',
    title: 'Convert TIFF to JPG Free — Web-Ready Photos',
    metaTitle: 'Convert TIFF to JPG Free — Web-Ready Photos',
    metaDescription:
      'Convert TIFF to JPG for web-ready, shareable photos. Reduce large TIFF files to compact JPGs. Free, no uploads, browser-based.',
    keywords: [
      'convert TIFF to JPG',
      'TIFF to JPG converter',
      'TIFF to JPEG',
      'compress TIFF',
      'reduce TIFF size',
      'free TIFF converter',
    ],
    h1: 'Convert TIFF to JPG Online Free',
    subtitle:
      'Convert large TIFF files to compact, web-ready JPGs. Reduce file sizes while maintaining excellent photo quality.',
    whyTitle: 'Why Convert TIFF to JPG?',
    whyIntro:
      'TIFF files are designed for print and archiving but are impractical for sharing. Convert to JPG for:',
    benefits: [
      'Dramatically smaller file sizes',
      'Web and email compatibility',
      'Social media sharing',
      'Reduced storage requirements',
      'Universal device support',
    ],
    howToSteps: [
      'Upload your TIFF files above',
      'Select JPG as output format',
      'Set quality (90-95% for best results)',
      'Click "Convert"',
      'Download your JPG photos',
    ],
    comparisonTitle: 'TIFF vs JPG',
    sourceDescription:
      'Professional print format, very large files, lossless, supports layers and metadata.',
    targetDescription:
      'Universal photo format, compact, excellent quality-to-size ratio, web-ready.',
    faqs: [
      {
        question: 'Why are TIFF files so large?',
        answer:
          'TIFF often uses uncompressed or lossless compression for maximum quality. A single photo can be 20-50 MB or larger, especially from professional cameras and scanners.',
      },
      {
        question: 'Is TIFF to JPG conversion suitable for print work?',
        answer:
          'JPG at 95% quality is suitable for most print work. However, if your printer specifically requires TIFF, keep the originals for printing and use JPG for sharing.',
      },
      {
        question: 'Does this preserve EXIF data?',
        answer:
          'The conversion focuses on image data. For privacy, EXIF metadata may be stripped. Use our optimizer tool if you need EXIF control.',
      },
    ],
    featureList: [
      'Convert TIFF to JPG',
      'Massive size reduction',
      'Quality control',
      'Batch conversion',
      'No uploads',
      'Browser-based processing',
    ],
  },

  'tiff-to-png': {
    slug: 'tiff-to-png',
    sourceFormat: 'tiff',
    targetFormat: 'png',
    sourceLabel: 'TIFF',
    targetLabel: 'PNG',
    title: 'Convert TIFF to PNG Free — Lossless Web Format',
    metaTitle: 'Convert TIFF to PNG Free — Lossless Web Format',
    metaDescription:
      'Convert TIFF to PNG for lossless web-compatible images. Preserve quality while gaining browser support. Free, no uploads, browser-based.',
    keywords: [
      'convert TIFF to PNG',
      'TIFF to PNG converter',
      'lossless TIFF conversion',
      'TIFF for web',
      'free TIFF to PNG',
      'TIFF browser support',
    ],
    h1: 'Convert TIFF to PNG Online Free',
    subtitle:
      'Convert TIFF images to PNG for lossless web-compatible output. Preserve full quality and add browser support.',
    whyTitle: 'Why Convert TIFF to PNG?',
    whyIntro:
      'TIFF files are not web-compatible but PNG files are. Convert TIFF to PNG when:',
    benefits: [
      'Need lossless quality in a web-compatible format',
      'Want to display TIFF images on websites',
      'Require transparency support',
      'Need universal editor compatibility',
      'Want to preserve quality for further editing',
    ],
    howToSteps: [
      'Upload your TIFF files above',
      'PNG is selected as output',
      'Click "Convert"',
      'Download your PNG images',
    ],
    comparisonTitle: 'TIFF vs PNG',
    sourceDescription:
      'Professional format, very large, no browser support, supports layers and CMYK.',
    targetDescription:
      'Web-compatible, lossless, transparency support, smaller than TIFF, universal support.',
    faqs: [
      {
        question: 'Is the conversion from TIFF to PNG lossless?',
        answer:
          'Yes, PNG is a lossless format. All visual data from your TIFF is perfectly preserved.',
      },
      {
        question: 'Will the PNG file be smaller than TIFF?',
        answer:
          'Usually yes, sometimes significantly smaller due to PNG\'s efficient lossless compression compared to uncompressed TIFF.',
      },
      {
        question: 'Can browsers display TIFF images?',
        answer:
          'Most browsers cannot display TIFF files natively. Converting to PNG makes your images viewable in any web browser.',
      },
    ],
    featureList: [
      'Convert TIFF to PNG',
      'Lossless conversion',
      'Web compatible',
      'Transparency support',
      'Batch conversion',
      'No uploads needed',
    ],
  },

  'svg-to-png': {
    slug: 'svg-to-png',
    sourceFormat: 'svg',
    targetFormat: 'png',
    sourceLabel: 'SVG',
    targetLabel: 'PNG',
    title: 'Convert SVG to PNG Free — Rasterize Vectors',
    metaTitle: 'Convert SVG to PNG Free — Rasterize Vectors',
    metaDescription:
      'Convert SVG vector graphics to PNG raster images. Set custom dimensions, preserve transparency. Free online SVG to PNG converter, no uploads.',
    keywords: [
      'convert SVG to PNG',
      'SVG to PNG converter',
      'rasterize SVG',
      'vector to raster',
      'free SVG converter',
      'SVG to image',
    ],
    h1: 'Convert SVG to PNG Online Free',
    subtitle:
      'Rasterize SVG vector graphics to PNG images. Preserve transparency and quality at any resolution.',
    whyTitle: 'Why Convert SVG to PNG?',
    whyIntro:
      'SVG is a vector format that not all platforms support. Convert SVG to PNG when:',
    benefits: [
      'Upload to platforms that don\'t accept SVG',
      'Use in documents, presentations, and emails',
      'Create fixed-resolution versions of logos',
      'Share with users who can\'t view SVG',
      'Preserve transparency in a raster format',
    ],
    howToSteps: [
      'Upload your SVG files above',
      'PNG is set as the output format',
      'Click "Convert" to rasterize',
      'Download your PNG images',
    ],
    comparisonTitle: 'SVG vs PNG',
    sourceDescription:
      'Vector format, infinitely scalable, tiny file size for graphics, but requires browser or vector editor to view.',
    targetDescription:
      'Raster format, fixed resolution, universal support, transparency, works everywhere.',
    faqs: [
      {
        question: 'Will the SVG look pixelated as PNG?',
        answer:
          'The quality depends on the resolution. Our converter renders SVGs at their native size, producing crisp PNG output. For larger sizes, you can resize after conversion.',
      },
      {
        question: 'Is SVG to PNG conversion free?',
        answer:
          'Yes, completely free with no limits. Processing happens in your browser — no server uploads, no accounts needed.',
      },
      {
        question: 'Can I convert SVG logos to PNG for social media?',
        answer:
          'Absolutely. This is one of the most common SVG to PNG use cases. The PNG version preserves transparency for professional-looking overlays.',
      },
    ],
    featureList: [
      'Convert SVG to PNG',
      'Rasterize vectors',
      'Preserve transparency',
      'Custom resolution',
      'Batch conversion',
      'No uploads required',
    ],
  },

  'ico-to-png': {
    slug: 'ico-to-png',
    sourceFormat: 'ico',
    targetFormat: 'png',
    sourceLabel: 'ICO',
    targetLabel: 'PNG',
    title: 'Convert ICO to PNG Free — Extract Icon Images',
    metaTitle: 'Convert ICO to PNG Free — Extract Icon Images',
    metaDescription:
      'Convert ICO icon files to PNG images. Extract and use favicon and icon images anywhere. Free, no uploads, browser-based converter.',
    keywords: [
      'convert ICO to PNG',
      'ICO to PNG converter',
      'extract favicon',
      'icon to image',
      'free ICO converter',
      'favicon to PNG',
    ],
    h1: 'Convert ICO to PNG Online Free',
    subtitle:
      'Convert ICO icon files to PNG images. Extract favicons and icons for use in any context.',
    whyTitle: 'Why Convert ICO to PNG?',
    whyIntro:
      'ICO is a Windows icon format with limited use outside of favicons. Convert to PNG for:',
    benefits: [
      'Use icon images in documents and designs',
      'Edit icons in any image editor',
      'Share icons across platforms',
      'Extract favicons for redesign work',
      'Convert legacy Windows icons to modern format',
    ],
    howToSteps: [
      'Upload your ICO files above',
      'PNG is set as the output',
      'Click "Convert"',
      'Download your PNG images',
    ],
    comparisonTitle: 'ICO vs PNG',
    sourceDescription:
      'Windows icon format, multi-size, limited to favicons and Windows UI.',
    targetDescription:
      'Universal image format, any size, transparency, compatible with every platform and editor.',
    faqs: [
      {
        question: 'What resolution will the PNG be?',
        answer:
          'The converter extracts the largest image from the ICO file, typically 256×256 or 48×48 depending on the icon.',
      },
      {
        question: 'Can I convert favicons to PNG?',
        answer:
          'Yes! Many favicons are ICO files. Simply upload the .ico file and get a usable PNG version.',
      },
      {
        question: 'Why can\'t I open ICO files in my image editor?',
        answer:
          'Most image editors have limited or no ICO support. Converting to PNG gives you a universally editable file.',
      },
    ],
    featureList: [
      'Convert ICO to PNG',
      'Extract icon images',
      'Preserve transparency',
      'Universal output',
      'Batch conversion',
      'No uploads needed',
    ],
  },
};

/** Get all conversion slugs for generateStaticParams */
export function getAllConversionSlugs(): string[] {
  return Object.keys(conversions);
}

/** Get conversion data by slug, or null if not found */
export function getConversion(slug: string): ConversionData | null {
  return conversions[slug] ?? null;
}

/** Get related conversions (same source or target format, excluding self) */
export function getRelatedConversions(slug: string, limit = 4): ConversionData[] {
  const current = conversions[slug];
  if (!current) return [];

  const related = Object.values(conversions)
    .filter(
      (c) =>
        c.slug !== slug &&
        (c.sourceFormat === current.sourceFormat ||
          c.targetFormat === current.targetFormat ||
          c.sourceFormat === current.targetFormat ||
          c.targetFormat === current.sourceFormat)
    )
    .slice(0, limit);

  return related;
}
