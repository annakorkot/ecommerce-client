import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from "./slices/cartSlice";
import userReducer from './slices/userSlice';
import editProductReducer from './slices/editProductSlice';
import  productsByCategoryReducer  from "./slices/productsByCategorySlice";
import { addToCart, removeProduct, decrementQuantity, incrementQuantity, hideCart, showCart } from "./slices/cartSlice";
import { categoriesReducer } from "./slices/categorySlice";
import { productsReducer } from "./slices/productSlice";
import { logout } from './slices/userSlice';
import { selectCategory } from "./slices/productsByCategorySlice";
import { selectProductToEdit } from "./slices/editProductSlice";

const appStore = configureStore({
    reducer: {
        categories: categoriesReducer,
        cart: cartReducer,
        user: userReducer,
        products: productsReducer,
        productsByCategory:productsByCategoryReducer,
        editProduct :editProductReducer,
    },

});

setupListeners(appStore.dispatch);

export * from './thunks/productsThunk';
export * from './thunks/userThunk';
export * from './thunks/fetchCategories';
export default appStore;
export { addToCart, removeProduct, incrementQuantity, decrementQuantity, showCart, hideCart ,selectCategory , selectProductToEdit};
export { logout };
