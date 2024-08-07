import React from "react";
import "./WhyChooseUs.css";
import { Container } from "react-bootstrap";
import {
  faCar,
  faMapLocationDot,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhyChooseUs() {
  return (
    <>
      <section className="WhyChooseUs-section">
        <Container>
          <div className="WhyChooseUs">
            <div className="heading">
              <h1>
                Why Choose{" "}
                <img
                  className="logo"
                  src="/assets/images/header/otowala-logo.png"
                />
              </h1>
            </div>
            <div className="WhyChooseUs-square">
              <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                  <div className="WhyChooseUs-square-card ">
                    <div className="WhyChooseUs-square-1">
                      <div className="WhyChooseUs-square-2">
                        <FontAwesomeIcon
                          icon={faMapLocationDot}
                          className="WhyChooseUs-square-icon"
                        />
                      </div>
                      <div className="WhyChooseUs-square-text">
                        <div className="WhyChooseUs-square-text-main">
                          <p>RAPID CITY TRANSFER</p>
                        </div>
                        <div className="WhyChooseUs-square-text-sub">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                  <div className="WhyChooseUs-square-card">
                    <div className="WhyChooseUs-square-1">
                      <div className="WhyChooseUs-square-2">
                        <FontAwesomeIcon
                          icon={faUserShield}
                          className="WhyChooseUs-square-icon"
                        />
                      </div>
                      <div className="WhyChooseUs-square-text">
                        <div className="WhyChooseUs-square-text-main">
                          <p>PRO CLEARED DRIVERS</p>
                        </div>
                        <div className="WhyChooseUs-square-text-sub">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                  <div className="WhyChooseUs-square-card ">
                    <div className="WhyChooseUs-square-1">
                      <div className="WhyChooseUs-square-2">
                        <FontAwesomeIcon
                          icon={faCar}
                          className="WhyChooseUs-square-icon"
                        />
                      </div>
                      <div className="WhyChooseUs-square-text">
                        <div className="WhyChooseUs-square-text-main">
                          <p>SAFETY GUARANTEE</p>
                        </div>
                        <div className="WhyChooseUs-square-text-sub">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
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

export default WhyChooseUs;
