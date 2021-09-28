import React from 'react'
import './Prodtv.css'
import Product from './Product1'

// import {Link} from 'react-router-dom'

import m1 from '../images/m1.jpg'
import m2 from '../images/m2.jpg'
import m3 from '../images/m3.jpg'
// import m4 from '../images/m4.jpg'
import m5 from '../images/m5.jpg'
import m6 from '../images/m6.jpg'
import m7 from '../images/m7.jpg'
// import m8 from '../images/m8.jpg'

function Prodtv(){
    return(
        <div>
            <div className="nav-1">
                <div className="nav-3"><Product img={m1}  Model="Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO|L32M5-AL (Black)" Price ="Price:₹14,999" delivary="Free Delivary by Amazon"/></div>
                <div className="nav-3"><Product img={m2}  Model="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)" Price ="Price:₹15,999" delivary="Free Delivary by Amazon"/></div>
                <div className="nav-3"><Product img={m3}  Model="Samsung 80 cm (32 Inches)  HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black)"   Price ="Price:₹16,990" delivary="Free Delivary by Amazon"/></div>
                {/* <div className="nav-14"><Product img={m4}  Model="OnePlus 9 Pro 5G (256GB Storage)" delivary="Free Delivary by Amazon"/></div> */}
               
            </div>
            <div className="nav-2">
                
                <div className="nav-3"><Product img={m5}  Model="iFFALCON 139 cm (55 inches)Android Smart QLED TV 55H71 (Metallic Black) (2021 Model) " Price ="Price:₹13,500" delivary="Free Delivary by Amazon"/></div>
                <div className="nav-3"><Product img={m6}  Model="Kodak 80 cm (32 Inches) HD Certified Android LED TV 32HDX7XPRO (Black) (2020 Model)" Price ="Price:₹49,999" delivary="Free Delivary by Amazon"/></div>
                <div className="nav-3"><Product img={m7}  Model="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV "   Price ="Price:₹16,000"delivary="Free Delivary by Amazon"/></div>
                {/* <div className="nav-24"><Product img={m8}  Model="Vivo Y20i (,3GB RAM, 64GB Storage)" delivary="Free Delivary by Amazon"/></div> */}
                
            </div>
        </div>

    )
}

export default Prodtv;