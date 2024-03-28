import { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import WishList from "../WishList/WishList";
import Read from "../Read/Read";

const ListedBooks = () => {
  const [read, setRead] = useState([]);
  const [wish, setWish] = useState([]);
 
  const [sortData, setSortData] = useState([]);
  //    for wish list
  useEffect(() => {
    const showWishList = JSON.parse(localStorage.getItem("wish")) ||[];
    setWish(showWishList);
  }, []);
  //     for read list
  useEffect(() => {
    const showDataRead = JSON.parse(localStorage.getItem("books"))||[];
    setRead(showDataRead);
  }, []);
  //console.log(read);
  //    for sorting data
          useEffect(()=>{
                const showSorting= JSON.parse(localStorage.getItem('book'))|| []
              setSortData(showSorting)
          },[])
 
  const handleSorting = (sorting) => {
    if (sorting === "rating") {
      sortData.sort((a, b) => b.rating - a.rating);
    } else if (sorting === "yearOfPublishing") {
      sortData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    } else if (sorting === "totalPages") {
      sortData.sort((a, b) => b.totalPages - a.totalPages);
    }
    setSortData(sortData);
  };
     
  return (
    <div className="max-w-7xl ml-12">
      <h4 className="h-[100px] bg-base-200 text-center font-bold mt-4 shadow-lg rounded-lg flex justify-center items-center">
        Books
      </h4>

      {/* Sorting dropdown */}
      <select
        className="select w-full max-w-xs"
        value={sortData}
        onChange={(e) => handleSorting(e.target.value)}
       
      >
       
        <option value="">Sort</option>
        <option value="rating">Rating</option>
        <option value="yearOfPublishing">Year of Publishing</option>
        <option value="totalPages">Total Pages</option>
      </select>

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
    </div>
  );
};

export default ListedBooks;
