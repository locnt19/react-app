import React from 'react';
import { Link } from 'react-router-dom';


export default function Product(props) {
  const product = props.product;
  return (
    <div className="product-card">
      <div className="product">
        <div className="product-image">
          <Link to={`../product/${product.id}`} />
        </div>
        <div className="product-title">
          <Link to={`../product/${product.id}`}>
            {product.name}
          </Link>
        </div>
        <div className="product-subtitle">
          <Link  to={`../${product.type}/products`}>
            {product.type}
          </Link>
          <br/>
          <Link to={`../${product.manufacturer}/products`}>
            {product.manufacturer}
          </Link>
        </div>
        <div className="product-price">{product.price}</div>
        <button className="btn-cart__add">Thêm vào giỏ</button>
      </div>
    </div>
  )
}