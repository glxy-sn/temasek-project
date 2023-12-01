import { useContext, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaStar, FaUserAlt, FaUsers } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdArticle } from "react-icons/md";
import { Link } from "react-router-dom";
import { paramMenu } from "../Utils/paramMenu";

const Sidebar = ({ sideBar }) => {

    return(
        <div className={`${sideBar ? "sidebar-active" : "sidebar"} bg-light pb-5`}>
            <div className="sidebar-menu">
                <div className="sidebar-menu-item">
                    {/* <MdArticle className="fs-3 text-dark"/>
                    <Link to="/admin/risk-assessment" class="ms-3">
                        Dashboard Risk Assessment
                    </Link> */}
                    <div className="accordion accordion-flush mb-1" id="accordionFlushExample">
                        <div className="accordion-item border-0 rounded-0 shadow-sm">
                            <h2 className="accordion-header" id="flush-heading">
                                <button className="accordion-button collapsed py-2"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapse-1"
                                    aria-expanded="true"
                                    aria-controls="flush-collapse-1"
                                >
                                    Dashboard Assessment
                                </button>
                            </h2>
                            <div id="flush-collapse-1"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-collapse-1"
                            >
                                <div className="accordion-body px-0 pt-1 pb-3 rounded-0">
                                    <ul className="ps-0 mb-1">
                                        <li className="py-2 border-bottom">
                                            <Link className="text-dark ms-3" to = "/admin/risk-assessment">
                                                Dashboard Risk Assessment
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
