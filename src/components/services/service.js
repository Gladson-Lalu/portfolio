import "./service.css";
import { Row, Col } from "react-bootstrap";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faCloud,
  faMarker,
  faCogs,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const iconSize = "1x";
const color = "greenyellow";

const Service = () => {
  return (
    <main id="services">
      <div className="title-section">
        <h1>
          What <span>I Do</span>?
        </h1>
        <span className="title-bg">Services</span>
      </div>

      <Col lg={11} className="mx-auto">
        <Row>
          <Col md={6}>
            <div className="featured-box style-3 mb-5">
              <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                <FontAwesomeIcon
                  size={iconSize}
                  icon={faAndroid}
                  style={{ color: color }}
                ></FontAwesomeIcon>{" "}
              </div>
              <h3>App Development</h3>
              <p className="mb-0">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="featured-box style-3 mb-5">
              <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                <FontAwesomeIcon
                  size={iconSize}
                  icon={faLaptopCode}
                  style={{ color: color }}
                ></FontAwesomeIcon>
              </div>
              <h3>Web Development</h3>
              <p className="mb-0">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="featured-box style-3 mb-5">
              <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                {" "}
                <FontAwesomeIcon
                  size={iconSize}
                  icon={faCloud}
                  style={{ color: color }}
                />{" "}
              </div>
              <h3>Cloud Architecture</h3>
              <p className="mb-0">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="featured-box style-3 mb-5">
              <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                {" "}
                <FontAwesomeIcon
                  size={iconSize}
                  icon={faMarker}
                  style={{ color: color }}
                />{" "}
              </div>
              <h3>Content Writer</h3>
              <p className="mb-0">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="featured-box style-3 mb-5 mb-md-0">
              <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                {" "}
                <FontAwesomeIcon
                  icon={faCogs}
                  size={iconSize}
                  style={{ color: color }}
                />{" "}
              </div>
              <h3>ML Engineer</h3>
              <p className="mb-0">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="featured-box style-3 mb-0">
              <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  size={iconSize}
                  style={{ color: color }}
                />{" "}
              </div>
              <h3>Mentoring</h3>
              <p className="mb-0">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </main>
  );
};
export default Service;
