import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components"
export const ShowMunu = () => {
  const location = useLocation();
  const {Text} = location.state || {}
    const [ShowMenuVisible, setShowMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({x: 0, y: 0});
    const [stored, setStored] = useState
  const handleMenu = (event) => {
    event.stopPropagation();
    setMenuPosition({x: event.clientX, y: event.clientY});
   setShowMenuVisible(!ShowMenuVisible);
   console.log(handleMenu);
   
  }

  const handleMenuOutside = () => {
    setShowMenuVisible(false)
    console.log(handleMenuOutside);

    
  }
    return(
        <div onClick={handleMenuOutside}>
       <Sp onClick={handleMenu}>これは練習用の文章です。クリックでメニューを表示させます</Sp>
       {ShowMenuVisible && (
        <ShowMenu style={{top:menuPosition.y, left:menuPosition.x}}>
           <SButton>変更する</SButton> 
           <SButton>削除する</SButton> 
        </ShowMenu>
       )}        

       <p> {Text} </p>

        <NavLink to="/">
         <p>Homeページに移動します</p>  
       </NavLink>
       </div>
    )
}

const Sp = styled.p`
    padding: 40px;
`

const ShowMenu = styled.div`

  transform: translateX(300px), translateY(-100px);
`

const SButton = styled.button`
  margin: 5px;
  display: flex;
`