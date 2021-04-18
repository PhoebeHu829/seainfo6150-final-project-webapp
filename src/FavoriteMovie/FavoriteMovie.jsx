import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './FavoriteMovie.css';

const FavoriteMovie = ({ fav_list, set_fav }) => {
    let movie_list;
    const handleRmove = (event, id) => {
        //console.log(event.target, id);
        const update_fav = fav_list.filter((m) => m.id != id);
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
                    <button onClick={(e) => handleRmove(e, fav.id)}> Remove from Favorite</button>
                </div>
                <div className='overview'><p>{fav.overview}</p></div>
            </li >
        })
    }
    return (
        <>
            {movie_list ?
                <ul className="context">{movie_list}</ul> :
                'loading'}
        </>
    )
}

export default FavoriteMovie
