import React from 'react'
import "../App.css";


const Bacsic = [
    'Web Design',
    'Photography',
    '1GB Storage',
    'Mail Support',
    '$10/month'
]
const Pro = [
    'Web Design',
    'Photography',
    '50GB Storage',
    'Endless Support',
    '$25/month'
]
const Premium = [
    'Web Design',
    'Photography',
    'Unlimited Storage',
    'Endless Support',
    '$25/month'
]
export const About = () => {
    return (
        <div className="About">
        <div className="About-heading">
            <h2 className="About-heading__title">About Me</h2>
            <h3 className="About-heading__desc">Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</h3>
        </div>
        <div className="About-skill">
            <h2 className="About-skill__title">Technical Skills</h2>
            <div className="About-skill__rare">
                <h2 className="About-skill__rare--title">Photography</h2>
                <div className="About-skill__process">
                    <div className="About-skill__process-percent"></div>
                    <span className="About-skill__process-title">95%</span>
                </div>
            </div>
            <div className="About-skill__rare">
                <h2 className="About-skill__rare--title">Web Design</h2>
                <div className="About-skill__process">
                    <div className="About-skill__process-percent per85"></div>
                    <span className="About-skill__process-title ">85%</span>
                </div>
            </div>
            <div className="About-skill__rare">
                <h2 className="About-skill__rare--title">PhotoShop</h2>
                <div className="About-skill__process">
                    <div className="About-skill__process-percent per80"></div>
                    <span className="About-skill__process-title ">80%</span>
                </div>
            </div>
            <button className="About-btn">Download Resume</button>
        </div>
        <div className="About-package">
            <h2 className="About-skill__title">How much I charge</h2>
            <div className="HeaderPlace">
                <div className="Content-Box box-opacity">
                    <h2 className="About-package__title">Basic</h2>
                    <ul className="About-package__list">
                        {Bacsic.map((val) => {
                            return (
                                <li className="About-package__row">{val}</li>
                            )
                        })}
                    </ul>
                    <div className="btn-background">
                        <button className="About-package__btn">Sign up</button>
                    </div>
                </div>
                <div className="Content-Box box-opacity">
                    <h2 className="About-package__title" style={{
                        backgroundColor: '#009688'
                    }}>Pro</h2>
                    <ul className="About-package__list">
                        {Pro.map((val) => {
                            return (
                                <li className="About-package__row">{val}</li>
                            )
                        })}
                    </ul>
                    <div className="btn-background">
                        <button className="About-package__btn">Sign up</button>
                    </div>
                </div>
                <div className="Content-Box box-opacity">
                    <h2 className="About-package__title">Premium</h2>
                    <ul className="About-package__list">
                        {Premium.map((val) => {
                            return (
                                <li className="About-package__row">{val}</li>
                            )
                        })}
                    </ul>
                    <div className="btn-background">
                        <button className="About-package__btn">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About
