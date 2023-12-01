import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import AddHazardForm from "./AddHazardForm"
import AddWaForm from "./AddWaForm"
import AddRiskEvalForm from "./AddRiskEvalForm";


const AddWa = ({ data, setShowTambah }) => {
    const initialValues = {
        hazard: "",
        possibleAccident: "",
        implementPerson: "",
        dueDate: "",
        existingRisk: [""],
        severe: "",
        likehood: "",
    };

    const onSubmit = (values, submitProps) => {
        console.log("submit", values)
    };

    return (
        <>
            <Formik initialValues={initialValues}
            onSubmit={onSubmit}>
                {({ values, setFieldValue }) => {
                    return(
                        <Form>
                            {/* <AddHazardForm values={values} setFieldValue={setFieldValue}/> */}
                            {/* <AddWaForm values={values} setFieldValue={setFieldValue}/> */}
                            <AddRiskEvalForm values={values} setFieldValue={setFieldValue}/>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}

export default AddWa
