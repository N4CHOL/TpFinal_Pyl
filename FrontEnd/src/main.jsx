
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";
import "./assets/css/bootstrap.css";
import Index from "./Components/Index/Index";
import FormNote from "./Components/Notes/FormNote";
import ErrorPage from "./Routes/Error/404";
import Admin from "./Routes/Layout/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin/>,
    errorElement: <ErrorPage/>,
     children: [
      {
        path: "app/index",
        element: <Index />,
        errorElement: <ErrorPage/>,
      },
       {
         path: "app/note",
         element: <FormNote />,
         errorElement: <ErrorPage/>,
       },
     ],
  },

 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);