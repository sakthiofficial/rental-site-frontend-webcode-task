import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../port';

export function Rent() {
    const navigate = useNavigate()
    const [data, setdata] = useState({ specification: [] })
    const { id, product } = useParams()
    // const [days,setdays] = useState(0)
    // console.log(id, product);
    const getCameras = async () => {
        fetch(`${API}products/${product}/${id}`).then(val => val.json()).then(dt => setdata(dt))
    }

    useEffect(() => {
        getCameras()

    }, [])
    const { handleChange, handleSubmit } = useFormik({
        initialValues: {
            days: ""
        },
        onSubmit: (values) => {
            if (values.days < 1 || values.days > 20) {
                alert("Please select minimum 1 day maximum 20 ")
                return
            }

            fetch(`${API}user/rental/sakthi`, {
                method: "POST",
                headers: { "Content-type": "application/json;charset=UTF-8" },
                body: JSON.stringify({ ...values, product_id: id, amount: (24 * values.days) * data.rent, image: data.image, product_name: data.name })
            }).then(val => {
                if (val.status == 200) {
                    alert("SuccesFully Rented")
                    navigate("/")
                }
            })


        }

    })
    return (
        <div className="rent_page">
            <div className="rent_page_info">
                <div className="rent_page_info_img">
                    <img src={data.image} alt={data.name} />

                </div>
                <div className="rent_page_info_spec">
                    <h3>Specifications</h3>
                    <ul>
                        {data.specification.map(val => {
                            return (
                                <li>{val}</li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="rent_page_detail">
                <form onSubmit={handleSubmit}>
                    <input type="number" name="days" onChange={handleChange} placeholder='Enter days' />
                    <Button type="submit" variant="contained">rent</Button>
                </form>

            </div>

        </div>
    );
}
