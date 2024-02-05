import Link from "next/link";

export const URL = `https://nomad-movies.nomadcoders.workers.dev/movies`;

async function movieData(){
    // await new Promise(res=>setTimeout(res, 10000)) 
    return await (await fetch(URL)).json();
}
export default async function  Movies (){
    const movies = await movieData()
    return <ul>
    {/* {JSON.stringify(movies)} */}
    
    {movies.map(movie=><li  key={movie.id}><Link href={`movies/${movie.id}`}>{movie.title}</Link></li>)}
    </ul>
}