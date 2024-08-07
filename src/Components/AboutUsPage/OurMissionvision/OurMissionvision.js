import React from "react";
import "./OurMissionvision.css";
import { Container } from "react-bootstrap";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function OurMissionvision() {
  return (
    <>
      <section className="OurMissionvision-section">
        <div className="OurMissionvision">
          <Container>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
                <div className="Our-vision">
                  <div className="Our-vision-heading-icon d-flex ">
                    <div className="Our-vision-icon me-2">
                      <FontAwesomeIcon className="fa-fa-bookmark" icon={faBookmark} />
                    </div>
                    <div className="Our-vision-heading">
                      <p>OUR VISION</p>
                    </div>
                  </div>
                  <div className="Our-vision-para">
                    <p>
                      We envision becoming the top transportation partner for
                      all your travel needs, offering unparalleled service &
                      satisfaction. Our goal is to set new benchmarks for
                      quality in the cab service industry.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
                <div className="Our-mission">
                  <div className="Our-mission-heading-icon d-flex ">
                    <div className="Our-mission-icon me-2">
                      <FontAwesomeIcon className="fa-fa-bookmark" icon={faBookmark} />
                    </div>
                    <div className="Our-mission-heading">
                      <p>OUR MISSION</p>
                    </div>
                  </div>
                  <div className="Our-mission-para">
                    <p>
                      To provide safe, reliable, and efficient transportation
                      solutions that exceed customer expectations. We are
                      committed to delivering top-notch service with every ride.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default OurMissionvision;
