

export const fetchMovies = async(url) => {
  try {
    const response = await fetch(url)

    if (!response.ok){
      throw new Error('error fetching url')
    }

    const data = await response.json()
    console.log(data)
    return data.results 
  }

  catch(error) {
    console.error('Error fetching data', error)
  }
}
