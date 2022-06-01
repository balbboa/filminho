import Image from 'next/image';

export default function Home() {

  const handleSubmit = () => {
    console.log('1asdsad')
  }

  return (
    <div className="flex flex-col">
      <div className="my-40 mx-auto">
        
        <div>
          <Image
            src={Image}
            alt="Filme"
            width={300}
            height={300}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="flex flex-row align-middle justify-center">
                <div className="col-span-10">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    Filminho:
                  </label>
                  <input
                    type="text"
                    name="numero"
                    id="numero"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 text-center bg-gray-50">
              <button
                className="mr-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Pesquisar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

