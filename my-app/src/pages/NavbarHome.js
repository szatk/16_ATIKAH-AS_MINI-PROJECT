import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { Badge, Container } from '@material-ui/core';
import {  ShoppingCartOutlined } from '@material-ui/icons'
import '../assets/css/navbar.css'
import styled from 'styled-components'


const ul=styled.div`
    background-color : #FFDAC1;
    `

function NavbarHome() {
    return (
      <>
      <Container>
        <li className="SignUp">
              <NavLink
                exact
                to="/SignUp"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                Sign Up
              </NavLink>
              <NavLink
                exact
                to="/Login"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                Login
              </NavLink>
        </li>
      </Container>

      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 shadow-sm">
      <div className="logo">
        <NavLink exact to="/">
        <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <br></br>
      <br></br>
      
        <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className ="navbar-nav d-flex align-items-center">
          {/* <ul className style={{color:'#FFDAC1'}}></ul> tadinya buat nampilin background warna */}
      
            <li className="nav-item px-2 ">
              <NavLink exact to="/"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink exact to="/Shop" 
              className="nav-link" 
              aria-current="page">
                SHOP
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                exact
                to="/AboutUs"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                exact
                to="/Lokasi"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                LOKASI
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                exact
                to="/Bantuan"
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              >
                BANTUAN
              </NavLink>
            </li>
            <Badge badgeContent = {1} color = "primary"> 
            <ShoppingCartOutlined/>
            </Badge>
          </ul>
        </div>
      </div>
    </nav>
   </>
  )
}

export default NavbarHome


// import { Badge } from '@material-ui/core';
// import { Search, ShoppingCartOutlined } from '@material-ui/icons'
// import React from 'react'
// import styled from 'styled-components'

// const Container = styled.div`
//     height : 60px;
// `;

// const Wrapper = styled.div`
//     padding : 10px 20px;
//     display : flex;
//     justify-content : space-between;
//     align-items: center;
  
// `;

// const Left=styled.div`
//     flex : 1;
//     display: flex;
//     align-items: center;
//     `;

// const Language = styled.span`
//     font-size: 14px;
//     cursor: pointer;
// `;
// const SearchContainer = styled.div`
//     border: 1px solid lightgray;
//     display: flex;
//     align-items: center;
//     margin-left: 25px;
//     padding: 5px;
// `;

// const Input = styled.input`
//     border : none;
// `

// const Center = styled.div`
//     flex : 1;
//     text-align: center;
//     `;

// const Logo = styled.h1`
// font-weight: bold;
// `

// const Right=styled.div`
//     flex : 1;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
// `;

// const MenuItem = styled.div`
// font-size: 14px;
// cursor: pointer;
// margin-left: 25px;
// `

// const Navbar = () => {
//     return (
//         <Container>
//             <Wrapper>
//                 <Left>
//                     <Language style={{color:'#A1593C'}}>EN</Language>
//                     <SearchContainer>
//                         <Input/>
//                      <Search style={{color: 'gray', fontSize:16}}/>
//                     </SearchContainer>
                    
//                 </Left>
//                 <Center><Logo style={{color:'#A1593C'}}>AtikahProject</Logo></Center>
//                 <Right>
//                     <MenuItem style={{color:'#A1593C'}}>REGISTER</MenuItem>
//                     <MenuItem style={{color:'#A1593C'}}>SIGN IN</MenuItem>
//                     <MenuItem>
//                     <Badge badgeContent = {4} color = "primary"> 
//                     <ShoppingCartOutlined/>
//                     </Badge>
//                     </MenuItem>
                   
//                 </Right>
//             </Wrapper>
            
//         </Container>
//     )
// }

// export default Navbar