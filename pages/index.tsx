import Link from 'next/link';

export default function Entry() {

  return (
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
            className="w-20 inline-flex align-middle justify-center rounded-full border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            Lesgo!
          </button>
        </Link>
      </div>
    </div>


  )
}

