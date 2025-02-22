// import { useState, useEffect } from "react";
// import FetchTopCast from "../hooks/topCastFetch";
// import { Link } from "react-router";

const TopCast =( {cast})=>{
   //  const[cast, setCast] = useState([]);

   //  useEffect(() => {
   //     const getCast = async () => {
   //       const castData = await FetchTopCast(movieId);
   //       setCast(castData.slice(0, 5));
   //     };
     
   //     getCast();
   //   }, []);
   
     return(
     <div>
       <h3>Top Cast</h3>
       <div className="cast-list">
         {cast.length > 0 ? (
           cast.map((actor) => (
             <div key={actor.id} className="cast-member">
               {actor.profile_path ? (
                 <img
                   src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                   alt={actor.name}
                   className="cast-member-img"
                 />
               ) : (
                 <div className="no-image">No Image</div>
               )}
               <div className="member-name">
                 {actor.name}
                 {/* <Link to={`/movie/${movieId}/cast/${actor.id}`}>
                   {actor.name}
                 </Link> */}
               </div>
               <div className="character">{actor.character}</div>
             </div>
           ))
         ) : (
           <p></p>
         )}
       </div>
     </div>
   );
}


export default TopCast;


// export default function Cast({cast}){

//     return( 
//  <> 
//     <h2 className="movie-cast">Top Cast </h2>
//     <div>
//    {cast.map((actor)=>(
//     <div key={actor.id}  className="profiles">
//         <img src={`https://image.tmdb.org/t/p/w200${actor.profiles_path}`} alt={actor.name} />
//         <div className="cast-profile">
//            <h4>{actor.name}</h4>
//            <h6>{actor.character}</h6>
//         </div>
//    ))}
//     </div>
//     </>
// );
// }