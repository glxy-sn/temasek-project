import React, {useState, useEffect} from 'react'
import PageContentHeader from '../Components/PageContentHeader'
import ContentRA from '../Components/Dashboard/ContentRA'
// import { useSearchParams } from 'react-router-dom';
import useApiRA from '../Services/useApiRA'
import { useSearchParams } from 'react-router-dom'
import { raTableHead } from '../Utils/DummyData'

const DashboardRa = ({breadcrumbs, show, ...props}) => {
    const {getListRA} = useApiRA()
    const [data, setData] = useState()
    const [searchParams] = useSearchParams()
    const page = searchParams.get("page")

    useEffect(() => {
        getListRA(page, 10).then((res) => setData(res))
    }, [page])

    return(
        <div>
            {/* <PageContentHeader breadcrumbs={breadcrumbs}/> */}
            <div className="d-flex flex-row justify-content-between px-5 py-4 my-2">
                <ContentRA
                title = "Dashboard"
                table = {raTableHead}
                data  = {data}
                />
            </div>
        </div>
    )
}

export default DashboardRa