import { useState } from "react";

import hideBtn from '../assets/control.png';
import logoApp from '../assets/logoApp-stock.webp';
import { stockData } from '../static';


export default function Sidebar() {

    const [showSidebar, setShowSidebar] = useState(true);    

    return (

    

        <div className={` ${showSidebar ? "w-[250px] p-8" : "w-[100px] p-0"} duration-300 top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white fixed h-full`}>
            <img
                src={hideBtn}
                className={`${showSidebar ? "right-[-7%]" : "right-[-18%]"} align-middle top-[25%] cursor-pointer absolute duration-300 ${!showSidebar && "rotate-180"}`}
                onClick={() => { setShowSidebar(!showSidebar) }}
            />

            <div className="flex">
                <img src={logoApp} className={`cursor-pointer duration-500 w-[150px] mx-auto 
                    ${showSidebar && "rotate-[360deg]"}`}
                />
            </div>

            <div className="pt-10 text-center">
                <div>
                    <h2 className={`text-white text-xl duration-200 font-medium origin-left ${!showSidebar && 'scale-0'}`}>
                        Stock Inventory
                    </h2>
                </div>
                <div className="mt-8">
                    <ul className={`${showSidebar ? "px-0" : "px-4"}`}>
                        {stockData.map((item, index) => (
                            <li key={index} className="flex p-3 cursor-pointer text-white text-sm items-center gap-x-4 hover:bg-sky-400 rounded-[13px]"> 
                                <img src={item.imgCat} className={`${!showSidebar && 'w-auto mx-auto'}`}/>
                                <span className={`${!showSidebar && 'hidden'} origin-left duration-200`}>
                                    {item.title}
                                </span>
                            </li>
                        ))}
                    </ul>                    
                </div>
            </div>    
            

        </div>

        
               

    );
    
}







