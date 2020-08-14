import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';


function Product() {

  const {productId} = useParams();
  return (
    <div>
     <h1> Hello Products {productId} </h1>
     <hr/>
     <div> 
       <Outlet/>
     </div>
    </div>
  );
}

export default Product;
