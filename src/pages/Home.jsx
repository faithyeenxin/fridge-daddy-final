import React from "react";
import HomeLists from "../components/display/HomeLists";
import SearchForm from "../components/forms/SearchForm";
const Home = () => {
  return (
    <>
      <div>
        <SearchForm />
        <HomeLists />
      </div>
    </>
  );
};

export default Home;
