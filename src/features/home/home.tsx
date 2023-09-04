import { useEffect } from "react";
import { useStore } from "../../app/stores/store";
import BlogItem from "./blogItem";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import Header from "../../app/layout/header";


function Home() {

    const { blogStore } = useStore()

    useEffect(() => {
        blogStore.loadBlogs();
    }, [blogStore]);

    return (
        <>
            <Header title="Welcome to the Coding Blog"
                description="Explore the world of coding and programming."
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {blogStore.blogs.map((item, index) => (
                            <BlogItem
                                key={item.id}
                                item={item}
                                index={index} />
                        ))}
                        <div className="clearfix">
                            <Link to={`/blogPage`} className="btn btn-primary float-right" >Older Posts &rarr;</Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    );
}
export default observer(Home);