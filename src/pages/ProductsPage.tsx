import React, { useEffect, useState } from 'react';
import PaginationComponent from '../components/PaginationComponent';
import { apiService } from '../services/api.service';
import { useSearchParams } from 'react-router-dom';
import Products from '../components/Products';
import { IProduct } from '../models/IProduct';

const ProductsPage = () => {
    const [query, setQuery]= useSearchParams({page: '1'});
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        const page = query.get('page');
        console.log('page is' + query.get('page'));
        if(page){
            apiService.product.getAll(+page).then(value => setProducts(value));
        }
    }, [query]);
    return (
        <div>
            <Products products={products} />
            <PaginationComponent/>

        </div>
    );
};

export default ProductsPage;