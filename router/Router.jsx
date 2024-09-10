import { Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { CountUp } from "../CountUp"
import { InputText } from "../InputText";
import { ShowMunu } from "../ShowMenu";

export const Router = () => {
    return(
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route  path="CountUp" element={<CountUp />} />
      <Route path="InputText" element={<InputText />} />
      <Route path="ShowMenu" element={<ShowMunu />} />
    </Routes>
    )
    
};

