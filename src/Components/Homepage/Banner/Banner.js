import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <section className="Banner-section">
        <div className="banner">
          <div className="banner-img-part">
            <img
              className="banner-img"
              src="/assets/images/homapage/banner/banner-img.png"
            />
          </div>
          <div className="get-it-on d-flex">
            <div className="download-link-1">
              <Link to="https://play.google.com/">
                <img
                  className="download-link-1"
                  src="/assets/images/homapage/banner/Get-it-on-1.png"
                />
              </Link>
            </div>
            <div className="download-link-2">
              <Link to="https://www.apple.com/">
                <img
                  className="download-link-2"
                  src="/assets/images/homapage/banner/download-on-the-app-2.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
