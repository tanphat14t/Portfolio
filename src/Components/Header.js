import React from 'react'
import "../App.css";
import { HeaderNavData } from './HeaderNavData'
import { ContentData } from './ContentData';
import Avt from '../Images/avt.jpg';
import Avt2 from '../Images/avt2.jpg';


const pages = [
    '<<', '1', '2', '3', '4', '>>'
]
export const Header = () => {
    return (
        <div className="HeaderNav">
            <div className="Header_nav">
            <h1 className="HeaderHeading">My Portfolio</h1>
            <div className="HeaderNav">
                <span className="HeaderOption">Filter:</span>
                <ul className="HeaderList">
                    {HeaderNavData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="Headerrow"
                            >
                                <div
                                    style={{
                                        paddingRight: 10
                                    }}>{val.icon}</div>
                                <div>{val.title}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="HeaderLine"></div>
            <div className="HeaderBox">
                <div className="HeaderPlace">
                    {ContentData.map((val, key) => {
                        return (
                            <div key={key} className="Content-Box">
                                <img alt="Content" src={val.image} className="Content-Img"></img>
                                <h2 className="Content-title">{val.title}</h2>
                                <h3 className="Content-desc">{val.desc}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="NextPage">
                {pages.map(page => {
                    return (
                        <button className="btnPage">{page}</button>
                    )
                })}
            </div>
            <div className="HeaderImg">
                <img src={Avt} alt="" className="HeaderImg__avt"></img>
                <img src={Avt2} alt="" className="HeaderImg__avt"></img>
            </div>
            </div>
            {/* about */}
        </div>
    )
}
export default Header;
