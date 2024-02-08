import { Metadata } from "next"
import Navigation from "./components/navigation"
import './styles/global.css'
import style from './styles/main.module.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Study Next.js',
    default: 'Next Movies'
  },
  description: 'Nomad Coders Study -- Next.js',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">

      <body>
        <Navigation/>
        <div className={style.maincontents}>{children}</div>
      </body>
    </html>
  )
}
