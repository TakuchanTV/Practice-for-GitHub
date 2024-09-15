import { Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { CountUp } from "../CountUp"
import { InputText } from "../InputText";
import { ShowMunu } from "../ShowMenu";
import { CountDown } from "../CountDown";

export const Router = () => {
    return(
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route  path="CountUp" element={<CountUp />} />
      <Route path="InputText" element={<InputText />} />
      <Route path="ShowMenu" element={<ShowMunu />} />
      <Route path="CountDown" element={<CountDown />} />
    </Routes>
    )
    
};

