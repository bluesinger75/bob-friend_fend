export default async function youtube() {
    const video = await fetch(process.env.BACKEND_API_URL+'/api/youtube-lists', { cache: 'no-store' });
    const videos = await video.json();
    return(
        <ol>
          {videos.map((video)=>{
                return (
                    <div key={video.etag}>
                        <img src={video.snippet.thumbnails.standard.url}></img>
                        <li>{video.snippet.title}</li>
                    </div>
                )
              })}
        </ol>
        
    )
}
