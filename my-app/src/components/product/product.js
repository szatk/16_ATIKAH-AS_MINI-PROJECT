import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Space, Button, Image } from 'antd';
import './product.css';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
// import Dyah from '../../assets/img/Dyah.png'
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';

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

  // const clickImg = (elementImg) => {
  //   console.log("klik gambar");
  // };

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
                <div style={{ marginBottom: 10 }}><Link to={"/product/" + elementProduk.id} style={{ color: '#000', textDecoration: 'underline' }}>DETAIL PRODUCT</Link> / <Link to={"/review/" + elementProduk.id} style={{ color: '#000' }}>REVIEW PRODUCT</Link></div>
                <Image src={elementProduk.gambar} preview={false}
                 style={{ height: 300, marginBottom: 10 }} 
                className="my-baju1"
                />
                <h5 style={{color: "black"}}>{elementProduk.nama}</h5>
                <h5 style={{color: "black"}}>{elementProduk.harga}</h5>
                <Button shape="circle" type="default">{elementProduk.size1}</Button>
                <Button shape="circle" type="default">{elementProduk.size2}</Button>
                <Button shape="circle" type="default">{elementProduk.size3}</Button>
                <p style={{color: "black"}}>{elementProduk.deskripsi_Produk}</p>
                </Col>
              </Row>
              <div style={{ marginTop: 20 }}>
                <Space>
                  <Button type="default" icon={<ShoppingCartOutlined />} />
                  <Button type="primary"><Link to="/review">Beli Sekarang</Link></Button>
                </Space>
              </div>
              <div style={{ marginTop: 20 }}>
                <Space>
                  <HeartOutlined />
                  <div>Add Wish List</div>
                </Space>
              </div>
              </Link>                
              ))}
          </div>
        </Content>
    )
  }

// class ProductPage extends Component {
//   render(){
//     return (
//       <Content style={{ background: '#fff', paddingBottom: 50 }}>
//         <div style={{ padding: 20 }}>
//           <Row gutter={[24, 8]}>
//             <Col xs={24} sm={24} md={8} style={{ padding: 10 }}>
//               <div style={{ marginBottom: 10 }}><Link to="/product" style={{ color: '#000', textDecoration: 'underline' }}>DETAIL PRODUCT</Link> / <Link to="/review" style={{ color: '#000' }}>REVIEW PRODUCT</Link></div>
//               <Image src={Dyah} style={{ height: '500px' }} />
//             </Col>
//             <Col xs={24} sm={24} md={16} style={{ padding: 10, marginTop: 30 }}>
//               <div style={{ fontWeight: 'bold', fontSize: '25pt' }}>DYAH MINI HEELS</div>
//               <div style={{ fontSize: '20pt' }}>Rp. 200.0000</div>
              // <div style={{ marginTop: 20 }}>
              //   <Space>
              //     <Button type="default" icon={<ShoppingCartOutlined />} />
              //     <Button type="primary"><Link to="/review">Beli Sekarang</Link></Button>
              //   </Space>
              // </div>
              // <div style={{ marginTop: 20 }}>
              //   <Space>
              //     <HeartOutlined />
              //     <div>Add Wish List</div>
              //   </Space>
              // </div>
//               <div style={{ marginTop: 20 }}>
//                 <div style={{ fontWeight: 'bold' }}>Size:</div>
//                 <Space>
//                   <Button shape="circle" type="default">39</Button>
//                   <Button shape="circle" type="default">40</Button>
//                   <Button shape="circle" type="default">41</Button>
//                 </Space>
//               </div>
//               <div style={{ marginTop: 20 }}>
//                 <div style={{ fontWeight: 'bold' }}>Description:</div>
//                 <div>
//                   <Space>
//                     <div>Upper : </div>
//                     <div>Artificial Leather</div>
//                   </Space>
//                 </div>
//                 <div>
//                   <Space>
//                     <div>Lining : </div>
//                     <div>Jersey</div>
//                   </Space>
//                 </div>
//                 <div>
//                   <Space>
//                     <div>Heels : </div>
//                     <div>4 cm</div>
//                   </Space>
//                 </div>
//                 <div>
//                   <Space>
//                     <div>Shoe last : </div>
//                     <div>Fiore</div>
//                   </Space>
//                 </div>
//                 <div>
//                   <Space>
//                     <div>Outsole : </div>
//                     <div>Rubber</div>
//                   </Space>
//                 </div>
//                 <div>Run true to size</div>
//                 <div>Weight Approximaely 345 Gr (35) - 495 Gr (43)</div>
//                 <div>Handcrafted in Pangkalan Berandan</div>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </Content>
//     )
//   }
// }

export default ProductPage;