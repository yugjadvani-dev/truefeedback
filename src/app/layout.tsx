import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import AuthProvider from '@/context/AuthProvider';
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'True Feedback',
  description: 'Real feedback from real people.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          {children}
          <Script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="yugjadvani9" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></Script>
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
