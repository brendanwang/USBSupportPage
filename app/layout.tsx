import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: 'app-icon.png', apple: 'app-icon.png' },
  title: 'Support & FAQ — USB Connection Sound',
  description: 'Get help with USB Connection Sound for Mac. Find answers about USB alerts, volume, supported devices, and menu bar monitoring, or contact support.',
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
