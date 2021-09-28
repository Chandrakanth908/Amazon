import React from 'react'
import './ProductCategory.css'

function ProductCategory({title , description , imgsrc}){
    return(
        <div className='productCategory'>
            <div className="pro-3">
            <h3>{title}</h3>
            </div>
            <div className='pro-1'>
                <img src={imgsrc} alt=""/>
            </div>

            <div className='pro-2'> 
                
                <p>{description}</p>
            </div>
            
            
        </div>
    )
}

export default ProductCategory;