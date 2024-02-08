import { Suspense } from "react";
import Infor, { getApiMovie } from "../../components/movies/infor";
import MovieVidoe from "../../components/movies/video";

interface IParams{
    params: {
        id: string
    }
}

// 메타데이터 객체 및 generateMetadata 옵션
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getApiMovie(id);
  return {
    title: movie.title,
  };
}

export default async function Movie ({params:{id}}:IParams){
    
    return <>
        <p>Movie</p>
         <Suspense fallback={<p>Movie Infor Data Loading..</p>}>
            <Infor id={id}/>
        </Suspense>
        
        <Suspense fallback={<p>Movie Video Data Loading..</p>}>
            <MovieVidoe id={id}/>
        </Suspense>

       
    </>
}