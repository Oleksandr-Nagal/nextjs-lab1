// src/app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Lab Project',
    description: 'Next.js lab example',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        {/* Навігація (не показується на / через виняток у page.tsx) */}
        <header className="p-4 bg-white shadow flex gap-4">
            <NavLink href="/articles" label="Articles" />
            <NavLink href="/profile/settings" label="Settings" />
            <NavLink href="/profile/security" label="Security" />
        </header>
        <main className="p-6">{children}</main>
        </body>
        </html>
    )
}

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link href={href} className="text-blue-600 hover:underline">
            {label}
        </Link>
    )
}
