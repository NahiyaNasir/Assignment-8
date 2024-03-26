import { useLoaderData } from "react-router-dom";


const BookDetails = () => {
    const book=useLoaderData()
    console.log(book);
    const {bookId, bookName}=book
  
   
    return (
        <div>

            {/* <h4> {book.length}</h4> */}
            <p>{bookId}</p>
            <p>{bookName}</p>
           
        </div>
    );
};

export default BookDetails;