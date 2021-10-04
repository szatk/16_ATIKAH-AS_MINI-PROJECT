import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Image } from 'antd';
import './home.css';
import Background from '../../assets/img/background.png'
// import Dyah from '../../assets/img/Dyah.png'
// import Selena from '../../assets/img/Selena.png'
// import Sarah from '../../assets/img/Sarah.png'
// import Hana from '../../assets/img/Hana.png'
// import Nayy from '../../assets/img/Nayy.png'
// import Ikachan from '../../assets/img/Ikachan.png'
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';

const { Content } = Layout;

function HomePage(props){
  const GET_MYSHOESS = gql`
  query MyQuery {
    Produk(where: {id_Kategori: {_eq: 4}}) {
      gambar
      deskripsi_Produk
      harga
      id
      id_Kategori
      is_ready
      nama
      size1
      size2
      size3
    }
  }  
`
const [getShoes, { data, loading, error }] = useLazyQuery(GET_MYSHOESS);
console.log (data)
  
useEffect(() => {
  getShoes({ 
    variables: {id: props.match.params.id}
  });
  console.log("saya masuk")
}, []);
  

return (
      <Content style={{ background: '#fff', paddingBottom: 50 }}>
        <div style={{ textAlign: 'center' }}>
          <img src={Background} style={{ width: '100%' }} />
        </div>
        <div style={{ textAlign: 'center', padding: 20 }}>
          <h3 style={{ fontWeight: 'bold' }}>NEW COMMING PRODUCT</h3>
        </div>
        <div style={{ padding: '0 50px', textAlign: 'center' }}>
          {data?.Produk.map((elementProduk)=>( 
             
             <Link
                exact
                to={"/product/" +  elementProduk.id }
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              > 
              <Row gutter={[24, 8]}>
              <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
              <Image src={elementProduk.gambar} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <h5 style={{color: "black"}}>{elementProduk.nama}</h5>
              <h5 style={{color: "black"}}>{elementProduk.harga}</h5>
              </Col>
            </Row>
              </Link>
              
            ))}
        </div>
      </Content>
      
            // {/* <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
            //   <Image src={Dyah} preview={false} style={{ height: 300, marginBottom: 10 }} />
            //   <br/>
            //   <Link to="/product" style={{ color: '#000' }}><b>DYAH MINI HEELS</b></Link>
            //   <div style={{ marginBottom: 10 }}>Rp. 200.000</div>
            // </Col>
            // <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
            //   <Image src={Selena} preview={false} style={{ height: 300, marginBottom: 10 }} />
            //   <br/>
            //   <Link to="/product" style={{ color: '#000' }}><b>SELENA MINI HEELS</b></Link>
            //   <div style={{ marginBottom: 10 }}>Rp. 200.000</div>
            // </Col>
            // <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
            //   <Image src={Sarah} preview={false} style={{ height: 300, marginBottom: 10 }} />
            //   <br/>
            //   <Link to="/product" style={{ color: '#000' }}><b>SARAH MINI HEELS</b></Link>
            //   <div style={{ marginBottom: 10 }}>Rp. 200.000</div>
            // </Col>
            // <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
            //   <Image src={Hana} preview={false} style={{ height: 300, marginBottom: 10 }} />
            //   <br/>
            //   <Link to="/product" style={{ color: '#000' }}><b>HANA MAX HEELS</b></Link>
            //   <div style={{ marginBottom: 10 }}>Rp. 280.000</div>
            // </Col>
            // <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
            //   <Image src={Nayy} preview={false} style={{ height: 300, marginBottom: 10 }} />
            //   <br/>
            //   <Link to="/product" style={{ color: '#000' }}><b>NAYY MAX HEELS</b></Link>
            //   <div style={{ marginBottom: 10 }}>Rp. 250.000</div>
            // </Col>
            // <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
            //   <Image src={Ikachan} preview={false} style={{ height: 300, marginBottom: 10 }} />
            //   <br/>
            //   <Link to="/product" style={{ color: '#000' }}><b>IKACHAN</b></Link>
            //   <div style={{ marginBottom: 10 }}>Rp. 300.000</div>
            // </Col> */}
         
    )
  }


export default HomePage;