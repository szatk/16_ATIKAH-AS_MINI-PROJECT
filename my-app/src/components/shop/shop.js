import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Image } from 'antd';
import './shop.css';
import { gql, useQuery } from '@apollo/client';

const { Content } = Layout;

function ShopPage(){
  const GET_SHOES = gql`
  query MyQuery {
    Produk {
      id_Kategori
      deskripsi_Produk
      gambar
      harga
      id
      is_ready
      nama
      size1
      size2
      size3
      Kategori {
        Tanggal
        id
      }
    }
  }
  `

    const { data } = useQuery(GET_SHOES);
    // console.log (data)
  
  return (
        <Content style={{ background: '#fff', paddingBottom: 50 }}>
          <div style={{ textAlign: 'center' }}>
            {/* <img src={Background} style={{ width: '100%' }} /> */}
          </div>
          <div style={{ padding: '0 50px', textAlign: 'center' }}>
            {data?.Produk.map((elementProduk)=>( 
                <Link
                  exact
                  to={"/product/" + elementProduk.id}
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
    )
  }

  

export default ShopPage;