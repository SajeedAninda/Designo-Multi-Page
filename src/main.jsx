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
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
