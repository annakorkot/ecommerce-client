import Routing from "./Routing";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Footer from "./Footer";
import Login from "./Login";

function Layout(){
    return (
        <div className="Layout">
            <Navbar></Navbar>
            <Cart></Cart>
            <main><Routing></Routing></main>
            <Login/>
            <Footer></Footer>
        </div>
    );
}

export default Layout;