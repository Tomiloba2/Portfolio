import './globals.css'

export const metadata = {
  title: 'Tomiloba Portfolio',
  description: 'Fullstack developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=' scroll-smooth'>
      <body className='  bg-white text-slate-950 dark:bg-slate-950 dark:text-white overflow-x-hidden'>{children}</body>
    </html>
  )
}
