import Head from "next/head";
import styles from "../styles/Articles.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PostFeed from "../components/PostFeed/PostFeed";
import {getPostsData} from "./api/database/posts"


export default function Posts(props) {
  var postFeed = JSON.stringify(props.posts) == "[]" ? (<p className="text-center mt-5 font-weight-bold">No posts yet!</p>) : 
    (<PostFeed posts={props.posts} />);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header active="posts" />

      <div className={styles.box + " container rounded my-5 p-5"}>
        <h1 className="text-center display-6 ">
        <u>Posts</u>
        </h1>
        {postFeed}
	  </div>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  var data = await getPostsData();

  return {
      props: {
          posts: data
      }
  };
}
