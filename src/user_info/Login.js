import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from "yup";
import { API } from '../port';

export function Login() {
    const [err, seterr] = useState(false);
    const navigate = useNavigate();
    const yupValidation = yup.object({
        name: yup.string().min(4, "Atleast 4 character needed").max(14, "Atmost 8 characters only needed").required(),
        password: yup.string().min(4, "Atleast 4 character needed").max(14, "Atmost 8 characters only needed").required()
    });
    const { handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            name: "",
            password: ""
        },
        validationSchema: yupValidation,
        onSubmit: (values) => {
            fetch(`${API}login`, {
                method: "POST",
                headers: { "Content-type": "application/json;charset=UTF-8" },
                body: JSON.stringify(values)
            }).then(dt => dt.json()).then(val => {
                if (val.token) {
                    seterr(false);
                    localStorage.setItem("token", val.token)

                    navigate("/");

                } else {
                    seterr(true);
                    console.log(val);
                }


            })
        }
    })
    return (
        <div className="login_page">
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" onChange={handleChange} key={"name"} name="name" label={err ? "Incorrect username" : "User name"} variant="outlined" />
                <TextField id="outlined-basic" onChange={handleChange} key={"password"} name="password" label={err ? "Incorrect Password" : "Enter Password"} variant="outlined" />
                <Button variant='contained' color={err ? "error" : "primary"} type="submit">{err ? "Try Again" : "Log In"}</Button>
            </form>
        </div>
        // <>
        // </>
    );
}
