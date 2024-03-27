import { useEffect, useState } from "react";
//import ListedBook from "./ListedBook";
import { Link, Outlet } from "react-router-dom";
import WishList from "../WishList/WishList";
import Read from "../Read/Read";


const ListedBooks = () => {
    const[ read, setRead]=useState([])
     const [ wish, setWish]=useState([])
     const[tabIndex, setIndex]=useState(0)
      useEffect(()=>{
        const showWishList=JSON.parse(localStorage.getItem('books'))
        setWish(showWishList)
      },[])
    useEffect(()=>{
        const showData= JSON.parse(localStorage.getItem('books'))
        setRead(showData)
    },[])
    return (
        <div>
            <h4 className=" h-[100px] bg-base-200 text-center font-bold mt-4 shadow-lg rounded-lg"> Books</h4>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-black">
	<Link  to=""
      onClick={()=>setIndex(0)}
     className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-400 text-gray-400 ${tabIndex===0? 'border borer-b-0':'border-b'}`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Read</span>
	</Link>
	<Link  to={`wish`}
    onClick={()=>setIndex(1)}
     className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-400 text-gray-400 ${tabIndex===1? 'border borer-b-0':'border-b'}`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Wish</span>
	</Link>
	
</div>

<Outlet></Outlet>
            <p className=" mb-4 grid grid-cols-1 gap-4">
                {
                    read.map(data=> <Read data={data}key={data.id}></Read>)
                   
                }
            </p>

                <div>
                {
wish.map(w=><WishList w={w} key={w.id}></WishList>)
                }
             </div>
</div>
           

       
    );
};

export default ListedBooks;