import React, { useState } from 'react'
import StoreItem from "./StoreItem"
import './css/Store.css'
import Footer from './Footer'
import Cookies from 'universal-cookie'
import { useHistory } from 'react-router-dom'




export default function Store({ items }) {

  const cookies = new Cookies()
  const name = cookies.get('username');
  console.log(name);
  const history = useHistory();
  // const namearr = name.split(' ');
  return (
    <section className="text-gray-700 body-font"  data-testid="storePage">
      <nav className="navbar">
      <h1 className="comp_name">Bitzz</h1>
        <ul>

          <li><a href="#" onClick={e => history.push('/orderdetails')}>My Orders</a></li>
          <li><a href="#" onClick={e => history.push('/')}>Log Out</a></li>
          <h1 className="welcome_msg">Welcome, {name} </h1>
        </ul>


      </nav>

      <div className="container px-5 py-24 mx-auto">
      <h2 className="header" style={{fontSize: "20px",marginBottom: "100px"}}>Ask Alan for 'Help'</h2>
        <div className="items flex flex-wrap -m-4">
          {items.map(item => (
            <StoreItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  )
}
