import One from '../../img/Fullhp.png'
import Two from '../../img/Serious.png'
import Three from '../../img/Almost.png'
import Four from '../../img/Dead.png'
import './Doomguy.css'
export function Doomguy({ CountNum }) {
    let image = ""
    function Doomstate(){
        if (CountNum >75){
            image = One
        }
        else if (CountNum >50 && CountNum <=75){
            image = Two
        }
        else if (CountNum >25 && CountNum <=50){
            image = Three
        }
        else if (CountNum >=0 && CountNum <=25){
            image = Four
        }
        

    }
    Doomstate()
    return (
        
        <img className='Doom' src={image}/>
    )
}