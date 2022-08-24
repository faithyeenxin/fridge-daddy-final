import React from "react";
import HomeLists from "../components/display/HomeLists";
import AddItemForm from "../components/forms/ItemForm";
const Home = () => {
  return (
    <>
      <div>
        <AddItemForm />
        <HomeLists />
      </div>
    </>
  );
};

export default Home;
