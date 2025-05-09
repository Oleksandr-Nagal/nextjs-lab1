// @ts-expect-error Імпорт PageProps з 'next/types' може викликати несумісність типів у деяких версіях Next.js.
import { PageProps } from 'next/types';

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export async function generateStaticParams() {
    const ids = Array.from({ length: 10 }, (_, i) => ({ id: (i + 1).toString() }));
    return ids;
}

export default async function ArticlePage({ params }: PageProps) {
    const [postRes, commentsRes] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`),
    ]);

    const post: Post = await postRes.json();
    const comments: Comment[] = await commentsRes.json();

    return (
        <div>
            <h1 className="text-xl font-bold">{post.title}</h1>
            <p className="mb-4">{post.body}</p>
            <h2 className="font-semibold text-lg">Коментарі:</h2>
            <ul className="list-disc ml-6 mt-2">
                {comments.map((c: Comment) => (
                    <li key={c.id}>
                        <strong>{c.name}</strong>: {c.body}
                    </li>
                ))}
            </ul>
        </div>
    );
}