import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Pages/Home/Home";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/contact",
      element: <Home />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
