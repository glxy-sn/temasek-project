import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Pagination from '../Pagination'
import RaTable from './RaTable'
import AddNewRA from "./AddNew/AddNewRA";

const ContentRA = ({title, table, data, ...props}) => {
    const navigate = useNavigate()
    const [showTambah, setShowTambah] = useState(false);
    const pathName = window.location.pathname;
    const showModal = () => {
        setShowTambah(true);
      };

    return(
        <>
            {!showTambah && (
                <div className = 'content-wrapper w-100 bg-light rounded pb-4 mb-5'>
                    <div className = 'content-header d-flex align-items-center px-4 bg-secondary rounded-top' style={{background: "linear-gradient(to left,#164863, #427D9D"}}>
                        <div className = 'title text-light fw-semibold'>{title}</div>
                        <div className = 'ms-auto'>
                            <button
                                type="button"
                                className='add-button btn d-flex align-items-center btn-success text-light py-0 px-2'
                                onClick={() => showModal()}
                                >
                                    <span className='button-text fw-bold fs-4 mb-1 me-1'>+</span>
                                    Create New Assessment
                            </button>
                        </div>
                    </div>
                    <div className='mx-4 mt-3 mb-4'>
                        <RaTable title={title} tableHead={table} data={data?.content}/>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <Pagination data={data}/>
                    </div>
                </div>
            )}

            {showTambah && (
                <div>
                    <div className="w-100">
                        {/* <p className="display-4"></p>
                        <hr/> */}
                        <AddNewRA setShowTambah={setShowTambah}/>
                    </div>
                </div>
            )}
        </>

    )
}

export default ContentRA