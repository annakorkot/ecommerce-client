import { createApi ,fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const productApi = createApi({
    reducerPath : 'products',
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000'
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query({
                query:()=>{
                    return{
                        url: '/product-list/',
                        method : 'GET'
                    };
                },
            }),
        };
    },

});

export const { useFetchProductsQuery } = productApi;
export { productApi }
// productApi.useFetchProductsQuery()
