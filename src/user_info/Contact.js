import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

export function Contact() {
    const navigate = useNavigate()
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
    function greet() {
        alert("Thank You For Your FeedBack 🎉✨")
        navigate("/")
    }
    return (
        <div className="contact_page">
            <form onSubmit={() => formik.handleSubmit}>
                <TextField id="standard-basic" onChange={() => formik.handleChange} name="name" label="your name" variant="standard" />
                <TextField id="standard-basic" onChange={() => formik.handleChange} name="email" label="your email" variant="standard" />
                <TextField id="standard-basic" onChange={() => formik.handleChange} name="feedback" label="your feedback" variant="standard" />
                <Button type="submit" onClick={() => greet()} variant="contained">SEND</Button>
            </form>
        </div>
    );
}
