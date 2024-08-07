import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import ConvinienceforAll from "./ConvinienceforAll/ConvinienceforAll";
import OurPresence from "./OurPresence/OurPresence";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import HowWeWork from "./HowWeWork/HowWeWork";
import Stopwaiting from "./Stopwaiting/Stopwaiting";

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ourPresenceStyle = {
    paddingTop: '10px' // Adjust this value based on your header height
  };
  return (
    <>
      <Banner />
      <ConvinienceforAll />
      <section id="ourPresence" style={ourPresenceStyle}>
        <OurPresence />
      </section>
      <section id="whychooseus" style={ourPresenceStyle}>
        <WhyChooseUs />
      </section>
      <HowWeWork />
      <Stopwaiting />
    </>
  );
}

export default Homepage;
