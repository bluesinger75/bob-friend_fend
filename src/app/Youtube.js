export default async function youtube() {
    const video = await fetch(process.env.BACKEND_API_URL+'/api/youtube-lists', { cache: 'no-store' });
    const videos = await video.json();
    return(
        <div>asfddsafdsafs</div>
    )
}