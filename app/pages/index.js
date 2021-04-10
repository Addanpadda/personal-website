import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Player from "../components/Player/Player";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header active="home" />

      <div className={styles.box + " container rounded my-5 p-5"}>
        <h1 className="text-center display-6">
          Adam Herbertsson&#39;s website
        </h1>
        <p>
          Welcome to my own website for articles, posts and pictures in the
          gallery. Feel free to have a look around!
        </p>

        <Player
          src="/beyond-roads.mp4"
          title={
            <div>
              Check out my Android game{" "}
              <a
                className="badge badge-success"
                href="https://play.google.com/store/apps/details?id=org.godotengine.beyondroads"
              >
                Beyond Roads!
              </a>
            </div>
          }
        />
      </div>
      <Footer />
    </div>
  );
}
