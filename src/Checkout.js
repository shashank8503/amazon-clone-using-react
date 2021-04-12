import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal"

function Checkout() {
    const[{basket}, dispatch]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div >
                    <img className="ad" src="https://tpc.googlesyndication.com/simgad/18285017426441964355?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qldpXrK8-5MeZHfMM0jhSde0i4mRA"/>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                    {basket.map(item=> (
                        <CheckoutProduct
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}/>

                    ))}
                    


                </div>

            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
           
            
        </div>
    )
}

export default Checkout
