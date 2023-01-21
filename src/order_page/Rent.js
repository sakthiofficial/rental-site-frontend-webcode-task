import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../port';
import MaterialUIPickers from '../product_pages/DatePicker';
import calcDate from './calc';

export function Rent() {
    const navigate = useNavigate()
    const [data, setdata] = useState({ specification: [] })
    const { id, product } = useParams()
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

    function sendData(values = { $D: 0, $M: 0 }) {

        // if (values.days < 1 || values.days > 20) {
        //     alert("Please select minimum 1 day maximum 20 ")
        //     return
        // }


        if (values.$y != date.getFullYear() || date.getMonth() > values.$M) {



            alert("Please Check Year Date Month.  ")
            console.log(date.getDate(), values.$D);
        } else {
            if (date.getMonth() == values.$M) {
                if (values.$D < date.getDate()) {
                    alert("Please Check Year Date Month.  ")
                    console.log(date.getDate(), values.$D);

                    return
                }
            }
            console.log(calcDate(date.getDate(), date.getMonth(), values.$D, values.$M));
            if (calcDate(date.getDate(), date.getMonth(), values.$D, values.$M) > 15) {
                alert("Sorry We Provide WithIn 15 Days Of Rent")
            } else {
                const days = calcDate(date.getDate(), date.getMonth(), values.$D, values.$M)
                const amount = days * 24 * data.rent
                // console.log(amount);
                fetch(`${API}user/rental/${name}`, {
                    method: "POST",
                    headers: { "Content-type": "application/json;charset=UTF-8" },
                    body: JSON.stringify({ days: days, product_id: id, amount: amount, image: data.image, product_name: data.name })
                }).then(val => {
                    if (val.status == 200) {
                        alert("SuccesFully Rented")
                        navigate("/rental")
                    }
                })

            }
        }
        // console.log(values, date);


    }


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
                <form >

                    <MaterialUIPickers sendData={sendData} />

                </form>
            </div>

        </div>
    );
}
