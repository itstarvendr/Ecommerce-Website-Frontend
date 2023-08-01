import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllProductsContainer from './containers/AllProductsContainer';
import ProductDetailContainer from './containers/ProductDetailContainer';
import CreateProductContainer from './containers/CreateProductContainer';
import CartContainer from './containers/CartContainer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={AllProductsContainer} />
          <Route path="/product/:id" component={ProductDetailContainer} />
          <Route path="/create" component={CreateProductContainer} />
          <Route path="/cart" component={CartContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
