import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiService } from '../services/api.service';


const PaginationComponent = () => {
    const [query, setQuery]= useSearchParams({page: '1'});
    useEffect(() => {
        const page = query.get('page');
        console.log('page is' + query.get('page'));
        if(page){
            apiService.product.getAll(+page);
        }
    }, [query]);
    const onclicPrevHadler = ()=>{

    }
    const onclicNextHadler = ()=>{
            const page = query.get('page');
            if(page){
                let currentPage = +page;
                currentPage++;
                setQuery({page:currentPage.toString()});
            }
    }
    return (
        <div>
            <button onClick={onclicPrevHadler}>prev</button>
            <button onClick={onclicNextHadler}>next</button>
        </div>
    );
};

export default PaginationComponent;