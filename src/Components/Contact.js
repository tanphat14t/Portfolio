import React from 'react'
import "../App.css";
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const contacts = [
    {
        icon: <MailIcon />,
        title: 'email@gmail.com'
    },
    {
        icon: <LocationOnIcon />,
        title: 'Chicago, US'
    },
    {
        icon: <CallIcon />,
        title: '512312311'
    },
]

export const Contact = () => {
    return (
        <div id="contact" className="contact">
            <div className="ContactBox">
                <div className="Contact-heading">
                    <h2 className="Contact-heading__title">Contact Me</h2>
                    <ul className="ContactList">
                        {contacts.map(contact => {
                            return (
                                <li className="ContactRow">
                                    <div
                                        className="ContactIcon"
                                    >{contact.icon}</div>
                                    <div className="ContactIcon">{contact.title}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="ContactLabel">
                    <div className="ContactLabelList">
                        <label className="ContactLabelName">Name</label>
                        <input type="text" className="ContactLabelInput"></input>
                    </div>
                    <div className="ContactLabelList">
                        <label className="ContactLabelName">Email</label>
                        <input type="text" className="ContactLabelInput"></input>
                    </div>
                    <div className="ContactLabelList">
                        <label className="ContactLabelName">Message</label>
                        <input type="text" className="ContactLabelInput"></input>
                    </div>
                    <div className="ContactLabelBtn">
                        <div
                            style={{
                                marginRight: 10
                            }}><SendIcon /></div>
                        <div>Send Message</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact
