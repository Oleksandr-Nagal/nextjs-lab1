'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.scss'

export default function Navigation() {
    const path = usePathname()

    return (
        <nav className={styles.nav}>
            <Link href="/articles" className={`${styles.link} ${path === '/articles' ? styles.active : ''}`}>
                Articles
            </Link>
            <Link href="/profile/settings" className={`${styles.link} ${path === '/profile/settings' ? styles.active : ''}`}>
                Settings
            </Link>
            <Link href="/profile/security" className={`${styles.link} ${path === '/profile/security' ? styles.active : ''}`}>
                Security
            </Link>
        </nav>
    )
}
