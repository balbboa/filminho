import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import Container from '../components/container';

export default function Home() {

  const Foto = '1.jpeg';
  const Foto1 = '2.jpeg';
  const Foto2 = '3.jpeg';
  const Foto3 = '4.jpeg';
  const Foto4 = '5.jpeg';
  const Foto5 = '6.jpeg';

  const [isOpen, setIsOpen] = useState<any>(false)
  const [changeImg, setChangeImg] = useState<any>(0)
  const [foto1, setFoto1] = useState<any>('hidden')
  const [foto2, setFoto2] = useState<any>('hidden')
  const [foto3, setFoto3] = useState<any>('hidden')
  const [foto4, setFoto4] = useState<any>('hidden')
  const [foto5, setFoto5] = useState<any>('hidden')
  const [state, setState] = useState<boolean>()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function contImg() {
    setChangeImg(changeImg + 1)
  }

  const callImg = async (e: any) => {
    e.preventDefault();

    if (e.target.elements.filme.value !== 'o grande lebowski') { await contImg() }
    else {
      openModal()
      setState(true)
      setFoto1('cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
      setFoto2('cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
      setFoto3('cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
      setFoto4('cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
      setFoto5('cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
    }

    if (changeImg == 0) {
      setFoto1('cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
    }
    if (changeImg == 1) {
      setFoto2('cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
    }
    if (changeImg == 2) {
      setFoto3('cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
    }
    if (changeImg == 3) {
      setFoto4('cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
    }
    if (changeImg == 4) {
      setFoto5('cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
    }
    if (changeImg > 5) {
      setState(false)
      openModal()
    }
  }

  async function loadMovies(searchMovie: string){
    const URL = `https://imdb-api.com/en/API/SearchMovie/k_wb1ha0ir/${searchMovie}`
    const res = await fetch(`${URL}`)
    const data = await res.json()

    console.log(data.results)
  }

  loadMovies('big lebowski')

  return (
    <Container title="Filminho">
      <div className="flex flex-col w-full h-full">
        <form className="mt-5 w-1/3 mx-auto" onSubmit={callImg}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="filme" name='filme' className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Digite o filme do dia" required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Xama</button>
          </div>
        </form>
        <div className="mt-5 mx-auto">
          <div className="mb-5 flex flex-wrap justify-center">
            <img
              src={Foto}
              className="cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm"
              alt="..."
            />
            <img
              src={Foto1}
              className={foto1}
              alt="..."
            />
            <img
              src={Foto2}
              className={foto2}
              alt="..."
            />
            <img
              src={Foto3}
              className={foto3}
              alt="..."
            />
            <img
              src={Foto4}
              className={foto4}
              alt="..."
            />
            <img
              src={Foto5}
              className={foto5}
              alt="..."
            />
          </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-bold text-center text-black"
                    >

                      {state == false ? (
                        'Not this time 😓'
                      ) : ('Boa campeão! 😍')
                      }
                    </Dialog.Title>


                    <div className="mt-4 text-center">
                      <Link href="/">
                        <button
                          className="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                        >
                          Cabô
                        </button>
                      </Link>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

      </div>
    </Container>


  )
}

