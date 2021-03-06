/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import Container from "../components/Container";
import Logo from "../public/logo.png";
import Movie from "../public/movie.png";
import Question from "../public/question.png";

export default function Entry() {

  const [modal, setModal] = useState<any>(false);

  function closeModal() {
    setModal(false);
  }

  function openModal() {
    setModal(true);
  }

  return (
    <Container title="Filminho">
      <div className="flex flex-col w-full h-full">
        <div className="fixed top-5 left-5">
          <button
            onClick={openModal}
            className="p-0 w-12 h-12 bg-yellow-600 rounded-full hover:bg-yellow-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          >
            <Image
              src={Question}
              width={30}
              height={30}
              layout="fixed"
              alt="..."
            />
          </button>
        </div>
        <div className="flex flex-col align-middle items-center justify-center my-20 mx-auto">
          <Image
            src={Movie}
            width={300}
            height={300}
            layout="fixed"
            alt="..."
          />
          <Image src={Logo} layout="fixed" width={250} height={150} alt="..." />

          <a href="/home">
            <button className="text-white font-medium p-0 w-20 h-20 bg-yellow-600 rounded-full hover:bg-yellow-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
              Go!
            </button>
          </a>
        </div>
      </div>

      <Transition appear show={modal} as={Fragment}>
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
                <Dialog.Panel className="z-50 absolute w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-lg mb-5 font-bold text-black">
                    <h3>Filminho Project</h3>
                  </Dialog.Title>
                  <p id="pt" className="text-ellipsis py-5">
                    ?? um game de advinha????o para filmes, voc?? tem 6 tentativas
                    para tentar acertar o filme correto, para cada erro um frame
                    ?? adicionado como dica. Todo dia teremos um filme novo,
                    tente acertar se for capaz ????
                  </p>
           
                  {/* <a className="border-orange-900 bg-orange-200 border rounded-md p-2" href="https://www.buymeacoffee.com/balbboa"> Buy me a coffee! ???</a> */}
                  <div className="mt-4 text-center">
                    <button
                      onClick={closeModal}
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    >
                      Voltar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Container>
  );
}
