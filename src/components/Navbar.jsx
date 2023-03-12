import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories, showCart, selectCategory } from '../redux/store';
import { logout } from '../redux/store';


function Navbar() {
  const dispatch = useDispatch();

  const isStaff = useSelector((state) => {
    return state.user.data.is_staff;
  });
  const { isLoading, data, error } = useSelector((state) => {
    return state.categories;
  });

  const userLogged = useSelector((state) => {
    return state.user.isLogged
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-wrap h-screen h-28">
        <section className="relative mx-auto ">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between bg-black text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center h-20">
              <Link className="text-3xl font-bold font-heading" to='/'>
                <img className="h-9" src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
              </Link>
              {/* <!-- Nav Links --> */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 ">
                <li><Link className="hover:text-gray-200" to='/' >Home</Link></li>


                <div>
                  <li className="peer" ><div className="hover:text-gray-200" >Catagory</div></li>
                  <div className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-black drop-shadow-lg overflow-visible absolute top-10">
                    {data?.map(category => {
                      return (
                        <Link onClick={() => {
                          dispatch(selectCategory(category));
                        }} key={category.id} className="px-5 py-3 hover:bg-gray-900 " to='/products-by-category'>{category.name}</Link>
                      )
                    })}


                  </div>
                </div>

                <li ><a className="hover:text-gray-200" >Collections</a></li>
                <li><a className="hover:text-gray-200" >Contact Us</a></li>
                {isStaff && <li><Link className="hover:text-gray-200" to='/add-product' >Add New Product </Link></li>}

              </ul>

              {/* <!-- Header Icons --> */}
              <div className="hidden xl:flex items-center space-x-5 items-center">
                {/* favorites */}
                <button className="hover:text-gray-200" >
                  <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                {/* cart */}
                <button className="flex items-center hover:text-gray-200" data-drawer-target="cart-container">
                  <svg onClick={() => dispatch(showCart())} xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>

                </button>
                {/* <!-- Sign In / Register      --> */}
                {userLogged ? <Link className="hover:text-gray-200" to='/profile' >Profile</Link> : <Link className="hover:text-gray-200" to='/register' >Register</Link>}

                {userLogged ? <Link onClick={() => dispatch(logout())} className="hover:text-gray-200" to='/' >Logout</Link> : <Link className="flex items-center hover:text-gray-200" to='/login'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>}


              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            <NavLink className="xl:hidden flex mr-6 items-center" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>

            </NavLink>
            <NavLink className="navbar-burger self-center mr-12 xl:hidden" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </NavLink>
          </nav>

        </section>
      </div>

    </div>
  );
}
export default Navbar;  