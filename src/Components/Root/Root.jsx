import { Outlet } from "react-router-dom";
import NAv from "../Nav/NAv";


const Root = () => {
    return (
        <div className=" ">
            <div className=" h-16 ">
            <NAv></NAv>
            </div>
                 <div className="min-h-[calc(100vh-64)] mx-auto ">
                 <Outlet></Outlet>
                 </div>
          
        </div>
    );
};

export default Root;