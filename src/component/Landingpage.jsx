import React from 'react'
import logo from '../assets/images/logo.png'
import home from '../assets/images/home.png'
import applee from '../assets/images/applee.png'


const Landingpage = () => {
  return (
    <>
    <div className='overflow-hidden'>
        

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} class="h-20" alt="Flowbite Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a id='priv' href="#" class="block  text-black-300 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-black-200" aria-current="page">Privacy-Policy</a>
        </li>
        <li>
          <a id='priv' href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</a>
        </li>
        <li>
          <a id='pol' href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sigin up</a>
        </li>
        <li>
          <a id='pol' href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      <div className='container p-10 mx-auto'>
        <div className='flex'>
          <div>
            <div className='flex mt-20'>
            <button className=' order m-2 text-orange-400 p-2 w-40 bg-orange-100'>Quality Foods</button>
            <button className='order  m-2 text-orange-400 p-2 w-40 bg-orange-100'>Quality Delivery</button>
            <button className='order  m-2 text-orange-400 p-2 w-40 bg-orange-100'>Quality Customer Service</button>
            </div>
            <p className='mt-5'>
          <h1><span className='ease'>Easy</span> <span className='acces'>access</span> <span className='ease'>to your favourite</span> <span className='acces'>foods</span> <span className='ease'>and</span> <span className='acces'>restaurants</span></h1>
          </p>
          <p>Your favourite restaurants at your fingertips. Make an order or two to get the meal delivery service worthy of royalty.</p>
          <div className='mt-20'>
            <p className='text-black-300 text-xl font-bold'>Download app now to get started.</p>
            <div id='download' className='border-2 bg-black text-white'>
              <div><a id='app' className='' href="">Get it on </a>
              <a id='app2'  href="">App Store</a></div>
             <a href=""><img src={applee} width={60} alt="" /><span></span></a>
            </div>
          </div>
          </div>
        <img className='-ms-40' src={home} width={800} alt="" />
        </div>
      </div>

    </div>
    </>
  )
}

export default Landingpage