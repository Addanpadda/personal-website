import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Player.module.css';

export default function (props) {
  return (
    <Col
      className={
        styles.playerBackground + " mt-5 text-light px-lg-5 py-lg-4 px-4 py-2"
      }
    >
      <Row>
        <p className="mx-auto font-weight-bold">
	  {props.title}
        </p>
      </Row>
      <Row className="d-flex justify-content-center">
        <video width="100%" height="auto" className={styles.player} controls>
          <source src={props.src} type={props.type ? props.type : "video/mp4"} />
          Your browser does not support the video tag.
        </video>
      </Row>
    </Col>
  );
}

/*
Check out my Android game{" "}
          <a
            className="badge badge-success"
            href="https://play.google.com/store/apps/details?id=org.godotengine.beyondroads"
          >
            Beyond Roads!
          </a>
*/
