import { useEffect } from "react";
import { useStore } from "../../app/stores/store";
import { useParams } from "react-router-dom";

function PostDetail() {

    const { blogStore } = useStore()
    const { id } = useParams();
    const blog = blogStore.blog;

    useEffect(() => {
        if (id) {
            blogStore.loadBlog(id);
        }
    }, [id, blogStore]);


    return (
        <>
            <header className="masthead">
                <div className="overlay"></div>
                <div className="page-heading">
                    <h1>{blog?.title}</h1>
                    <span className="subheading">Written by {blog?.author} on {blog?.date.toString()}</span>
                </div>
            </header>
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
export default PostDetail;