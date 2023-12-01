import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik, FieldArray } from 'formik';
import { AiFillPlusCircle } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import TextError from '../../TextError';

const AddRiskEvalForm = ({ values, setFieldValue }) => {
    const [existingRisk, setExistingRisk] = useState([]);
    const [severe, setSevere] = useState([]);
    const [likehood, setLikehood] = useState([]);

    return (
        <div className="content-wrapper w-100 bg-light rounded pb-4 mb-3">
            <div className="content-header d-flex align-items-center px-4 bg-secondary rounded-top" style={{ background: 'linear-gradient(to left,#164863, #427D9D)' }}>
                <div className="title text-light fw-semibold">Risk Evaluation</div>
            </div>
            <div className="container mt-3 mb-4">
                <form>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-4">Existing Risk Control:</div>
                                    <div className="col-8 d-flex flex-column">
                                        <FieldArray name="existingRisk">
                                            {({ remove, push }) => (
                                                <div>
                                                    {values.existingRisk.length > 0 &&
                                                        values.existingRisk.map((item, index) => (
                                                            <div className="d-flex flex-row align-items-center" key={index}>
                                                                <div className="flex-grow-1">
                                                                    <Field
                                                                        name={`existingRisk.${index}`}
                                                                        type="text"
                                                                        className="form-control my-1"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => remove(index)}
                                                                        className={`border-0 bg-transparent text-dark fs-5 mx-3 ${
                                                                            index > 0 ? 'visible' : 'invisible'
                                                                        }`}
                                                                    >
                                                                        <RiDeleteBin5Fill />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    <button
                                                        type="button"
                                                        onClick={() => push('')}
                                                        className="border-0 bg-transparent text-dark fs-3"
                                                    >
                                                        <AiFillPlusCircle />
                                                    </button>
                                                </div>
                                            )}
                                        </FieldArray>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-6">Severe:</div>
                                    <div className="col-6">
                                        <Field type="text" name="location" className="form-control mx-2" />
                                        <ErrorMessage name="location" component={TextError} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">Likehood:</div>
                                    <div className="col-6">
                                        <Field type="text" name="location" className="form-control mx-2" />
                                        <ErrorMessage name="location" component={TextError} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRiskEvalForm;
