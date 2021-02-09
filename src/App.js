import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import Dark from './components/Dark'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Sell from './pages/Sell'
import Category from './pages/Category'
import Product from './pages/Product'
import Brand from './pages/Brand'
import Client from './pages/Client'
import Navigation from './components/Navigation';


function App() {
  return (
    <>
      <Router >    
        <Header >
          <Dark />
        </Header>
          <div className="wrapper">
            <Route exact path='/' component={Login}/>
          </div>
          <div className="grid-wrapper">
            <Navigation />
            <Route exact path='/home' component={Dashboard}/>
            <Route exact path='/venta' component={Sell}/>
            <Route exact path='/producto' component={Product}/>
            <Route exact path='/cliente' component={Client}/>
            <Route exact path='/categoria' component={Category}/>
            <Route  exact path='/marca' component={Brand}/>

            
          </div>
        
      </Router>


    </>
  );
}

export default App;
