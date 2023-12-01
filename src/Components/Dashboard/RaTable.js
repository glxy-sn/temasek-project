import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { paramMenu } from '../../Utils/paramMenu';
// import AddWa from "../WorkActivity/WaContent";

const RaTable = ({tableHead, data, ...props}) => {
    
    const navigate = useNavigate()
    // const pathName = window.location.pathname;
    const goAddWa = () => {
        const workActivityPath = paramMenu[0]?.subModule.find(
            (item) => item.title === 'Activity Dashboard'
        )?.path;
      
        if (workActivityPath) {
            navigate(workActivityPath);
        }
    };
    console.log('data ra', data);

    const dataTable = [
        {
            id : "0912",
            conductor : "Y ltd",
            submitTime : "13 Nov 2023",
            status : "waiting for assessment",
            lastReview : "",
            nextReview : "13 Nov 2026",
        }
    ]
    const dataTab = dataTable

    return(
        <div className='border shadow'>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        {tableHead.map((data, index)=>(
                            <th className='align-top' key={index}>{data.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <>
                    {dataTab?.map((data, index)=>(
                        <tr key={index}>
                            <td className='border border-end'>{index+1}</td>
                            <td className='border border-end'>{data?.id}</td>
                            <td className='border border-end'>{data?.conductor}</td>
                            <td className='border border-end'>{data?.submitTime}</td>
                            <td className='border border-end'>{data?.status}</td>
                            <td className='border border-end'>{data?.lastReview}</td>
                            <td className='border border-end'>{data?.nextReview}</td>
                            <td className='border border-end'>
                                <div className='d-flex gap-1'>
                                    <button
                                        className="text-light bg-primary d-flex align-items-center py-2 px-2  border-0 rounded-1"
                                        data-placement="bottom"
                                        data-toggle="tooltip"
                                        title="detail"
                                        type="button"
                                        tabIndex="0"
                                        //onClick={() => goToDetail(data?.id)}
                                    >
                                        <FaRegEye/>
                                    </button>
                                    <button
                                        className="text-light bg-success d-flex align-items-center py-2 px-2  border-0 rounded-1"
                                        data-placement="bottom"
                                        data-toggle="tooltip"
                                        title="edit"
                                        type="button"
                                        tabIndex="0"
                                        //onClick={() => goToEdit(data?.id)}
                                        onClick={goAddWa}
                                    >
                                        <BsPencilSquare/>
                                    </button>
                                    <button
                                        className={`text-light d-flex align-items-center py-2 px-2  border-0 rounded-1 ${
                                            data?.activeFlag === "N" ? "bg-dark" : "bg-danger"
                                        }`}
                                        data-placement="bottom"
                                        data-toggle="tooltip"
                                        title={`${data?.activeFlag === "N" ? "Active" : "Delete"}`}
                                        type="button"
                                        tabIndex="0"
                                        // onClick={() => handleDeleteRow(data.id)}
                                    >
                                        <RiDeleteBin5Fill /> 
                                        {/* please add a warning before delete it */}
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </>
                </tbody>
            </table>
        </div>
    )
}

export default RaTable