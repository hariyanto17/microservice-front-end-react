import React from 'react'
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as DefaultUser } from "assets/images/default-avatar.svg";

const Sidebar = ({match, history}) => {

    const getNavLinkClass = (path) => {
        return match.path === path ? "active text-white bg-indigo-900" : "text-indigo-500"
    }

    const users = useSelector(state => state.users)

    const logout = () => {
        localStorage.removeItem("MICRO:token")
        history.push("/login")
    }

    return (
        <aside className="bg-indigo-1000 max-h-screen h-screen overflow-auto" style={{width : 280}} >
            <div className="bg-indigo-1000 max-h-screen h-screen flex flex-col content-between" style={{width : 280}}>
                <div className="flex flex-col text-center mt-8">
                    <div className="border border-indigo-500 mx-auto p-2 inline-flex rounded-full overflow-hidden">
                         {
                             users?.avatar ? <img src={users?.avatar} alt={users?.name}/>
                             :
                             <DefaultUser className="fill-teal-500" style={{ width: 90, height: 90}}/>
                         }
                    </div>
                    <h6 className="text-white text-xl">{users?.name ?? "User Name"}</h6>
                    <span className="text-indigo-500 text-sm">
                        {users?.profession ?? "Profession"}
                    </span>
                </div>
                <ul className="main-menu mt-12">
                    <li>
                        <Link 
                         className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full", getNavLinkClass("/"),
                       ].join(" ")} 
                         to="/"
                        >
                            My Class
                        </Link>
                    </li>
                    <li>
                        <a 
                         className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-indigo-500", ]
                         .join(" ")} 
                         target="_blank" rel="noopener noreferrer"
                         href={`${process.env.REACT_APP_FRONTPAGE_URL}/library`}
                        >
                            Library
                        </a>
                    </li>
                    <li>
                        <Link 
                         className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full", getNavLinkClass("/transactions")]
                          .join(" ")} 
                         to="/transactions"
                        >
                            Transactions
                        </Link>
                    </li>
                    <li>
                        <Link 
                         className={["nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full", getNavLinkClass("/settings")]
                         .join(" ")} 
                         to="/settings"
                        >
                            Settings
                        </Link>
                    </li>
                </ul>
                <div className="my-auto"></div>
                <ul>
                    <li>
                        <button 
                         className={["nav-link relative flex items-center py-3 px-5 mb-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-indigo-500"]
                         .join(" ")} 
                         onClick={logout}
                        >
                            Log Out
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default withRouter(Sidebar)
