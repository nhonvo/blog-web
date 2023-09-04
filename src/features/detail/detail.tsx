import { useEffect } from "react";
import { useStore } from "../../app/stores/store";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import HomeHeader from "../../app/layout/header";

function BlogDetail() {

    const { blogStore } = useStore()
    const { id } = useParams();
    const blog = blogStore.blog;

    useEffect(() => {
        if (id) {
            blogStore.loadBlog(id);
        }
    }, [id, blogStore]);

    const des = "Written by " + blog?.author + " on " + blog?.date.toString();

    return (
        <>
            <HomeHeader title={blog?.title ? blog.title.toString() : "Default Title"} description={des} />
            <div className="container">

                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {blog?.content && <div dangerouslySetInnerHTML={{ __html: blog.content }} />}
                    </div>
                </div>
            </div>
        </>
    );
}
export default observer(BlogDetail);