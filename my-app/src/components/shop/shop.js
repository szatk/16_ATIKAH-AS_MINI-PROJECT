import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Image } from 'antd';
import './shop.css';
import Dyah from '../../assets/img/Dyah.png'
import Selena from '../../assets/img/Selena.png'
import Sarah from '../../assets/img/Sarah.png'
import Hana from '../../assets/img/Hana.png'
import Nayy from '../../assets/img/Nayy.png'
import Ikachan from '../../assets/img/Ikachan.png'


const { Content } = Layout;

class ShopPage extends Component {
  render(){
    return (
      <Content style={{ background: '#fff', paddingBottom: 50 }}>
        <div style={{ padding: 20, textAlign: 'center' }}>
          <Row gutter={[24, 8]}>
            <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
              <Image src={Dyah} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <br/>
              <Link to="/product" style={{ color: '#000' }}><b>DYAH MINI HEELS</b></Link>
              <div style={{ marginBottom: 10 }}>Rp. 200.000</div>
            </Col>
            <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
              <Image src={Selena} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <br/>
              <Link to="/product" style={{ color: '#000' }}><b>SELENA MINI HEELS</b></Link>
              <div style={{ marginBottom: 10 }}>Rp. 200.000</div>
            </Col>
            <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
              <Image src={Sarah} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <br/>
              <Link to="/product" style={{ color: '#000' }}><b>SARAH MINI HEELS</b></Link>
              <div style={{ marginBottom: 10 }}>Rp. 200.000</div>
            </Col>
            <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
              <Image src={Hana} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <br/>
              <Link to="/product" style={{ color: '#000' }}><b>HANA MAX HEELS</b></Link>
              <div style={{ marginBottom: 10 }}>Rp. 280.000</div>
            </Col>
            <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
              <Image src={Nayy} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <br/>
              <Link to="/product" style={{ color: '#000' }}><b>NAYY MAX HEELS</b></Link>
              <div style={{ marginBottom: 10 }}>Rp. 250.000</div>
            </Col>
            <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
              <Image src={Ikachan} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <br/>
              <Link to="/product" style={{ color: '#000' }}><b>IKACHAN HEELS</b></Link>
              <div style={{ marginBottom: 10 }}>Rp. 300.000</div>
            </Col>
            <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
              <Image src={Dyah} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <br/>
              <Link to="/product" style={{ color: '#000' }}><b>DYAH MINI HEELS</b></Link>
              <div style={{ marginBottom: 10 }}>Rp. 200.000</div>
            </Col>
            <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
              <Image src={Selena} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <br/>
              <Link to="/product" style={{ color: '#000' }}><b>SELENA MINI HEELS</b></Link>
              <div style={{ marginBottom: 10 }}>Rp. 200.000</div>
            </Col>
            <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
              <Image src={Sarah} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <br/>
              <Link to="/product" style={{ color: '#000' }}><b>SARAH MINI HEELS</b></Link>
              <div style={{ marginBottom: 10 }}>Rp. 200.000</div>
            </Col>
            <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
              <Image src={Hana} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <br/>
              <Link to="/product" style={{ color: '#000' }}><b>HANA MAX HEELS</b></Link>
              <div style={{ marginBottom: 10 }}>Rp. 280.000</div>
            </Col>
            <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
              <Image src={Nayy} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <br/>
              <Link to="/product" style={{ color: '#000' }}><b>NAYY MAX HEELS</b></Link>
              <div style={{ marginBottom: 10 }}>Rp. 250.000</div>
            </Col>
            <Col xs={24} sm={8} md={4} style={{ padding: 10 }}>
              <Image src={Ikachan} preview={false} style={{ height: 300, marginBottom: 10 }} />
              <br/>
              <Link to="/product" style={{ color: '#000' }}><b>IKACHAN HEELS</b></Link>
              <div style={{ marginBottom: 10 }}>Rp. 300.000</div>
            </Col>
          </Row>
        </div>
      </Content>
    )
  }
}

export default ShopPage;