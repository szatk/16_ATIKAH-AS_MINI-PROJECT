import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Image } from 'antd';
import './home.css';
import Background from '../../assets/img/background.png'
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import LoadingSvg from "../LoadingSvg";

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
const [getShoes, { data, loading }] = useLazyQuery(GET_MYSHOESS);
console.log (data)

useEffect(() => {
  getShoes({ 
    variables: {id: props.match.params.id}
  });
  console.log("saya masuk")
}, []);
  
if (loading){
  return <LoadingSvg />
 }

return (
      <Content style={{ background: '#fff', paddingBottom: 10 }}>
        <div style={{ textAlign: 'center' }}>
          <img src={Background} style={{ width: '100%' }} />
        </div>
        <div style={{ textAlign: 'center', padding: 20 }}>
          <h3 style={{ fontWeight: 'bold' }}>NEW COMMING PRODUCT</h3>
        </div>
        <br/>

        <div style={{ padding: '20px 20px', textAlign: 'center', display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          {data?.Produk.map((elementProduk)=>( 
             
             <Link
                exact
                to={"/product/" +  elementProduk.id }
                className="nav-link"
                activeClassName="my-active"
                aria-current="page"
              > 
              <Row gutter={10,10}>
              <Col md={40} style={{ padding: 10,}}>
              <Image src={elementProduk.gambar} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <h5 style={{fontWeight: "bold", color: "black" }}>{elementProduk.nama}</h5>
              <h5 style={{color: "black"}}>{elementProduk.harga}</h5>
              <br/>
              </Col>
            </Row>
              </Link>
              
            ))}
        </div>
      </Content>
    )
  }


export default HomePage;