import { useState } from "react"
import { NavLink } from "react-router-dom";
export const InputText = () => {
  const [text, setText] = useState('');
　const [addtext, setAddText] = useState('');
  
  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleAddText = (e) => {
    setAddText(text)
    setText('')
  }
  return(
    <div>
        <h1>InputTextページです</h1>

        <input type="text" value={text} onChange={handleText} />

        <button onClick={handleAddText}>この文章を移動させます。</button>

        <p>{addtext}</p>

        <NavLink to="/">
         <p>Homeページに移動します</p>  
       </NavLink>
    
        
    </div>
  )
}