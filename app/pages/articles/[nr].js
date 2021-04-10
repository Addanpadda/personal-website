import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Article from "../../components/Article/Article";
import { getArticle } from "../api/database/articles";

export default function ArticlePage(props) {
    return (
    <div className="d-flex flex-column min-vh-100">
        <Header />

        <Article data={props.article} />
        
        <Footer />
    </div>);
}

export async function getServerSideProps(context) {
    const articleNr = parseInt(context.query.nr);
    var articleData = await getArticle(articleNr);

    return {
      props: {
        article: articleData
      }
    };
}