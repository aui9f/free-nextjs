
import styles from "../styles/movie.module.css";
import Movie from "../components/movies/movie";


export const URL = `https://nomad-movies.nomadcoders.workers.dev/movies`;

async function movieData(){
    // await new Promise(res=>setTimeout(res, 10000)) 
    return await (await fetch(URL)).json();
}
export default async function  Movies (){
    const movies = await movieData()
    return <div className={styles.container}>
    {/* {JSON.stringify(movies)} */}

    {/* {movies.map(movie=><li  key={movie.id}><Link href={`movies/${movie.id}`}>{movie.title}</Link></li>)} */}
    {movies.map(movie=>
        <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path}></Movie>
    )} 
    </div>
}