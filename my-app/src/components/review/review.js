import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Button, Input, Collapse, Image } from 'antd';
import './review.css';
import Dyah from '../../assets/img/Dyah.png'

const { Content } = Layout;
const { TextArea } = Input;
const { Panel } = Collapse;

class ReviewPage extends Component {
  render(){
    return (
      <Content style={{ background: '#fff', paddingBottom: 50 }}>
        <div style={{ padding: 20 }}>
          <Row gutter={[24, 8]}>
            <Col xs={24} sm={24} md={8} style={{ padding: 10 }}>
              <div style={{ marginBottom: 10 }}><Link to="/product" style={{ color: '#000' }}>DETAIL PRODUCT</Link> / <Link to="/review" style={{ color: '#000', textDecoration: 'underline' }}>REVIEW PRODUCT</Link></div>
              <Image src={Dyah} style={{ height: '500px' }} />
            </Col>
            <Col xs={24} sm={24} md={16} style={{ padding: 10, marginTop: 30 }}>
              <div style={{ fontWeight: 'bold', fontSize: '25pt' }}>DYAH MINI HEELS</div>
              <div style={{ fontSize: '20pt' }}>Rp. 200.0000</div>
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
        </div>
      </Content>
    )
  }
}

export default ReviewPage;