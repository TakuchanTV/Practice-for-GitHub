//Home.jsx//
import { NavLink } from "react-router-dom";
import { CountUp } from "./CountUp";
export const Home = () => {
    return(
      <div>
        <h1>Homeページです。</h1>
　　　　<NavLink to="CountUp">
         <p>CountUpページに移動します</p>  
       </NavLink>
　　　　<NavLink to="InputText">
         <p>InputTextページに移動します</p>  
       </NavLink>
　　　　<NavLink to="ShowMenu">
         <p>ShowMenuページに移動します</p>  
       </NavLink>
       <NavLink to="CountDown">
         <p>CountDownページに移動します</p>  
       </NavLink>
      </div>  
    );
};

