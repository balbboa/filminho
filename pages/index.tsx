import Link from 'next/link';
import Container from '../components/container';

export default function Entry() {

  return (
    <Container title="Filminho">
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col align-middle items-center justify-center my-40 mx-auto">
        <img
          src="movie.png"
          className='w-64'
          alt="..."
        />

        <img
          src="logo.png"
          className='w-64'
          alt="..."
        />

        <Link href="/home">
          <button
            className="w-20 inline-flex align-middle justify-center rounded-full border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
          >
            Lesgo!
          </button>
        </Link>
      </div>
    </div>
    </Container>

  )
}

