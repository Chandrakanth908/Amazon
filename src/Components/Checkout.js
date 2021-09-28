import './Checkout.css'

import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { useDispatch } from 'react-redux';

export default function Checkout({ image , Model , Price , delivary}){
    let dispatch = useDispatch();

    return(
        <div className="po-3">
            <div className="pol-1">
            <img className="prd__img" src={image} alt=""/><br></br>
            </div>
            <div className="po-2">
            <span>{Model}</span><br></br>
            <span className="pri">{Price}</span><br></br>
            <span>{delivary}</span><br></br>
            
            </div>
            <div className='P__star'> 
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/>
            </div>
          
          <button className="but" onClick= {()=> dispatch({type : 'REMOVE_PRODUCT', })}>Remove Item</button>
      </div>
    )
}