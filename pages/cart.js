import React, { useContext } from 'react'
import Layout from '../components/Layout';
import { Store } from '../Utils/Store';
import Link from 'next/Link';
import Image from 'next/Image';
import { XCirclesIcon } from "@heroicons/react/outline"; 

export default function CartScreen() {
    const { state, dispatch } = useContext(Store);
    const {
        cart:{cartItems}, 
    } = state;

    const removeItemHandler = (item) => {
        dispatch({ type: "CART_REMOVE_ITEM", payload: item });
    }
    
  return (
      <Layout title="Shopping Cart">
          <h1 className='mb-4 text-xl'>Shopping Cart</h1>

          {
              cartItems.length === 0 ?
                  (<div>
                      cart is empty. <Link href ="/ ">Go Shopping</Link>
                  </div>);
          (
          <div className='grid md:grid-cols-4 md:gap-5'>
              <div className='overflow-x-auto md:col-span-3 '>
                  <table className='min-w-full'> 
                      <thead className='border-b'>
                          <tr>
                              <th className='px-5 text-left'> Item </th>
                              <th className='p-5 text-right'> Quantity </th>
                              <th className='p-5 text-left'> Price </th>
                               <th className='p-5'> Action </th>
                          </tr>
                          
                      </thead>
                      <tbody className='p-5 text-right'>
                          {cartItems.map((item) => (
                              <tr key={item.slug} className="border-b">
                                  <td>
                                      <Link href={`/product/GHS{item.slug}`}>
                                          <a className='flex items-center'>
                                              <Image
                                                  src={item.image}
                                                  alt={item.name}
                                                  width={50}
                                                  heigth={50}> 
                                              </Image>
                                              &nbsp;
                                              {item.name} 
                                          </a>
                                      </Link>
                                  </td>
                                  <td className='p-5 text-right'>
                                      {item.quantity}
                                  </td>
                                  <td className='p-5 text-right'>
                                      GHS{item.price}
                                  </td>
                                  <td className='p-5 text-center'>
                                      <button onClick={() => removeItemHandler(item)}>
                                          <XCirclesIcon className="w-5 h-5 ">
                                              
                                          </XCirclesIcon>
                                      </button>
                                  </td>
                              </tr>
                          )) }
                      </tbody>
                      
                  </table>
                  
              </div>
            </div>
          )
          }
      </Layout>
  )
}
