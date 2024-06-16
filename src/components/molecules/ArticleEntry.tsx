import { Link } from "react-router-dom"
import formatDate from "../../utils/formatDate"

interface entryType {
    to: string
    by: string
    title: string
    description: string
    create_at: string
}

export default function ArticleEntry({to, by, title, description, create_at} : entryType)  {
  return (
    <article className='font-inter flex flex-col gap-6 mb-12'>
        <div>
            <i className="text-[14px]">@{by} - {formatDate(create_at)}</i>
            <Link to={to}>
                <h2 className='font-bold text-[24px] underline'>{title}</h2>
            </Link>
        </div>
        <p>{description}</p>
    </article>
  )
}
