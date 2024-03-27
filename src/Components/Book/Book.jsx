/* eslint-disable react/prop-types */

import { IoStarHalf } from "react-icons/io5";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, author, rating, tags, bookName, category, bookId } = book;
  return (
    <div>
      <Link to={`/books/${bookId}`}>
        <div className="card  bg-base-100 shadow-xl  w-96 gap-4">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{bookName}</h2>
            <p>By :{author}</p>
            <p className=" flex  gap-2">
              {tags.map((tag, idx) => (
                <p key={idx}> #{tag}</p>
              ))}
            </p>
            <div className="divider"></div>
            <div className="card-actions">
              <p className="font-serif">{category}</p>
              <p className="flex gap-1">
                {" "}
                <IoStarHalf className="text-xl" /> {rating}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
