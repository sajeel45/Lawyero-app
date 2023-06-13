import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Pages/Home/Home";
import Home2 from "./components/Pages/Home2/Home2";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/common/Header/Header";
import { Container } from "react-bootstrap";
import AboutUs from "./components/Pages/WhoWeAre/AboutUs";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/home1",
      element: <Home />,
    },
    {
      path: "/home2",
      element: <Home2 />,
    },
    {
      path: "/lawyeroHome",
      element: <Home />
    },
    {
      path: "/whoWeAre",
      element: <AboutUs />
    }
  ]);
  return (
    <div id="main-wrap">
    <RouterProvider router={router} />
    </div>
  );
}


export default App;
