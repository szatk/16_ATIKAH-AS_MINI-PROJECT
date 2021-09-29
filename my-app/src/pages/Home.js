import React from 'react'
import Navbar from './NavbarHome'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import background from '../assets/img/background.png'
import '../assets/css/home.css'
import Dyah from '../assets/img/Dyah.png'
import Selena from '../assets/img/Selena.png'
import Sarah from '../assets/img/Sarah.png'
import Hana from '../assets/img/Hana.png'
import Nayy from '../assets/img/Nayy.png'
import Ikachan from '../assets/img/Ikachan.png'


function Home() {
    return (
    <>
      <div id="my-content">
      <Navbar />

      <div className="header-body d-flex justify-content-center ">
            {/* <h1 style={{ margin: 'auto', textAlign: 'center' }}>{timestamp}</h1> */}
          </div>
            <img className="my-img" src={background} alt="background-pic" />
            </div>
            <br></br>
      <div className="h4">
          <h4>NEW COMING PRODUCT</h4>
          </div>
          <br></br>

      <div className="listGambar">
          <div className="satuProduk">
          <div className="iniGambar">
          <img className="my-img2" src={Dyah} alt="product-pic"/>
          </div>
          <p className="iniTitle">DYAH MINI HEELS</p>
          <p className="iniHarga">Rp. 200.000</p>
      </div>
          <div className="duaProduk">
          <div className="iniGambar">
          <img className="my-img2" src={Selena} alt="product-pic"/>
          </div>
          <p className="iniTitle">SELENA MINI HEELS</p>
          <p className="iniHarga">Rp. 200.000</p>
      </div>
      <div className="tigaProduk">
          <div className="iniGambar">
          <img className="my-img2" src={Sarah} alt="product-pic"/>
          </div>
          <p className="iniTitle">SARAH MINI HEELS</p>
          <p className="iniHarga">Rp. 200.000</p>
      </div>
      <div className="empatProduk">
          <div className="iniGambar">
          <img className="my-img2" src={Hana} alt="product-pic"/>
          </div>
          <p className="iniTitle">HANA MAX HEELS</p>
          <p className="iniHarga">Rp. 280.000</p>
      </div>
      <div className="limaProduk">
          <div className="iniGambar">
          <img className="my-img2" src={Nayy} alt="product-pic"/>
          </div>
          <p className="iniTitle">NAYY MAX HEELS</p>
          <p className="iniHarga">Rp. 250.000</p>
      </div>
      <div className="enamProduk">
          <div className="iniGambar">
          <img className="my-img2" src={Ikachan} alt="product-pic"/>
          </div>
          <p className="iniTitle">IKACHAN HEELS</p>
          <p className="iniHarga">Rp. 300.000</p>
      </div>
      </div>
      
      <Footer/>  
  </>
  )
}

export default Home
