/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import Container from '../components/Container';
import Wrong from '../public/cancel.png';

export default function Home() {
  useEffect(() => {
    getMovieName();
  }, []);

  let movieSearchBox: null | any = '';
  let searchList: any = '';
  let background: any = '';

  if (typeof document !== 'undefined') {
    movieSearchBox = document.getElementById('idfilme') as HTMLInputElement;
    searchList = document.getElementById('search-list') as HTMLInputElement;
    background = document.getElementById('back') as HTMLInputElement;
  }

  const Foto =
    'https://raw.githubusercontent.com/balbboa/RepoFilminho/main/1.jpeg';
  const Foto1 =
    'https://raw.githubusercontent.com/balbboa/RepoFilminho/main/2.jpeg';
  const Foto2 =
    'https://raw.githubusercontent.com/balbboa/RepoFilminho/main/3.jpeg';
  const Foto3 =
    'https://raw.githubusercontent.com/balbboa/RepoFilminho/main/4.jpeg';
  const Foto4 =
    'https://raw.githubusercontent.com/balbboa/RepoFilminho/main/5.jpeg';
  const Foto5 =
    'https://raw.githubusercontent.com/balbboa/RepoFilminho/main/6.jpeg';

  const [isOpen, setIsOpen] = useState<any>(false);
  const [isOpenWrong, setIsOpenWrong] = useState<any>(false);
  const [changeImg, setChangeImg] = useState<any>(0);
  const [foto, setFoto] = useState<any>();
  const [foto1, setFoto1] = useState<any>('hidden');
  const [foto2, setFoto2] = useState<any>('hidden');
  const [foto3, setFoto3] = useState<any>('hidden');
  const [foto4, setFoto4] = useState<any>('hidden');
  const [foto5, setFoto5] = useState<any>('hidden');
  const [state, setState] = useState<boolean>();
  const [name, setName] = useState<string>();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModalWrong() {
    setIsOpenWrong(false);
  }

  function openModalWrong() {
    setIsOpenWrong(true);
  }

  function contImg() {
    setChangeImg(changeImg + 1);
  }

  async function getMovieName() {
    const URL1 = `https://raw.githubusercontent.com/balbboa/RepoFilminho/main/movie.json`;
    const res = await fetch(`${URL1}`);
    const data = await res.json();
    setName(data.name);
    setFoto(data.frame1)
    setFoto1(data.frame2)
    setFoto2(data.frame3)
    setFoto3(data.frame4)
    setFoto4(data.frame5)
    setFoto5(data.frame6)
  }

  const callImg = async (e: any) => {
    e.preventDefault();

    if (e.target.elements.filme.value !== name) {
      await contImg();
    } else {
      openModal();
      setState(true);
      setFoto1(
        'cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm'
      );
      setFoto2(
        'cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm'
      );
      setFoto3(
        'cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm'
      );
      setFoto4(
        'cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm'
      );
      setFoto5(
        'cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm'
      );
    }

    if (changeImg == 0) {
      sessionStorage.setItem('try1', e.target.elements.filme.value);
      setFoto1(
        'cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm'
      );
    }
    if (changeImg == 1) {
      sessionStorage.setItem('try2', e.target.elements.filme.value);
      setFoto2(
        'cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm'
      );
    }
    if (changeImg == 2) {
      sessionStorage.setItem('try3', e.target.elements.filme.value);
      setFoto3(
        'cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm'
      );
    }
    if (changeImg == 3) {
      sessionStorage.setItem('try4', e.target.elements.filme.value);
      setFoto4(
        'cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm'
      );
    }
    if (changeImg == 4) {
      sessionStorage.setItem('try5', e.target.elements.filme.value);
      setFoto5(
        'cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm'
      );
    }
    if (changeImg == 5) {
      sessionStorage.setItem('try6', e.target.elements.filme.value);
    }
    if (changeImg > 5) {
      setState(false);
      openModal();
    }
  };

  async function loadMovies(searchMovie: string) {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=0c7861c0f9f582ae2a9ca7772ea92061&query=${searchMovie}`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    listMovies(data.results);
  }

  function findMovies() {
    let searchMovies = '';
    if (movieSearchBox) {
      searchMovies = movieSearchBox.value.trim();
      loadMovies(searchMovies);
    }
  }

  function listMovies(movies: string | any[]) {
    searchList.innerHTML = '';
    for (let i = 0; i < movies?.length; i++) {
      let movieListItem = document.createElement('div');
      movieListItem.dataset.id = movies[i].id;
      movieListItem.classList.add('search-list-item');

      movieListItem.innerHTML = `
      <div class='flex justify-between cursor-pointer bg-gray-700 border-gray-600 text-white hover:text-black hover:bg-yellow-100 px-2 py-2'>
          <h3 class='font-extrabold' >${movies[i].title}</h3>
          <p>${movies[i].release_date}</p>
      </div>
      `;
      movieListItem.addEventListener('click', async () => {
        movieSearchBox.value = movies[i].title;
        searchList.classList.add('hidden');
      });
      background.addEventListener('click', async () => {
        searchList.classList.add('hidden');
      });

      searchList.appendChild(movieListItem);
    }
  }
  function removeHide() {
    searchList.classList.remove('hidden')
  }

  function clear() {
    sessionStorage.clear()
  }

  return (
    <Container title='Filminho'>
      <div className='flex flex-col w-full h-full custom' id='back'>
        <div className='fixed top-5 left-5'>
          <button
            onClick={openModalWrong}
            className='flex justify-center items-center w-12 h-12 bg-yellow-600 rounded-full hover:bg-yellow-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none'
          >
            <Image
              src={Wrong}
              width={30}
              height={30}
              layout='fixed'
              alt='...'
            />
          </button>
        </div>
        <form className='mt-5 md:w-1/3 w-96 ml-4 md:mx-auto' onSubmit={callImg}>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'
          >
            Search
          </label>
          <div className='relative'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
              <img src={'search.png'} className='w-4 h-4' alt='...' />
            </div>
            <input
              onClick={removeHide}
              onKeyUp={findMovies}
              type='search'
              id='idfilme'
              name='filme'
              autoComplete='off'
              className='block p-4 pl-10 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-yellow-500 focus:border-yellow-500'
              placeholder='Digite o filme do dia'
              required
            />
            <button
              type='submit'
              className='text-white absolute right-2.5 bottom-2.5 bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'
            >
              Dale
            </button>
          </div>
          <div className='text-sm overflow-y-auto h-2/3 md:w-1/3 w-full absolute' id='search-list'></div>
        </form>

        <div className='mt-5 mx-auto'>
          <div className='mb-5 flex flex-wrap justify-center'>
            <img
              src={Foto}
              className='cursor-pointer md:transition ease-in-out delay-150 md:hover:scale-150 duration-300 m-1 bg-white border border-yellow-500 rounded-lg max-w-sm'
              alt='...'
            />
            <img src={Foto1} className={foto1} alt='...' />
            <img src={Foto2} className={foto2} alt='...' />
            <img src={Foto3} className={foto3} alt='...' />
            <img src={Foto4} className={foto4} alt='...' />
            <img src={Foto5} className={foto5} alt='...' />
          </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as='div' className='relative z-10' onClose={closeModal}>
            <div className='fixed inset-0 overflow-y-auto'>
              <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='z-50 absolute w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-bold text-center text-black'
                    >
                      {state == false ? 'Lute como nunca, perca como sempre ????' : 'Boa campe??o! ????'}
                    </Dialog.Title>

                    <div className='mt-4 text-center'>
                      <Link href='/'>
                        <button onClick={clear} className='inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2'>
                          Voltar
                        </button>
                      </Link>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        <Transition appear show={isOpenWrong} as={Fragment}>
          <Dialog as='div' className='relative z-10' onClose={closeModalWrong}>
            <div className='fixed inset-0 overflow-y-auto'>
              <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='z-50 absolute w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg pb-4 font-bold text-center text-black'
                    >
                      Suas tentativas ????
                    </Dialog.Title>
                    <div className='font-bold text-center text-red-600'>
                      <ul>
                        {/* <li>{sessionStorage?.getItem('try1')}</li>
                        <li>{sessionStorage?.getItem('try2')}</li>
                        <li>{sessionStorage?.getItem('try3')}</li>
                        <li>{sessionStorage?.getItem('try4')}</li>
                        <li>{sessionStorage?.getItem('try5')}</li>
                        <li>{sessionStorage?.getItem('try6')}</li> */}
                      </ul>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </Container>
  );
}
