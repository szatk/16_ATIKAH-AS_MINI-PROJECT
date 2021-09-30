import React, { Component } from 'react';
import { Layout } from 'antd';
import './about.css';
import Background from '../../assets/img/background.png'

const { Content } = Layout;

class AboutPage extends Component {
  render(){
    return (
      <Content style={{ background: '#fff', paddingBottom: 50 }}>
        <div style={{ textAlign: 'center' }}>
          <img src={Background} style={{ width: '100%' }} />
        </div>
        <div style={{ textAlign: 'center', padding: 50 }}>
          <h3 style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Atikah Project</h3>
          <div>
            <p>Mohon maaf saat ini sedang terjadi peningkatan sistem yang menyebabkan Kamu terkendala ketika mengunjungi toko. </p>
            <p>Mohon pastikan menggunakan website AtikahProject terbaru dan mencoba secara berkalam 1x24 jam ke depan. Terima Kasih</p>
          </div>
        </div>
      </Content>
    )
  }
}

export default AboutPage;