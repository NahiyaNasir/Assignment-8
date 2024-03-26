import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import BookDetails from './Components/Pages/BookDetails';
import ListedBooks from './Components/Pages/ListedBooks';
//import Books from './Components/Books/Books';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>

      },
    
      {
        path:"/books/:bookId",
        loader:()=>fetch('/book.json'),
        element:<BookDetails></BookDetails>
      },{
        path:"/booksList",
        element:<ListedBooks></ListedBooks>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
