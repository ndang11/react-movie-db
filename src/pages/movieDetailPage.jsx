import Footer from "../component/Footer.jsx";
import { useContext, useState } from "react";
import { MovieContext } from "../context/Context.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Popular from "../component/Popular.jsx";
import SimilarMovies from "../component/similarMovies.jsx";
import { HeroSectionDetail } from "../component/HeroSectionDetail.jsx";
import Drama from "../component/Drama.jsx";

export default function MovieDetailPage() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const { setSelectedMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const { selectedMovie } = useContext(MovieContext);

  const handleNavigation = (movie) => {
    setSelectedMovie(movie);
    navigate(`/detail/${movie.id}`);
  };

  return (
    <>
      <HeroSectionDetail />
      <div
        style={{
          backgroundImage: selectedMovie?.poster_path
            ? `url(https://image.tmdb.org/t/p/w200${selectedMovie.poster_path})`
            : "url(default-image.jpg)",
        }}
      >
        <Drama/>
        <Popular redirectTo={handleNavigation} />
        <Footer />
      </div>
    </>
  );
}
