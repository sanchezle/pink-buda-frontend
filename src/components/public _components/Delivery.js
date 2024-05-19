import React from "react";
import "./Delivery.css";


const Delivery = () => {
    return (
        <div className='delivery'>
            <div className='container'>
                <h1>Delivery</h1>
        

                    { /* logo of glovo, just eat, uber eats  on click take to url*/}
            <div className='delivery-logo'>
                    <img src='https://www.glovoapp.com/images/glovo-logo.svg' alt='glovo' onClick={() => window.location.href = 'https://www.glovoapp.com/'}/>
                    <img src='https://www.just-eat.es/assets/img/justeat-logo.svg' alt='just-eat' onClick={() => window.location.href = 'https://www.just-eat.es/'}/>
                    <img src='https://www.ubereats.com/brand-assets/ubereats-logo.svg' alt='uber-eats' onClick={() => window.location.href = 'https://www.ubereats.com/'}/>

            </div>
        </div>
    </div>
    )       
}

export default Delivery;