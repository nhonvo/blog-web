import About from "../../../features/about/about";
import Contact from "../../../features/contact/contact";
import HomePage from "../../../features/home/homepage";
import PostDetail from "../../../features/post/postDetail";
import Footer from "./footer";
import Navbar from "./navbar";

function Layout() {

    return (
        <>
            <Navbar />
            {/* <About/> */}
            {/* <Contact/> */}
            {/* <HomePage /> */}
            <PostDetail/>
            <Footer />
        </>
    );
}
export default Layout;