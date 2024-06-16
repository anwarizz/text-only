import ArticleEntry from "../molecules/ArticleEntry"
import supabase from "../../utils/supabase"
import { useEffect, useState } from "react"

interface Article {
    id: number;   
    by: string;
    title: string;
    description: string;
    created_at: string; 
    url: string;
  }

export default function ArticlePool() {
    const [articles, setArticles] = useState<Article[]>([])

    const fetchArticles = async () => {
        const {data, error} = await supabase.from('story').select()
        if (error) {
            throw new Error(error.message);
        }

        return data as Article[]
    }

    const getArticles = async () => {
        const responses = await fetchArticles()
        setArticles(responses.reverse())
    }

    useEffect(() => {
        getArticles()
    }, [])

  return (
    <div className="pt-3">
        {articles.map((article) => (
            <ArticleEntry key={article.id} to={`/read/${article.url}`} by={article.by} title={article.title} description={article.description} create_at={article.created_at}/>
        ))}
    </div>
  )
}
