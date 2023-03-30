import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/activities";
import Activity from "./pages/activities/id";
import City from "./pages/cities/id";
import MainLayout from "./layouts/mainLayout";
import "./index.css";

//--------------------------------------------------------//

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="activities" element={<Activities />} />
      <Route path="activities/:id" element={<Activity />} />
      <Route path="cities/:id" element={<City />} />
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
