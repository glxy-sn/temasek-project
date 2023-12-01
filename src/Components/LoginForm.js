import React from "react"
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"
import { SlUser } from "react-icons/sl"
import { TfiLock } from "react-icons/tfi"
import logo from "../Assests/logo_tp.png"
import auth from "../Services/Auth"

const LoginForm = () => {
    const { login } = auth()
    const initialValues = {
        username: "",
        password: "",
    };

    const validationLogin = Yup.object({
        username: Yup.string().required("Please full fill this field"),
        password: Yup.string().required("Please full fill this field"),
    });

    const onSubmit = (values, submitProps) => {
        login(values)
        console.log(values)
    };

    return(
        <div className="login-form bg-light px-5 pt-4 pb-5 shadow rounded">
            <div className='d-flex align-items-center mt-3 mb-2'>
                <img src={logo} style={{height:'50px'}}/>
                <h2 className='mb-0 ms-1 fw-light'>Risk Assessment</h2>
            </div>
            <p className="text-danger">Sign in to your account</p>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationLogin}
            >
                {(formik)=>{
                    return(
                        <Form>
                            <div className="form d-flex border rounded">
                                <div className="form-input d-flex align-items-center border-end px-3">
                                    <SlUser/>
                                </div>
                                <Field className="form-control border-0" type="text" id="username" name="username" placeholder="Username" aria-label="default input example"/>
                            </div>
                            <div
                                className='mb-3'
                                style={{
                                color: 'red',
                                textAlign: 'left',
                                fontSize: '11px',
                                }}
                            >
                                <ErrorMessage name='username' />
                            </div>
                            <div className="form d-flex border rounded">
                                <div className="form-input d-flex align-items-center border-end px-3">
                                    <TfiLock/>
                                </div>
                                <Field className="form-control border-0" type="password" id="password" name="password" placeholder="Password" aria-label="default input example"/>
                            </div>
                            <div
                                className='mb-3'
                                style={{
                                color: 'red',
                                textAlign: 'left',
                                fontSize: '11px',
                                }}
                            >
                                <ErrorMessage name='password' />
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Remember Me
                                </label>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" type="submit" style={{background: "linear-gradient(to left,#164863, #427D9D"}}>Login</button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default LoginForm