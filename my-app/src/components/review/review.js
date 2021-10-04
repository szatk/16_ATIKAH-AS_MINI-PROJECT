import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Button, Input, Collapse, Image } from 'antd';
import './review.css';
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import { useEffect } from 'react';

const { Content } = Layout;
const { TextArea } = Input;
const { Panel } = Collapse;

function ReviewPage(props){
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

  // const clickImg = (elementImg) => {
  //   console.log("klik gambar");
  // };
  return (
    <Content style={{ background: '#fff', paddingBottom: 50 }}>
        <div style={{ padding: 20 }}>
         {data?.Produk.map((elementProduk)=>( 
                <Link
                  exact
                  to={"/review/" + elementProduk.id}
                  className="nav-link"
                  activeClassName="my-active"
                  aria-current="page"
                > 
        <Row gutter={[24, 8]}>
        <Col xs={24} sm={24} md={8} style={{ padding: 10 }}>
        <div style={{ marginBottom: 10 }}><Link to={"/product/" + elementProduk.id} style={{ color: '#000' }}>DETAIL PRODUCT</Link> / <Link to={"/review/" + elementProduk.id} style={{ color: '#000', textDecoration: 'underline' }}>REVIEW PRODUCT</Link></div>
        <Image src={elementProduk.gambar} preview={false}
        style={{ height: 300, marginBottom: 10 }} 
        className="my-baju2"
                />
        </Col>
              <Col xs={24} sm={24} md={16} style={{ padding: 10, marginTop: 30 }}>
              <div style={{ fontWeight: 'bold', fontSize: '25pt' , color: '#000'}}>{elementProduk.nama}</div>
              <div style={{ fontSize: '20pt', color: '#000' }}>{elementProduk.harga}</div>
              <div style={{ marginTop: 20 }}>
              <Collapse defaultActiveKey={['1']} ghost>
                 <Panel header={<Button type="primary">Add Your Review</Button>} showArrow={false} key='1'>
                   <TextArea rows={7} />
                 <Button type="primary" style={{ float: 'right', marginTop: 10 }}>Save</Button>
                </Panel>
              </Collapse>
              </div>
            </Col>
          </Row>
          </Link>
        ))}
      </div>
    </Content>
    )
  }


export default ReviewPage