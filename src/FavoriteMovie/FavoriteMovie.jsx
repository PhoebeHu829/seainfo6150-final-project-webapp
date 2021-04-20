import React from 'react'
import { Link } from "react-router-dom";
import './FavoriteMovie.css';
import { FaTrashAlt, FaRocket, FaRegTired } from "react-icons/fa";

const FavoriteMovie = ({ fav_list, set_fav }) => {
    let movie_list;
    const handleRmove = (event, id) => {
        const update_fav = fav_list.filter((m) => m.id !== id);
        set_fav(update_fav);
    }

    if (fav_list.length > 0) {
        movie_list = fav_list.map((fav) => {
            return <li key={fav.id} className='movieCard'>
                <Link to={"/movie/" + fav.id} >
                    <img src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + fav.poster_path} />
                </Link>
                <div className='basicInfo'>
                    <Link className='title' to={"/movie/" + fav.id} style={{ textDecoration: 'none' }}>{fav.title}</Link>
                    <p>{fav.status}</p>
                    <span onClick={(e) => handleRmove(e, fav.id)}> <FaTrashAlt /> </span>
                </div>
                <div className='overview'><p>{fav.overview}</p></div>
            </li >
        })
    }
    return (
        <>
            {movie_list ?
                <div className='wrapper_fav'>
                    <ul className="context">{movie_list}</ul>
                </div> :
                <div className="empty">
                    <img src={'https://www.chicagotribune.com/resizer/r7Fd_82tBo66BARHU1yGFjw21d8=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/XSC7TYCORRGVFIAPCJABQNLRME.jpg'} />
                    <div className='empty_info'>
                        <p> <FaRegTired /> Seems You Do Not Have Any Favorite Movies.</p>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <h3><FaRocket /> Explore Some</h3>
                        </Link>
                    </div>
                </div>}
        </>
    )
}

export default FavoriteMovie
