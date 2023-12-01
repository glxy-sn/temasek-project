import React from 'react'
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";

const WaTable = ({tableHead, data, ...props}) => {
    console.log('this is work activity', data)

    const dataWa = [
        {
            workActivity : "Make a cookies",
            lastModif : "30 Nov 2023",
        }
    ]
    const dataTab = dataWa

    return(
        <div className='border-shadow'>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        {tableHead.map((data, index) => (
                            <th className='align-top' key={index}>
                                {data.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <>
                    {dataTab?.map((data, index)=>(
                        <tr key={index}>
                            <td className='border border-end'>{index+1}</td>
                            <td className='border border-end'>{data?.workActivity}</td>
                            <td className='border border-end'>{data?.lastModif}</td>                            
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

export default WaTable