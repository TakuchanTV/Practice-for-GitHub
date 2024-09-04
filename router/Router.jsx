import { Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { CountUp } from "../CountUp"

export const Router = () => {
    return(
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route  path="CountUp" element={<CountUp />} />
    </Routes>
    )
    
};

