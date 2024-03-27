import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../assets/css/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import PageConnexion from "../commun/PageConnexion.jsx";
import PageAcceuilUsager from "../usager/PageAcceuilUsager.jsx";
import PageAcceuilPersonnel from "../personnel/PageAcceuilPersonnel.jsx";
import PageAcceuilTechnicien from "../technicien/PageAcceuilTechnicien.jsx";
import PageDetailSallePersonnel from "../personnel/PageDetailSallePersonnel.jsx";
import PageDetailIntervention from "../technicien/PageDetailIntervention.jsx";
import Menu from "./Menu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu/>,
    children:[
      {
        path: "/",
        element: <PageConnexion exampleProp={"temp"}/>
      },
      {
        path: "/usager", //Une meme page pour l'affichage du selecteur de salle et du composant AfficherSalle
        element: <PageAcceuilUsager exampleProp={"temp"}/>
      },
      {
        path: "/personnel",
        element: <PageAcceuilPersonnel exampleProp={"temp"}/>,
      },
      {
        path: "/personnel/salle",
        element: <PageDetailSallePersonnel exampleProp={"temp"}/>,
      },
      {
        path: "/technicien",
        element: <PageAcceuilTechnicien exampleProp={"temp"}/>,
      },
      {
        path: "/technicien/intervention",
        element: <PageDetailIntervention exampleProp={"temp"}/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
