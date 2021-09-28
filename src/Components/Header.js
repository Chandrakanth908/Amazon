import './Header.css'

import SearchIcon from '@material-ui/icons/Search'

import ShoppingIcon from '@material-ui/icons/ShoppingCart'

import LocationIcon from '@material-ui/icons/Room'

import Indian from '../images/Indian.png'

import {Link} from 'react-router-dom'

import {auth} from '../firebase'

import {useSelector} from 'react-redux'

function Header() { 

  let basket= useSelector(state =>state.basket);
  console.log(basket);

  let user=useSelector(state=>state.user)
   const handleAuthentication=()=>{

  if(user){
       auth.signOut();
    }
   }

  return (
    <div className='header'>

      <div className='header__row'>

        {/* Section-1 */}

        <div className='header__section1'>
          <Link to ="./">
           <div>
             <img className='header__image' src='http://pngimg.com/uploads/amazon/amazon_PNG25.png' alt=""/>
           </div>
          </Link>

          
          
          <div className='header__location'>
            <LocationIcon className='header__LoactionIcon' style={{ fontSize: 35 }} />
            <div className='header__address'>
              <span className='header__option1'>Hello</span>
              <span className='header__option2'>Select your address</span>
            </div>
          </div>
        </div>

        {/* Section-2 */}

        <div className='header__section2'>
              <div className='header__search'>
                  <input type='search' placeholder='Search for Electroncs, Accesories, Home Appliances, etc.,'/>
                  <SearchIcon className='header__searchIcon'></SearchIcon>
              </div>
        </div>
    
        {/* Section-3 */}

        <div className='header__section3'>
          <div className='header__language'>
              <img className='header__IndainFlag' src={Indian} alt=""/>
          </div>

          <Link to ="./Account">
          <div className='header__signin' onClick={handleAuthentication}>
            <span className='header__option1'>Hello {user ?user.email.substring(0,5):"chandu"}</span>
            <span className='header__option2'>{user ? 'signout' :'signin'}</span>
          </div>
          </Link>
          

          <Link to ="./Myorders">
            <div className='header__orders'>
              <span className='header__option1'>Returns</span>
              <span className='header__option2'>&Orders</span>
            </div>
          </Link>
          {/* <div className='header__orders'>
              <span className='header__option1'>Returns</span>
              <span className='header__option2'>& Orders</span>
          </div> */}
          
          <Link to = "./Cart">
            <div className='header__cart'>
              <ShoppingIcon className='header__cartIcon' style={{ fontSize: 35 }} />
              <div><span className="cart__count">{basket.length}</span>
              <span className='header__option2'>Cart</span>
              </div>
              
              
            </div>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Header;