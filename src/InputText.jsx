import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams, useSearchParams } from "react-router-dom";
export const InputText = () => {
  const [text, setText] = useState('');
　const [addtext, setAddText] = useState('');
　const navigate = useNavigate();

const [params, setParams] = useSearchParams();

const Text = params.get('s') || '';

 useEffect(() => {
  const storedText = localStorage.getItem('addtext');
  if (storedText) {
    setAddText(storedText);
  }
 },[]);
  
  const handleparamsText = (e) => {
    setParams({
      s: e.target.value
    })}


  const handleText = (e) => {
    setText(e.target.value)
  }
  
  
  const handleAddText = () => {
    setAddText(text)
    setText('')
    localStorage.setItem('addtext',addtext)
  }

  const handleDelete = () => {
    setAddText('');
    localStorage.removeItem('addtext',addtext);
  }

  const NextPage = () => {
    navigate("/ShowMenu",{
      state:{
        Text:Text || '',
      }
    })
  }
  return(
    <div>
        <h1>InputTextページです</h1>

        <input type="text" value={text} onChange={handleText} />
        <input type="text" value={Text} onChange={handleparamsText} />

        <button onClick={handleAddText}>この文章を移動させます。</button>
        <button onClick={handleDelete}>この文章を削除します。</button>
        <button onClick={NextPage}>この文章を遷移先に移動させます。</button>

        <p>{addtext}</p>

        <NavLink to="/">
         <p>Homeページに移動します</p>  
       </NavLink>
    
        
    </div>
  )
}