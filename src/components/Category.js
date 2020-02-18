import React from 'react';
import { Link } from 'react-router-dom';

export default function Category(props) {
  const Type = [{
    id: 'type_01',
    name: 'type 1'
  }, {
    id: 'type_02',
    name: 'type 2'
  }, {
    id: 'type_03',
    name: 'type 3'
  }, {
    id: 'type_04',
    name: 'type 4'
  }];
  const Manufacturer = [{
    id: 'manufacturer_01',
    name: 'Manufacturer 1'
  }, {
    id: 'manufacturer_02',
    name: 'Manufacturer 2'
  }, {
    id: 'manufacturer_03',
    name: 'Manufacturer 3'
  }, {
    id: 'manufacturer_04',
    name: 'Manufacturer 4'
  }];
  return (
    <article className="category">
      <section className="cate-row">
        <div className="cate-header">Giá</div>
        <div className="price-arrange">input - input</div>
      </section>
      <section className="cate-row">
        <div className="cate-header">
        <Link to={`/products`}>Tất cả sản phẩm</Link>
        </div>
      </section>
      <section className="cate-row">
        <div className="cate-header">
          <Link to="/types">Loại sản phẩm</Link>
        </div>
        <nav className="cate-nav">
          {
            Type.map(type => (
              <li key={type.id}>
                <Link to={`/${type.id}/products`}>{type.name} (19+)</Link>
              </li>
            ))
          }
        </nav>
      </section>
      <section className="cate-row">
        <div className="cate-header">
          <Link to="/manufacturers">Nhà sản xuất</Link>
        </div>
        <nav className="cate-nav">
          {
            Manufacturer.map(manufacturer => (
              <li key={manufacturer.id}>
                <Link to={`/${manufacturer.id}/products`}>{manufacturer.name} (19+)</Link>
              </li>
            ))
          }
        </nav>
      </section>
    </article>
  )
}