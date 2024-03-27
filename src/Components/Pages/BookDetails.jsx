import {  useLoaderData, useParams } from "react-router-dom";
import { StoredDataToLocalStorage, StoredDataToLocalStorage2 } from "./Utilities/LocalStorage";
import { ToastContainer,  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const book=useLoaderData()
    console.log(book);
    const {bookId}=useParams()
   // console.log(bookId);
   const details=book.find(b=>b.bookId==bookId )
   console.log (details);
    const handelRead =()=>{
        console.log('ccc');
       StoredDataToLocalStorage(details)
    
    }
    const handelWL=()=>{
      console.log('click');
            StoredDataToLocalStorage2(details)
      
    }
    return (
        <div>

           
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src= { details.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{ details.bookName}</h2>
    <p className="font-mono">By :{ details.author}</p>
    <div className="divider"></div>
    <h3 className="font-serif">{ details.category}</h3>
  
    <p className="text-xl"> Review : {details.review} <br />t {details.description}</p>
    <div className="divider"></div>
    <p className="font-serif text-xl">Name of Pages:  { details.totalPages}</p>
    <p className="font-serif text-xl"> Publisher : {details.publisher}</p>
    <p>Year Of Publishing: {details.yearOfPublishing}</p>
    <p> Ratting:{details.rating}</p>
    <div className="card-actions ">
 <button className="btn btn-primary" onClick={handelRead}>Read</button> 

 <button className="btn btn-primary" onClick={handelWL}>WishList</button> 
 

    </div>
  </div>
  <ToastContainer></ToastContainer> 
</div>
          
           
        </div>
    );
};

export default BookDetails;