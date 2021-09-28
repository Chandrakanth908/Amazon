import React from 'react'
import './Prodhome.css'
import Product from './Product1'

// import {Link} from 'react-router-dom'

import h1 from '../images/h1.jpg'
import h2 from '../images/h2.jpg'
import h3 from '../images/h3.jpg'
import h4 from '../images/h4.jpg'
import wave from '../images/wave.png'


function Prodhome(){
    return(
        <div className="ho">
            <div className="electronic">
                <img src={wave} alt=""/>
                
            </div>
            <div className="home-1">
                <div className="hom-1"><Product img={h1}  Model="Samsung 198 L 5 Star Inverter Direct-Cool Single Door Refrigerator (RR21T2H2WCB/HL, erter Direct-Cool Single Door Refrigerator " Price="Rs 17,490.00" delivary="Free Delivary by Amazon"/></div>
                <div className="hom-1"><Product img={h2}  Model="Panasonic 20L Solo Microwave Oven (NN-ST26JMFDG, Silver, 51 Auto Menus) " Price="Rs 5390.00" delivary="Free Delivary by Amazon"/></div>
                <div className="hom-1"><Product img={h3}  Model=" LG 6.0 Kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine " Price="Rs 36,990s.00" delivary="Free Delivary by Amazon"/></div>
                <div className="hom-1"><Product img={h4}  Model=" AmazonBasics 0.75 Ton 3 Star Window ACAmazonBasics 0.75 Ton 3 Star Window ACAmazonBasics 0.75 Ton 3 Star Window AC " Price="Rs 16,990s.00" delivary="Free Delivary by Amazon"/></div>
                   
            </div>
            
            
            
        </div>

    )
}

export default Prodhome;