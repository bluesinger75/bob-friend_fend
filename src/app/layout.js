import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Bob Friend',
  description: 'Generated by Million Smile',
}

export default async function RootLayout({ children }) {

  return (
    <html>
      <body>
        <div className='navbar'>

		<nav className="flex sm:justify-center space-x-4">
			{[
				['인기 급상승', `/youtube/trending`],
				['방송', `/youtube/film`],
				['음악', `/youtube/music`],
				['팻 & 동물', `/youtube/animals`],
				['스포츠', `/youtube/sports`],
				['게임', `/youtube/gaming`],
				['코메디', `/youtube/comedy`],
				['방송', `/youtube/entertainment`],
				['뉴스', `/youtube/news`],
				['과학 & 테크', `/youtube/tech`],
			].map(([title, url]) => (
				<Link href={url} className="rounded-lg 
											px-3 py-2 text-slate-700 font-medium 
											hover:bg-indigo-100 hover:text-slate-900">{title}</Link>
			))}
			</nav>
			
        </div>
        {children}
      </body>
    </html>
  )
}
