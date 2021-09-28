import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import NavbarHome from './pages/NavbarComponent';


function App() {
  return (
    <>
    <NavbarHome/>
    <Home/>
    </>
  )
}
  export default App;