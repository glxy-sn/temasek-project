import bc from "../Utils/breadcrumbs";
import DashboardRa from "../Pages/DashboardRa";
import WorkActivity from "../Pages/WorkActivity";
import AddHazardForm from "../Components/WorkActivity/CreateNewWa/AddHazardForm";
// import AddRA from "../Pages/AddRA"

const DashboardRoutes = [
    {
        path: 'risk-assessment',
        element: <DashboardRa breadcrumbs={bc.dashboard.index}/>
    },
    {
        path: 'work-activity',
        element: <WorkActivity breadcrumbs={bc.dashboard.index}/>
    },
    // {
    //     path: 'create-new-hazard',
    //     element: <AddHazardForm breadcrumbs={bc.dashboard.index}/>
    // },
]

export default DashboardRoutes