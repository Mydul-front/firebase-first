
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './assets/Components/Root';
import Home from './assets/Components/Home';
import Hero from './assets/Components/Hero';
import Projects from './assets/Components/Projects';
import People from './assets/Components/People';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        
        Component: Home,
      },
      {
        path:'hero',
        Component:Hero,
      },
      {
        path:'projects',
        Component: Projects,
      },
      {
        path:'people',
        Component:People
      }
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
