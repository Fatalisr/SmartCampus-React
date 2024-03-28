import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../assets/css/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import PageConnexion from "./PageConnexion.jsx";
import PageAcceuilUsager from "../usager/PageAcceuilUsager.jsx";
import PageAcceuilPersonnel from "../personnel/PageAcceuilPersonnel.jsx";
import PageAcceuilTechnicien from "../technicien/PageAcceuilTechnicien.jsx";
import PageDetailSallePersonnel from "../personnel/PageDetailSallePersonnel.jsx";
import PageDetailIntervention from "../technicien/PageDetailIntervention.jsx";
import Menu from "./Menu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children:[
      {
        path: "/",
        element: <PageConnexion/>
      },
      {
        path: "/usager",
        element: <PageAcceuilUsager/>
      },
      {
        path: "/personnel",
        element: <PageAcceuilPersonnel/>,
      },
      {
        path: "/personnel/salle/:idSalle",
        element: <PageDetailSallePersonnel/>,
      },
      {
        path: "/technicien",
        element: <PageAcceuilTechnicien/>,
      },
      {
        path: "/technicien/intervention",
        element: <PageDetailIntervention/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
