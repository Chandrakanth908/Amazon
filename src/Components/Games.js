import React from 'react'
import './Games.css'
import Product from './Product'

// import {Link} from 'react-router-dom'

import g1 from '../images/g1.jpg'
import g2 from '../images/g2.jpg'
import g3 from '../images/g3.jpg'
// import g4 from '../images/g4.jpg'
import g5 from '../images/g5.jpg'
import g6 from '../images/g6.jpg'
import g7 from '../images/g7.jpg'
// import g8 from '../images/g8.jpg'

function Games(){
    return(
        <div className="container">
            <div className="gam-1">
                <div className="ga-1"><Product img={g1}  Model="" Price ="Price:₹1179.00" delivary="Free Delivary by Amazon"/></div>
                <div className="ga-1"><Product img={g2}  Model=" " Price ="Price:₹969.00" delivary="Free Delivary by Amazon"/></div>
                <div className="ga-1"><Product img={g3}  Model=""   Price ="Price:₹899.00" delivary="Free Delivary by Amazon"/></div>
                {/* <div className="ga-1"><Product img={g4}  Model=""  Price ="Price:₹623.00" delivary="Free Delivary by Amazon"/></div>  */}
               
            </div>
            <div className="gam-2">
                
                <div className="g-1"><Product img={g5}  Model=" " Price ="Price:₹2199.00" delivary="Free Delivary by Amazon"/></div>
                <div className="g-1"><Product img={g6}  Model="" Price ="Price:₹2,999.00" delivary="Free Delivary by Amazon"/></div>
                <div className="g-1"><Product img={g7}  Model=""   Price ="Price:₹6.999.00"delivary="Free Delivary by Amazon"/></div>
                {/* <div className="g-8"><Product img={g8}  Model=" "   Price ="Price:₹699.00"delivary="Free Delivary by Amazon"/></div> */}
                
                
            </div>
        </div>

    )
}

export default Games;