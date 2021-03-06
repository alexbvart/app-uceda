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
              <Route exact path='/cliente' component={Client} />
              <Route exact path='/categoria' component={Category} />
              <Route exact path='/marca' component={Brand} />
              <Route exact path='/empleado' component={Employees} />
              <Route exact path='/puesto' component={Workstation} />
              <Route exact path='/outlest' component={ProductOutlets} />
            </Switch>
          </Layout>
        </DataSessionState>
      </Router>


    </>
  );
}

export default App;
