import React from 'react';
import './formStyle.css';

const Reserva = () => {
    return (
        <div className='reserva'>
            <div className='container'>
                <h1>Reserva</h1>
                <div className='Restaurantes'>
                    {/** display tittle, addres, and pic of every restaurante */}

                </div>
                
            
                <form>
                    <input type='text' placeholder='Nombre' />
                    <input type='email' placeholder='Email' />
                    <input type='text' placeholder='Telefono' />
                    <input type='date' placeholder='Fecha' />
                    <input type='time' placeholder='Hora' />
                    <textarea placeholder='Mensaje'></textarea>
                    <button>Reservar</button>
                </form>
            </div>
        </div>
    )
}

export default Reserva;