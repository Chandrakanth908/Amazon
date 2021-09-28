import './Cart.css'
import cart from "../images/cart.png"

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Checkout from '../Components/Checkout'
function Cart() {

    let basket = useSelector(state => state.basket);
    console.log(basket);

    let CheckoutDetails = basket.map(item => <Checkout image={item.image} Model={item.Model} Price={item.Price} delivary={item.delivary} />)



    return (
        <div className="carthead container">
            <div className="carttop ">
                <div className={basket.length > 0 ? 'image__off' : 'image'}>
                    <img src={cart} alt="" />
                </div>
                <div >
                    <h4>Your Amazon Cart </h4>
                    <p>Shop today's deals</p>
                    <Link to="/payment"><button className="cartsignbutton">Payment Method</button></Link>

                    {/* <button className="cartsignbutton">Signup now</button> */}
                </div>
            </div>


            <div>{CheckoutDetails}</div>


        </div>
    )
}
export default Cart;