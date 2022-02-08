import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faPaperPlane,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  return (
    <main id="contact">
      <div classNameName="title-section">
        <h1>
          Get In<span>Touch</span>
        </h1>
        <span classNameName="title-bg">CONTACT</span>
      </div>

      <Container class="contact">
        <Row>
          <Col lg={4} xs={12}>
            <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
              I Love Meeting New People
            </h3>
            <p className="open-sans-font mb-4">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas, clear your doubts or opportunities
              to be part of your vision.
            </p>
            <p className="open-sans-font custom-span-contact">
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                className="position-relative"
              ></FontAwesomeIcon>
              <span className="d-block">Address Point</span>123 Stree New York
              City , United States Of America 750065.
            </p>
            <p className="open-sans-font custom-span-contact position-relative">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="position-relative"
              ></FontAwesomeIcon>
              <span className="d-block">mail me</span>{" "}
              <a
                href="mailto:gladsonlalu2001@gmail.com"
                style={{ cursor: "none" }}
              >
                gladsonlalu2001@gmail.com
              </a>
            </p>
            <p className="open-sans-font custom-span-contact position-relative">
              <FontAwesomeIcon
                icon={faPhoneSquareAlt}
                className="position-relative"
              ></FontAwesomeIcon>
              <span className="d-block">call me</span>{" "}
              <a href="Tel: +91 8086284556" style={{ cursor: "none" }}>
                +91 8086284556
              </a>
            </p>
            <ul className="social list-unstyled pt-1 mb-5">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "none" }}
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="position-relative"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "none" }}
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="position-relative"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "none" }}
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="position-relative"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "none" }}
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="position-relative"
                  ></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={8} xs={12}>
            <form className="contactform">
              <Row>
                <Col md={6} xs={12}>
                  <div className="form-group">
                    <input name="name" type="text" placeholder="YOUR NAME" />
                  </div>
                </Col>
                <Col md={6} xs={12}>
                  {" "}
                  <div className="form-group">
                    <input name="email" type="email" placeholder="YOUR EMAIL" />
                  </div>
                </Col>
                <Col md={12} xs={12}>
                  {" "}
                  <div className="form-group">
                    <input
                      name="subject"
                      type="text"
                      placeholder="YOUR SUBJECT"
                    />
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="YOUR MESSAGE"
                    ></textarea>
                  </div>
                </Col>
                <Col xs={12}>
                  <button
                    type="submit"
                    className="button"
                    style={{ cursor: "none" }}
                  >
                    <span className="button-text">Send Message</span>
                    <span className="button-icon fa fa-send"></span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default Contact;
