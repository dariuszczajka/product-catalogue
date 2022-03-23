import * as React from "react";


export const GetProducts = async (search: any,
                                  limit: any,
                                  page: any,
                                  promo: boolean,
                                  active: boolean) => {
    const buildUrl = () => {
        let url = "https://join-tsh-api-staging.herokuapp.com/products"
        let prepend = '?'
        if(search){
            url = `${url}` + prepend + `search=${search}`;
            prepend = '&';
        }
        if(limit != ""){
            url = `${url}` + prepend + `limit=${limit}`;
            prepend = '&';
        }
        if(page != ""){
            url = `${url}` + prepend + `page=${page}`;
            prepend = '&';
        }
        if(promo){
            url = `${url}` + prepend + `promo=${promo}`;
            prepend = '&';
        }
        if(active){
            url = `${url}` + prepend + `active=${active}`;
            prepend = '&';
        }
        console.log(url);
        return url;
    }

    return fetch(
        buildUrl()
    )
        .then((response) => response.json())
        .catch(function (error) {
            console.log(error);
        })
        .then((response) => {
            return response;
        });
};