
import Footer from '../component/Footer.jsx';
import { useContext, useState}  from 'react'
import { MovieContext } from '../context/Context.jsx';
import { useNavigate, useParams } from 'react-router-dom'; 
import Action from '../component/Action.jsx';
import SimilarMovies from '../component/similarMovies.jsx';


export default function MovieDetailPage() {
  const[cast, setCast] =  useState([]);
  const{id} = useParams();
 const { setSelectedMovie } = useContext(MovieContext);  
    const navigate = useNavigate();

    const { selectedMovie } = useContext(MovieContext);
  
   

    const handleNavigation = (movie) => {
        setSelectedMovie(movie);
        navigate(`/detail/${movie.id}`);
    };

    return (<>
      
        <div style={{
            backgroundImage: selectedMovie?.poster_path
                ? `url(https://image.tmdb.org/t/p/w200${selectedMovie.poster_path})`
                : 'url(default-image.jpg)'
        }}>
           
            <SimilarMovies redirectTo={handleNavigation}/>
            <Action/>
            <Footer />
        </div></>
    );
}

