import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import ProductCard from "../../components/ProductCard";
import {GetProducts} from "../../network/getProducts";
import {Product} from "../../models/Product";
import Navbar from "../../components/Navbar";
import {Box, Grid} from "@mui/material";
import {styled} from "@mui/system";
import Button from "@mui/material/Button";

const ProductsWrapper = styled(Box)({
  marginLeft: '2rem',
});

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>("");
  const [activeValue, setActiveValue] = useState<boolean>(false);
  const [promoValue, setPromoValue] = useState<boolean>(false);

  useEffect(() => {
    GetProducts(
        searchValue,
        8,
        1,
        promoValue,
        activeValue
    ).then(r => {
      const newProducts = r.items
      console.log(products)
      setProducts(newProducts)
      console.log(products)
      setLoading(false);
    }).catch((error) => console.log(error))
  },[searchValue, activeValue, promoValue]);

  return (
    <>
      <Navbar/>
      <ProductsWrapper>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <ProductCard
                  id={product.id}
                  name= {product.name}
                  description={product.description}
                  rating={product.rating}
                  image={product.image}
                  promo={product.promo}
                  active={product.active}/>
            </Grid>
        ))}
        </Grid>
      </ProductsWrapper>
    </>
  );
};
