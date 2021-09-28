import React from 'react'
import './Frames.css'
import Product from './Product1'

// import {Link} from 'react-router-dom'

import r1 from '../images/r1.jpg'
import r2 from '../images/r2.jpg'
import r3 from '../images/r3.jpg'
import r4 from '../images/r4.jpg'
import r5 from '../images/r5.jpg'
import r6 from '../images/r6.jpg'
import r7 from '../images/r7.jpg'
import r8 from '../images/r8.jpg'
import frame1 from '../images/frame1.jpg'

function Frames(){
    return(
        <div>
            <div className="electronic">
                <img src={frame1} alt=""/>
                
            </div>
            <div className="frames">
                <div className="frame">
                    <div className="fra-1">
                        <div className="fram-1"><Product img={r1}  Model="SAF Set of 4 Work Hard Dream Big Motivational UV Coated Home Decorative Gift Item Framed Alphabets Painting" Price="Rs 650.00" delivary="Free Delivary by Amazon"/></div>
                        <div className="fram-1"><Product img={r2}  Model="SAF Ganesha UV Coated Home Decorative Gift Item Framed Painting 12 inch X 12 inch SANFO89" Price="Rs 569.00" delivary="Free Delivary by Amazon"/></div>
                        <div className="fram-1"><Product img={r3}  Model="SAF 7 Running Horses at Sunrise Vastu UV Textured Multi-Effect Framed Painting 11 Inch X 14 Inch SANFK173 " Price="Rs 547.00" delivary="Free Delivary by Amazon"/></div>
                        <div className="fram-1"><Product img={r4}  Model="SAF Motivational Quotes Digital Reprint Painting (19 x 19 Inch) -Set of 4 SANFSD35N" Price="Rs 190.00" delivary="Free Delivary by Amazon"/></div>
                    </div>
                    <div>
                        <div className="fra-2">
                            <div className="fram-1"><Product img={r5}  Model="SAF Set of 4 Work Hard Dream Big Motivational UV Coated Home Decorative Gift Item Framed Alphabets Painting" Price="Rs 650.00" delivary="Free Delivary by Amazon"/></div>
                            <div className="fram-1"><Product img={r6}  Model="SAF Radha Krishna UV Coated Home Decorative Gift Item Framed Painting 12 inch X 12 inch SANFO89" Price="Rs 569.00" delivary="Free Delivary by Amazon"/></div>
                            <div className="fram-1"><Product img={r7}  Model="SAF Set of 4 Camera, Recorder, Guitar, Headphone Musical Instrument UV Coated Home Decorative Gift Item Framed " Price="Rs 547.00" delivary="Free Delivary by Amazon"/></div>
                            <div className="fram-1"><Product img={r8}  Model="  Go Hooked Digital Wall Painting Set of 4 / Paintings for Bedroom/Wall Paintings/Wall Décor/Home Décor" Price="Rs 190.00" delivary="Free Delivary by Amazon"/></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
            
                
       
        

    )
}

export default Frames;