import { Suspense } from "react";
import Infor from "../../components/movies/infor";
import MovieVidoe from "../../components/movies/video";

export default async function Movie ({params:{id}}:{params:{id: string}}){
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