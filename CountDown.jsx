import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export const CountDown = () => {
    const [countDown, setCountDown] = useState(0);
    const [counting, setCounting] = useState(false);
    const [num, setNum] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
         setCountDown((e) => e + num);
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    },[counting, num])
　　　
    
    const handleCount = (value) => {
        setNum(value)
　　　　setCounting(true)
    }

   
    return(
        <div>
            <h1>CountDownページです</h1>
            <button onClick={() => handleCount(+1)}>カウントを増加させる</button>
            <button onClick={() => handleCount(-1)}>カウントを減少させる</button>
            <button onClick={() => handleCount(0)}>カウントを停止させる</button>
            <p>現在{countDown}秒です</p>

            <NavLink to="/">
         <p>Homeページに移動します</p>  
       </NavLink>
        </div>
    )
}

