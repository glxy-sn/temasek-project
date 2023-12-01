import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import AddNewForm from "./AddNewForm";

const AddNewRA = ({ data,setShowTambah }) => {
    const initialValues = {
        location: "",
        teamLeader: "",
        teamMember: [""],
    };

    const onSubmit = (values, submitProps) => {
        console.log("submit", values)
    };

    return(
        <>
            <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            >
                {({ values, setFieldValue }) => {
                    return (
                        <Form>
                            <AddNewForm values={values} setFieldValue={setFieldValue}/>
                            <div className="mb-4 mx-0">
                                <div className="col-2"></div>
                                <div className="d-flex justify-content-center mt-5">
                                    <button type="submit" className="btn btn-success text-light">
                                        Save
                                    </button>
                                    <button type="button" onClick={() => setShowTambah(false)} className="btn btn-danger text-light mx-3">
                                        Back
                                    </button>
                                </div>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </>
    )
}

export default AddNewRA