/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";




const Read = ({data}) => {
    const {bookName,author,image,totalPages,rating,tags,publisher,yearOfPublishing,category,bookId}=data
  
    return (
        <div>
            
            <h6>hello</h6>
            <div className="card card-side bg-base-100 shadow-xl h-[300px] border-2">
  <figure><img src={image}   className="w-[230px] h-[228px]"  alt="Movie"/></figure>
  <div className="card-body">
  <h2 className="card-title">{bookName}</h2>
    <p>By :{author}</p>
    <div className="text-green-500  ">
        {
            tags.map((tag,idx)=><p key={idx}>  Tags#  {tag}</p>)
        }
        <p> Year of Publishing :{yearOfPublishing}</p>
    </div>
    <p className=" flex gap-2  font-semibold">Publisher :{publisher}    pages: {totalPages}        </p> 
    <div className="card-actions ">
      <button className="btn bg-[#328EFF]"> Category :{category}</button>
      <button className="btn  bg-[#FFAC3326]"> Rating :{rating}</button>
    <Link to={`/books/${bookId}`}>
    <button className="btn btn-primary">View Details</button>
    </Link>  
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Read;