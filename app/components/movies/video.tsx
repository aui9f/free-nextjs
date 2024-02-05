import { URL } from "../../movies/page";
const getVideos = async (id: string) => {
    await new Promise(res=>setTimeout(res, 5000));
    // return await (await fetch(`${URL}/${id}/videos`)).json();
    throw 'ERROR MESSAGE..'
}
export default async function MovieVidoe({id}: {id: string}){
    const video = await getVideos(id);
    
    return <div>
        <h4>video</h4>
        <hr />
        {JSON.stringify(video)}
    </div>
}