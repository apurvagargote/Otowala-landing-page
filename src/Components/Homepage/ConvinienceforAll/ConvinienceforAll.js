import React from "react";
import "./ConvinienceforAll.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function ConvinienceforAll() {
  return (
    <>
      <section className="ConvinienceforAll-section">
        <Container>
          <div className="ConvinienceforAll">
            <div className="row">
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12">
                <div className="main-para-1">
                  <div className="heading">
                    <h1>Convinience for All</h1>
                  </div>
                  <div className="para">
                    <p>
                      At OTOWALA, your safety and comfort are our highest
                      priorities. We are dedicated to continuously improving our
                      safety protocols to guarantee that every ride with us is
                      enjoyable and secure.
                    </p>
                  </div>
                  <div className="know-more-btn">
                    <Link to="/aboutus">
                    <Button variant="dark">KNOW MORE</Button></Link>
                  </div>
                </div>
              </div>

              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <div className="main-para-2">
                  <div className="row">
                    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-6 col-6">
                      <div className="images">
                        <img
                          className="img-1"
                          src="/assets/images/homapage/convinience/img-1.jpeg"
                        />
                      </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 col-6">
                      <div className="images">
                        <img
                          className="img-2"
                          src="/assets/images/homapage/convinience/img-2.jpeg"
                        />
                      </div>
                      <div className="blank-orange"></div>
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

export default ConvinienceforAll;
