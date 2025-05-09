// app/page.tsx (головна)
'use client'

import Button from '@mui/material/Button'

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Ласкаво просимо!</h1>
                <Button variant="contained" color="primary">
                    Натисни мене
                </Button>
            </div>
        </main>
    )
}
