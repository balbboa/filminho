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
      setFoto1('cursor-pointer md:transition-all transition ease-in-out delay-150 hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
      setFoto2('cursor-pointer md:transition-all transition ease-in-out delay-150 hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
      setFoto3('cursor-pointer md:transition-all transition ease-in-out delay-150 hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
      setFoto4('cursor-pointer md:transition-all transition ease-in-out delay-150 hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
      setFoto5('cursor-pointer md:transition-all transition ease-in-out delay-150 hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
    }

    if (changeImg == 0) {
      setFoto1('cursor-pointer md:transition-all transition ease-in-out delay-150 hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
    }
    if (changeImg == 1) {
      setFoto2('cursor-pointer md:transition-all transition ease-in-out delay-150 hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
    }
    if (changeImg == 2) {
      setFoto3('cursor-pointer md:transition-all transition ease-in-out delay-150 hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
    }
    if (changeImg == 3) {
      setFoto4('cursor-pointer md:transition-all transition ease-in-out delay-150 hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
    }
    if (changeImg == 4) {
      setFoto5('cursor-pointer md:transition-all transition ease-in-out delay-150 hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm')
    }
    if (changeImg > 5) {
      setState(false)
      openModal()
    }

  }

  return (
    <Container title="Filminho">
    <div className="flex flex-col w-full h-full">
      <form className="mt-5 mx-auto" onSubmit={callImg}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-yellow-100 sm:p-6">
            <div className="flex flex-row align-middle justify-center">
              <div className="col-span-10">
                <label htmlFor="first-name" className="block text-sm font-medium text-black">
                  Filminho:
                </label>
                <input
                  type="text"
                  name="filme"
                  id="filme"
                  className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="px-4 pb-3 text-center bg-yellow-100">
            <button type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Xama
            </button>
          </div>
        </div>
      </form>
      <div className="mt-5 mx-auto">
        <div className="mb-5 flex flex-wrap justify-center">
          <img
            src={Foto}
            className="cursor-pointer md:transition-all transition ease-in-out delay-150 hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm"
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

