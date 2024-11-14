import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './Components/Error/ErrorPage';
import Blogs from './Components/Blogs/Blogs';
import BookMarks from './Components/BookMarks/BookMarks';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blogs",
        loader: () => fetch('https://dev.to/api/articles?per_page=30&top=7'),
        element: <Blogs></Blogs>
      },
      {
        path: "/bookmarks",
        element: <BookMarks></BookMarks>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
