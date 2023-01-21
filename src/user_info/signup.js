import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from "yup";
import { API } from '../port';

export function Signup() {
    const [err, seterr] = useState(false);
    const navigate = useNavigate();
    const yupValidation = yup.object({
        name: yup.string().min(4, "Atleast 4 character needed").max(14, "Atmost 8 characters only needed").required(),
        email: yup.string().email().required(),
        password: yup.string().min(4, "Atleast 4 character needed").max(14, "Atmost 8 characters only needed").required()
    });
    const { handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema: yupValidation,
        onSubmit: (values) => {
            fetch(`${API}login/signup`, {
                method: "POST",
                headers: { "Content-type": "application/json;charset=UTF-8" },
                body: JSON.stringify(values)
            }).then(val => {
                if (val.status == 401) {
                    seterr(true);

                }
                return val.json();

            }).then((dt) => {

                if (dt.token) {
                    seterr(false);
                    localStorage.setItem("token", dt.token);
                    localStorage.setItem("name", values.name);

                    navigate("/");
                } else {
                }
            });
        }
    });
    return (
        <div className="login_page">
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" onChange={handleChange} key={"name"} name="name" label={err ? "This User Name Already Used" : "User name"} variant="outlined" />
                <TextField id="outlined-basic" onChange={handleChange} key={"email"} name="email" label={errors.email ? errors.email : "Email"} variant="outlined" />
                <TextField id="outlined-basic" onChange={handleChange} key={"password"} name="password" label={errors.password ? errors.password : "Enter password"} variant="outlined" />
                <Button variant='contained' color={err ? "error" : "primary"} type="submit">{err ? "Try Again" : "Log In"}</Button>
            </form>
        </div>
        // <>
        // </>
    );
}
