import React from 'react'
import Navbar from './NavbarHome'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import background from '../assets/img/background.png'
import '../assets/css/home.css'


function Home() {
    return (
    <>
      <div id="my-content">
      <Navbar />

      <div className="header-body d-flex justify-content-center ">
            {/* <h1 style={{ margin: 'auto', textAlign: 'center' }}>{timestamp}</h1> */}
          </div>
              <img className="my-img" src={background} alt="profile-pic" />
            </div>
            <br></br>
      <div className="h4">
           <h4>NEW COMING PRODUCT</h4>
          </div>
          <br></br>

      <div>
      <div class="container">
  <div class="row">
    <div class="col">
      First in DOM, no order applied
    </div>
    <div class="col order-5">
      Second in DOM, with a larger order
    </div>
    <div class="col order-1">
      Third in DOM, with an order of 1
    </div>
  </div>
</div>
      </div>
  
  </>
  )
}

export default Home
