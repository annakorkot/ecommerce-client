import Routing from "./Routing";
import Navbar from "./Navbar";
import Cart from "./Cart";

function Layout(){
    return (
        <div className="Layout">
            <Navbar></Navbar>
            <Cart></Cart>
            {/* <main><Routing></Routing></main> */}
            {/* <footer><Footer></Footer></footer> */}
        </div>
    );
}

export default Layout;