import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import formfields from "./formfields.json";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Loginpage() {
    const [formData, setFormData] = useState(formfields);
    const navigate = useNavigate()

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">

                <div className="card shadow-lg border-0 rounded-4 p-4" style={{ width: "400px" }}>

                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-primary">Login</h2>
                        <p className="text-muted mb-0">
                            Welcome back! Please login to continue.
                        </p>
                    </div>

                    <Formik
                        initialValues={{
                            username: "",
                            password: ""
                        }}
                        validationSchema={Yup.object({
                            username: Yup.string().required("Please Enter Your UserName"),
                            password: Yup.string().required("Please Enter a Valid Password")
                        })}
                        onSubmit={(values) => {

                            fetch('https://fakestoreapi.com/auth/login', {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    username: values.username,
                                    password: values.password
                                })
                            })
                                .then(response => response.json())
                                .then(data => {
                                    if (data.token) {
                                        localStorage.setItem("token", data.token);
                                        navigate("/Home");
                                    } else {
                                        console.log("Invalid username or password");
                                    }
                                })


                        }}
                    >
                        <Form>

                            {formData.map((value, index) => {
                                return (
                                    <div className="mb-3" key={index}>

                                        <label
                                            htmlFor={value.fieldName}
                                            className="form-label fw-semibold"
                                        >
                                            {value.fieldLabel}
                                        </label>

                                        <Field
                                            type={value.fieldType}
                                            name={value.fieldName}
                                            id={value.fieldName}
                                            className="form-control"
                                            placeholder={`Enter ${value.fieldLabel}`}
                                        />

                                        <ErrorMessage
                                            name={value.fieldName}
                                            component="div"
                                            className="text-danger small mt-1"
                                        />

                                    </div>
                                );
                            })}

                            <button
                                type="submit"
                                className="btn btn-primary w-100 rounded-pill fw-bold py-2 mt-2"
                            >
                                Login
                            </button>

                        </Form>
                    </Formik>

                </div>
            </div>
        </>
    );
}