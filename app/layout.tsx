import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

type LayoutProps = {
    children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

const RootLayout = ({ children }: Readonly<LayoutProps>) => {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

export default RootLayout
