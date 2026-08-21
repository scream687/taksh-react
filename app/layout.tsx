import type { Metadata, Viewport } from 'next';
import '../public/site.css';
import '../public/effects.css';
import '../public/mobile.css';

export const metadata: Metadata = {
  title: 'Taksh — Strategy & Marketing for Growth-Stage Businesses',
  description:
    'Taksh is a strategy & marketing studio for growth-stage businesses. We help brands think sharper, move faster, and grow with intent. Based in Vrindavan, India.',
  keywords: [
    'brand strategy',
    'marketing agency',
    'growth marketing',
    'positioning',
    'go-to-market',
    'content marketing',
    'India',
    'Vrindavan',
    'startup marketing',
  ],
  authors: [{ name: 'Rishabh Sharma' }],
  icons: {
    icon: '/logo-symbol.png',
    apple: '/logo-symbol.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://taksh.in/',
    title: 'Taksh — Strategy & Marketing for Growth-Stage Businesses',
    description:
      'Strategy & marketing studio for growth-stage brands. Think sharper, move faster, grow with intent.',
    images: ['https://taksh.in/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taksh — Strategy & Marketing for Growth-Stage Businesses',
    description: 'Strategy & marketing studio for growth-stage brands.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D0D0D',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('taksh-theme') || localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    document.documentElement.classList.add('dark-mode', 'dark-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}