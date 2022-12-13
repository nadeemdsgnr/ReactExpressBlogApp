import { useParams } from "react-router-dom";
import NoResultFound from "./NoResultFound";
import news from "./news-content";

const SingleNews = () => {
    const { newsId } = useParams();
    const newsitem = news.find(newsitem => newsitem.name === newsId);

    if (!newsitem) {
        return <NoResultFound />
    }

    return (
        <>
        <h1>{newsitem.title}</h1>
        {newsitem.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </>
    );
}

export default SingleNews;