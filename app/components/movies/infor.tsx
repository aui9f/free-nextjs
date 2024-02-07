import { URL } from "../../movies/page";
import styles from '../../styles/movie.module.css'

const getApiMovie  = async(id: string) => {
    await new Promise(res=>setTimeout(res, 2000))
    
    return await (await fetch(`${URL}/${id}`)).json()
};

export default async function Infor({id}: {id: string}){
    const movie = await getApiMovie(id);
    return <div className={styles.moviebox}>

        <img src={movie.poster_path} alt={movie.title} />
        <div className="text">
            <h4>{movie.title}</h4>
            <p>⭐️{movie.vote_average}/⏱{movie.runtime}</p>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target={"_blank"}>🔗 Homepage</a>
            <ul>
                {movie.genres.map(genre=><li key={genre.id}>{genre.name}</li>)}
            </ul>
        </div>
    </div>
}