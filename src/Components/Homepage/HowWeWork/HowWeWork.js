import React from "react";
import "./HowWeWork.css";
import { Container } from "react-bootstrap";
import { faCar, faIdCard, faMapLocationDot, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HowWeWork() {
  return (
    <>
      <section className="HowWeWork-section">
        <Container>
          <div className="HowWeWork">
            <div className="heading">
              <h1>How We Work</h1>
            </div>

            <div className="row mt-5">
                {/* col-1 */}
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="OurPresence-downloads">
                  <div className="OurPresence-downloads-1">
                    <FontAwesomeIcon icon={faMobileScreenButton} className="OurPresence-downloads-icon"/>
                  </div>
                </div>
                <div className="OurPresence-downloads-text ">
                  <div className="OurPresence-downloads-main">
                    <p>Easy Bookings</p>
                  </div>
                  <div className="OurPresence-downloads-sub">
                    <p>
                      Book a cab with ease in just a few simple steps. Fast,
                      reliable, and convenient bookings at your fingertips!
                    </p>
                  </div>
                </div>
              </div>
                 {/* col-2 */}
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="OurPresence-downloads">
                  <div className="OurPresence-downloads-1">
                  <FontAwesomeIcon icon={faCar} className="OurPresence-downloads-icon"/>
                  </div>
                </div>
                <div className="OurPresence-downloads-text ">
                  <div className="OurPresence-downloads-main">
                    <p>Easy Bookings</p>
                  </div>
                  <div className="OurPresence-downloads-sub">
                    <p>
                      Book a cab with ease in just a few simple steps. Fast,
                      reliable, and convenient bookings at your fingertips!
                    </p>
                  </div>
                </div>
              </div>
                 {/* col-3*/}
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="OurPresence-downloads">
                  <div className="OurPresence-downloads-1">
                  <FontAwesomeIcon icon={faIdCard} className="OurPresence-downloads-icon"/>
                  </div>
                </div>
                <div className="OurPresence-downloads-text ">
                  <div className="OurPresence-downloads-main">
                    <p>Easy Bookings</p>
                  </div>
                  <div className="OurPresence-downloads-sub">
                    <p>
                      Book a cab with ease in just a few simple steps. Fast,
                      reliable, and convenient bookings at your fingertips!
                    </p>
                  </div>
                </div>
              </div>
                 {/* col-4 */}
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="OurPresence-downloads">
                  <div className="OurPresence-downloads-1">
                  <FontAwesomeIcon icon={faMapLocationDot} className="OurPresence-downloads-icon" />
                  </div>
                </div>
                <div className="OurPresence-downloads-text ">
                  <div className="OurPresence-downloads-main">
                    <p>Easy Bookings</p>
                  </div>
                  <div className="OurPresence-downloads-sub">
                    <p>
                      Book a cab with ease in just a few simple steps. Fast,
                      reliable, and convenient bookings at your fingertips!
                    </p>
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

export default HowWeWork;
