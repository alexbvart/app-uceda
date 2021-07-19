import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'
import Product from './pages/Product'
import Brand from './pages/Brand'
import Client from './pages/Client'
import Navigation from './components/Navigation';
import Employees from './pages/Employees';
import Workstation from './pages/Workstation';
import Sale from './pages/Sale';
import ProductOutlets from './pages/ProductOutlets'
import Layout from './pages/Layout';
import Provider from './pages/Provider';
import SubCategory from './pages/SubCategory';
import Stock from './pages/Stock';

/* CONTEXT */
import DataSessionState from './context/DataSesion/DataSessionState';


function App() {
  return (
    <>
      <Router >
        <DataSessionState>
          <Layout>
            <Switch>
              <Route exact path='/' component={Login} />

              <Route exact path='/home' component={Dashboard} />
              <Route exact path='/venta' component={Sale} />
              <Route exact path='/producto' component={Product} />
              <Route exact path='/categoria' component={Category} />
              <Route exact path='/subcategoria' component={SubCategory} />
              <Route exact path='/marca' component={Brand} />
              <Route exact path='/cliente' component={Client} />
              <Route exact path='/puesto' component={Workstation} />
              <Route exact path='/empleado' component={Employees} />
              <Route exact path='/proveedor' component={Provider} />
              <Route exact path='/outlest' component={ProductOutlets} />
              <Route exact path='/stock' component={Stock} />
            </Switch>
          </Layout>
        </DataSessionState>
      </Router>


    </>
  );
}

export default App;
