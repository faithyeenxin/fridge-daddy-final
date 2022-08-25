import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import EvergreenContentSection from "../components/display/evergreen/EvergreenContentSection";
import EvergreenTopSection from "../components/display/evergreen/EvergreenTopSection";
import VirtualizedList from "../components/list/LonglistItem";
const Evergreen = () => {
  return (
    <>
      <EvergreenTopSection />
      <br />
      <EvergreenContentSection />
    </>
  );
};

export default Evergreen;
