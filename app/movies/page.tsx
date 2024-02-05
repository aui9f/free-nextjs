const URL = `https://nomad-movies.nomadcoders.workers.dev/movies`
async function movieData(){
    // await new Promise(res=>setTimeout(res, 10000)) 
    return await (await fetch(URL)).json();
}
export default async function  Movies (){
    const movies = await movieData()
    return <div>
    {JSON.stringify(movies)}
    </div>
}