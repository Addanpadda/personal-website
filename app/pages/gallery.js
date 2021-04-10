import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "react-bootstrap/Carousel";
import GallerySlide from "../components/GallerySlide/GallerySlide";
import ImageCollections from "../components/GallerySlide/ImageCollections";

export default function Gallery() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header active="gallery" />

      <div className={styles.box + " container rounded my-5 p-5"}>
        <h1 className="text-center display-6">
	  Gallery
      </h1>

	  <GallerySlide title="Swedish winter!" imageCollection={ImageCollections.winter} />
	    <GallerySlide title="Countryside" imageCollection={ImageCollections.country} />
 
      </div>
      <Footer />
    </div>
  );
}
