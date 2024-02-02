import Navigation from "./components/navigation"

// export const metadata = {
//   title: 'Study Next.js',
//   description: 'Nomad Coders Study -- Next.js',
// }

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">

      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
