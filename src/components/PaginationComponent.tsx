import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const PaginationComponent = () => {
    const [query, setQuery]= useSearchParams({page: '1'});

    const onclicPrevHadler = ()=>{
        const page = query.get('page');
        if(page && +page > 0){
            let currentPage = +page;
            currentPage--;
            setQuery({page:currentPage.toString()});
        }
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