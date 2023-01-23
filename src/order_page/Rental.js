import Button from '@mui/material/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { API } from '../port';

export function Rental() {
    const [data, setdata] = useState([])
    const name = localStorage.getItem("name")

    const getRents = async () => {
        fetch(`${API}user/${name}/rentals`).then(val => val.json()).then(dt => setdata(dt))
    }
    useEffect(() => {
        getRents()
    }, [])
    function returnProduct(id) {

        fetch(`${API}user/${name}/return/${id}`, {
            method: "DELETE"
        }).then(val => {
            if (val.status == 200) {
                alert("Return SuccessFully")
                getRents()
            } else {
                alert("Something Wrong")
            }
        })

    }
    return (
        <div className='empty'>
            {data.length == 0 ? "No Rented Items" : data.map((val, index) => {
                return (
                    <div key={index} className="rental_page">
                        <div className="rental_page_info">
                            <div className="rental_page_info_img">
                                <img src={val.image} alt={index} />
                            </div>
                            <div className="rental_page_info_text">
                                <p>{val.product_name}</p>
                            </div>
                        </div>
                        <div className="rental_page_details">
                            <p>Total Amount : <span className='amout'>₹{val.amount}</span></p>
                            <p>Total Days : <span className='days'>{val.days}</span></p>
                            <Button variant='contained' color='error' onClick={() => returnProduct(val._id)}>Return</Button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}


