import React, {useContext} from 'react'
import Head from 'next/head';
import Link from 'next/Link';
import {Store} from '../Utils/Store';

export default function Layout({ title, children }) {
  const {state} = useContext(Store);
  const {cart} = state
  
  return (
    <>
      <Head>
        <title>
          {title ? title + 'E-commerce with NextJs' : 'E-commerce with NextJs'}
        </title>
        <meta name="description" content="Ecommerce Website " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between items-center shadow-md px-4">
            <Link href="/">
              <a className="text-lg font-bold tracking-widest">eCC Mall</a>
            </Link>
            <div>
              <Link href="/Cart">
                <a className="p-2 tracking-wide">
                  Cart
                    {cart.cartItem.length > 0 && (
                    <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                      {cart.cartItem.reduce((a, c)=> a + c.quantity, 0)}
                    </span>
                  ) }
                </a>
              </Link>

              <Link href="/login">
                <a className="p-2 tracking-wide">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main> 
        <footer className='flex items-center justify-center h-10 shadow-inner'>
            <p className='text-sm font-light text-gray-500'>Copyright (c) Rabboni 2022</p>
        </footer>
      </div>
    </>
  ); 
}

