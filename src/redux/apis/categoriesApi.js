import { createApi ,fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const categoryApi = createApi({
    reducerPath : 'categories',
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000'
    }),
    endpoints(builder) {
        return {
            fetchCategories: builder.query({
                query:()=>{
                    return{
                        url: '/category-list/',
                        method : 'GET'
                    };
                },
            }),
        };
    },

});

export const { useFetchCategoriesQuery } = categoryApi;
export { categoryApi }