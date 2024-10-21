import React, { FC } from 'react';
import { IProduct } from '../models/IProduct';

type ProductsProps ={
    products: IProduct[];
}
const Products: FC<ProductsProps> = ({products}) => {
    return (
        <div>
            {
                products.map((product, i) => (<div>{product.title}</div>))
            }
        </div>
    );
};

export default Products;