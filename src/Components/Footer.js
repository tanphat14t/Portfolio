import React from 'react'



const blogs = [
    {
        image: 'https://www.w3schools.com/w3images/workshop.jpg',
        title: 'Lorem',
        desc: 'Sed mattis nunc'
    },
    {
        image: 'https://www.w3schools.com/w3images/gondol.jpg',
        title: 'Lorem',
        desc: 'Sed mattis nunc'
    },
]

const tags = [
    'Travel',
    'New York',
    'London',
    'IKEA',
    'NORWAY',
    'DIY',
    'Ideals',
    'baby',
    'Family',
    'News',
    'Clothing',
    'Shopping',
    'Sports',
    'Games'
]
export const Footer = () => {
    return (
        <div className="Footer">
            <div className="ContactBox">
                <div className="HeaderPlace">
                    <div className="Footer-Box">
                        <h3 className="FooterHeading">Footer</h3>
                        <p className="FooterContent">Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        <div className="FooterLink">Powered by <button>w3.css</button> </div>
                    </div>
                    <div className="Footer-Box">
                        <h3 className="FooterHeading">BLOG POSTS</h3>
                        <ul>
                            {blogs.map((blog) => {
                                return (
                                    <li>
                                        <img alt="" src={blog.image} style={{
                                            width: 50,
                                            marginRight: 20
                                        }}></img>
                                        <div className="FooterRow">
                                            <div>{blog.title}</div>
                                            <div>{blog.desc}</div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="Footer-Box">
                        <h3 className="FooterHeading">POPULAR TAGS</h3>
                        <p>{tags.map(tag =>{
                            return(
                                <span className="Tags">{tag}</span>
                            )
                        })}</p>    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer