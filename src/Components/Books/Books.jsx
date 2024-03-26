 import { useEffect, useState } from "react";
 import Book from "../Book/Book";
 //import { useLoaderData } from "react-router-dom";



const Books = () => {
     const[ books,setBooks]=useState([])
 useEffect(()=>{
    fetch('book.json')
     .then(res=>res.json())
      .then(data=>setBooks(data))
   },[])
   //  const books=useLoaderData()
    console.log(books);
   
    return (
        <div>
           
           <h5 className="text-center font-bold text-3xl"> Books :{books.length}</h5>
            <div className=" grid grid-cols-3 mx-auto mt-5">
                {
                    books.map(book=><Book book={book} key={book.id}></Book>)
                }
            </div>  
            
        </div>
    );
};

export default Books;