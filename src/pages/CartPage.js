import React, { useState } from 'react';
import Spinner from '../components/Spinner';

function CartBox(props) {
  const [count, setCount] = useState(1);
  return (
    <div className="cart-box">
      <div className="cart-image">image box</div>
      <div className="cart-center">
        <p className="type">product type</p>
        <p className="name">product name Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p className="manufacturer">product manufacturer</p>
        <button className="btn-cart__delete">Xóa</button>
      </div>
      <div className="cart-spinner">
        <p className="discount">
          <span className="old-price">1 500 000</span>
          <span>&#124;</span>
          <span className="rate">-30%</span>
        </p>
        <p className="price">999,000đ</p>
        <p className="count">x {count}</p>
        <Spinner
          count={count}
          setCount={setCount}
        />
      </div>
    </div>
  )
}

export default function CartPage(props) {
  const cartCount = 3;

  if (cartCount === 0) return (
    <h1>Gio hang dang rong</h1>
  )
  return (
    <section className="cart-page">
      <div className="left">
        <CartBox />
        <CartBox />
        <CartBox />
        <CartBox />
        <CartBox />
      </div>
      <div className="right">
        <div className="confirm-box">
          <div className="box">
            <span>Tạm tính:</span>
            <strong className="float-right">999.000đ</strong>
          </div>
          {/* <div className="line"></div> */}
          <div className="box">
            <div className="discount-code">
              <input type="text" placeholder="Nhập mã giảm giá" />
              <button>Sử dụng</button>
            </div>
          </div>
          <div className="line"></div>
          <div className="box">
            <span>Tổng cộng:</span>
            <strong className="float-right">999.000.000</strong>
          </div>
        </div>
      </div>
    </section>
  );
}