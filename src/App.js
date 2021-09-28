// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import Home from'./Components/Home'
import Footer from './Components/Footer'
import MyOrders from './Components/Myorders'
import Prodtv from './Components/Prodtv'
import Prodlaptop from './Components/Prodlaptop'
import Prodwear from './Components/Prodwear'
import Prodhome from './Components/Prodhome'
import Electronics from './Components/Electronics'
import Prodper from './Components/Prodper'
import Games from './Components/Games'
import Frames from './Components/Frames'
import Account from './Components/Account'
import Cart from './Components/Cart'
import Payment from './Components/Payment'

// import {auth} from './firebase'
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';


import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App(){
  
  // let dispatch =useDispatch();
  // useEffect(()=>{
  //   auth.onAuthStateChanged(authUser=>{
  //     console.log('The User is : ',authUser);
  //      if(authUser){
  //        dispatch({type : 'SET_USER' , user : authUser})
  //      }else{
  //        dispatch({type : 'SET_USER' , user : null})
  
  //      }
  //   })
  // },[])

  return(
    <div>
      <Router>
        <Switch>
          <Route exact path= "/">
            
            <Header></Header>
            <Home></Home>
            <Footer></Footer>

          </Route>
          <Route path="/Myorders">
            <Header></Header>
            <MyOrders/>
            <Footer></Footer>
          </Route>

          <Route path="/Telivision">
            <Header></Header>
            <Prodtv></Prodtv>
            <Footer></Footer>
          </Route>

          <Route path="/Mens Wear">
            <Header></Header>
            <Prodwear></Prodwear>
            <Footer></Footer>
          </Route>
          <Route path="/Laptops">
            <Header></Header>
            <Prodlaptop></Prodlaptop>
            <Footer></Footer>
          </Route>
          <Route path="/Home Appliances">
            <Header></Header>
            <Prodhome></Prodhome>
            <Footer></Footer>
          </Route>
          <Route path="/Electronics">
            <Header></Header>
            <Electronics></Electronics>
            <Footer></Footer>
          </Route>
          <Route path="/Perfumes">
            <Header></Header>
            <Prodper></Prodper>
            <Footer></Footer>
          </Route>
          <Route path="/Games">
            <Header></Header>
            <Games></Games>
            <Footer></Footer>
          </Route>
          <Route path="/Frames">
            <Header></Header>
            <Frames></Frames>
            <Footer></Footer>
          </Route>
          <Route path="/Account">
          <Header></Header>
          <Account></Account>           
          </Route>

          <Route path="/Cart">
            <Header></Header>
            <Cart></Cart>
            <Footer></Footer>
          </Route>
          <Route path="/payment">
            <Header></Header>
            <Payment/>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
      

export default App;
