import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import NavBar from './components/NavBar';
import Breadcrumb from './components/Breadcrumb';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
// Styles
import './App.css';

// Images


function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Breadcrumb />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            exact
            path={["/products", "/types", "/manufacturers", "/:id/products"]}
            component={ProductsPage} />
          <Route path="/product/:id" exact component={ProductDetailPage} />
          <Route path="/carts" exact component={CartPage} />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route path="*">Page Not Found</Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
