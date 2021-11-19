import React from 'react'
import './css/Success.css'
import { useHistory } from 'react-router-dom';


function Success() {

    const history = useHistory();

    const goback = (e) => {

        e.preventDefault();
        history.push('/store');

    }



    return (
        <>
        <section className="main">
        
            <div className="success">

            <h2 className="header"> Success! </h2>
            <h2 className="desp">Check your email for further details!</h2>
            <button class="button" onClick={goback}>Continue Shopping</button>
            </div>
        </section>

            
        </>
    )
}

export default Success
