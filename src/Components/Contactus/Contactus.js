import React, { useState } from "react";
import "./Contactus.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faLocationDot,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
const ContactUs = () => {
  const [showForm, setShowForm] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const [showContactTextHolder, setShowContactTextHolder] = useState(true);

  const handleMapTextClick = () => {
    setShowForm(true);
    setShowBg(true);
    setShowContactTextHolder(false);
  };

  const handleArrowClick = () => {
    setShowContactTextHolder(true);
    setShowForm(false);
    setShowBg(false);
  };
  return (
    <>
      <section className="contact-us">
        <div className="map-section">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=pune&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://pdflist.com/" alt="pdflist.com"></a>
            </div>
          </div>
        </div>
        {/* <div className="contact_form_holder "> */}
        <div
          className={`contact_form_holder ${showBg ? "contact_form_bg" : ""}`}
        >
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-4 col-md-4">
                <div
                  className={`contact-text-holder ${
                    showContactTextHolder ? "" : "d-none"
                  }`}
                >
                  <div className="heading-holder mb-4">
                    <h2>Contact us</h2>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="icon-holder me-3">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="address-holder">
                      <p> 7770003401</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="icon-holder me-3">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="address-holder">
                      <p>waytozofficial@gmail.com</p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="icon-holder me-3">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="address-holder">
                      <p>
                        606,Shop no.1, Near Bright computers, sant savata Mali
                        Temple Road, Jadhavwadi, chikhali, pune - 411062.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="icon-holder me-3">
                      <FontAwesomeIcon icon={faMapLocationDot} />
                    </div>
                    <div
                      className="address-holder map-text"
                      onClick={handleMapTextClick}
                    >
                      <p>Find Us on Map</p>
                    </div>
                  </div>

                  <div className="border-holder  my-2"></div>
                  <div className="icons-holder d-flex ">
                    <div className="icon-holder  my-4">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="social-icon d-flex">
                      <div className="social-icon-1">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </div>
                      <div className="social-icon-1">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </div>
                      <div className="social-icon-1">
                        <FontAwesomeIcon icon={faInstagram} />
                      </div>
                      <div className="social-icon-1">
                        <FontAwesomeIcon icon={faPinterestP} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  showForm
                    ? "col-xl-5 col-lg-7 col-12 scale-down-hor-right"
                    : "col-lg-8 col-md-8 scale-up-hor-right"
                }`}
              >
                <div className="form-holder ">
                  <div
                    className={`arrow-holder ${
                      showForm ? "arrow-holder" : "d-none"
                    }`}
                    onClick={handleArrowClick}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <Form>
                    <Row className="form_container">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control type="text" placeholder="Your name" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1 "
                      >
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control type="text" placeholder="Subject" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Control
                          as="textarea"
                          className="text-holder"
                          placeholder="Your message"
                          rows={3}
                        />
                      </Form.Group>
                      <div className="btn-holder mt-2">
                        <Button className="SubmitBtn"> Send message</Button>
                      </div>
                    </Row>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
