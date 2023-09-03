import { Link } from "react-router-dom";
import { Blog } from "../../app/models/Blog";


interface BlogProps {
    index: number;
    item: Blog;
}

function HomeItemPost({ index, item: blog }: BlogProps) {
    return (
        <>
            <div className="post-preview" key={index}>
                <Link to={`/detail/${blog.id}`}>
                    <h2 className="post-title">
                        {blog.title}
                    </h2>
                    <p className="post-description">
                        {blog.description}
                    </p>
                </Link>
                <p className="post-meta">Posted by 
                    <a href="#">{blog.author}</a>
                    on {blog.date.toString()}</p>
            </div>
            <hr></hr>
        </>
    );
}
export default HomeItemPost;