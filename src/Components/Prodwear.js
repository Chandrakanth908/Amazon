import React from 'react'
import './Prodwear.css'
import Product from './Product1'

// import {Link} from 'react-router-dom'

import w1 from '../images/w1.jpg'
import w2 from '../images/w2.jpg'
import w3 from '../images/w3.jpg'
import w4 from '../images/w4.jpg'
import w5 from '../images/w5.jpg'
import w6 from '../images/w6.jpg'
import w7 from '../images/w7.jpg'
import w8 from '../images/w8.jpg'

function Prodwear(){
    return(
        <div>
            <div className="wear-1">
                <div className="men-1"><Product img={w1}  Model="Dennis Lingo Men's Striped Slim Fit Cotton Casual Shirt" Price="Rs 340.00" delivary="Free Delivary by Amazon"/></div>
                <div className="men-1"><Product img={w2}  Model="Amazon Brand - Inkast Denim Co. Men's Regular fit Casual Shirt" Price="Rs 340.00" delivary="Free Delivary by Amazon"/></div>
                <div className="men-1"><Product img={w3}  Model="LookMark Men's Poly Cotton Digital Printed Stitched Half Sleeve Shirt" Price="Rs 449.00" delivary="Free Delivary by Amazon"/></div>
                <div className="men-1"><Product img={w4}  Model="LookMark Men's Poly Cotton Digital Printed Stitched Half Sleeve Shirt" Price="Rs 449.00" delivary="Free Delivary by Amazon"/></div>
            </div>
            <div className="wear-1">
                <div className="men-1"><Product img={w5}  Model="Henley Neck Regular Men's Fit Combo T-Shirts Pack of 2" Price="Rs 633.00" delivary="Free Delivary by Amazon"/></div>
                <div className="men-1"><Product img={w6}  Model="FASHION GALLERY Men's Cotton V-Neck Full Sleeves Regular Fit T-shirt" Price="Rs 339.00" delivary="Free Delivary by Amazon"/></div>
                <div className="men-1"><Product img={w7}  Model="PAUSE Men's Slim Fit T-Shirt" Price="Rs 339.00" delivary="Free Delivary by Amazon"/></div>
                <div className="men-1"><Product img={w8}  Model="Black Collection Men's Plain Slim Fit Full Sleeve T-Shirt" Price="Rs 549.00" delivary="Free Delivary by Amazon"/></div>
                
            </div>

            
        </div>

    )
}

export default Prodwear;