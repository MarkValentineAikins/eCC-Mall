/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import React from 'react'

export default function ProductItem({product}) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className=" rounded shadow "
          />
        </a>
      </Link>
      <div className="card-content">

        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p>{product.category}</p>
        <p className='mb-2'>{product.brand}</p>
        <p>{product.rating}</p>
        <p>GHS{product.price}</p>
        <p>{product.countInStock}</p>
        <button className='primary-button' type="button">
            Add to cart
        </button>
      </div>
    </div> 
  );
}
