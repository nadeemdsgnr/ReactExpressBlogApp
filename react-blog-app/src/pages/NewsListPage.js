import NewsListComponent from "./components/NewsListComponent";
import news from "./news-content";
const NewList = () => {
    return (
        <>
        <h1>Latest News</h1>
        <NewsListComponent news={news}></NewsListComponent>
        </>
    );
}

export default NewList;