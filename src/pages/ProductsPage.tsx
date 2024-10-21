import React, { useEffect, useState } from 'react';
import PaginationComponent from '../components/PaginationComponent';
import { apiService } from '../services/api.service';
import { useSearchParams } from 'react-router-dom';
import Products from '../components/Products';
import { IProduct } from '../models/IProduct';

const ProductsPage = () => {
    const [query, setQuery]= useSearchParams({page: '1'});
    const [products, setProducts] = useState<IProduct[]>([]);
    const [flag, setFlag] = useState<boolean>(false)
    useEffect(() => {
        const page = query.get('page');
        console.log('page is' + query.get('page'));
        if(page){
            apiService.product
                .getAll(+page)
                .then(value => {
                    setProducts(value.products);
                    const lastID = value.products[value.products.length-1].id;
                    if(lastID>=value.total){
                        setFlag(true);
                    }else {
                        setFlag(false);
                    }
                });
        }
    }, [query]);
    return (
        <div>
            <Products products={products} />
            <PaginationComponent flag={flag}/>

        </div>
    );
};

export default ProductsPage;