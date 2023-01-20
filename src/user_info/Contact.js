import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';

export function Contact() {

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
    return (
        <div className="contact_page">
            <form onSubmit={() => formik.handleSubmit}>
                <TextField id="standard-basic" onChange={() => formik.handleChange} name="name" label="your name" variant="standard" />
                <TextField id="standard-basic" onChange={() => formik.handleChange} name="email" label="your email" variant="standard" />
                <TextField id="standard-basic" onChange={() => formik.handleChange} name="feedback" label="your feedback" variant="standard" />
                <Button type="submit" variant="contained">SEND</Button>
            </form>
        </div>
    );
}
