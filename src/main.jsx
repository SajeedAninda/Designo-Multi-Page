import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Homepage/Home.jsx';
import Company from './Components/OurCompany/Company/Company.jsx';
import Locations from './Components/Locations/Locations.jsx';
import Contact from './Components/Contact/Contact.jsx';
import WebDesign from './Components/Projects/WebDesign/WebDesign.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/aboutCompany",
        element: <Company></Company>
      },
      {
        path:"/locations",
        element: <Locations></Locations>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/web-design",
        element: <WebDesign></WebDesign>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
