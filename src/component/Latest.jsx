import { useFetchMovies } from '../hooks/useFetch'


export default function Latest() {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=17725e2bc6fdf0fc90364efc161372e2'

    const {movies} = useFetchMovies(url)

    return (
        <>
         <div className="main-1" style ={{color:'#fff'}}>
            <h3>Latest & Trending</h3>
            <div className="movie-list">
                {movies.map((movie, index) => (

                    <div className='movie' key={movie.id}>
                        <p>{index+1}</p>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}