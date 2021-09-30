import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Space, Button, Image } from 'antd';
import './product.css';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Dyah from '../../assets/img/Dyah.png'

const { Content } = Layout;

class ProductPage extends Component {
  render(){
    return (
      <Content style={{ background: '#fff', paddingBottom: 50 }}>
        <div style={{ padding: 20 }}>
          <Row gutter={[24, 8]}>
            <Col xs={24} sm={24} md={8} style={{ padding: 10 }}>
              <div style={{ marginBottom: 10 }}><Link to="/product" style={{ color: '#000', textDecoration: 'underline' }}>DETAIL PRODUCT</Link> / <Link to="/review" style={{ color: '#000' }}>REVIEW PRODUCT</Link></div>
              <Image src={Dyah} style={{ height: '500px' }} />
            </Col>
            <Col xs={24} sm={24} md={16} style={{ padding: 10, marginTop: 30 }}>
              <div style={{ fontWeight: 'bold', fontSize: '25pt' }}>DYAH MINI HEELS</div>
              <div style={{ fontSize: '20pt' }}>Rp. 200.0000</div>
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
              <div style={{ marginTop: 20 }}>
                <div style={{ fontWeight: 'bold' }}>Size:</div>
                <Space>
                  <Button shape="circle" type="default">39</Button>
                  <Button shape="circle" type="default">40</Button>
                  <Button shape="circle" type="default">41</Button>
                </Space>
              </div>
              <div style={{ marginTop: 20 }}>
                <div style={{ fontWeight: 'bold' }}>Description:</div>
                <div>
                  <Space>
                    <div>Upper : </div>
                    <div>Artificial Leather</div>
                  </Space>
                </div>
                <div>
                  <Space>
                    <div>Lining : </div>
                    <div>Jersey</div>
                  </Space>
                </div>
                <div>
                  <Space>
                    <div>Heels : </div>
                    <div>4 cm</div>
                  </Space>
                </div>
                <div>
                  <Space>
                    <div>Shoe last : </div>
                    <div>Fiore</div>
                  </Space>
                </div>
                <div>
                  <Space>
                    <div>Outsole : </div>
                    <div>Rubber</div>
                  </Space>
                </div>
                <div>Run true to size</div>
                <div>Weight Approximaely 345 Gr (35) - 495 Gr (43)</div>
                <div>Handcrafted in Pangkalan Berandan</div>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    )
  }
}

export default ProductPage;