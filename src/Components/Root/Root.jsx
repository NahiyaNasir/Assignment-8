import { Outlet } from "react-router-dom";
import NAv from "../Nav/NAv";


const Root = () => {
    return (
        <div>
            <div className=" h-16">
            <NAv></NAv>
            </div>
                 <div className=" ">
                 <Outlet></Outlet>
                 </div>
          
        </div>
    );
};

export default Root;