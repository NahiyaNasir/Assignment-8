import {  useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const book=useLoaderData()
    console.log(book);
    const {bookId}=useParams()
   // console.log(bookId);
   const details=book.find(b=>b.bookId== bookId)
   console.log (details);
    const handelRead =()=>{
        console.log('ccc');
        const storageData=JSON.parse(localStorage.getItem ('books')) 
            const savedData= storageData.find(item=> item.Id === details.id )
            if(savedData){
                alert('oooooooo')
            }else{
                storageData.push(details) 
                localStorage.setItem('books',JSON.stringify(storageData)) 
            }
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
    <p className="font-serif text-xl"> Publisher : {find.publisher}</p>
    <p>Year Of Publishing: {find.yearOfPublishing}</p>
    <p> Ratting:{find.rating}</p>
    <div className="card-actions ">
 <button className="btn btn-primary" onClick={handelRead}>Read</button> 
 {/* <button className="btn btn-primary" onClick={handelWL}>WishList</button>  */}
 

    </div>
  </div>
</div>
          
           
        </div>
    );
};

export default BookDetails;