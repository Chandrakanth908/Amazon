import React from 'react'
import './Prodlaptop.css'
import Product from './Product1'

import l1 from '../images/l1.jpg'
import l2 from '../images/l2.jpg'
import l3 from '../images/l3.jpg'
import l4 from '../images/l4.jpg'
import l5 from '../images/l5.jpg'
import l6 from '../images/l6.jpg'

function Prodlaptop(){
    return(
        <div>
        <div className="lap-1">
            <div className="lape-1"><Product img={l1} Model="2020 Apple MacBook Pro (13-inch, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD)" delivary="Free Delivary by Amazon" /></div>
            <div className="lape-1"><Product img={l2} Model=" Dynotrek Grade 17.6 Inches Laptop Tablet Ipad Chromebook Water Resistance Sleeve Case Cover with Charger Pouch  " delivary="Free Delivary by Amazon"/></div>
            <div className="lape-1"><Product img={l3} Model=" Dell Inspiron 3505 15.6 FHD Display Laptop (R3-3250U / 8GB / 1TB HDD / Integrated Graphics / Win 10 + MSO / Soft Mint)  " delivary="Free Delivary by Amazon"/></div>
            
        </div>

         <div className="lap-1">
             <div className="lape-1"><Product img={l4} Model="Acer Nitro 5 Ryzen 5 4600H 15.6-inch Display Thin and Light Gaming Laptop (16GB RAM/512 GB SSD/Win10" delivary="Free Delivary by Amazon" /></div>
             <div className="lape-1"><Product img={l5} Model="Mi Notebook Horizon Edition 14 Intel Core i5-10210U 10th Gen 14-inch (35.56 cms) Thin and Light Laptop(8GB/512GB SSD/Windows 10 " delivary="Free Delivary by Amazon"/></div>
             <div className="lape-1"><Product img={l6} Model="AVITA LIBER V14 NS14A8INF561-CS 14 (35.56cms) Laptop (Core i5-10210U/8GB/512GB SSD/FHD Display/Windows 10 Home/Intel UHD Graphics 620), Cloud Silver " delivary="Free Delivary by Amazon"/></div>
      
            </div>
        </div>

        
        
    )
}

export default Prodlaptop