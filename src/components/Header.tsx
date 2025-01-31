import Link from 'next/link'
import Image from 'next/image'


export function Header() {
    return (
        <header className='bg-white text-shite fixed w-full h-28 p-2 border-b border-gray-200 top-0 z-20 flex justify-between items-center'>
                <Link href="/"title="home">
                    <Image 
                        className="rounded-xl"
                        src="/images/likewatt.png"
                        width={200}
                        height={200}
                        sizes="200px"
                        alt="Page not found"
                        priority={true}
                        title="Page Not Found"
                    />
                </Link>
        </header>
    ) 
}