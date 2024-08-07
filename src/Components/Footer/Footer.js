import React from "react";
import Container from "react-bootstrap/Container";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer-section">
        <Container>
          <div className="footer">
            <div className="row">
              {/* col-1 */}
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 ">
                <div className="logo-img">
                  <Link to="/">
                    <img
                      className="logo"
                      src="/assets/images/header/otowala-logo.png"
                    />
                  </Link>
                </div>
              </div>
              {/* col-2 */}
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="All-Quick-Links-1">
                  <div className="Quick-Links">
                    <p>Quick Links</p>
                  </div>
                  <div className="Quick-Links-List">
                    <div className="Quick-Links-List">
                      <p>
                        <Link to="/aboutus" style={{ color: "black" }}>
                          About Us
                        </Link>
                      </p>
                      <p>
                        <Link to="/privacypolicy" style={{ color: "black" }}>
                          Privacy Policy
                        </Link>
                      </p>
                      <p>
                        <Link to="/terms-riders" style={{ color: "black" }}>
                          Terms & Conditions (Riders)
                        </Link>
                      </p>
                      <p>
                        <Link to="/terms-users" style={{ color: "black" }}>
                          Terms & Conditions (Users)
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* col-3 */}
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="All-Quick-Links-2">
                  <div className="Quick-Links">
                    <Link to="/contactus" style={{ color: "black" }}><p>Contact Us</p></Link>
                  </div>
                  <div className="Quick-Links-List">
                    <div className="Quick-Links-List-1">
                      <div className="Quick-Links-List-icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </div>
                      <div className="Quick-Links-List-text">
                        <p>
                          Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                          Pune - 411038
                        </p>
                      </div>
                    </div>
                    <div className="Quick-Links-List-2">
                      <div className="Quick-Links-List-icon">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <div className="Quick-Links-List-text">
                        <p>+91 9876543210</p>
                      </div>
                    </div>
                    <div className="Quick-Links-List-3">
                      <div className="Quick-Links-List-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div className="Quick-Links-List-text">
                        <p>meetx@qmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* col-4 */}
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <div className="follow-us-part">
                  <div className="Quick-Links">
                    <p>Follow Us</p>
                  </div>
                  <div className="follow-us-icon d-flex">
                    <Link to="https://www.facebook.com/">
                      <div className="follow-us-icon-1">
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          style={{ color: "white" }}
                        />
                      </div>
                    </Link>
                    <Link to="https://www.linkedin.com/">
                      <div className="follow-us-icon-1">
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          style={{ color: "white" }}
                        />
                      </div>
                    </Link>
                    <Link to="https://www.instagram.com/">
                      <div className="follow-us-icon-1">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          style={{ color: "white" }}
                        />
                      </div>
                    </Link>
                    <Link to="https://www.youtube.com/">
                      <div className="follow-us-icon-1">
                        <FontAwesomeIcon
                          icon={faYoutube}
                          style={{ color: "white" }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Footer;
