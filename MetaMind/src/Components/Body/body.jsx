import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../Login/login";
import HomePage from "../Browse/homePage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/homepage",
      element: <HomePage />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
