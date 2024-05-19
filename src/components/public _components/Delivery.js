import React from "react";
import "./Delivery.css";
import logoGlovo from "./images/Glovo_logo.png";
import logoJustEat from "./images/logo_just_eat.png";
import logoUberEats from "./images/Uber_eats_logo.png";

const Delivery = () => {
    return (
        <div className='delivery'>
            <div className='container'>

        

                    { /* logo of glovo, just eat, uber eats  on click take to url*/}
            <div className='delivery-logo'>
                    <img src={logoGlovo} alt='glovo' onClick={() => window.location.href = 'https://glovoapp.com/es/en/barcelona/pink-buda-burger-barcelona/'}/>
                    <img src={logoJustEat} alt='just-eat' onClick={() => window.location.href = 'https://www.just-eat.es/restaurants-pink-buda-burger-barcelona/menu'}/>
                    <img src={logoUberEats} alt='uber-eats' onClick={() => window.location.href = 'https://www.ubereats.com/es-en/store/pink-buda-burger/kzToJjoXXEm3OsruY9vB1Q'}/>

            </div>
        </div>
    </div>
    )       
}

export default Delivery;