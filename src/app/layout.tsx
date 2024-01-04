import type { Metadata } from 'next'
import './globals.css'

import Topbar from './components/Topbar'
import Footer from './components/Footer'

import { inter } from './fonts'

export const metadata: Metadata = {
    title: 'Lance The Ruiz',
    description: 'Freelance game developer, growing software engineer, and FLOSS 💗.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Topbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
