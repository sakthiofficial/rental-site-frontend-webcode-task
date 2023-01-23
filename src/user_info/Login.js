import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from "yup";
import { API } from '../port';
import { user } from '../App';
import RefreshIcon from '@mui/icons-material/Refresh';
export function Login() {
    const [logIn, setlogIn] = useContext(user)
    const [err, seterr] = useState(false);
    const [click, setclick] = useState(false)
    // const [err, seterr] = useState(false);

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
            setclick(true)
            fetch(`${API}login`, {
                method: "POST",
                headers: { "Content-type": "application/json;charset=UTF-8" },
                body: JSON.stringify(values)
            }).then(dt => {
                setclick(false)
                if (dt.status == 401) {
                    seterr(true)
                }
                return dt.json()
            }).then(val => {

                if (val.token) {
                    localStorage.setItem("token", val.token)
                    localStorage.setItem("name", values.name)

                    navigate("/");


                } else {
                    setclick(false)

                    seterr(true);

                    console.log(val);
                }


            })
        }
    })
    return (
        <div className="login_page">
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" onChange={handleChange} key={"name"} name="name" color={err ? "error" : errors.name ? "error" : "primary"} label={err ? "Incorrect username" : errors.name ? errors.name : "User Name"} variant="outlined" />
                <TextField id="outlined-basic" onChange={handleChange} key={"password"} name="password" color={err ? "error" : errors.password ? "error" : "primary"} label={err ? "Incorrect Password" : errors.password ? errors.password : "Enter Password"} variant="outlined" />
                <div className="signup-btn" >
                    <Button onClick={() => navigate("/signup")} className='btn'>Sign Up</Button>
                    <Button variant='contained' color={err ? "error" : "primary"} type="submit">{err ? click ? <span><RefreshIcon className='loading' /></span> : "Try Again" : click ? <span><RefreshIcon className='loading' /></span> : "Log In"}</Button>


                </div>

            </form>
        </div>
        // <>
        // </>
    );
}
