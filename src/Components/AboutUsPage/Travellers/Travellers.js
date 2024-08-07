import React from "react";
import "./Travellers.css";
import { Container } from "react-bootstrap";
function Travellers() {
  return (
    <>
      <section className="Travellers-section">
        <div className="Travellers">
          <Container>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7 col-sm-12 mt-5">
                <div className="main-para-tarvellers">
                  <div className="heading">
                    <h1><i>Travellers most Trusted Choice</i></h1>
                  </div>
                  <div className="para">
                    We’re honored by your trust and excited to continue making
                    your travel more comforting. Your support inspires us to
                    keep delivering the best travel experiences for you.
                  </div>
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5 col-sm-12 mt-5">
                <div className="row">
                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-6 col-6 mt-5">
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
          </Container>
        </div>
      </section>
    </>
  );
}

export default Travellers;
