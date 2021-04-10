import Carousel from "react-bootstrap/Carousel";

export default function (props) {
  const slides = generateSlides(props.imageCollection);

  return (
    <div>
      <p className="text-center mt-5 font-weight-bold">{props.title}</p>
      <Carousel style={{ border: "1px black solid" }}>{slides}</Carousel>
    </div>
  );
}

function generateSlides(imageCollection) {
    var slides = [];
    var images = imageCollection.images;

  for (var slideIndex = 0; slideIndex < images.length; slideIndex++) {
    var slideItem = (
	    <Carousel.Item style={imageCollection.height ? {height: imageCollection.height} : {}}>
        <img
          className="d-block w-100"
          src={images[slideIndex].src}
          alt={images[slideIndex].caption}
        />
        <Carousel.Caption>
          <h3>{images[slideIndex].caption}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
    slides[slideIndex] = slideItem;
  }

  return slides;
}
