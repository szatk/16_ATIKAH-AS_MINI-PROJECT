import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Space, Button, Image } from 'antd';
import './product.css';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import LoadingSvg from "../LoadingSvg";

const { Content } = Layout;

function ProductPage(props){
  const GET_MYSHOES = gql`
  query MyQuery($id: Int!) {
    Produk(where: {id: {_eq: $id}}) {
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

  const [getShoes, { data, loading, error }] = useLazyQuery(GET_MYSHOES);
  console.log (data)
    
  useEffect(() => {
    getShoes({ 
      variables: {id:props.match.params.id}
    });
    console.log("saya masuk")
  }, []);

  if (loading){
    return <LoadingSvg />
   }
  
  return (
        <Content style={{ background: '#fff', paddingBottom: 50 }}>
          <div style={{ textAlign: 'center' }}>
          </div>
          <div style={{ padding: "0 10px", textAlign: 'center',  display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            {data?.Produk.map((elementProduk)=>( 
                <Link
                  exact
                  to={"/product/" + elementProduk.id}
                  className="nav-link"
                  activeClassName="my-active"
                  aria-current="page"
                > 
                <Row gutter={[24, 8]}>
                <Col >
                <div style={{padding: 10, marginBottom: 10}}><Link to={"/product/" + elementProduk.id} style={{ color: '#000', textDecoration: 'underline' }}>DETAIL PRODUCT</Link> / <Link to={"/review/" + elementProduk.id} style={{ color: '#000' }}>REVIEW PRODUCT</Link>
                <br/>
                <br/>
                <Image src={elementProduk.gambar} preview={false}
                 style={{ width: "100%", height: 500, marginTop: 10 }} 
                className="my-shoes"
                />
                </div>
                </Col>
                
                <Col xs={24} sm={24} md={8} style={{ padding: 10, width: "100%"}}>
                <div style={{ marginTop: 30, padding: "0px 50px" }}>
                  <br/>
                <div>
                <h5 style={{color: "black", fontWeight: "bold", fontSize: "25pt",}}>{elementProduk.nama}</h5>
                <h5 style={{color: "black", fontSize: "20pt"}}>{elementProduk.harga}</h5>
                </div>

                <Button shape="circle" type="default">{elementProduk.size1}</Button>
                <Button shape="circle" type="default">{elementProduk.size2}</Button>
                <Button shape="circle" type="default">{elementProduk.size3}</Button>
                <p style={{color: "black", fontSize: "12pt"}}>{elementProduk.deskripsi_Produk}</p>

                <div style={{ marginTop: 20 }}>
                <Space>
                  <Button type="default" icon={<ShoppingCartOutlined />} />
                  <Button type="primary"><Link to={"/review/" + elementProduk.id}>Beli Sekarang</Link></Button>
                </Space>
              </div>
              <div style={{ marginTop: 20 }}>
                <Space>
                  <HeartOutlined />
                  <div>Add Wish List</div>
                </Space>
              </div>
              </div>
                </Col>
              </Row>
              </Link>                
              ))}
          </div>
        </Content>
    )
  }

export default ProductPage;