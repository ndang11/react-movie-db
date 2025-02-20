import { useFetchMovies } from '../hooks/useFetch'

export default function Popular() {
      const url = 'https://api.themoviedb.org/3/movie/popular?api_key=17725e2bc6fdf0fc90364efc161372e2&page=2'
   
       const {movies} = useFetchMovies(url)
   
       return (
           <>
            <div className="popular" style ={{color:'#fff'}}>
               <h3>Latest & Trending</h3>
               <div className="popular-movie">
                   {movies.map((movie) => (
                       <div className='movie-pop' key={movie.id}>
                           <p>{movie.title}</p>
                           <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                       </div>
                   ))}
               </div>
           </div>
           </>
       )
}