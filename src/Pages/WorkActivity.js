import React, {useState, useEffect} from 'react'
import WaContent from '../Components/WorkActivity/WaContent'
import useApiRA from '../Services/useApiRA'
import { useSearchParams } from 'react-router-dom'
import { waTableHead } from '../Utils/DummyData'

const WorkActivity = ({breadcrumbs, show, ...props}) => {
    const {getListRA} = useApiRA()
    const [data, setData] = useState()
    const [searchParams] = useSearchParams()
    const page = searchParams.get("page")

    useEffect(() => {
        getListRA(page, 10).then((res) => setData(res))
    }, [page])

    return(
        <div>
            <div className="d-flex flex-row justify-content-between px-5 py-4 my-2">
                <WaContent
                title="Work Activity"
                tabel= {waTableHead}
                data = {data}
                />
            </div>
        </div>
    )
}

export default WorkActivity