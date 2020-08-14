import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import { Routes, Route, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Product from './Product';
import ProductDetails from './ProductDetails';
import ProductHome from './ProductHome';



function NotFound(){
  return <div> Path Not Found </div>
}
// React Router Install Command
//npm install history react-router-dom@next    


function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome</h1>
      <div>
      <Link to="/">Home</Link> {' '}
      <Link to="about">About</Link>{' '}
      <Link to="Products">Product</Link>{' '}
      <Link to = "/products/mobile">Mobile</Link>{' '}
     <Link to = "/products/laptop">Laptop</Link>
     <button onClick={ ()=> {
    navigate('/about');

    }}> 
Display about Page
</button>
      </div>
      <Routes>
      <Route path="/" element= {<Home/>}></Route>
      <Route path="products" element= {<Product/>}>
        <Route path="/" element={<ProductHome/>}></Route>
        <Route path=":productId" element={<ProductDetails/>}></Route>
      </Route>
      <Route path="about" element= {<About/>}></Route>
      <Route path="*" element={<NotFound/>}>  </Route>
        </Routes>
    </div>
  );
}

export default App;
