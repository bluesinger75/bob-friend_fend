export default async function Youtube(props) {
    const resp = await fetch(process.env.BACKEND_API_URL+`/api/youtube-lists`, {cache: 'no-store'});
    const video = await resp.json();
    console.log("Youtube!!!")
    return(
        <>
            <h2>{video.id}</h2>
            {video.title}
        </>
    )
}