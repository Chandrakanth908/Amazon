import React from 'react'
import './Electronics.css'
import Product from './Product1'

// import {Link} from 'react-router-dom'

import f1 from '../images/f1.jpg'
import f2 from '../images/f2.jpg'
import f3 from '../images/f3.jpg'
import f4 from '../images/f4.jpg'
import f5 from '../images/f5.jpg'
import f6 from '../images/f6.jpg'
import f7 from '../images/f7.jpg'
import f8 from '../images/f8.jpg'
import electronics from '../images/electronics.jpg'
import sbi from '../images/sbi.png'

function Prodfood(){
    return(
        <div className="elect">
            <div className="electronic">
                <img src={sbi} alt=""/>
                <img src={electronics} alt=""/>
            </div>
            <h1 className="h1">New & upcoming launches in electronics</h1>
            <div className="elec-1">
                <div className="ele-1"><Product img={f1}  delivary="Free Delivary by Amazon"/></div>
                <div className="ele-1"><Product img={f2}  delivary="Free Delivary by Amazon"/></div>
                <div className="ele-1"><Product img={f3}  Model="" Price="" delivary="Free Delivary by Amazon"/></div>
                <div className="ele-1"><Product img={f4}  Model=""  delivary="Free Delivary by Amazon"/></div>
                
            </div>
            <div className="elec-1">
                <div className="ele-1"><Product img={f5}  delivary="Free Delivary by Amazon"/></div>
                <div className="ele-1"><Product img={f6} delivary="Free Delivary by Amazon"/></div>
                <div className="ele-1"><Product img={f7}  delivary="Free Delivary by Amazon"/></div>
                <div className="ele-1"><Product img={f8} delivary="Free Delivary by Amazon"/></div>

            </div>
            
        </div>

    )
}

export default Prodfood;