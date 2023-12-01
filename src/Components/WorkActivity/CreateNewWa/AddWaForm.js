import React, {useState, useEffect}from 'react'
import { ErrorMessage, Field, Form, Formik, FieldArray } from 'formik';
import { useNavigate } from 'react-router-dom';
import TextError from "../../TextError";
import AddHazardForm from './AddHazardForm';
import { paramMenu } from '../../../Utils/paramMenu';

const AddWaForm = ({ values, setFieldValue }) => {
    const [workActivity, setWorkActivity] = useState([])
    const navigate = useNavigate();
    const handleNext = () => {
        const hazardPath = paramMenu[0]?.subModule.find(
            (item) => item.title === 'Create New Hazard'
        )?.path;
      
        if (hazardPath) {
            navigate(hazardPath);
        }
    };
    const handleCancel = () => {
        // navigate('/');
    };
    return(
        <div className="content-wrapper w-100 bg-light rounded pb-4 mb-3">
            <div className="content-header d-flex align-items-center px-4 bg-secondary rounded-top" style={{background: "linear-gradient(to left,#164863, #427D9D"}}>
                <div className="title text-light fw-semibold">Create New Activity </div>
            </div>
            <div className="container mt-3 mb-4">
                <div>
                    <div className="row mb-1 mx-0">
                        <div className="col-2">Work Activity<span className='text-danger'>*</span></div>
                        <div className="col-7 d-flex flex-row">
                            :
                            <Field type="text" name="workActivity" className="form-control mx-2"/>
                        </div>
                        <div className="col-3">
                            <ErrorMessage name="workActivity" component={TextError}/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className='btn btn-success text-light me-4' type="button" onClick={handleNext}>Next</button>
                        <button className='btn btn-danger text-light' type="button" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddWaForm