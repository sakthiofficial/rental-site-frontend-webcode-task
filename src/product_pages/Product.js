import { useNavigate } from "react-router-dom";

export function Product({ name, image }) {
    const navigate = useNavigate()
    return (

        <div className="product" onClick={() => navigate(`/${name}`)}>
            <div className="product_img">
                <img src={image} alt={name} />
            </div>
            <div className="product_text">
                <p>{name}</p>
            </div>
        </div>

    );
}
