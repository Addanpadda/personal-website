import Head from "next/head";
import styles from "../../styles/Articles.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Feed   from "../../components/ArticleFeed/ArticleFeed";
import {getArticlesData} from "../api/database/articles"

export default function Articles(props) {
  var content;

  if (!props.articles) {
    content = (
      <div className={styles.box + " container rounded my-5 p-5"}>
        <h1 className="text-center display-6 ">
          <u>Articles</u>
        </h1>
        <p className="text-center mt-5 font-weight-bold">No articles yet!</p>    
      </div>);
    } else {
      content = (
        <div className={styles.box + " container rounded my-5 p-5"}>
          <h1 className="text-center display-6">
            <u>Articles</u>
          </h1>
          <Feed data={props.articles} />
        </div>);
    }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header active="articles" />

      {content}

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  var articleData = await getArticlesData();

  return {
    props: {
      articles: articleData
    }
  };
}