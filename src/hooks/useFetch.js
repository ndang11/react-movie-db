import { useEffect, useState } from "react"
import { fetchMovies } from "../Service/API"

export const useFetchMovies = (url) => {
      const [movies, setMovies] = useState([])
        
        const getMovies = async() => {
            const response = await fetchMovies(url)
            console.log(response)
            if (response) {
                setMovies(response)
            }
    }
        
        useEffect(()=>{
            getMovies(url)
        },[url])

        return { movies }
    
}

export default useFetchMovies