import { useEffect, useState } from "react";
//import ListedBook from "./ListedBook";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { FaReadme } from "react-icons/fa6";
import "react-tabs/style/react-tabs.css";
import WishList from "../WishList/WishList";
import Read from "../Read/Read";
// import { CiBookmark } from "react-icons/ci";
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
  console.log(read);
  return (
    <div>
      <h4 className=" h-[100px] bg-base-200 text-center font-bold mt-4 shadow-lg rounded-lg">
        Books
      </h4>

      <Tabs>
        <TabList>
          <Tab> Read</Tab>
          {/* <Tab > Wish</Tab> */}
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
