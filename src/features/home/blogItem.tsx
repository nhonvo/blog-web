import { Link } from "react-router-dom";
import { BlogData } from "../../app/models/blogData";


interface BlogProps {
    index: number;
    item: BlogData;
}

function BlogItem({ index, item: blog }: BlogProps) {
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
                    <Link to={`/profile`}>{blog.author}</Link>
                    on {blog.date.toString()}</p>
            </div>
            <hr></hr>
        </>
    );
}
export default BlogItem;