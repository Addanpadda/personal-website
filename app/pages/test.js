import { useRouter } from 'next/router';
import { getArticle } from "./api/database/articles";

export default function ArticlePage(props) {
    return (<div>
        {props.article.title}
    </div>);
}

export async function getServerSideProps(context) {
    var articleData = await getArticle(1);

    return {
      props: {
        article: articleData
      }
    };
}