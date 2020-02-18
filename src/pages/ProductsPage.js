import React from 'react';
import Category from '../components/Category';
import Product from '../components/Product';

export default function ProductsPage(props) {
  const a = {
    id: 'id 01',
    name: 'name: san pham 1',
    price: 'price 999 000',
    manufacturer: 'manufacturer vietnam',
    type: ' typeloai 1',
    stocked: 'stocked true',
    images: ' imagesdanh sach hinh anh'
  }
  return (
    <section className="container">
      <div className="container-left">
        <Category />
      </div>
      <div className="container-right">
        <div className="product-wrapper">
          <Product product={a} />
          <Product product={a} />
          <Product product={a} />
          <Product product={a} />
        </div>
      </div>
    </section>
  )
}