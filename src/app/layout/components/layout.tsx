import HomePage from "../../../features/home/homepage";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

function Layout() {

    return (
        <>
            <Navbar />
            <Header />
            <HomePage />
            <Footer />
        </>
    );
}
export default Layout;