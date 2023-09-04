import { useEffect } from "react";
import { useStore } from "../../app/stores/store";
import HomeItemPost from "./homeItemPost";
import { observer } from "mobx-react-lite";
import HomeHeader from "./homeHeader";


function HomePage() {

    const { blogStore } = useStore()

    useEffect(() => {
        blogStore.loadBlogs();
    }, [blogStore]);

    return (
        <>
            <HomeHeader title="Welcome to the Coding Blog"
                description="Explore the world of coding and programming."
            />
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