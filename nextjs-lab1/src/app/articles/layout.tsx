'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <div>
            <nav className="bg-blue-100 p-4 flex gap-4">
                <NavLink href="/articles/favorite" label="Favorite" currentPath={pathname} />
                <NavLink href="/articles/create" label="Create" currentPath={pathname} />
            </nav>
            <div className="p-4">{children}</div>
        </div>
    )
}

function NavLink({ href, label, currentPath }: { href: string; label: string; currentPath: string }) {
    const isActive = currentPath === href
    return (
        <Link
            href={href}
            className={`px-3 py-1 rounded ${isActive ? 'bg-blue-600 text-white' : 'text-black'}`}
        >
            {label}
        </Link>
    )
}
