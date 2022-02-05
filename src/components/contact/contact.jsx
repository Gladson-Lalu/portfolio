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
      <div
        className="contact react-tabs__tab-panel--selected"
        role="tabpanel"
        id="react-tabs-7"
        aria-labelledby="react-tabs-6"
      >
        <div
          className="title-section text-left text-sm-center aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1>
            get in <span>touch</span>
          </h1>
          <span className="title-bg">contact</span>
        </div>
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="row">
            <div className="col-12 col-lg-4">
              <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                Don't be shy !
              </h3>
              <p className="open-sans-font mb-4">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-map position-absolute"></i>
                <span className="d-block">Address Point</span>123 Stree New York
                City , United States Of America 750065.
              </p>
              <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-envelope-open position-absolute"></i>
                <span className="d-block">mail me</span>{" "}
                <a href="mailto:steve@mail.com" style={{"cursor: none;}}>
                  steve@mail.com
                </a>
              </p>
              <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-phone-square position-absolute"></i>
                <span className="d-block">call me</span>{" "}
                <a href="Tel: +216 21 184 010" style="cursor: none;">
                  +216 21 184 010
                </a>
              </p>
              <ul className="social list-unstyled pt-1 mb-5">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    style="cursor: none;"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    style="cursor: none;"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    style="cursor: none;"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://dribbble.com/"
                    target="_blank"
                    rel="noreferrer"
                    style="cursor: none;"
                  >
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-8">
              <form className="contactform">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input name="name" type="text" placeholder="YOUR NAME" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        placeholder="YOUR EMAIL"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        type="text"
                        placeholder="YOUR SUBJECT"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="YOUR MESSAGE"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="button"
                      style="cursor: none;"
                    >
                      <span className="button-text">Send Message</span>
                      <span className="button-icon fa fa-send"></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contact;
