import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';

import banner from "../assets/banner.jpg"
export default function CatalogList({ image, text, direction, navigate, btn }) {
    console.log(btn)
    const navigate2 = useNavigate()
    return (
        <div className="catalog_contant_list" style={{ flexDirection: direction }}>

            <div className="catalog_contant_list_img" onClick={() => navigate2(navigate)}>
                <img src={image} alt="" />
            </div>
            <div className="catalog_contant_list_text">
                <p>
                    {text}{btn ? <Button onClick={() => navigate2(navigate)}>{btn}</Button> : null}

                </p>
            </div>
        </div>
    )
}