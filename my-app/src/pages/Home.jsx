import React from 'react'
import Navbar from './NavbarComponent'
// import { NavLink } from 'react-router-dom'
import model from '../assets/img/Inspiration _ Blog _ Style Advice _ Phase Eight.png'
import style from '../assets/css/home.css'


function Home() {
    return (
            <div id="my-content">
      <Navbar />

      <div className="header-body d-flex justify-content-center ">
        <div className="container mt-1">
          <div className="row mb-5">
            {/* <p className="timestamp">{timestamp}</p> */}
          </div>
          <div className="row">
            <div className="col-md-8 ">
              <img className="my-img" src={model} alt="profile-pic justify-content-center" />
            </div>
            <div className="col-md-4">
              </div>
            {/* <div className="my-img" sr alt="profile-pic justify-content-center"/> */}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home