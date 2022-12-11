
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./Components/Index/Index";
import FormNote from "./Components/Notes/FormNote";
import ErrorPage from "./Routes/Error/404";
import Admin from "./Routes/Layout/Admin";
import CreateNote from "./Routes/Layout/Views/CreateNote";
import EditNotes from "./Routes/Layout/Views/EditNotes";

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
       {
        path: "app/create-note",
        element: <CreateNote />,
        errorElement: <ErrorPage/>,
      },
      {
        path: "app/edit-note/:id",
        element: <EditNotes />,
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