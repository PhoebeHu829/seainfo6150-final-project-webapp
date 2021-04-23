import React from 'react'
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error_page">
            <Link to='/'>
                <img src={'https://miro.medium.com/proxy/0*Vio_q5nMzzD4DkWO.JPG'} alt="error" />
            </Link>
        </div>
    )
}

export default Error
