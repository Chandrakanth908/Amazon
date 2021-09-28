import {createStore} from 'redux'

let initState = {
    basket: [],
    user: null
}

function reducer(state = initState , action){
    switch(action.type){
        case "ADD_TO_CART":
            return {...state, basket: [...state.basket, action.item]}
        case "REMOVE_PRODUCT":
            let newBasket = [...state.basket]
            let index = newBasket.findIndex(item=> item.id ===action.id)
            if(index>=0){
                newBasket.splice(index,1);
            }
            else{
                console.warn(`can't remove product id ${action.id} as it is not in baskets!`)
            }
            return{...state, basket: newBasket}

            case'SET_USER':
                return{...state,user:action.user}
                
                case 'EMPTY_BASKET' :
                    return {
                        ...state,
                        basket : []
                    }            

            
        default:
            return state;
    }
}

let amazonStore = createStore(reducer)
export default amazonStore;