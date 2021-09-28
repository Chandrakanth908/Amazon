import React from 'react'
import './Prodper.css'
import Product from './Product'

// 

import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'
import p4 from '../images/p4.jpg'

function Prodper(){
    return(
        <div>
            <div className="per-1">
            <div className="perf-1"><Product img={p1}  Model="Ustraa Scuba Cologne - 100 ml - Perfume for Men" Price="Rs 650.00" delivary="Free Delivary by Amazon"/></div>
            <div className="perf-1"><Product img={p2}  Model="Villain Perfume For Men 100 Ml - Eau De Parfum - Premium" Price="Rs 569.00" delivary="Free Delivary by Amazon"/></div>
            <div className="perf-1"><Product img={p3}  Model="Yardley London London Mist Daily Wear Perfume for Women, 100ml " Price="Rs 547.00" delivary="Free Delivary by Amazon"/></div>
            <div className="perf-1"><Product img={p4}  Model="Engage Cologne Spray XX2 for Men, Spicy and Citrus , Skin Friendly, 135ml" Price="Rs 190.00" delivary="Free Delivary by Amazon"/></div>
                
                
                
                
                
               
            </div>
            
        </div>

    )
}

export default Prodper;