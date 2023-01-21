import Button from '@mui/material/Button';
import { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartContext } from './App';
// import { Product } from './Product';

export function Item({ id, name, image, rent, product, value }) {
    const navigate = useNavigate()
    const [cartItem, setcartItem] = useContext(cartContext)
    const [style, setstyle] = useState({})
    const btn = useRef()
    function Addcart(val) {
        val.item = product
        setstyle({ color: "#ff791f" })
        setcartItem([...cartItem, val])
    }
    return (
        <div className="item_container" >
            <div className="item_container_img" >
                <img src={image} alt={name} />
            </div>
            <div className="item_containe_text">
                <h2>{name}</h2>
                <p >rent per hour:<span className='price-tag'>{rent}rs</span> </p>
            </div>
            <div className="item_container_buttons">
                <Button variant="contained" onClick={() => navigate(`/rent/${product}/${id}`)}>RENT</Button>

                <Button ref={btn} variant="contained" className='cart-btn' style={style} onClick={() => Addcart(value)} color="error">ADD TO CARD</Button>

            </div>
        </div>
    );
}
