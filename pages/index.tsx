import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';

export default function Home() {

  const Foto1 = '1.jpeg';
  const Foto2 = '2.jpeg';
  const Foto3 = '3.jpeg';
  const Foto4 = '4.jpeg';
  const Foto5 = '5.jpeg';
  const Foto6 = '6.jpeg';

  const [isOpen, setIsOpen] = useState<any>(false)
  const [changeImg, setChangeImg] = useState<any>(0)
  const [foto, setFoto] = useState<any>(Foto1)

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
    else { openModal() }

    if (changeImg == 1) {
      setFoto(Foto2)
    }
    if (changeImg == 2) {
      setFoto(Foto3)
    }
    if (changeImg == 3) {
      setFoto(Foto4)
    }
    if (changeImg == 4) {
      setFoto(Foto5)
    }
    if (changeImg == 5) {
      setFoto(Foto6)
    }
  }

  return (
    <div className="flex flex-col">
      <div className="my-20 mx-auto">
        <div className="mb-5 flex flex-wrap justify-center">
          <img
            src={foto}
            className="p-1 bg-white border rounded-lg max-w-sm"
            alt="..."
          />
        </div>
        <form onSubmit={callImg}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="flex flex-row align-middle justify-center">
                <div className="col-span-10">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
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
            <div className="px-4 pb-3 text-center bg-gray-50">
              <button type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Xama
              </button>
            </div>
          </div>
        </form>

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
                      Boa campeão!
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
    </div>


  )
}

