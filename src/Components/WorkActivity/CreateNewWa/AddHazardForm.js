import React, {useState, useEffect}from 'react'
import { ErrorMessage, Field, Form, Formik, FieldArray } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AiFillPlusCircle } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import TextError from "../../TextError";
import AddRiskEvalForm from "./AddRiskEvalForm";


const AddHazardForm = ({ values, setFieldValue }) => {
    //hazard, posibble accident, implement person, due date, remarks, risk evaluation (have table existing risk control)
    const [hazard, setHazard] = useState([]);
    const [possibleAccident, setAccident] = useState([]);
    const [implementPerson, setImplementPerson] = useState([]);
    const [dueDate, setDueDate] = useState([]);
    const navigate = useNavigate()

    return (
        <div className="content-wrapper w-100 bg-light rounded pb-4 mb-3">
            <div className="content-header d-flex align-items-center px-4 bg-secondary rounded-top" style={{background: "linear-gradient(to left,#164863, #427D9D"}}>
                <div className="title text-light fw-semibold">Create New Hazard </div>
            </div>
            <div className="container mt-3 mb-4">
                <div>
                    <div className="row mb-1 mx-0">
                        <div className="col-2">Hazard<span className='text-danger'>*</span></div>
                        <div className="col-7 d-flex flex-row">
                            :
                            <Field type="text" name="hazard" className="form-control mx-2"/>
                        </div>
                        <div className="col-3">
                            <ErrorMessage name="hazard" component={TextError}/>
                        </div>
                    </div>
                    <div className="row mb-1 mx-0">
                        <div className="col-2">Possible Accident<span className='text-danger'>*</span></div>
                        <div className="col-7 d-flex flex-row">
                            :
                            <Field type="text" name="accident" className="form-control mx-2"/>
                        </div>
                        <div className="col-3">
                            <ErrorMessage name="accident" component={TextError}/>
                        </div>
                    </div>
                    <div className="row mb-1 mx-0">
                        <div className="col-2">Implement Person<span className='text-danger'>*</span></div>
                        <div className="col-7 d-flex flex-row">
                            :
                            <Field type="text" name="implementPerson" className="form-control mx-2"/>
                        </div>
                        <div className="col-3">
                            <ErrorMessage name="implementPerson" component={TextError}/>
                        </div>
                    </div>
                    <div className="row mb-1 mx-0">
                        <div className="col-2">Due Date<span className='text-danger'>*</span>
                        </div>
                        <div className="col-7 d-flex flex-row">
                            :
                            <Field type="date" name="dueDate" className="form-control mx-2"/>
                        </div>
                        <div className="col-3">
                            <ErrorMessage name="dueDate" component={TextError}/>
                        </div>
                    </div>
                </div>
            </div>
            
            <AddRiskEvalForm values={values} setFieldValue={setFieldValue}/>
        </div>
        
    )
    
}

export default AddHazardForm