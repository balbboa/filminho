/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Container from '../components/Container';

export default function Entry() {

  return (
    <Container title="Filminho">
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col align-middle items-center justify-center my-20 mx-auto">
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

        <a href="/home">
          <button 
            className="text-white font-medium p-0 w-20 h-20 bg-yellow-600 rounded-full hover:bg-yellow-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          >
            Lesgo!
          </button>
        </a>
      </div>
    </div>
    </Container>

  )
}

