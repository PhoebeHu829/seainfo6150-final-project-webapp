import React, { useState, useEffect } from 'react'
import DetailedInfo from '../DetailedInfo/DetailedInfo';
import Loading from '../Loading/Loading';

const MovieInfo = ({ movieId, addFav, fav, index_id_map, id_index_map }) => {
    const [movieInfo, setMovieInfo] = useState(null);

    useEffect(() => {
        setMovieInfo(null)
        fetch('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=c1a32c68f363e400355e7be1a602cc66&language=en-US')
            .then(res => res.json())
            .then((data) => {
                //console.log(data);
                setMovieInfo(data);
            })
    }, [movieId])

    return (
        <>
            {movieInfo ?
                <DetailedInfo movie={movieInfo} addFav={addFav}
                    fav={fav} index_id_map={index_id_map}
                    id_index_map={id_index_map} />
                : <Loading />}
        </>
    )
}

export default MovieInfo
