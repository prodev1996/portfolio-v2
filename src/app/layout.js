// src/app/layout.jsx

export const metadata = {
  metadataBase: new URL('https://portfolio-v2-o7aqq227l-rajiv-bhandaris-projects.vercel.app'), // TODO: set real domain when live
  title: { default: 'Rajiv Bhandari — Portfolio', template: '%s | Rajiv Bhandari' },
  description:
    'IT Support Engineer & Full-Stack Developer (Windows/AD/M365 • React/Django/MySQL) based in Adelaide, SA.',
  keywords: [
    'Rajiv Bhandari',
    'IT Support',
    'System Administrator',
    'Windows',
    'Active Directory',
    'Microsoft 365',
    'React',
    'Django',
    'MySQL',
    'Adelaide',
  ],
  authors: [{ name: 'Rajiv Bhandari' }],
  creator: 'Rajiv Bhandari',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Rajiv Bhandari — Portfolio',
    description:
      'IT Support Engineer & Full-Stack Developer in Adelaide. Windows/AD/M365 + React/Django.',
    url: 'https://portfolio-v2-o7aqq227l-rajiv-bhandaris-projects.vercel.app',
    siteName: 'Rajiv Bhandari',
    images: [{ url: '/og/og-image.png', width: 1200, height: 630, alt: 'Rajiv Bhandari Portfolio' }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajiv Bhandari — Portfolio',
    description:
      'IT Support Engineer & Full-Stack Developer in Adelaide. Windows/AD/M365 + React/Django.',
    images: ['/og/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

// 👇 Next.js wants themeColor in `viewport` (not in metadata)
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
};

import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import CTARibbon from '@/components/CTARibbon';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import Script from 'next/script';

export default function RootLayout({ children }) {
  const email = 'bhandarirajiv25@gmail.com';
  const linkedin = 'https://www.linkedin.com/in/rajiv-bhandari25/';

  const personLD = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rajiv Bhandari',
    jobTitle: 'IT Support Engineer / Full-Stack Developer',
    email: `mailto:${email}`,
    url: 'https://portfolio-v2-o7aqq227l-rajiv-bhandaris-projects.vercel.app', 
    sameAs: [linkedin],
    address: { '@type': 'PostalAddress', addressLocality: 'Adelaide', addressRegion: 'SA', addressCountry: 'AU' },
  };

  return (
    <html lang="en-AU" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased">
        {/* JSON-LD */}
        <Script id="ld-person" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(personLD)}
        </Script>

        {/* Skip to content (accessibility) */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow dark:focus:bg-slate-800"
        >
          Skip to content
        </a>

        <ScrollProgress />
        <Navbar />

        <main id="content" className="flex-1">
          {children}
        </main>

        {/* CTA ribbon on every page, hidden when printing */}
        <div className="print:hidden">
          <CTARibbon />
        </div>

        <Footer />
      </body>
    </html>
  );
}
