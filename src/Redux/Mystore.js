import { createStore } from 'redux'

let initialState={
    cakes : 100,
    sweets : 250
}


function reducer( state=initialState , action ){
    switch(action.type){
        case 'BUY_CAKES' :
            return {...state , cakes : state.cakes - action.count } 
        case 'BUY_SWEETS' :
            console.log(action);
            return {...state , sweets : state.sweets - action.count }
        default : 
          return state
    }
}

let Mystore=createStore(reducer);

export default Mystore;