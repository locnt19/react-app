import React from 'react';
import { NavLink } from 'react-router-dom';
import Brand from './Brand';

export default function NavBar(props) {
  return (
    <section className="navbar">
      <NavLink to="/">
        <Brand />
      </NavLink>
      <ul className="navbar-nav">
        <li className="navbar-link">
          <NavLink to="/" exact activeClassName="active">Trang chủ</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/products" activeClassName="active">Sản phẩm</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/carts" activeClassName="">Giỏ hàng (9+)</NavLink>
        </li>
      </ul>
    </section>
  )
}