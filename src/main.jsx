import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./Home";
import About from "./pages/About";
import Activity from "./pages/Activity";
import City from "./pages/City";
import "./index.css";

//--------------------------------------------------------//

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="activity/:id" element={<Activity />} />
      <Route path="city/:id" element={<City />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

//-------------------------------------------------//
// Qui l'API
//https://api.musement.com/api/v3/activities.json

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
