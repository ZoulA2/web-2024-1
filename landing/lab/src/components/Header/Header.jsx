import React from 'react'
import {useState} from 'react'
import  {LINKS}  from '../const'
import './Header.css'
export  function Header(props){
    const {bgColor} = props
      const [showMenu, setShowMenu] = useState(false)
    const handleShowMenu = (e) => {
        setShowMenu (!showMenu)
    }
   
    return(
        <header className='head' style={{backgroundColor: bgColor,}}>
             <Menu
        items={LINKS}
        showMenu={showMenu}
      />
      <button
        id='hamburguer-btn'
        onClick={handleShowMenu}
      >
      
      <img className='burguer' src="https://www.svgrepo.com/show/313139/hamburger-menu.svg"/>
      </button>
      
            <img className='steam' src="https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png"/>
            <h3 className='HeaderTxt' style={{ padding: "10px 10px",fontWeight:"normal",}}>Tienda</h3>
            <h3 className='HeaderTxt' style={{ padding: "10px 10px",fontWeight:"normal",}}>Comunidad</h3>
            <h3 className='HeaderTxt' style={{ padding: "10px 10px",fontWeight:"normal",}}>Acerca de</h3>
            <h3 className='HeaderTxt' style={{ padding: "10px 10px",fontWeight:"normal",}}>Soporte</h3>
           
        </header>

    )
}

function Menu ({ items, showMenu }) {
    return (
      <nav className={!showMenu ? 'hidden' : ''}>
        <ul>
          {
              items.map((item) =>
                <MenuItem
                  item={item}
                  key={item.id}
                />)
            }
        </ul>
      </nav>
    )
  }
  
  function MenuItem ({ item }) {
    const { text } = item
    return (
      <li>
        <a href=''>{text}</a>
      </li>
    )
  }