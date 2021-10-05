import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Button, Input, Collapse, Image, Form } from 'antd';
import './review.css';
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import { useEffect } from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import LoadingSvg from '../LoadingSvg'

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

const GetMessage = gql`
query MyQuery {
  Message(limit: 1, order_by: {id: desc}) {
    message
    id
    username
  }
}
`

const DeleteMessage = gql`
mutation MyMutation($id: Int!) {
  delete_Message_by_pk(id: $id) {
    id
    message
    username
  }
}
`

const UpdateMessage = gql `
mutation MyMutation2($id: Int!, $message: String = "") {
  update_Message_by_pk(pk_columns: {id: $id}, _set: {message: $message}) {
    id
    message
    username
  }
}
`
const InsertMessage = gql`
mutation MyMutation($object: Message_insert_input!) {
  insert_Message_one(object: $object) {
    id
    message
    username
  }
}
`

const initialData = {    //ini buat message
  username: "",
  message: ""  
}

  const [getShoes, { data, loading, error }] = useLazyQuery(GET_MYSHOES);
  // console.log (data)

  const { data: dataMessage, loading:loadingMessage, error:errorMessage } = useQuery(GetMessage);
  // console.log("detail baju props", data);

  const [user, setUser] = useState(initialData);
  const [updateMessage, { loading:loadingUpdate}] = useMutation(UpdateMessage);
  const [deleteMessage, {loading : loadingDelete}] = useMutation(DeleteMessage,{
    refetchQueries: [GetMessage]
  });
  const [insertMessage, {loading:loadingInsert}] = useMutation(InsertMessage, {
    refetchQueries: [GetMessage]
  })
    
  useEffect(() => {
    getShoes({ 
      variables: {id:props.match.params.id}
    });
    // console.log("saya masuk")
  }, []);

  if (loading || loadingUpdate || loadingDelete || loadingInsert){
    return <LoadingSvg />
   }

  // const clickImg = (elementImg) => {
  //   console.log("klik gambar");
  // };

     // untuk menjalankan pas submit
     const onSubmitList = (e) => {
      console.log("masuk submit")
      e.preventDefault();
      insertMessage({variables : {
        object : {
        username: user.username,
        message: user.message
       }
      }});
      setUser(initialData)
    };
 
    // untuk masukkan input
    const handleInput = (e) => {
      // console.log("masuk handle input")
     const name = e.target.name
     const value = e.target.value;
     setUser({
       ...user,
       [name]: value,
     });
 };
 
 // untuk delete pesan yang sudah kita tulis
 const onDeleteItem =  (idx) => {
//  console.log("idx= detele item", idx.target.value )
   deleteMessage({variables: {
     id: idx.target.value
   }})
 };
 
 const onUpdateItem =  (idx) => {
  //  console.log("idx= update item", idx.target.value )
     updateMessage({variables: {
       id: idx.target.value
     }})
   };

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
        className="my-baju2"/>
        </Col>
              <Col xs={24} sm={24} md={16} style={{ padding: 10, marginTop: 30 }}>
              <div style={{ fontWeight: 'bold', fontSize: '25pt' , color: '#000'}}>{elementProduk.nama}</div>
              <div style={{ fontSize: '20pt', color: '#000' }}>{elementProduk.harga}</div>
              <div style={{ marginTop: 20 }}>
              <Collapse defaultActiveKey={['1']} ghost>
                 <Panel header={<Button type="primary">Add Your Review</Button>} showArrow={false} key='1'>
                 <form className="formmessage" onSubmit={onSubmitList}>
                 <label 
                  for="username" 
                  className="form-label">Username</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  onChange={handleInput} 
                  id="nama" 
                  name="username" 
                  value={user.username}
                  placeholder="Masukkan Nama">
                 </input>
                 <label 
                  for="floatingTextarea2"
                  className="form-label">Pesan Untukku</label>
                  <textarea 
                  className="form-control" 
                  onChange={handleInput} 
                  name="message" 
                  value={user.message} 
                  rows="12"
                  id="floatingTextarea2" 
                  placeholder="Masukkan Pesan"
                  style={{height: "100px"}}>
                  </textarea>   
                 <button type="submit" style={{background: "#DCAB92"}} className="btn btn-primary">SAVE</button>
                 </form>
                </Panel>
              </Collapse>
              {dataMessage?.Message.map((show) => (
              <li className='komen-list card-kontent mb-4'>      
              <div className="">
              <h5 style={{paddingLeft: "20px"}} className="card-titles ml-4 mt-3">{show.username}</h5>
              <p 
              style={{paddingRight: "100px", paddingLeft: "55px"}}
              className="card-text ml-4 mt-3">{show.message}</p>
              <button 
              type="submit" style={{background: "#FFDAC1"}} className="btn"
              onClick={onDeleteItem} value={show.id} className="del">Delete</button>
              <button 
              type="submit" style={{background: "#FFDAC1"}} className="btn"
              onClick={onUpdateItem} value={show.id} className="edit">Edit</button>
              </div>
              </li>
              ))}
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