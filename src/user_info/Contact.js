import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Greet } from '../Greetings/Greet';

export function Contact() {
    const navigate = useNavigate()
    const [greet, setgreet] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            feedback: ""
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });
    function getgreet() {
        setgreet(true)
        setTimeout(() => {
            navigate("/")

        }, 10000)
    }

    return (
        <>
            {greet ? <Greet /> : <div className="contact_page">
                <form onSubmit={() => formik.handleSubmit}>
                    <TextField id="standard-basic" variant="outlined" onChange={() => formik.handleChange} name="name" label="your name" />
                    <TextField id="standard-basic" onChange={() => formik.handleChange} name="email" label="your email" variant="outlined" />
                    <TextField id="standard-basic" onChange={() => formik.handleChange} name="feedback" label="your feedback" variant="outlined" />
                    <Button type="submit" onClick={() => getgreet()} variant="contained">SEND</Button>
                </form>
            </div>}
        </>
    );
}
