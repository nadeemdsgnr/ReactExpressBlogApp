import { Link } from "react-router-dom";
const NewsListComponent = ( { news } ) => {
    return (
        <>
        {news.map(newsItem => (
            <Link key={newsItem.name} className="news-list-item" to={`/news/${newsItem.name}`}>
                <h3>{newsItem.title}</h3>
                <p>{newsItem.content[0].substring(0, 180)}...</p>
            </Link>
        ))}
        </>
    )
}

export default NewsListComponent;