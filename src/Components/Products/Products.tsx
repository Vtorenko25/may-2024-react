import React, {FC} from "react";
import {IProductMode} from "../Models/iProductMode";
import {apiProductsObject} from "../../data";

const Products:FC<any> = () =>{
    const products:IProductMode[] = apiProductsObject.products;
    return(
        <div>

        </div>
    );
};

export default Products;


