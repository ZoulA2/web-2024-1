import React from 'react'
import './Card.css'
const CARD = () => {

   
    return(
        <div className='back'>
          <div style={{display: "flex", flexDirection: "column",}}>
          <img className='game' src="https://cdn1.epicgames.com/offer/eddb735dde6b47cda8193f2643cff886/EGS_Blasphemous_TheGameKitchen_S3_2560x1440-f1a83630b91b3f128e8f9dd58f3f8eed"/>
          
            <h2 className='resp'>Blasphemous</h2>

            <div  style={{display: "flex", flexWrap: "wrap", width: "350px", height:"130px", marginLeft: "530px",}} >
            <img className="prev" src="https://sm.ign.com/t/ign_es/screenshot/default/ss-770720a3db9408ae7ae6625ba157bfb9195a3a681920x1080_ravn.1280.jpg"></img>
            <img className="prev" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/12/blasphemous-2560173.jpg?tf=3840x"></img>
            <img className="prev" src="https://phantom-elmundo.unidadeditorial.es/b18adebd029f09166f8a36ea609ff5f2/resize/828/f/jpg/assets/multimedia/imagenes/2019/09/13/15683903616640.jpg"></img>
            <img className="prev" src="https://theobjective.com/wp-content/uploads/2019/09/blasphemous-la-imagineria-cristiana-desde-el-otro-lado-del-espejo.jpg"></img>
            </div>
            <div style={{display: "flex", flexDirection: "column", width: "350px", marginLeft: "530px"}}>
            <h3 className='Gone' style={{ marginLeft: "-240px", marginTop: "40px",fontWeight:"normal",}}>Ya disponible</h3>
            <h3 className='Gone' style={{ marginLeft: "-5px", marginTop: "-15px", backgroundColor: "#747880", width: "150px",fontWeight:"normal",}}>Lo más vendido</h3>
            <h3 className='respone'>COP</h3>
            </div>
            </div>
        </div>
    )
}
export default CARD
