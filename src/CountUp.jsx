import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
export const CountUp = () => {
   const [count, setCount] = useState(0);
   const IncreaseCount = () => {
    setCount(count => count+1);
   }
   const DecreaseCount = () => {
    setCount(count => count-1);
   }



    return(
      <div>
        <h1>このページはCountUpページです</h1>
        <NavLink to="/">
         <p>Homeページに移動します</p>  
       </NavLink>
       <Sdiv>
       <p>{count}回カウントされました</p>

       <Sbutton onClick={IncreaseCount}>増加</Sbutton>
       <Sbutton onClick={DecreaseCount}>減少</Sbutton>
       
      </Sdiv>  
       </div>
       
    )
};

const Sdiv = styled.div`
   transform :translateX(400px) ;
`
const Sbutton = styled.button`
    margin: 6px;
`

