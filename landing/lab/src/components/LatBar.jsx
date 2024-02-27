import React from 'react'
const LATBAR = () => {
    return(
        <div style={{ marginTop: "215px", marginLeft:"65px", top: "0px", display: 'flex', flexDirection: "column",
         position: "absolute", zIndex: "5",
       display: "flex", flexDirection: "row", width: "150px", height: "350px", justifyContent: "center"}}>
          
          <img className='cards' src="https://giftcardstonaira.com/assets/images/giftcards/steam.png"/>

          <div className='first' style={{display: "flex", flexDirection: "column",}}>
            <h2 className='first' style={{ marginLeft: "-160px",marginTop: "70px", fontSize: "20px"}}>Tarjetas regalo de Steam</h2>
            <h3 className='first' style={{ marginLeft: "-280px",marginTop: "-15px", fontWeight: "lighter", fontSize: "15px"}}>regala diversión</h3>
         
         <div  className='second'style={{backgroundColor: "#364867", width:"230px", marginLeft:"-155px", height:"130px"}}>
         <h2 style={{ marginLeft: "-30px", fontSize: "20px"}}>Vistos recientemente</h2>
            <h3 style={{ marginLeft: "-120px",marginTop:"-10px", fontWeight: "bolder", fontSize: "10px"}}>Turnip boy robs a bank</h3>
            <h3 style={{ marginLeft: "-200px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Tunic</h3>
            <h3 style={{ marginLeft: "-160px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Hollow Knight</h3>
         </div>

         <div  className='third' style={{ width:"230px", marginLeft:"-155px", height:"130px"}}>
         <h2 style={{ marginLeft: "-85px", fontSize: "20px"}}>Recomendados</h2>
            <h3 style={{ marginLeft: "-155px",marginTop:"-10px", fontWeight: "bolder", fontSize: "10px"}}>Recomendados</h3>
            <h3 style={{ marginLeft: "-190px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Amigos</h3>
            <h3 style={{ marginLeft: "-185px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Etiquetas</h3>
         </div>

         <div className='fourth'  style={{ width:"230px", marginLeft:"-155px", height:"130px"}}>
         <h2 style={{ marginLeft: "-10px", fontSize: "20px"}}>Explorar por categorías</h2>
            <h3 style={{ marginLeft: "-155px",marginTop:"-10px", fontWeight: "bolder", fontSize: "10px"}}>Lo más vendido</h3>
            <h3 style={{ marginLeft: "-175px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Novedades</h3>
            <h3 style={{ marginLeft: "-160px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Próximamente</h3>
            <h3 style={{ marginLeft: "-195px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Ofertas</h3>
            <h3 style={{ marginLeft: "-180px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Títulos RV</h3>
            <h3 style={{ marginLeft: "-115px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Compatible para mando</h3>
            <h3 style={{ marginLeft: "-140px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Perfecto para Deck</h3>
         </div>
         
         <div className='fifth' style={{ width:"230px", marginLeft:"-155px", height:"130px"}}>
         <h2 style={{ marginLeft: "-30px",marginTop:"80px", fontSize: "20px"}}>Explorar por Géneros</h2>
            <h3 style={{ marginLeft: "-172px",marginTop:"-10px", fontWeight: "bolder", fontSize: "10px"}}>Free to Play</h3>
            <h3 style={{ marginLeft: "-142px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Acceso Anticipado</h3>
            <h3 style={{ marginLeft: "-198px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Acción</h3>
            <h3 style={{ marginLeft: "-188px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Aventura</h3>
            <h3 style={{ marginLeft: "-193px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Carreras</h3>
            <h3 style={{ marginLeft: "-190px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Casuales</h3>
            <h3 style={{ marginLeft: "-205px",marginTop: "-5px", fontWeight: "bolder", fontSize: "10px"}}>Indie</h3>
         </div>
         
         

            </div>
        </div>
    )
}

export default LATBAR