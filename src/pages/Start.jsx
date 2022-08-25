import React from "react";
import HeroSection from "../components/display/HeroSection";
import Instructions from "../components/display/Instructions";
import HeroSectionUpgrade from "../components/display/HeroSectionUpgrade";
const Start = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <HeroSectionUpgrade />
      <br />
      <Instructions />
    </>
  );
};

export default Start;
