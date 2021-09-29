import React from 'react'
import Navbar from './NavbarHome'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import background from '../assets/img/Background.png'
import '../assets/css/home.css'


function Home() {
    return (
      <div id="my-content">
      <Navbar />

      <div className="header-body d-flex justify-content-center ">
        <div className="container mt-5">
          <div className="row mb-5">
            {/* <h1 style={{ margin: 'auto', textAlign: 'center' }}>{timestamp}</h1> */}
          </div>
          <div className="row">
            <div className="col-md-12">
              <img className="my-img" src={background} alt="profile-pic" />
            </div>
                <NavLink to="/contact">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-getInTouch"
                  >
                    Get In Touch
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Home
