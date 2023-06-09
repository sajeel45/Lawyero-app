import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import React from "react";
import { ReactDOM } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App />
  //   },
  //   {
  //     path: "/test",
  //     element: <Header />,
  //   },
  // ]);
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<App />}>
  //       <Route path="test" element={<Header />} />
  //     </Route>
  //   )
  // );

  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element:(
  //       <div>
  //       <h1>Hello World</h1>
  //       <Link to="about">About Us</Link>
  //     </div>
  //     ),
  //   },
  //   {
  //     path: "about",
  //     element: <Header />,
  //   },
  // ]);
  // createRoot(document.getElementById("root")).render(
  //   <RouterProvider router={router} />
  // );
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
