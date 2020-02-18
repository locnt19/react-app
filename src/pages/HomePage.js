import React from 'react';
import Product from '../components/Product';

export default function HomePage(props) {
  const a = {
    id: '01',
    name: 'san pham 1',
    price: '999 000',
    manufacturer: 'vietnam',
    type: 'loai 1',
    stocked: 'true',
    images: 'danh sach hinh anh'
  }
  return (
    <React.Fragment>
      <h1>Trang chủ</h1>
      <div className="title">Sản phẩm bán chạy nhất</div>
      <div className="product-wrapper">
        <Product product={a} />
        <Product product={a} />
        <Product product={a} />
        <Product product={a} />
      </div>
    </React.Fragment>
  )
}