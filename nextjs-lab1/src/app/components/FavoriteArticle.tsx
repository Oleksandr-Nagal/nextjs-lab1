'use client'

import { useEffect, useState } from 'react'

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export function FavoriteArticle({ id }: { id: number }) {
    const [data, setData] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(json => {
                setData(json as Post); // Явне приведення типу
                setLoading(false);
            })
    }, [id])

    if (loading) return <p className="text-sm text-gray-400">Завантаження ID {id}...</p>

    return (
        <div className="border p-3 rounded shadow bg-white">
            <h2 className="font-semibold">{data?.title}</h2>
            <p>{data?.body}</p>
        </div>
    )
}