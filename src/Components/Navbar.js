import { useContext, useEffect} from "react";
import { BsList } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../Assests/logo_tp.png"
import auth from "../Services/Auth"
import baseService from "../Services/BaseService"
import UserContext from "../Contexts/UserContext"
import { Link } from "react-router-dom";

const Navbar = ({setShow}) => {
    const { userProfile, setUserInfo, setRoleList} = useContext(UserContext);
    // const { getProfile } = user()
    const { logout } = auth()
    const navigate = useNavigate()

    // useEffect(() => {
    //     getModule(setModule)
    // }) 
    return(
        <div className="d-flex w-100 sticky-top shadow-sm" style={{ height: "60px" }}>
            {/* <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "250px" }}>
                <img src={logo} alt="" style={{ height: "31px" }} />
            </div> */}
            {/* <div className=" d-flex flex-grow-1 shadow-sm" style={{ background: "linear-gradient(to left,#3A4D39, #4F6F52)" }}> */}
            <div className=" d-flex flex-grow-1 shadow-sm" style={{ background: "#164863" }}>
                <div className="my-auto">
                    <div className="d-flex">
                        <button className="btn btn-none border-0" type="button" onClick={setShow}>
                            {/* <BsList className="fs-2 text-light"/> */}
                            <Link className="text-light me-3" to="/admin/risk-assessment">
                                Dashboard Risk Assessment
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="my-auto ms-auto pe-3">
                    <div className="d-flex align-items-center">
                        {/* <Link className="text-light me-3" to="/admin/risk-assessment">
                            Dashboard Risk Assessment
                        </Link> */}
                        <div className="dropdown my-auto">
                            <button className="btn btn-none border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaRegUserCircle className="fs-2 text-light"/>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Setting
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar