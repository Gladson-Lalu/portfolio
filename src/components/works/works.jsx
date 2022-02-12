import "./works.css";
import sample from "../../images/sample.jpg";
import { Container, Col } from "react-bootstrap";

const Works = () => {
  return (
    <main id="about">
      <div className="title-section">
        <h1>
          My Recent<span> Works</span>
        </h1>
        <span className="title-bg">Portfolio</span>
      </div>
      <Container className="portfolio_area" fluid>
        <div className="portfolio_wrap">
          <Col className=" single_gallery  ">
            <div className="thumb">
              <img src={sample} alt="" />
            </div>
            <div className="gallery_hover">
              <div className="hover_inner">
                <span>Mobile App</span>
                <h3>Ubar Mobile App</h3>
              </div>
            </div>
          </Col>
          <Col className="single_gallery small_width ">
            <div className="thumb">
              <img src={sample} alt="" />
            </div>
            <div className="gallery_hover">
              <div className="hover_inner">
                <span>Mobile App</span>
                <h3>Ubar Mobile App</h3>
              </div>
            </div>
          </Col>
          <Col className="single_gallery ">
            <div className="thumb">
              <img src={sample} alt="" />
            </div>
            <div className="gallery_hover">
              <div className="hover_inner">
                <span>Mobile App</span>
                <h3>Ubar Mobile App</h3>
              </div>
            </div>
          </Col>
          <Col className=" single_gallery  w-100">
            <div className="thumb">
              <img src={sample} alt="" />
            </div>
            <div className="gallery_hover">
              <div className="hover_inner">
                <span>Mobile App</span>
                <h3>Ubar Mobile App</h3>
              </div>
            </div>
          </Col>
          <Col className="single_gallery  w-100">
            <div className="thumb">
              <img src={sample} alt="" />
            </div>
            <div className="gallery_hover">
              <div className="hover_inner">
                <span>Mobile App</span>
                <h3>Ubar Mobile App</h3>
              </div>
            </div>
          </Col>
          <Col className=" single_gallery small_width">
            <div className="thumb">
              <img src={sample} alt="" />
            </div>
            <div className="gallery_hover">
              <div className="hover_inner">
                <span>Mobile App</span>
                <h3>Ubar Mobile App</h3>
              </div>
            </div>
          </Col>
          <Col className="single_gallery">
            <div className="thumb">
              <img src={sample} alt="" />
            </div>
            <div className="gallery_hover">
              <div className="hover_inner">
                <span>Mobile App</span>
                <h3>Ubar Mobile App</h3>
              </div>
            </div>
          </Col>
          <Col className=" single_gallery small_width">
            <div className="thumb">
              <img src={sample} alt="" />
            </div>
            <div className="gallery_hover">
              <div className="hover_inner">
                <span>Mobile App</span>
                <h3>Ubar Mobile App</h3>
              </div>
            </div>
          </Col>
          <Col className=" single_gallery">
            <div className="thumb">
              <img src={sample} alt="" />
            </div>
            <div className="gallery_hover">
              <div className="hover_inner">
                <span>Mobile App</span>
                <h3>Ubar Mobile App</h3>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </main>
  );
};

export default Works;
