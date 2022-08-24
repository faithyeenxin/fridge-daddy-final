import React from "react";
import HomeLists from "../components/display/HomeLists";
import SearchForm from "../components/forms/SearchForm";
const Home = () => {
  return (
    <>
      <SearchForm />
      <HomeLists />
    </>
  );
};

export default Home;
