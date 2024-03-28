import { NavLink } from "react-router-dom";


const NAv = () => {
    return (
        <div className="">
            <div className="navbar  fixed z-10 shadow-lg min-h-">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
     <NavLink to="/"
    className={({isActive})=> isActive? ' font-bold bg-blue-300  ':'font-bold'}>Home</NavLink>
      <NavLink to="/booksList" 
    className={({isActive})=> isActive? ' font-bold  bg-blue-300 ':'font-bold'}>Listed Books</NavLink>
    <NavLink to="/pages" 
    className={({isActive})=> isActive? ' font-bold  bg-blue-300 ':'font-bold'}>Pages to Read</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"> Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-4">
      
    <NavLink to="/"
    className={({isActive})=> isActive? ' font-bold  "border-solid border-2 border-indigo-600  p-2 text-primary   ':'font-bold p-2 '}>Home</NavLink>
      <NavLink to="/booksList"  
    className={({isActive})=> isActive? ' font-bold  "border-solid border-2 border-indigo-600  p-2 text-primary  ':'font-bold  p-2'}>Listed Books</NavLink>
      <NavLink to="/pages"
    className={({isActive})=> isActive? ' font-bold  "border-solid border-2 border-indigo-600  p-2 text-primary ':'font-bold p-2 '}> Pages to Read</NavLink>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn  bg-[#23BE0A]">Sing up</a>
    <a className="btn bg-[#59C6D2]">Sing in</a>
  </div>
</div>
        </div>
    );
};

export default NAv;