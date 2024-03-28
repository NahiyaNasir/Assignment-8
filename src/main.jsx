import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import BookDetails from "./Components/Pages/BookDetails";
import ListedBooks from "./Components/Pages/ListedBooks";
import Pages from "./Components/Pages/Pages";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import CustomarReview from "./Components/Pages/CustomarReview";
import ContactUs from "./Components/Pages/ContactUs";


//import Books from './Components/Books/Books';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/books/:bookId",
        loader: () => fetch("/book.json"),
        element: <BookDetails></BookDetails>,
      },
      {
        index: true,
        path: "/booksList",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pages",
        element: <Pages></Pages>,
      },
      {
        path:"/review",
        element:<CustomarReview></CustomarReview>
      },
      {
 path:"/contact",
 element:<ContactUs></ContactUs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
