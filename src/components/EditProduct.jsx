import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories, selectCategory, updateProduct } from '../redux/store';
import { Navigate, useNavigate } from 'react-router-dom';


function EditProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => {
    return state.user.data.token;
  });

  async function doEditProduct(product) {
    console.log(product)
    await dispatch(updateProduct({ product: product, token: token }))
    navigate('/')
  }

  // TODO: async function doDeleteProduct(product), with dispath to delete thunk, then navigate to '/'

  const categories = useSelector((state) => {
    return state.categories.data;
  });
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  const isStaff = useSelector((state) => {
    return state.user.data.is_staff;
  });

  const selectedProduct = useSelector((state) => {
  return state.editProduct.data;
  });

  const defaultCategory = categories.length === 0 ? undefined : categories[0].id;

  const id = selectedProduct == null ? -1 : selectedProduct.id;
  const initialProductName = selectedProduct == null ? "" : selectedProduct.productname;
  const initialPrice = selectedProduct == null ? "" : selectedProduct.price;
  const initialDescription = selectedProduct == null ? "" : selectedProduct.description;
  const initialImage = selectedProduct == null ? "" : selectedProduct.image;
  let initialCategory = selectedProduct == null ? defaultCategory : selectedProduct.category;
  initialCategory = initialCategory == null ? defaultCategory: initialCategory;

  const [productName, setProductName] = useState(initialProductName);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);
  const [image, setImage] = useState(initialImage);
  const [category, setCategory] = useState(initialCategory);

  if (!isStaff || selectedProduct == null) {
    return (<Navigate to="/" replace={true}/>)
  }


  return (
    <div className="mt-2 mx-10 w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            New Product
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setProductName(e.target.value)}
            id="productName" value={productName} name='productname' type="text" required={true} placeholder="Product Name">

          </input>

          <input className="mt-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPrice(e.target.value)}
            id="price" value={price} name='price' type="number" required={true} placeholder="Product Price">

          </input>


          <input className="mt-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setDescription(e.target.value)}
            id="description" value={description} name='description' type="text" required={true} placeholder="Description">

          </input>

          <input className="mt-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setImage(e.target.value)}
            id="image" value={image} name="image" type="text" required={true} placeholder="Image">

          </input>

          <label className="mt-6 block text-gray-700 text-sm  mb-2" >
            Category :
          </label>
          <select name="category" id="category" value={category} required={true} onChange={(e) => setCategory(e.target.value)}>
            {categories.map(category => <option key={category.id} className="px-5 py-3 hover:bg-gray-900 " value={category.id}>{category.name}</option>)}
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button onClick={(e) => {
            if (e.target.form.checkValidity()) {
              doEditProduct({ id: id, productname: productName, description: description, image: image, price: parseFloat(price), category: parseInt(category) });
            }
          }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Save
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Delete
          </button>

        </div>
      </form>
    </div>
  );
}
export default EditProduct;