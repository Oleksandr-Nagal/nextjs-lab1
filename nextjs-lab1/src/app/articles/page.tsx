'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function ArticlesPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data: Post[]) => {
                setPosts(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Завантаження статей...</div>;
    }

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Всі статті</h2>
            <ul>
                {posts.slice(0, 5).map((post: Post) => (
                    <li key={post.id} className="border-b py-2">
                        <Link href={`/articles/${post.id}`} className="block hover:underline">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}