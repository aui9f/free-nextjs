import { URL } from "../../movies/page";


const getApiMovie  = async(id: string) => {
    await new Promise(res=>setTimeout(res, 2000))
    
    return await (await fetch(`${URL}/${id}`)).json()
};

export default async function Infor({id}: {id: string}){
    const movies = await getApiMovie(id);
    return <div>
        <h4>Infor</h4>
        <hr />
        {JSON.stringify(movies)}
    </div>
}