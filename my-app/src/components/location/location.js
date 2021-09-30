import React, { Component } from 'react';
import { Layout } from 'antd';
import './location.css';
import Background from '../../assets/img/background.png'

const { Content } = Layout;

class LocationPage extends Component {
  render(){
    return (
      <Content style={{ background: '#fff', paddingBottom: 50 }}>
        <div style={{ textAlign: 'center' }}>
          <img src={Background} style={{ width: '100%' }} />
        </div>
        <div style={{ textAlign: 'center', padding: 50 }}>
          <h3 style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Atikah Project</h3>
          <div>Jl. Kalimantan No. XX<br/>Pangkalan Berandan 20457<br/>(021) 234 567 89</div>
        </div>
      </Content>
    )
  }
}

export default LocationPage;