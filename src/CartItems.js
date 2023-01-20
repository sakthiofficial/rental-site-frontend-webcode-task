import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export function CartItems() {
    return (
        <div>
            <div className="cart_items">
                <p>Digitek DSG 005 3-Axis Gimble</p>
                <Button color="error"><DeleteOutlineIcon /></Button>



            </div>
            <div className="btn">
                <Button>purchase</Button>
            </div>
        </div>
    );
}
