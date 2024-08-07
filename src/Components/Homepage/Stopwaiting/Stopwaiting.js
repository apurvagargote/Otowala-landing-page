import React, { useState } from "react";
import "./Stopwaiting.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Stopwaiting() {
  const [src, setSrc] = useState(
    "/assets/images/homapage/Stop waiting/img1.png"
  );

  const handleMouseOver = () => {
    setSrc("/assets/images/homapage/Stop waiting/fixed-img.png");
  };

  const handleMouseOut = () => {
    setSrc("/assets/images/homapage/Stop waiting/img1.png");
  };
  return (
    <>
      <section
        className="Stopwaiting-section"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Container>
          <div className="Stopwaiting">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
                <div className="Stopwaiting-img-section">
                  {/* img1 */}
                  <div className="Stopwaiting-img-img1">
                    <img className="Stopwaiting-img-1  " src={src} />
                  </div>
                  {/* left-img */}
                  <div className="Stopwaiting-img-left-img">
                    <img
                      className="Stopwaiting-img-2  "
                      src="/assets/images/homapage/Stop waiting/left-img.png"
                    />
                  </div>
                  {/* right-img */}
                  <div className="Stopwaiting-img-right-img">
                    <img
                      className="Stopwaiting-img-3  "
                      src="/assets/images/homapage/Stop waiting/right-img.png"
                    />
                  </div>
                  {/* auto */}
                  <div className="Stopwaiting-img-auto">
                    <img
                      className="Stopwaiting-img-4  "
                      src="/assets/images/homapage/Stop waiting/auto.png"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="main-para">
                  <div className="changing-heading">
                    <div className="heading">
                      <h1>STOP WAITING</h1>
                    </div>
                    <div className="heading-hidden">
                      <h1>START BOOKING</h1>
                    </div>
                  </div>
                  <div className="para">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing & typesetting industry. Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum is simply dummy text of the printing & typesetting
                      industry.
                    </p>
                  </div>

                  <div className="heading">
                    <h2>Download the App</h2>
                  </div>
                  <div className="para">
                    <div className="Stopwaiting-img-get-it-on d-flex">
                      <div className="download-link-11">
                        <Link to="https://play.google.com/">
                          <img
                            className="download-link-11"
                            src="/assets/images/homapage/banner/Get-it-on-1.png"
                          />
                        </Link>
                      </div>
                      <div className="download-link-22">
                        <Link to="https://www.apple.com/">
                          <img
                            className="download-link-22"
                            src="/assets/images/homapage/banner/download-on-the-app-2.png"
                          />
                        </Link>
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

export default Stopwaiting;
