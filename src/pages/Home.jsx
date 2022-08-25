import React from "react";
import HomeLists from "../components/display/HomeLists";
import ItemForm from "../components/forms/ItemForm";
const Home = () => {
  return (
    <>
      <div>
        <ItemForm />
        <HomeLists />
      </div>
    </>
  );
};

export default Home;
