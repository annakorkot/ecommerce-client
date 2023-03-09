import Routing from "./Routing";
// import Navbar from "./Navbar";
import Cart from "./Cart";
import Footer from "./Footer";
// import  AddProduct  from './AddProduct'

function Layout(){
    return (
        <div className="Layout">
            {/* <Navbar></Navbar> */}
            <Cart></Cart>
            <main><Routing></Routing></main>
             
            <Footer></Footer>
        </div>
    );
}

export default Layout;