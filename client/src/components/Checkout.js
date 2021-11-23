import React, { useState,useEffect } from 'react'
import './css/Checkout.css'
import Cookies from 'universal-cookie'
import axios from '../util/axios'
import formatCurrency from "../util/formatCurrency"
import { useCart } from "../context/CartContext"
import storeItems from "../items.json"
import Footer from './Footer'
import { useHistory } from 'react-router-dom';






function Checkout() {



    const cookies = new Cookies();
    const username = cookies.get('username');
    const totalamt = cookies.get('totalamt');
    let cartitems;
    if(cookies.get('cartitems')) {
        cartitems = cookies.get('cartitems')[0];
    } else {
        cartitems = ' ';
    }

    const history = useHistory();
    console.log(cartitems);
    const finalcartitems  = cartitems.map((item,idx) => {

        var info = {
            "item_id": item.itemId-1,
            "itemname" : storeItems[item.itemId -1].name,
            "quantity" : item.quantity
        }

        return info;
    })
    console.log(finalcartitems);

    const {
        cart,
        showCartItems,
        setShowCartItems,
        showCart,
        checkout
      } = useCart()
    

    const [phoneno, setPhoneNo ] = useState("");
    const [address, setAddress ] = useState("");
    const [email, setEmail ] = useState("");
    const [error,setError] = useState(false);




    const userdt = async() => {

        await axios.post('/api/auth/userdetail', {
            username: username
        })
        .then(user => {

            console.log(user);
            setPhoneNo(user.data.user.phoneno)
            setAddress(user.data.user.address)
            setEmail(user.data.user.email)

        })
    }

    const submit = async (e) => {

        e.preventDefault();
        await axios.post('api/order/neworder', {
            username : username,
            email: email,
            cart: finalcartitems,
            address: address,
            totalamt: totalamt
        })
        .then(msg => {
            if(msg.data.success) {
                history.push("/success")
                
            }
        })
        .catch((error) => {

            setError(true)

        })




    }

    useEffect(() => {
        userdt();
        return null;
    }, [])




    return (
        <>

        {error ? (<h1>Please Try Again!</h1>):(<h1> </h1>)}

        <section className="checkout" data-testid="checkout-1">
            <div className="card-body">
                <div className="card-header">
                    <h1>Checkout</h1>
                </div>
                <div className="card-desp"  data-testid="checkout-details">
                    <h2>Phone No: {phoneno}</h2>
                    <h2>Billing Address: {address}</h2>
                    <h2>Email: {email}</h2>
 

                </div>
                <div className="card-item-list"  data-testid="checkout-order-details">
                <h2>Your items</h2>
                {console.log(cartitems)}
                {cartitems.map((item,i) => {
                    console.log(storeItems[(item.itemId)-1].name,item.quantity);

                    return <h2 className="items" key={i}>{storeItems[item.itemId -1].name} X {item.quantity}</h2>

                })}
                <h2>Total : {totalamt}</h2>
                </div>
                <button className="submit-bt" onClick={submit}>Place order</button>
            </div>
        </section>
        <Footer />



            
        </>
    )
}

export default Checkout
