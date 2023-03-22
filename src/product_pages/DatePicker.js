import { Button } from '@mui/material';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { useNavigate } from 'react-router-dom';
import calcDate from '../order_page/calc';
import { Stripe } from '../payments/stripe';
import { API } from '../port';



export default function MaterialUIPickers({ data, id, name }) {
    const [calender, setcalender] = useState(new Date());
    let date = new Date()
    const [amount, setamount] = useState(null)


    // console.log(new date().getMonth + 1);
    function sendData(values) {

        // if (values.days < 1 || values.days > 20) {
        //     alert("Please select minimum 1 day maximum 20 ")
        //     return
        // }


        if (values.getFullYear() != date.getFullYear() || date.getMonth() > values.getMonth()) {



            alert("Please Check Year Date Month.  ")
            console.log(date.getDate(), values.getDate());
        } else {
            if (date.getMonth() == values.getMonth()) {
                if (values.getDate() < date.getDate()) {
                    alert("Please Check Year Date Month.  ")
                    console.log(date.getDate(), values.getDate());

                    return
                }
            }
            console.log(calcDate(date.getDate(), date.getMonth(), values.getDate(), values.getMonth(),));

            if (calcDate(date.getDate(), date.getMonth(), values.getDate(), values.getMonth(),) > 15) {
                alert("Sorry We Provide WithIn 15 Days Of Rent")
            } else {
                const days = calcDate(date.getDate(), date.getMonth(), values.getDate(), values.getMonth())
                console.log("Success");

                let money = days * 24 * data.rent
                setamount(days * 24 * data.rent)


                fetch(`${API}user/rental/${name}`, {
                    method: "POST",
                    headers: { "Content-type": "application/json;charset=UTF-8" },
                    body: JSON.stringify({ days: days, product_id: id, amount: money, image: data.image, product_name: data.name })
                }).then(val => {
                    if (val.status == 200) {

                    }
                })


            }
        }


    }
    return (
        <div className='date-picker' >

            <div className='content'>
                <DatePicker clearIcon={false} value={calender} minDate={new Date()} onChange={(dt) => setcalender(dt)} />


                <div className="btn">
                    {
                        amount >= 1 ? <Stripe amount1={amount} /> : <Button className='order-btn' onClick={() => sendData(calender)}>ok</Button>
                    }
                </div>

            </div>
        </div>
    );
}