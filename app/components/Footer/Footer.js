import style from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function (props) {
    return (
    <footer
      className={
        style.footer + " bg-dark px-3 py-2 mt-auto text-white text-center"
      }
    >
      <Row>
        <div className="col-lg-4 order-lg-2 m-auto">
          <p className="mb-1 text-center mt-0">Made by Adam</p>
          <p className="text-center m-lg-0">Powered by Next.js with bootstrap!</p>
        </div>
        <div className="col-lg-4 order-lg-1 m-auto">
          <p className="mb-1 text-center m-0">adamherbertsson@gmail.com</p>
        </div>
          <div className="col-lg-4 order-lg-3 m-auto">
          <p className="text-center m-0">+49 72 569 65 12</p>
          </div>
      </Row>
	    </footer>
  );
}
