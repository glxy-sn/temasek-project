import React, {useState, useEffect}from 'react'
import { ErrorMessage, Field, Form, Formik, FieldArray } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AiFillPlusCircle } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import TextError from "../../TextError";

import * as Yup from "yup";

const AddNewForm = ({ values, setFieldValue }) => {
    const [location, setLocation] = useState([]);
    const [teamLeader, setTeamLeader] = useState([]);
    const [teamMember, setTeamMember] = useState([]);
    const navigate = useNavigate()
    // const initialValues = {
    //     location:'',
    //     teamLeader:'',
    //     teamMember:'',
    // };

    // const validation = Yup.object({
    //     location: Yup.string().required("Location is required"),
    //     teamLeader: Yup.string().required("Team leader is required"),
    //     teamMember: Yup.string().required("Team member is required")
    // });

    // const onSubmit = (values, submitProps) => {
    //     const formData = {
    //         location : values?.location,
    //         teamLeader : values?.teamLeader,
    //         teamMember : values?.teamMember
    //     }
    //     console.log('this is form', formData)
    // };

    // return(
    //     <div className='py-5 bg-white rounded-bottom border border-top-0'>
    //         <Formik
    //     initialValues={initialValues}
    //     onSubmit={onSubmit}
    //     validationSchema={validation}
    //     >
    //         {(Formik) => {
    //             return(
    //                 <Form>
    //                     <div className="row">
    //                         <div className="col justify-content-start">
    //                             <div className='col-4'>
    //                                 Location <span className='text-danger'>*</span>
    //                             </div>
    //                             <div className='col-1'>
    //                                 :
    //                             </div>
    //                             <div className='col-7 px-0 pe-3'>
    //                                 <Field type="text" className="form-control mx-2" name="location"/>
    //                                 <div
    //                                 className='mb-3'
    //                                 style={{
    //                                     color: 'red',
    //                                     textAlign: 'left',
    //                                     fontSize: '11px',
    //                                 }}>
    //                                     <ErrorMessage name='location'/>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="row mb-1 mx-0">
    //                             <div className='col-4'>
    //                                 Team Leader <span className='text-danger'>*</span>
    //                             </div>
    //                             <div className='col-1'>:</div>
    //                             <div className='col-7 px-0'>
    //                                 <Field type="text" className="form-control mx-2" name="teamLeader"/>
    //                                 <div
    //                                 className='mb-3'
    //                                 style={{
    //                                     color: 'red',
    //                                     textAlign: 'left',
    //                                     fontSize: '11px',
    //                                 }}>
    //                                     <ErrorMessage name='teamLeader'/>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="row mb-1 mx-0">
    //                             <div className='col-4'>
    //                                 Team Member <span className='text-danger'>*</span>
    //                             </div>
    //                             <div className='col-1'>
    //                                 :
    //                             </div>
    //                             <div className='col-7 px-0'>
    //                                 <Field
    //                                 as="text"
    //                                 name="unit"
    //                                 className="form-control mx-2"/>
    //                                 <div
    //                                 className='mb-3'
    //                                 style={{
    //                                     color: 'red',
    //                                     textAlign: 'left',
    //                                     fontSize: '11px'
    //                                 }}>
    //                                     <ErrorMessage name='teamMember'/>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className='d-flex justify-content-center mt-5'>
    //                         <button className='btn btn-success text-light' type="submit">Save</button>
    //                         <button className='btn btn-danger text-light mx-4' onClick={()=>navigate('/admin/dashboard')}>Cancel</button>
    //                     </div>
    //                 </Form>
    //             )
    //         }}
    //         </Formik>
    //     </div>
    // )

    return(
        <div className="content-wrapper w-100 bg-light rounded pb-4 mb-3">
            <div className="content-header d-flex align-items-center px-4 bg-secondary rounded-top" style={{background: "linear-gradient(to left,#164863, #427D9D"}}>
                <div className="title text-light fw-semibold">Create New Assessment</div>
            </div>
            <div className="container mt-3 mb-4">
                <div>
                    <div className="row mb-1 mx-0">
                        <div className="col-2">Location</div>
                        <div className="col-7 d-flex flex-row">
                            :
                            <Field type="text" name="location" className="form-control mx-2"/>
                        </div>
                        <div className="col-3">
                            <ErrorMessage name="location" component={TextError}/>
                        </div>
                    </div>
                    <div className="row mb-1 mx-0">
                        <div className="col-2">Team Leader</div>
                        <div className="col-7 d-flex flex-row">
                            :
                            <Field type="text" name="teamLeader" className="form-control mx-2"/>
                        </div>
                        <div className="col-3">
                            <ErrorMessage name="teamLeader" component={TextError}/>
                        </div>
                    </div>
                    <div className="row mb-1 mx-0">
                        <div className="col-2">Team Member</div>
                        <div className="col-10 d-flex flex-row">
                            :
                            <FieldArray name="teamMember">
                                {({ remove, push }) => (
                                <div>
                                    {values.teamMember.length > 0 &&
                                    values.teamMember.map((item, index) => (
                                        <div className="d-flex flex-row col-10" key={index}>
                                            <div className="">
                                                <Field
                                                name={`teamMember.${index}`}
                                                type="text"
                                                className="form-control mx-2 my-1"
                                                />
                                            </div>
                                            <div className="col-2">
                                                <button
                                                type="button"
                                                onClick={() => remove(index)}
                                                className={`border-0 bg-transparent text-dark fs-5 mx-3 ${
                                                    index > 0 ? "visible" : "invisible"
                                                }`}
                                                >
                                                    <RiDeleteBin5Fill />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                    type="button"
                                    onClick={() => push("")}
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
        </div>
    )
}

export default AddNewForm