import { FavoriteArticle } from '@/app/components/FavoriteArticle'

export default function FavoritePage() {
    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Улюблені статті</h1>
            <div className="grid gap-4">
                <FavoriteArticle id={1} />
                <FavoriteArticle id={5} />
                <FavoriteArticle id={7} />
            </div>
        </div>
    )
}
