import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Collapse } from 'antd';
import './help.css';
import Background from '../../assets/img/background.png'

const { Content } = Layout;
const { Panel } = Collapse;

class HelpPage extends Component {
  render(){
    return (
      <Content style={{ background: '#fff', paddingBottom: 50 }}>
        <div style={{ textAlign: 'center' }}>
          <img src={Background} style={{ width: '100%' }} />
        </div>
        <div style={{ padding: '50px' }}>
          <Row gutter={[24, 8]}>
            <Col xs={24} sm={24} md={12} style={{ padding: 10 }}>
              <h3 style={{ fontWeight: 'bold' }}>Kategori</h3>
              <div><Link to="/help" style={{ color: '#000' }}>Pembelian dan Pembayaran</Link></div>
              <div><Link to="/help" style={{ color: '#000' }}>Pengiriman Produk</Link></div>
              <div><Link to="/help" style={{ color: '#000' }}>Pembatalan Barang dan Dana</Link></div>
              <div><Link to="/help" style={{ color: '#000' }}>Akun, Keamanan dan Lainnya</Link></div>
            </Col>
            <Col xs={24} sm={24} md={12} style={{ padding: 10 }}>
              <p>
                Mohon maap saat ini sedang terjadi peningkatan sistemang menyebabkan Kamuterkendala ketika mengunjungi toko. 
                Mohon pastikan menggunakan aplikasi Shopee terbaru dan mencoba secara berkalam 1x24 jamdepan. Terima Kasih
              </p>
              <h3 style={{ fontWeight: 'bold' }}>FAQ</h3>
              <Collapse ghost>
                <Panel header="Bagaimana Cara Kerja Garansi Atikah Store?" key="1">
                  <p>
                    Mohon maap saat ini sedang terjadi peningkatan sistemang menyebabkan Kamuterkendala ketika mengunjungi toko. 
                    Mohon pastikan menggunakan aplikasi Shopee terbaru dan mencoba secara berkalam 1x24 jamdepan. Terima Kasih
                  </p>
                </Panel>
                <Panel header="Bagaimana Cara Kontak Customur Service Atikah Store?" key="2">
                  <p>
                    Mohon maap saat ini sedang terjadi peningkatan sistemang menyebabkan Kamuterkendala ketika mengunjungi toko. 
                    Mohon pastikan menggunakan aplikasi Shopee terbaru dan mencoba secara berkalam 1x24 jamdepan. Terima Kasih
                  </p>
                </Panel>
                <Panel header="Berapa Lama Waktu Pengiriman Saya?" key="3">
                  <p>
                    Mohon maap saat ini sedang terjadi peningkatan sistemang menyebabkan Kamuterkendala ketika mengunjungi toko. 
                    Mohon pastikan menggunakan aplikasi Shopee terbaru dan mencoba secara berkalam 1x24 jamdepan. Terima Kasih
                  </p>
                </Panel>
                <Panel header="Mengapa Saya Tidak Menerima Kode OTP?" key="4">
                  <p>
                    Mohon maap saat ini sedang terjadi peningkatan sistemang menyebabkan Kamuterkendala ketika mengunjungi toko. 
                    Mohon pastikan menggunakan aplikasi Shopee terbaru dan mencoba secara berkalam 1x24 jamdepan. Terima Kasih
                  </p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </div>
      </Content>
    )
  }
}

export default HelpPage;