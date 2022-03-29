import React from 'react';
import Adr from './address.png';
import Gmail from './gmail.png';
import Mob from './mobile.png';
import './Address.css'

function Address() {
  return (
    <div className='Address'>                       
        <div className="contacts">                   
            <img className='icons' src={Mob} alt="mobile_icon"/>
            <a href="tel:+21655803315"> (+216) 55 803 315</a>
        </div>              
        <div className="adress">                    
            <img className='icon' src={Adr} alt="address_icon"/>                    
            <p>11 Rue El Ikhouen Hafouz Wed Gueryena El Aguba Tunis</p>
        </div>              
        <div className="contacts">                    
            <img className='icons' src={Gmail} alt="gmail_icon"/>
            <a href="https://mail.google.com/mail">hamdaoui.meriam85@gmail.com</a>
        </div> 
    </div>
  )
}

export default Address;