import { URL } from "../page";

const getMovie  = async(id: string) => await (await fetch(`${URL}/${id}`)).json();

const getVideos = async (id: string) => await (await fetch(`${URL}/${id}/videos`)).json();


export default async function Movie ({params:{id}}:{params:{id: string}}){
    console.log('start fetching')
    const [info, video] = await Promise.all([getMovie(id), getVideos(id)]);
    console.log('end fetching')
    return <><p>Movie</p></>
}