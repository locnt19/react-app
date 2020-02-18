import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav(props) {
  return (
    <nav className="breadcrumb">
      {props.children}
    </nav>
  )
}

function NavItem(props) {
  const item = props.item;
  switch (item) {
    case "":
      return (
        <li><Link to="/">Trang chủ</Link></li>
      );
    case "product":
    case "products":
      return (
        <li><Link to="../products">Sản phẩm</Link></li>
      );
    case "types":
      return (
        <li><Link to="../types">Loại sản phẩm</Link></li>
      );
    case "manufacturers":
      return (
        <li><Link to="../manufacturers">Nhà sản xuất</Link></li>
      );
    case "carts":
      return (
        <li><Link to="../carts">Thông tin giỏ hàng</Link></li>
      );
    case "checkout":
      return (
        <li><Link to="../checkout">Thông tin giao hàng</Link></li>
      );
    default:
      return (
        <li><Link to={`../${item}`}>{item}</Link></li>
      );
  };
}

export default function Breadcrumb() {
  const location = useLocation().pathname.split('/');
  // console.log(useLocation().pathname);
  // console.log(location);

  // Kiểm tra trang chủ
  if ((location[0] === "" && location[1] === "")) {
    console.log('No display breadcrumbs');
    return (<Nav />);
  }
  return (
    <Nav>
      {location.map((item, index) => <NavItem item={item} key={index} />)}
    </Nav>
  )
}