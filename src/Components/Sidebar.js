import React from 'react'
import "../App.css";
import { SidebarData } from './SidebarData';
import { SidebarDataIcon } from './SidebarDataIcon';
import Avt from '../Images/avt.jpg';
function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar_fixed">
                <img alt="Avatar" className="SidebarImg" src={Avt}></img>
                <h2 className="SidebarHeading">PORTFOLIO</h2>
                <h4 className="SidebarDesc">Template by W3.CSS</h4>
                <ul className="SidebarList">
                    {SidebarData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="row"
                                onClick={() => { window.location.pathname = val.link }}
                            >
                                <div style={{
                                    paddingRight: 10,
                                    paddingLeft: 10
                                }}>{val.icon}</div>
                                <div>{val.title}</div>
                            </li>
                        )
                    })}
                </ul>
                <div className="SidebarListIcon">
                    {SidebarDataIcon.map((val, key) => {
                        return (
                            <div
                                key={key}
                                className="Iconrow"
                            >
                                {val.icon}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
