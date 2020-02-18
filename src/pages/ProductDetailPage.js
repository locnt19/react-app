import React, { useState } from 'react';
import Spinner from '../components/Spinner';

export default function ProductDetailPage() {
  const [count, setCount] = useState(1);
  // console.log('count:', count);
  return (
    <React.Fragment>
      <div className="product-card" style={{ 'width': '300px' }}>
        <div className="product">
          <div className="product-image">
          </div>
          <div className="product-title">
            product.name
      </div>
          <div className="product-id"></div>
          <div className="product-subtitle">
            product.id
        <br />
            product.type
        <br />
            product.manufacturer
        {/* <Link to={`${product.type}/products`}>
          {product.type}
        </Link> */}
            {/* <br/> */}
            {/* <Link to={`${product.manufacturer}/products`}>
          {product.manufacturer}
        </Link> */}
          </div>
          <div className="product-price">product.price
      </div>
          <p>số lượng:</p>
          <Spinner
            count={count}
            setCount={setCount} />
          <button className="btn-cart__add">Thêm vào giỏ</button>
        </div>
      </div>
    </React.Fragment>
  );
}