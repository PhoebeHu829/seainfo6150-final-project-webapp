import React, { useState, useEffect } from 'react'
import DetailedInfo from '../DetailedInfo/DetailedInfo';

const MovieInfo = (props) => {
    console.log(props);
    const { movieId } = props
    const [movieInfo, fetchMovie] = useState();
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=c1a32c68f363e400355e7be1a602cc66&language=en-US')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                fetchMovie(data);

            })
    }, [])

    return (
        <>
            {movieInfo ? <DetailedInfo movie={movieInfo} /> : 'loading'}
        </>
    )
}

export default MovieInfo
