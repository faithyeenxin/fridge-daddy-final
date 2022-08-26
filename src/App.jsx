import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./UI/Layout";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Evergreen from "./pages/Evergreen";
import Baddies from "./pages/Baddies";
import Search from "./pages/Search";
import User from "./pages/User";
import Recipes from "./pages/Recipes";
import AddCategory from "./pages/AddCategory";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Start />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route path="/evergreen" element={<Evergreen />} />
    //       <Route path="/baddies" element={<Baddies />} />
    //       <Route path="/search" element={<Search />} />
    //       <Route path="/category" element={<AddCategory />} />
    //       <Route path="/user" element={<User />} />
    //       <Route path="/recipes" element={<Recipes />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <h1>hello world</h1>
  );
}

export default App;
