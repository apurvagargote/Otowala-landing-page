import React from "react";
import "./OurPresence.css";
import { Container } from "react-bootstrap";
import {
  faCity,
  faCloudArrowDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function OurPresence() {
  return (
    <>
      <section className="OurPresence-section">
        <div className="OurPresence">
          <div className="heading">
            <h1>Our Presence</h1>
          </div>
          <div className="sub-heading">
            <p>
              Our presence has revolutionized intra-city travel, making it both
              affordable and efficient for everyone to achieve seamless
              last-mile connectivity.
            </p>
          </div>
          <div className="OurPresence-img-downloads">
            <div className="OurPresence-img-part">
              <img
                className="OurPresence-img "
                src="/assets/images/homapage/OurPresence/mobiles.png"
              />
            </div>
            <div className="OurPresence-downloads">
              <div className="OurPresence-downloads-all">
                <div className="OurPresence-downloads-1">
                  <div className="OurPresence-downloads-2">
                    <FontAwesomeIcon
                      icon={faCloudArrowDown}
                      className="fa-fa-icon "
                    />
                  </div>
                  <div className="OurPresence-downloads-text">
                    <p>15M+ Downloads</p>
                  </div>
                </div>
              </div>

              <div className="OurPresence-downloads-all">
                <div className="OurPresence-downloads-1">
                  <div className="OurPresence-downloads-2">
                    <FontAwesomeIcon icon={faCity} className="fa-fa-icon" />
                  </div>
                  <div className="OurPresence-downloads-text">
                    <p>100+ Cities</p>
                  </div>
                </div>
              </div>

              <div className="OurPresence-downloads-all">
                <div className="OurPresence-downloads-1">
                  <div className="OurPresence-downloads-2">
                    <FontAwesomeIcon icon={faUser} className="fa-fa-icon" />
                  </div>
                  <div className="OurPresence-downloads-text">
                    <p>900+ Rides</p>
                  </div>
                </div>
              </div>
              <div className="OurPresence-downloads-all">
                <div className="OurPresence-downloads-1">
                  <div className="OurPresence-downloads-2">
                    <FontAwesomeIcon
                      icon={faCloudArrowDown}
                      className="fa-fa-icon"
                    />
                  </div>
                  <div className="OurPresence-downloads-text">
                    <p>20M+ Customers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="OurPresence-downloads-strip">
              <img
                className="OurPresence-stip-img "
                src="/assets/images/homapage/OurPresence/strip.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurPresence;
