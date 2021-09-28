// import './Cakes.css'

import { useSelector , useDispatch } from 'react-redux'

function Cakes(){

   

    let cakescount = useSelector(state=>state.cakes);

    let dispatch = useDispatch();



    return (
        <div className='cakes__home'>
            <h1>Cakes</h1>
            <h1> Cakes Count :{cakescount} </h1>
            <button onClick={()=>dispatch({ type : 'BUY_CAKES', count : 20})}>BUY Cakes</button>
        </div>
    )
}

export default Cakes;