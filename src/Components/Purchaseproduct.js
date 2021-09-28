// import './Prodlaptop.css'

import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';




function Purchaseproduct({id , image , title , price , delivary}){

    
    

    return(
        <div className="pol-3">
            <div className="pol-1">
            <img className="prd__img" src={image} alt=""/><br></br>
            </div>
            <div className="pol-2">
            <span>{title}</span><br></br>
            <span className="pri">{price}</span><br></br>
            <span>{delivary}</span><br></br>
            
            </div>
            <div className='P__star'> 
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/>
            </div>
          
          
      </div>
      
    )
}

export default Purchaseproduct;
