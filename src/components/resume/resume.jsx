import "./resume.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="title-section">
        <h1>
          Summary of <span>My Resume</span>
        </h1>
        <span className="title-bg">Summary</span>
      </div>
      <Col className="mx-auto">
        <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
          Experience <span>&amp;</span> Education
        </h3>
      </Col>
      <Container className="d-flex">
        <Col lg={6} className="m-15px-tb">
          <div className="resume-box">
            <ul>
              <li>
                <div className="icon">
                  <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                </div>
                <span className="time open-sans-font text-uppercase">
                  {" "}
                  2018 - Present
                </span>
                <h5 className="poppins-font text-uppercase">
                  {" "}
                  Web Developer
                  <span className="place open-sans-font">Envato</span>
                </h5>
                <p className="open-sans-font">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </li>
              <li>
                <div className="icon">
                  <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                </div>
                <span className="time open-sans-font text-uppercase">
                  2013 - 2018
                </span>
                <h5 className="poppins-font text-uppercase">
                  {" "}
                  UI/UX Designer
                  <span className="place open-sans-font">Themeforest</span>
                </h5>
                <p className="open-sans-font">
                  Lorem incididunt dolor sit amet, consectetur eiusmod dunt
                  doldunt dol elit, tempor incididunt
                </p>
              </li>
              <li>
                <div className="icon">
                  <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                </div>
                <span className="time open-sans-font text-uppercase">
                  2005 - 2013
                </span>
                <h5 className="poppins-font text-uppercase">
                  Consultant
                  <span className="place open-sans-font">Videohive</span>
                </h5>
                <p className="open-sans-font">
                  Lorem ipsum dolor sit amet, tempor incididunt ut
                  laboreconsectetur elit, sed do eiusmod tempor duntt
                </p>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={6}>
          <div className="resume-box">
            <ul>
              <li>
                <div className="icon">
                  <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                </div>
                <span className="time open-sans-font text-uppercase">2015</span>
                <h5 className="poppins-font text-uppercase">
                  ENGINEERING DEGREE
                  <span className="place open-sans-font">
                    OXFORD UNIVERSITY
                  </span>
                </h5>
                <p className="open-sans-font">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </li>
              <li>
                <div className="icon">
                  <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                </div>
                <span className="time open-sans-font text-uppercase">2012</span>
                <h5 className="poppins-font text-uppercase">
                  MASTER DEGREE
                  <span className="place open-sans-font">KIEV UNIVERSITY</span>
                </h5>
                <p className="open-sans-font">
                  Lorem incididunt dolor sit amet, consectetur eiusmod dunt
                  doldunt dol elit, tempor incididunt
                </p>
              </li>
              <li>
                <div className="icon">
                  <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                </div>
                <span className="time open-sans-font text-uppercase">2009</span>
                <h5 className="poppins-font text-uppercase">
                  BACHELOR DEGREE{" "}
                  <span className="place open-sans-font">
                    TUNIS HIGH SCHOOL
                  </span>
                </h5>
                <p className="open-sans-font">
                  Lorem ipsum dolor sit amet, tempor incididunt ut
                  laboreconsectetur elit, sed do eiusmod tempor duntt
                </p>
              </li>
            </ul>
          </div>
        </Col>
      </Container>
      <div className="separator"></div>
      <Container>
        <Col className="mx-auto">
          <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
            My Skills
          </h3>
        </Col>
        <Row>
          <Col
            lg={3}
            md={3}
            sm={6}
            className="mb-3 mb-sm-5 d-flex flex-column "
          >
            <div className="c100 p25 mx-auto">
              <span>25%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h6 className="text-uppercase open-sans-font text-center  mt-2 mt-sm-4">
              HTML
            </h6>
          </Col>
          <Col lg={3} md={3} sm={6} className="mb-3 mb-sm-5 d-flex flex-column">
            <div className="c100 p89 mx-auto">
              <span>89%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
              JAVASCRIPT
            </h6>
          </Col>
          <Col lg={3} md={3} sm={6} className="mb-3 mb-sm-5 d-flex flex-column">
            <div className="c100 p70 mx-auto">
              <span>70%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
              CSS
            </h6>
          </Col>
          <Col lg={3} md={3} sm={6} className="mb-3 mb-sm-5 d-flex flex-column">
            <div className="c100 p90 mx-auto">
              <span>66%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
              PHP
            </h6>
          </Col>
          <Col lg={3} md={3} sm={6} className="mb-3 mb-sm-5 d-flex flex-column">
            <div className="c100 p95 mx-auto">
              <span>95%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
              WORDPRESS
            </h6>
          </Col>
          <Col lg={3} md={3} sm={6} className="mb-3 mb-sm-5 d-flex flex-column">
            <div className="c100 p50 mx-auto">
              <span>50%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
              JQUERY
            </h6>
          </Col>
          <Col lg={3} md={3} sm={6} className="mb-3 mb-sm-5 d-flex flex-column">
            <div className="c100 p65 mx-auto">
              <span>65%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
              ANGULAR
            </h6>
          </Col>
          <Col lg={3} md={3} sm={6} className="mb-3 mb-sm-5 d-flex flex-column">
            <div className="c100 p45 mx-auto">
              <span>45%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
              REACT
            </h6>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
