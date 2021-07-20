import React from 'react'
import {Link} from "react-router-dom";


import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarContainer">
                <div className="sidebarMenu">
                    <Link to="/" className="menuItem">
                        Home
                    </Link>
                    <Link to="/activities" className="menuItem"> 
                        Activities
                    </Link>
                    <Link to="/addnewactivity" className="menuItem">
                        Add New
                    </Link>
                    <Link to="/completedactivities" className="menuItem">
                        Completed 
                    </Link>
                    <Link to="/incompletedactivities" className="menuItem">
                        Incomplete 
                    </Link>
                    <span className="copyright">
                        &copy; Created by Michael Agbonyeme
                    </span>
                </div>
               
            </div> 
        </div>
    )
}
