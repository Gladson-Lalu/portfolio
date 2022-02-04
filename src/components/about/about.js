import "./about.css";
import { Col, Button, Container, Row, Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <main id="about">
      <div className="title-section">
        <h1>
          Know More <span>About Me</span>
        </h1>
        <span className="title-bg">ABOUT ME</span>
      </div>
      <Container className="d-flex justify-content-between shadow-lg container-section">
        <Col sm={6} className="col-5 content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            eveniet quam incidunt commodi beatae nulla? Pariatur eius obcaecati,
            quidem voluptas a doloremque beatae aliquam ea, placeat consectetur
            facere consequuntur minus odit sint aspernatur expedita? Possimus,
            natus cumque. Temporibus, doloremque saepe tempora totam nemo ipsam,
            officia impedit rem iusto praesentium incidunt.
          </p>
          <Row className="d-grid gap-2 d-md-block">
            <Col className="d-flex justify-content-between">
              <Button className="col-5" variant="warning">
                <FontAwesomeIcon icon={faDownload} />
                Download CV
              </Button>
              <Button className="col-5" variant="outline-primary">
                <FontAwesomeIcon icon={faLinkedin} /> Connect me
              </Button>{" "}
            </Col>
          </Row>
        </Col>
        <Col sm={5} className="col-2">
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h6 className="col-3">Name</h6>{" "}
                  <h5 className="col-8">Gladson T Lalu</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6 className="col-3">Birthday</h6>{" "}
                  <h5 className="col-8">19 February 2001</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6 className="col-3">Nationality</h6>{" "}
                  <h5 className="col-8">Indian</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6 className="col-3">Languages</h6>{" "}
                  <h5 className="col-8">English Malayalam</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6 className="col-3">Email</h6>{" "}
                  <h5 className="col-8">gladsonlalu2001@gmail.com</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6 className="col-3">Phone</h6>{" "}
                  <h5 className="col-8">8086284556</h5>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </main>
  );
};

export default About;
