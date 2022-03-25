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
import {Paginate} from "../../components/Paginate";
import NoProducts from "../../components/NoProducts";
import {User} from "../../models/User";

const ProductsWrapper = styled(Box)({
  margin: "2rem 2rem 0 2rem",
});

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loggedUser, setLoggedUser] = useState<User>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [activeValue, setActiveValue] = useState<boolean>(false);
  const [promoValue, setPromoValue] = useState<boolean>(false);
  const [pageValue, setPageValue] = useState<number>(1);
  const [itemCount, setItemCount] = useState<number>(0);

  let isItemsToRender = itemCount > 1;

  const changePageCallback = (page: number) => {
    setPageValue(page);
  }
  const searchBarCallback = (query: string) => {
    setSearchValue(query);
  }
  const activeButtonCallback = (button: boolean) => {
    setActiveValue(button);
  }
  const promoButtonCallback = (button: boolean) => {
    setPromoValue(button);
  }


  useEffect(() => {
    GetProducts(
        searchValue,
        8,
        pageValue,
        promoValue,
        activeValue
    ).then(r => {
      const newProducts = r.items
      const totalItems = r.meta.totalItems
      setItemCount(totalItems)
      setProducts(newProducts)
      isItemsToRender = itemCount > 1;
    }).catch((error) => console.log(error))
  },[searchValue, activeValue, promoValue, pageValue]);

  useEffect(() => {
      let str = localStorage.getItem("user");
      if(str != null){
        setLoggedUser(JSON.parse(str));
      }
  },[]);

  return (
    <>
      <Navbar
          searchBarCallback={searchBarCallback}
          activeButtonCallback={activeButtonCallback}
          promoButtonCallback={promoButtonCallback}
          user={loggedUser}
      />
      {isItemsToRender ?
        <>
          <ProductsWrapper>
            <Grid container rowSpacing={3} columnSpacing={10} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
            {products.map((product, index) => (
                <Grid item xs={1}  key={index}>
                  <ProductCard
                      id={product.id}
                      name= {product.name}
                      description={product.description}
                      rating={product.rating}
                      image={product.image}
                      promo={product.promo}
                      active={product.active}
                  />
                </Grid>
            ))}
            </Grid>
          </ProductsWrapper>
          <Paginate pages={Math.ceil(itemCount/8)}
                    callback={changePageCallback}/>
        </>
      :
            <NoProducts/>}
    </>
  );
};
