import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import { Product } from './Product';

export function Item({ id, name, image, rent, product }) {
    const navigate = useNavigate()
    return (
        <div className="item_container">
            <div className="item_container_img">
                <img src={image} alt={name} />
            </div>
            <div className="item_containe_text">
                <h2>{name}</h2>
                <p>rent per hour:<span className='price-tag'>{rent}rs</span> </p>
            </div>
            <div className="item_container_buttons">
                <Button variant="contained" onClick={() => navigate(`/rent/${product}/${id}`)}>RENT</Button>

                <Button variant="contained" className='cart-btn' color="error">ADD TO CARD</Button>

            </div>
        </div>
    );
}
