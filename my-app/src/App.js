// import { Col, Container, Row } from 'react-bootstrap';
// import './App.css';
// import Home from './pages/Home';
// import NavbarHome from './pages/NavbarHome';


// function App() {
//   return (
//     <>
//     <NavbarHome/>
//     <Home/>
//     </>
//   )
// }
//   export default App; 



import './App.css';
import Home from './pages/Home';
import NavbarHome from './pages/NavbarHome';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import Shop from './pages/Shop';
import Footer from './pages/Footer'


function App() {
  return (
 <BrowserRouter>
  <Switch>
    
    <Route exact path="/" component={Home} />
    <Route exact path="/" component={NavbarHome} />
    <Route exact path="/Shop" component={Shop} />
    <Route exact path="/" component={Footer} />
    <Route />
    </Switch>
 </BrowserRouter>
  )
}

export default App;

// import './App.css';
// import Home from './pages/Home';
// import NavbarHome from './pages/NavbarHome';

// function App() {
//    return (
//      <>
//      <NavbarHome/>
//      {/* <Home/> */}
//      </>
//    )
// }
// export default App;


