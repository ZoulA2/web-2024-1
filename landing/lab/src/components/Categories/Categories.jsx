import React from 'react'
import './Categories.css'


const CATEGORIES = () => {
    const RENDERLIST = () => {
        return CAT.map(({id,image,text})=>(
<div className='category-container' key={id}>
<h1 className='name'>{text}</h1>
<div className='gradient'></div>
<img className='cat-img' src={image}></img>
</div>
        ))
    }
  return (
    
    <div className='categories-container'>
   
    {RENDERLIST()}
    
    </div>
  )
}

    const CAT = [

        {
            id: crypto.randomUUID(),
            text: 'BOOMSHOOT',
            image: "https://pbs.twimg.com/media/FVVStb-agAE5KUD.jpg:large",
            
          },
          {
            id: crypto.randomUUID(),
            text: 'ABSTRACT',
            image: "https://artcontemporaneo.com/wp-content/uploads/2020/07/Imagen-1_hylics.jpg",
           
          },
          {
            id: crypto.randomUUID(),
            text: 'AMBIENT',
            image: "https://i.blogs.es/f5e509/scorn-pc-xbox/1366_2000.jpeg",
            
          },
          {
            id: crypto.randomUUID(),
            text: 'HORROR',
            image: "https://cdn.cdkeys.com/500x706/media/catalog/product/d/a/das.jpg",
           
          },


    ]

    export default CATEGORIES 
  