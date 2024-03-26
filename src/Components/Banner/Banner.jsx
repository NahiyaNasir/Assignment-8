import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="mx-auto">
       <div className="hero h-[554px]  bg-base-300 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/9bFd1wG/attachment-41172918.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
       <br />
       <Link to="/booksList">
       <button className="btn btn-primary">View List</button></Link>
    
    </div>
  </div>
</div>
       
        </div>
    );
};

export default Banner;
