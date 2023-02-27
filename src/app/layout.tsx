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
      <body>
        <main className='bg-slate-900 text-white min-h-screen'>{children}</main>
      </body>
    </html>
  );
}
