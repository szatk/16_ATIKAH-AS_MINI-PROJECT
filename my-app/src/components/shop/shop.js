import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Row, Col, Image } from 'antd';
import './shop.css';
import { gql, useQuery } from '@apollo/client';
import LoadingSvg from '../LoadingSvg';

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

    const { data, loading } = useQuery(GET_SHOES);
    // console.log (data)

    if (loading){
      return <LoadingSvg />
     }
  return (
          <Content style={{ background: '#fff', paddingBottom: 50, }}>
          <div style={{ padding: 20, textAlign: 'center' }}>
          </div>
          <div style={{ padding: '0px 50px', textAlign: 'center', display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            {data?.Produk.map((elementProduk)=>( 
                <NavLink
                  exact
                  to={"/product/" + elementProduk.id}
                  className="nav-link"
                  activeClassName="my-active"
                  aria-current="page"
                > 
                <Row gutter={10,10}>
                <Col md={40} style={{ padding: 10,}}>
                <div>
                <Image src={elementProduk.gambar} preview={false} style={{height: 300, width: 200, marginBottom: 10 }} />
                <h5 style={{fontWeight: "bold", color: "black"}}>{elementProduk.nama}</h5>
                <h5 style={{color: "black"}}>{elementProduk.harga}</h5>
                </div>
                <br/> 
                </Col>
              </Row>
                </NavLink>
              ))}
          </div>
        </Content>
    )
  }

  

export default ShopPage;