import Link from "next/link";

export default async function Youtube(props) {
    // TODO - 채널 리스트는 쿼리에서 가져 오도록 수정 해야한다.
    const channelIdList = {
        'trending': 0,
        'film': 1,
        'music': 10,
        'animals': 15,
        'sports': 17,
        'gaming': 20,
        'comedy': 23,
        'entertainment': 24,
        'news': 25,
        'tech': 26
    }
    const channelId = channelIdList[props.params.id]
    const video = await fetch(process.env.BACKEND_API_URL+`/api/youtube-lists/${channelId}`, { cache: 'no-store' });
    const videos = await video.json();
    return(
        <div>
          {videos.map((video)=>{
                return (
                    <div className="content" key={video.etag}>
                        <Link href={`https://www.youtube.com/watch?v=${video.id}`}><img className="thumbnail"src={video.snippet.thumbnails.medium.url}></img></Link>
                        <div className="details">
                            <div className="video-title-link">{video.snippet.title}</div>
                            <div className="channelTitle">{video.snippet.channelTitle}</div>
                            
                        </div>
                    </div>
                )
              })}
        </div>
        
    )
}
