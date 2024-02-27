import React from 'react'
import './Body.css'
import MINICARD from "../MiniCard/MiniCard"
import CARD from "../Card/Card"
import LATBAR from "../LatBar"
import NAVBAR from '../Navbar/Navbar'
import CATEGORIES from '../Categories/Categories'
export function Body(props){
    
    const{bgColor} = props
    return(
        <main className='body' style={{backgroundColor: bgColor}}>
            <NAVBAR></NAVBAR>
            <LATBAR></LATBAR>
            <h2 className= 'des' >DESTACADOS Y RECOMENDADOS</h2>
            <CARD/>
            <h2 className= 'of' >OFERTAS ESPECIALES</h2>
            <MINICARD></MINICARD>
            <h2 className= 'ex' >EXPLORA POR CATEGORIAS</h2>
            <CATEGORIES></CATEGORIES>

            </main>
    )
}