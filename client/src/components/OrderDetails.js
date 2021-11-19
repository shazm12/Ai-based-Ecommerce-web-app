import React,{ useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
import './css/OrderDetails.css'
import axios from '../util/axios'
import storeItems from "../items.json"


function OrderDetails() {

    const [odt,setOdt] = useState([]);
    const cookies = new Cookies();
    const username = cookies.get('username');


    const orderdt = async() => {





        await axios.post('/api/order/orderdetails', {
            username: username
        })
        .then(order => {

            console.log(order);
            setOdt(order.data[0]);

        })
    }
    useEffect(() => {
        orderdt();
        return null;
    }, [])

    console.log(odt);


      
    return (
        <>
        <h1 className="header"style={{marginTop: "5vh"}}>Your Orders</h1>
        <section className="card__main">
        {odt.length > 0 ? 
                odt.map(order =>  (
                    <div className="card">
                    <h1 className="card__title">Order Id <span style={{"fontWeight" : "bold"}}>#{order._id}</span></h1>
                    <div className="card__content">
                    {order.cart.map(item => (
                        <div clasName="card__content__items">
                            <img src={storeItems[item.item_id].src} alt="laptop" className="img" />
                            <h1 className="item__names">{item.itemname} X {item.quantity}</h1>
                        </div>
                    ))}


                        <h2>Total Amount : {order.totalamt}</h2>
                    </div>
                </div>

            ))
        : (
            <h1 className="header" style={{marginLeft: "-6vh"}}>No orders yet</h1>
        )}

        
        
        </section>
            
        </>
    )
}

export default OrderDetails
