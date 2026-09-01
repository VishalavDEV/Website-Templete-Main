import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { MagneticCursor } from '@/components/ui/MagneticCursor';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { LoginModal } from '@/components/layout/LoginModal';
import { Toast } from '@/components/ui/Toast';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Soft Glow — Clean Beauty & Skin-First Hydration',
  description: 'Soft Glow biocompatible peptide cosmetic beauty collection for restorative cushion hydration and natural radiance.',
  keywords: ['Soft Glow', 'clean beauty', 'peptide lip care', 'hydrating lip oil', 'rose lip balm', 'soft beauty'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-[#FFF9F5] text-[#2D2224] font-body selection:bg-[#F7DDE2] selection:text-[#B76E79] antialiased">
        <CartProvider>
          <SmoothScroll>
            <MagneticCursor />
            {children}
            <CartDrawer />
            <LoginModal />
            <Toast />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}

