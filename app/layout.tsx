import '@/app/globals.css'
import { poppins } from '@/app/ui/fonts'
import { Metadata } from 'next'
import Head from 'next/head'

type LayoutProps = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: {
        template: '%s | Bun Dashboard',
        default: 'Bun Dashboard',
    },
    description: 'Designed & developed by Jason',
}

const RootLayout = ({ children }: Readonly<LayoutProps>) => {
    return (
        <html lang="en">
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <body className={`${poppins.className} antialiased`}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout
