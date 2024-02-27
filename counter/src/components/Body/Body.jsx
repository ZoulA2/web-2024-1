
import { Counter } from "../Counter/Counter"
import { Button } from "../Button/Button"
import { Doomguy } from "../Doomguy/Doomguy"
import { useState } from "react"
import Soulsphere from "../../img/Soul.png"
import './Body.css'
export function Body(props) {
    const{bgColor} = props
    const INITIALVALUE = 100
    const [CountNum, setCountNum] = useState(INITIALVALUE)
    const COUNTUP = (e) =>{ 
        CountNum <100?
        setCountNum(CountNum + 1)
        :alert("HEALTH MAXIMUM RIP AND TEAR")
    }
    const COUNTDOWN = (e) => { 
        CountNum > 0?
        setCountNum(CountNum - 1)
        : alert ("oompf")
    }
    const COUNTRESET = (e) => {
        setCountNum (INITIALVALUE)
     }
    const HEALTHUP = {
        className: 'healthup',
        clickFunction: COUNTUP,
        text: '+'
    }

    const HEALTHDOWN = {
        className: 'healthdown',
        clickFunction: COUNTDOWN,
        text: '-'
    }

    const RESET = {
        className: 'reset',
        clickFunction: COUNTRESET,
        text: 'RESET'
    }
    return (
        <main className="body">
            <div className="all">
                <Button className={HEALTHUP.className} clickFunction={HEALTHUP.clickFunction} text={HEALTHUP.text}/>  
                <Counter CountNum={CountNum} />
                <Button className={HEALTHDOWN.className} clickFunction={HEALTHDOWN.clickFunction} text={HEALTHDOWN.text}/>
               
            
            </div>
            <Button className={RESET.className} clickFunction={RESET.clickFunction} text={RESET.text} />
            <Doomguy CountNum={CountNum}/>
        </main>
    )
}