import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fetchProducts from "../../api/fetchProducts.js";
import ProductCard from "../ProductCard/ProductCard";

// tipagem de dados
interface Product {
  id: number;
  title: string;
  price: number;
}

const StyledProducts = styled.section`
  .products {
    padding: 150px 20px 50px;
  }
`;

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts("iphone").then((response) => {
      setProducts(response);
    });
  }, []);

  console.log(products);

  return (
    <StyledProducts>
      <section className="container products">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    </StyledProducts>
  );
};

export default Products;
