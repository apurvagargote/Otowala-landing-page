import React from "react";
import Travellers from "./Travellers/Travellers";
import OurMotto from "./OurMotto/OurMotto";
import OurMissionvision from "./OurMissionvision/OurMissionvision";
import CustomerReach from "./CustomerReach/CustomerReach";
import Stopwaiting from "../Homepage/Stopwaiting/Stopwaiting";

function AboutUsPage() {
  return (
    <>
      <Travellers />
      <OurMotto/>
      <OurMissionvision/>
      <CustomerReach/>
      <Stopwaiting/>
    </>
  );
}

export default AboutUsPage;
