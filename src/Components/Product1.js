// import './Prodlaptop.css'

import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { useDispatch } from 'react-redux';



function Product1({id , img , Model , Price , delivary}){

    let dispatch = useDispatch();
    

    return(
        <div className="pol-3">
            <div className="pol-1">
            <img className="prd__img" src={img} alt=""/><br></br>
            </div>
            <div className="pol-2">
            <span>{Model}</span><br></br>
            <span className="pri">{Price}</span><br></br>
            <span>{delivary}</span><br></br>
            
            </div>
            <div className='P__star'> 
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/>
            </div>
          
          <button className="but" onClick= {()=> dispatch({type : 'ADD_TO_CART', item :{ image : img , model : Model , Price :Price , delivary:delivary}})}>Add to Cart</button>
      </div>
      
    )
}

export default Product1;
