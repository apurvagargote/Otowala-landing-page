import React from "react";
import "./CustomerReach.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faCloudArrowDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function CustomerReach() {
  return (
    <>
      <section className="CustomerReach-section">
        <div className="CustomerReach">
          <Container>
            <div className="CustomerReach-box">
              <div className="box-1">
              </div>
                <div className="box-2">
                  <div className="CustomerReach-downloads">
                    <div className="CustomerReach-downloads-all">
                      <div className="CustomerReach-downloads-1">
                        <div className="CustomerReach-downloads-2">
                          <FontAwesomeIcon
                            icon={faCloudArrowDown}
                            className="fa-fa-icon "
                          />
                        </div>
                       
                      </div>
                      <div className="CustomerReach-downloads-text">
                          <p>15M+ Downloads</p>
                        </div>
                    </div>

                    <div className="CustomerReach-downloads-all">
                      <div className="CustomerReach-downloads-1">
                        <div className="CustomerReach-downloads-2">
                          <FontAwesomeIcon
                            icon={faCity}
                            className="fa-fa-icon"
                          />
                        </div>
                       
                      </div>
                      <div className="CustomerReach-downloads-text">
                          <p>100+ Cities</p>
                        </div>
                    </div>

                    <div className="CustomerReach-downloads-all">
                      <div className="CustomerReach-downloads-1">
                        <div className="CustomerReach-downloads-2">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="fa-fa-icon"
                          />
                        </div>
                        
                      </div>
                      <div className="CustomerReach-downloads-text">
                          <p>900+ Rides</p>
                        </div>
                    </div>
                    <div className="CustomerReach-downloads-all">
                      <div className="CustomerReach-downloads-1">
                        <div className="CustomerReach-downloads-2">
                          <FontAwesomeIcon
                            icon={faCloudArrowDown}
                            className="fa-fa-icon"/>
                        </div>
                        
                      </div>
                      <div className="CustomerReach-downloads-text">
                          <p>20M+ Customers</p>
                        </div>
                    </div>
                  </div>

                  <div className="CustomerReach-downloads-strip">
                    <img
                      className="CustomerReach-stip-img "
                      src="/assets/images/homapage/OurPresence/strip.png"
                    />
                  </div>
                  <div className="bacgordd"></div>
                </div>
              
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default CustomerReach;
