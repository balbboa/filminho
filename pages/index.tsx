import Link from 'next/link';
import Container from '../components/Container';

export default function Entry() {

  return (
    <Container title="Filminho">
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col align-middle items-center justify-center my-28 mx-auto">
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
            className="text-white font-medium p-0 w-16 h-16 bg-yellow-600 rounded-full hover:bg-yellow-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          >
            Lesgo!
          </button>
        </Link>
      </div>
    </div>
    </Container>

  )
}

