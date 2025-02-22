import Latest from "../component/Latest"
import Popular from '../component/Popular'
import Action from '../component/Action'
import Drama from '../component/Drama'
import Comedy from '../component/Comedy'
// import Header from '../component/Header'
import Footer from "../component/Footer"
import { useContext } from "react"
import { MovieContext } from "../context/Context.jsx"
import { useNavigate } from "react-router"




export default function Home() {
    const { setSelectedMovie } = useContext(MovieContext)
    const navigate = useNavigate()

    const handleNavigation = (movie) => {
        setSelectedMovie(movie)
        navigate(`/movie/${movie.id}`)
    }
    return (
        <div>
            {/* <Header /> */}
            <Latest redirectTo={handleNavigation} />
            <Popular redirectTo={handleNavigation} />
            <Action redirectTo={handleNavigation} />
            <Drama redirectTo={handleNavigation} />
            <Comedy redirectTo={handleNavigation} />
            <Footer />
        </div>
    )
}
