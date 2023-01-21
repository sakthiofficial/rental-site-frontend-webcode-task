import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useContext } from 'react';
import { cart, cartContext } from '../App';
import { useNavigate } from 'react-router-dom';

export function CartItems({ setcart }) {
    const [cartItem] = useContext(cartContext)
    console.log(cartItem);
    return (
        <>
            {cartItem.length == 0 ? "No Item Added to Cart" : null}
            {cartItem.map((val, index) => <CartList id={val._id} setcart={setcart} name={val.name} product={val.item} i={index} key={`cart_${index}`} />)}
        </>
    );
}
function CartList({ id, name, i, product }) {
    console.log(product);
    const [cartItem, setcart] = useContext(cartContext)
    const navigate = useNavigate()
    function removeCart(i) {
        cartItem.splice(i, 1)
        setcart([...cartItem])

    }

    return (
        <div>
            <div className="cart_items">
                <p onClick={() => navigate(`/rent/${product}/${id}`)}>{name} </p>
                <Button color="error" onClick={() => removeCart(i)}><DeleteOutlineIcon /></Button>



            </div>

        </div>
    )
}