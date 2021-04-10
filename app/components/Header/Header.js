import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./Header.module.css";

export default function (props) {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark py-3">
      <Navbar.Toggle
        aria-controls="collapsable-navbar-nav"
        className="ml-auto"
      />

      <Navbar.Collapse id="collapsable-navbar-nav">
        <Nav className="float-right">
          <Link href="/">
            <Nav.Link
              className={props.active == "home" ? "active" : ""}
              href="/"
            >
              Home
            </Nav.Link>
          </Link>

          <Link href="/articles">
            <Nav.Link
              className={props.active == "articles" ? "active" : ""}
              href="/articles"
            >
              Articles
            </Nav.Link>
          </Link>

          <Link href="/posts">
            <Nav.Link
              className={props.active == "posts" ? "active" : ""}
              href="/posts"
            >
              Posts
            </Nav.Link>
          </Link>

          <Link href="/gallery">
            <Nav.Link
              className={props.active == "gallery" ? "active" : ""}
              href="/gallery"
            >
              Gallery
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>

      <Link href="/">
        <Nav.Link className={styles.banner} href="/">
          Adam Herbertsson
        </Nav.Link>
      </Link>
    </Navbar>
  );
}
