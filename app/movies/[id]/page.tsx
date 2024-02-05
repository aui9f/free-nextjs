

// const getMovie  = async(id: string) => await (await fetch(`${URL}/${id}`)).json();
// const getVideos = async (id: string) => await (await fetch(`${URL}/${id}/videos`)).json();

import { Suspense } from "react";
import Infor from "../../components/movies/infor";
import MovieVidoe from "../../components/movies/video";



export default async function Movie ({params:{id}}:{params:{id: string}}){
    // const [info, video] = await Promise.all([getMovie(id), getVideos(id)]);
    return <>
        <p>Movie</p>
        <Suspense fallback={<p>Movie Video Data Loading..</p>}>
            <MovieVidoe id={id}/>
        </Suspense>

        <Suspense fallback={<p>Movie Infor Data Loading..</p>}>
            <Infor id={id}/>
        </Suspense>
        
        
        
    </>
}