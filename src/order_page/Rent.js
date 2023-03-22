import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../port';
import MaterialUIPickers from '../product_pages/DatePicker';
import calcDate from './calc';
import Button from '@mui/material/Button';
import StripeCheckout from 'react-stripe-checkout';
import { Stripe } from '../payments/stripe';

export function Rent() {
    const [data, setdata] = useState({ specification: [] })
    const { id, product } = useParams()
    const [rentalbtn, setrentalbtn] = useState(false)


    const name = localStorage.getItem("name")

    const date = new Date()
    // const [days,setdays] = useState(0)
    // console.log(id, product);
    const getCameras = async () => {
        fetch(`${API}products/${product}/${id}`).then(val => val.json()).then(dt => setdata(dt))
    }

    useEffect(() => {
        getCameras()

    }, [])




    return (
        <div className="rent_page">
            <div className="rent">
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
                        <div className="rent-btn">
                            <Button onClick={() => setrentalbtn(true)}>Rent</Button>
                        </div>


                    </div>
                    {/* <Stripe /> */}

                </div>
                {rentalbtn ? <div className="rent_page_detail">


                    <MaterialUIPickers data={data} id={id} name={name} />


                </div> : null}

            </div>

        </div>
    );
}
