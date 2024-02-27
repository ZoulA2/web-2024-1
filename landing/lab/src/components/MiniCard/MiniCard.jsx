import React from 'react'
import './MiniCard.css'

const MINICARD = () => {
  const MINILIST = () => {
    return MINIS.map(({id,image,text, info, cop, imageone, textone, infone, copone, imagetwo, textwo, coptwo, imagethree})=>(
      <div className='allcont'>
      <div className='cardcont' key={id}>
        <img className='games' src={image}></img>
        <div className='txtcont' >
      <h3 className='ggone'>{text}</h3>
      <h3 className='gtxt' >{info}</h3>
      <h3 className='gcop'>{cop}</h3>

      </div>
      </div>
      <div className='cardcontwo' key={id}>
      <img className='games' src={imageone}></img>
        <div className='txtcont' >
      <h3 className='ggone'>{textone}</h3>
      <h3 className='gtxt' >{infone}</h3>
      <h3 className='gcop'>{copone}</h3>
      </div>
      </div>
      
      <div className='cardconthree' key={id}>
      <img className='gamesmoll' src={imagetwo}></img>
        <div className='txtsmoll' >
      <h3 className='ggone'>{textwo}</h3>
      <h3 className='copsmoll'>{coptwo}</h3>
      </div>
      </div>

      <div className='cardcontfour' key={id}>
      <img className='gamesmoll' src={imagethree}></img>
        <div className='txtsmoll' >
      <h3 className='ggone'>{textwo}</h3>
      <h3 className='copsmoll'>{coptwo}</h3>
      </div>  
      </div>
    
      </div>
              ))
          }
          return (
    
            <div className='minis-container'>
           
            {MINILIST()}
            
            </div>
          )
        }
    
const MINIS = [

  {
      id: crypto.randomUUID(),
      image: "https://cdn1.epicgames.com/offer/eddb735dde6b47cda8193f2643cff886/EGS_Blasphemous_TheGameKitchen_S3_2560x1440-f1a83630b91b3f128e8f9dd58f3f8eed",
      text: 'Ya disponible',
      info: 'La oferta termina pronto',
      cop: 'COP',

      id: crypto.randomUUID(),
      imageone: "https://bitwares.net/wp-content/uploads/2023/02/Cruelty-Squad-Opinion-Review-Bitwares.jpg",
      textone: 'Ya disponible',
      infone: 'La oferta termina pronto',
      copone: 'COP',

      id: crypto.randomUUID(),
      imagetwo: "https://cdn.akamai.steamstatic.com/steam/apps/1227690/capsule_616x353.jpg?t=1693240559",
      textwo: '¡Oferta del día!',
      coptwo: 'COP',

      id: crypto.randomUUID(),
      imagethree: "https://cdn.akamai.steamstatic.com/steam/apps/692850/capsule_616x353.jpg?t=1708663358",
      textwo: '¡Oferta del día!',
      coptwo: 'COP',
      
     
      
    },
    {
      id: crypto.randomUUID(),
      image: "https://cdn.akamai.steamstatic.com/steam/apps/2231450/capsule_616x353.jpg?t=1674756021",
      text: 'Ya disponible',
      info: 'La oferta termina pronto',
      cop: 'COP',

      id: crypto.randomUUID(),
      imageone: "https://cdn.cloudflare.steamstatic.com/steam/apps/1931020/capsule_616x353.jpg?t=1691139635",
      textone: 'Ya disponible',
      infone: 'La oferta termina pronto',
      copone: 'COP',

      id: crypto.randomUUID(),
      imagetwo: "https://cdn.akamai.steamstatic.com/steam/apps/2097230/capsule_616x353.jpg?t=1708538843",
      textwo: '¡Oferta del día!',
      coptwo: 'COP',

      id: crypto.randomUUID(),
      imagethree: "https://cdn.akamai.steamstatic.com/steam/apps/1684930/capsule_616x353.jpg?t=1696099968",
      textwo: '¡Oferta del día!',
      coptwo: 'COP',
      
     
      
    },

    

    

    
   


]
        

        
  

export default MINICARD

   