import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Pages/Home/Home";
import Home2 from "./components/Pages/Home2/Home2";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from "./components/Pages/WhoWeAre/AboutUs";
import PracticeArea from "./components/Pages/2ColumnLayout/PracticeArea";
import PracticeArea3 from "./components/Pages/3ColumnLayout/PracticeArea3Column";


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
    },
    {
      path:"/2columnlayout",
      element: <PracticeArea />
    },
    {
      path:"/3columnlayout",
      element: <PracticeArea3 />
    }
  ]);
  return (
    <div id="main-wrap">
    <RouterProvider router={router} />
    </div>
  );
}


export default App;
