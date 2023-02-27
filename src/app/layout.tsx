import './globals.css';

export const metadata = {
  title: 'Supabase FOSS',
  description: 'Supabase testing and learning website by SohanEmon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
