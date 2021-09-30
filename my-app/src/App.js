/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from './components/home/home';
import AboutPage from './components/about/about';
import ShopPage from './components/shop/shop';
import LocationPage from './components/location/location';
import HelpPage from './components/help/help';
import ProductPage from './components/product/product';
import ReviewPage from './components/review/review';
import { Layout, Menu, Row, Col, Space } from 'antd';
import { HeartOutlined, InstagramOutlined, SearchOutlined, ShopOutlined, WhatsAppOutlined } from '@ant-design/icons';
import './App.css';
import Logo from './assets/img/logo.png'

const { Header, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout" style={{ background: '#ddd' }}>
        <Row className="topbar">
          <Col span={24} style={{ textAlign: 'right', paddingRight: 30 }}>
            <Space>
              <Link to="/signin" style={{ color: '#000' }}>Sign In</Link>
              <span>or</span>
              <Link to="/signup" style={{ color: '#000' }}>Register</Link>
            </Space>
          </Col>
        </Row>
        <Header>
          <Row>
            <Col span={3}>
              <Space>
                <WhatsAppOutlined style={{ fontSize: '20px' }} />
                <InstagramOutlined style={{ fontSize: '20px' }} />
              </Space>
            </Col>
            <Col span={18}>
              <div style={{ textAlign: 'center' }}>
                <img src={Logo} style={{ height: 85 }} />
              </div>
              <div>
                <Menu theme="light" mode="horizontal" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                  <Menu.Item key="home">
                    <Link to='/home'>HOME</Link>
                  </Menu.Item>
                  <Menu.Item key="shop">
                    <Link to='/shop'>SHOP</Link>
                  </Menu.Item>
                  <Menu.Item key="about">
                    <Link to='/about'>ABOUT US</Link>
                  </Menu.Item>
                  <Menu.Item key="location">
                    <Link to='/location'>LOCATION</Link>
                  </Menu.Item>
                  <Menu.Item key="help">
                    <Link to='/help'>HELP</Link>
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
            <Col span={3} style={{ textAlign: 'right' }}>
              <Space>
                <SearchOutlined style={{ fontSize: '20px' }} />
                <HeartOutlined style={{ fontSize: '20px' }} />
                <ShopOutlined style={{ fontSize: '20px' }} />
              </Space>
            </Col>
          </Row>
        </Header>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/location" component={LocationPage} />
          <Route path="/help" component={HelpPage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/review" component={ReviewPage} />
        </div>
        <Footer>
          <Row gutter={[24, 8]}>
            <Col xs={24} sm={24} md={14}>
              <Row>
                <Col xs={24} sm={24} md={14} style={{ marginBottom: 20 }}>
                  <div><b>Atikah Project</b></div>
                  <div>Jl. Kalimantan No. XX<br/>Pangkalan Berandan 20457<br/>(021) 234 567 89</div>
                </Col>
                <Col xs={24} sm={24} md={10} style={{ marginBottom: 20 }}>
                  <div><a href="/help" style={{ color: '#000' }}>HELP</a></div>
                  <div><a href="/about" style={{ color: '#000' }}>ABOUT US</a></div>
                  <div><a href="/contact" style={{ color: '#000' }}>CONTACT US</a></div>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={10}>
              <div><b>Customer Service Hours</b></div>
              <Row>
                <Col span={10}>Monday - Friday</Col>
                <Col span={2}>:</Col>
                <Col span={12}>09.00 - 21.00 WIB</Col>
              </Row>
              <Row>
                <Col span={10}>Saturday & Sunday</Col>
                <Col span={2}>:</Col>
                <Col span={12}>09.00 - 16.00 WIB</Col>
              </Row>
            </Col>
          </Row>
        </Footer>
      </Layout>
    );
  }
}

export default App;