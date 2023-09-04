import { useEffect } from "react";
import { useStore } from "../../app/stores/store";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import HomeHeader from "../../app/layout/header";

function BlogDetail() {
    const { blogStore } = useStore();
    const { id } = useParams();
    const blog = blogStore.blog;

    useEffect(() => {
        if (id) {
            blogStore.loadBlog(id);
        }
    }, [id, blogStore]);

    const title = blog?.title || "Default Title";
    const author = blog?.author || "Unknown Author";
    const formattedDate = blog?.date ? new Date(blog.date).toLocaleDateString() : "";
    const topics = blog?.topics || [];

    return (
        <>
            <HomeHeader title={title} description={`Written by ${author}${formattedDate && ` on ${formattedDate}`}`} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <h4>Topics:</h4>
                        <div className="topic-list">
                            {topics.map((topic, topicIndex) => (
                                <span key={topicIndex}>
                                    {topicIndex > 0 && ", "}
                                    <a href={`#${topic.name}`}>{topic.name}</a>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {blog?.content && <div dangerouslySetInnerHTML={{ __html: blog.content }} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default observer(BlogDetail);
