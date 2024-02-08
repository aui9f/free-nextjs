
import { API_URL } from '../../constants';
import styles from '../../styles/movie.module.css'
const getVideos = async (id: string) => {
    // await new Promise(res=>setTimeout(res, 5000));
    return await (await fetch(`${API_URL}/${id}/videos`)).json();
    // throw 'ERROR MESSAGE..'
}
export default async function MovieVidoe({id}: {id: string}){
    const videos = await getVideos(id);
    
    return <div className={styles.videobox}>
        <hr/>
        <ul>
            {videos.map(video=><li key={video.id}>
                <iframe src={`https://www.youtube.com/embed/${video.key}?si=${video.id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </li>)}
            <li></li>
        </ul>
        
    </div>
}