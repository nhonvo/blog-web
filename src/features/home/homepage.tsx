import { useEffect } from "react";
import { useStore } from "../../app/stores/store";
import HomeItemPost from "./homeItemPost";
import { observer } from "mobx-react-lite";


function HomePage() {

    const { blogStore } = useStore()

    useEffect(() => {
        // const fetchData = async () => {
        //     blogStore.loadBlogs()
        // };
        // fetchData();
        blogStore.loadBlogs().then();
    }, [blogStore]);

    return (
        <>
            <header className="masthead" style={{ backgroundImage: `url('img/van-336606_1280.jpg'` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>Welcome to the Coding Blog</h1>
                                <span className="subheading">Explore the world of coding and programming.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {blogStore.blogs.map((item, index) => (
                            <HomeItemPost
                                key={item.id}
                                item={item}
                                index={index} />
                        ))}
                        <div className="clearfix">
                            <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    );
}
export default observer(HomePage);