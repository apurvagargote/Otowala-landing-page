import React from 'react'
import "./OurMotto.css"
import { Container } from 'react-bootstrap'
function OurMotto() {
  return (
  <>
    <section className="OurMotto-section">
        <div className="OurMotto">
          <Container>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7 col-sm-12 mt-5">
                <div className="main-para-tarvellers">
                  <div className="pre-heading">
                    <h6>OUR MOTTO</h6>
                  </div>
                  <div className="heading">
                    <h1>Wherever You Need To Go We'll Take You There.</h1>
                  </div>
                  <div className="para">
                  Whether it’s a quick trip across town or a special event, we’re here to get you there safely and on time. Our experienced drivers and clean, comfortable vehicles ensure a smooth and reliable ride every time. Choose us for all your transportation needs and experience the best in service and convenience!
                  </div>
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5 col-sm-12 mt-5 img-div">
               <div className='img-car-map'>
                <img className="car-map-img" src='/assets/images/aboutus/ourmotto/car-map.png'/>
               </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
  </>
  )
}

export default OurMotto