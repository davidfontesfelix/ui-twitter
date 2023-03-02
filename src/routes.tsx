import { createBrowserRouter } from "react-router-dom";
import Default from "./layouts/Default";
import Status from "./screens/Status";
import { TimeLine } from "./screens/Timeline";

export const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <TimeLine/>
  // },
  // {
  //   path: '/status',
  //   element: <Status/>
  // },
  {
    path: '/',
    element: <Default/>,
    children: [
       {
        path: '/',
        element: <TimeLine/>
      },
      {
        path: '/status',
        element: <Status/>
      },
    ],
  }
])