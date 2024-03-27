import { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import WishList from "../WishList/WishList";
import Read from "../Read/Read";

const ListedBooks = () => {
  const [read, setRead] = useState([]);
  const [wish, setWish] = useState([]);

  useEffect(() => {
    const showWishList = JSON.parse(localStorage.getItem("wish"));
    setWish(showWishList);
  }, []);
  useEffect(() => {
    const showDataRead = JSON.parse(localStorage.getItem("books"));
    setRead(showDataRead);
  }, []);
  //console.log(read);
    const[ sort, setSort]=useState([])
    console.log(sort);
    useEffect(()=>{
        const sortedData = JSON.parse(localStorage.getItem("books"));
        setSort(sortedData)
      
    },[])
  return (
    <div className="  max-w-7xl ml-12 ">
      <h4 className=" h-[100px] bg-base-200 text-center font-bold mt-4 shadow-lg rounded-lg flex justify-center items-center">
        Books
      </h4>
      {/*  sot data */}
      
      <div className="flex justify-start items-center">
        <details className="dropdown">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">
            <li>
              <a>Rating </a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Year of publishing</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs className="mt-6">
        <TabList>
          <Tab> Read</Tab>
          <Tab> Wish</Tab>
        </TabList>

        <TabPanel>
          <p className=" mb-4 grid grid-cols-1 gap-4">
            {read.map((data) => (
              <Read data={data} key={data.id}></Read>
            ))}
          </p>
        </TabPanel>
        <TabPanel>
          <div>
            {wish.map((w) => (
              <WishList w={w} key={w.id}></WishList>
            ))}
          </div>
        </TabPanel>
      </Tabs>

      {/*  
  <button
          onClick={() => setIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-400 text-gray-400 ${
            tabIndex === 0 ? "border borer-b-0" : "border-b"
          }`}
        >
            
          <span>Read</span>
        </button>
    </TabPanel>
    <TabPanel>
    <button
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-400 text-gray-400 ${
            tabIndex === 1 ? "border borer-b-0" : "border-b"
          }`}
          onClick={() => setIndex(1)}
        >
         
          <span>Wish</span>
        </button>

      */}
      {/*  
      <p className=" mb-4 grid grid-cols-1 gap-4">
        {read.map((data) => (
          <Read data={data} key={data.id}></Read>
        ))}

      </p> 
       {/* {/* :  */}
      {/*  *
      <div>
        {wish.map((w) => (
          <WishList w={w} key={w.id}></WishList>
        ))}
      </div>
   */}
    </div>
  );
};

export default ListedBooks;
