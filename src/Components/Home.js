import './Home.css'
import ProductCategory from './ProductCategory'

import mobile from'../images/mobile.jpg'
import laptop from '../images/laptop.jpg'
import wear from '../images/wear.jpg'
import appli from '../images/appli.jpg'
import food from '../images/food.jpg'
import perfume from '../images/perfume.jpg'
import watch from '../images/watch.jpg'
// import ggg from '../images/ggg.png'
import frame from '../images/frame.jpg'
// import mask from '../images/mask.jpg'
import amazon1 from '../images/amazon1.jpg'
import amazon2 from '../images/amazon2.jpg'
import amazon3 from '../images/amazon3.jpg'
import amazon4 from '../images/amazon4.jpg'
import prime from '../images/prime.jpg'
// import ama from '../images/ama.jpg'
import a1 from '../images/a1.jpg'
import a2 from '../images/a2.jpg'
import a3 from '../images/a3.jpg'
import a4 from '../images/a4.jpg'
import a5 from '../images/a5.jpg'
import a6 from '../images/a6.jpg'
// import a7 from '../images/a7.jpg'

import {Link} from 'react-router-dom'

function Home(){
  return(
    <div className='home'>
      {/* <-----Navbar start-----> */}
      <div className="bar">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"/>
      <span class="navbar-toggler-icon"></span>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="/all" id="navbardrop" data-toggle="dropdown">All</a>
      <div class="dropdown-menu">
        
        <a class="dropdown-item" href="/BestSellers">BestSellers</a>
        <a class="dropdown-item" href="/Today's Deals">Today's Deals</a>
        <a class="dropdown-item" href="Mobiles">Mobiles</a>
        <a class="dropdown-item" href="/Fashion">Fashion</a>
        <a class="dropdown-item" href="/Electronics">Electronics</a>
        <a class="dropdown-item" href="/New Realeases">New Realeases</a>
        <a class="dropdown-item" href="/Amazon Pay">Amazon Pay</a>
        
      </div>
    </li>
    <div className="navigation__display">
    <li class="nav-item active">
      <a class="nav-link" href="/Best Sellers">Best Sellers</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="/Today's Deals">Today's Deals</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="/Mobiles">Mobiles</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="/Fashion">Fashion</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="/Electronics">Electronics</a>
    </li>

    {/* <!-- Dropdown --> */}
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="/" id="navbardrop" data-toggle="dropdown">Prime</a>
      <div class="dropdown-menu">
        
        <a class="dropdown-item" href="/"><img src={prime} alt=""/></a>
        
      </div>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="/">New Realeases</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="https://www.amazon.in/gp/sva/dashboard?ref_=nav_cs_apay_fe0c735739554ca1a7cccf7c41941f2f">Amazon Pay</a>
    </li>
    
  
    <li class="nav-item active">
      <a class="nav-link" href="/">Download the app</a>
    </li>
    </div>
    
    
    
    
  </ul>
</nav>
</div>
{/* <-----Navbar ends-----> */}
{/* corosel starts */}
      <div className="coures" >
             <div id="imageCarousel" class="carousel slide " data-interval="1500" data-ride='carousel'>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={amazon1} alt="" class="img-responsive"/>

                </div>
                 
                 <div class="carousel-item">
                    <img src={amazon2} alt="" class="img-responsive"/>

                </div>
                <div class="carousel-item">
                    <img src={amazon3} alt="" class="img-responsive"/>

                </div>
                <div class="carousel-item">
                    <img src={amazon4} alt="" class="img-responsive"/>

                </div>
                
            </div>

           </div>

        </div>
      {/* corosel ends */}
      
      <div className='container-2'>
      

        <div className="row-1">
         <div className="hom-1"><Link to ="Electronics"><ProductCategory title="Electronics|Upto 40% OFF" description="See More" imgsrc={food} alt=""/></Link></div>
         <div className="hom-1"><Link to ="Games"><ProductCategory title="Watches" description="See More" imgsrc={watch} alt=""/></Link></div>
         <div className="hom-1"><Link to ="Frames"><ProductCategory title="Revamp your home in style" description="See More" imgsrc={frame} alt=""/></Link></div>
          
          <div className="hom-1"><Link to ="Laptops"><ProductCategory title="Upto 60% Off|Laptops" description="See More" imgsrc={laptop} alt=""/></Link></div>
          
       </div>

        

        <div className="row-2">
          <div className="hom-1"><Link to ="Home Appliances"> <ProductCategory title="Top picks for your home" description="See More" imgsrc={appli} alt=""/></Link></div>
          <div className="hom-1"><Link to ="Mens Wear"><ProductCategory title="Mens Wear" description="See More" imgsrc={wear} alt=""/></Link></div>
          <div className="hom-1"><Link to ="Telivision"><ProductCategory title="Telivisions" description="See More" imgsrc={mobile} alt=""/></Link></div>
          <div className="hom-1"><Link to ="Perfumes"><ProductCategory title="Perfumes" description="See More" imgsrc={perfume} alt=""/></Link></div>
        </div>
        <h5>WRS | Up to 80% off + 10% Instant discountView all offers in Wardrobe Refresh Sale</h5>
        <div className="roe">
          
          <img src={a1} alt=""/>
          <img src={a2} alt=""/>
          <img src={a3} alt=""/>
          <img src={a4} alt=""/>
          <img src={a5} alt=""/>
          <img src={a1} alt=""/>
          
          <img src={a6} alt=""/>
        </div>



      </div>
    </div>
  )
}


export default Home;