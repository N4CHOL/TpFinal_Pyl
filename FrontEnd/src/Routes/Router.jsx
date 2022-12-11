import {
    createBrowserRouter,
    
  } from "react-router-dom";
import FormNote from "../Components/Notes/FormNote";
import ErrorPage from "./Error/404.jsx";
import Admin from "../Routes/Layout/Admin";
import CreateNote from "./Layout/Views/CreateNote";
import EditNotes from "./Layout/Views/EditNotes";
import Index from "../Components/Index/Index.jsx"
import EditNote from "../Components/Notes/EditNote";


 var router = createBrowserRouter ([
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
          path: "app/edit-notes/:id",
          element: <EditNote />,
          errorElement: <ErrorPage/>,
         
        },
            
       ],
    },
  
    

  
   
  ]);
  export default router