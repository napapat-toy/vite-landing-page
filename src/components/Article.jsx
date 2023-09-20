import { articles } from "../constants"
import ArticleCard from "./ArticleCard"

const Article = () => {
    return (
        <section className="flex flex-col items-center py-8 bg-[#5CD2E6]">
            <h1 className="text-4xl font-semibold">Articles</h1>
            <div className="flex flex-wrap items-center gap-8 mt-6 justify-center">
                {articles.map((article, index) => (
                    <ArticleCard key={`${article.name}-${index}`} article={article} />
                ))}
            </div>
        </section>
    )
}

export default Article