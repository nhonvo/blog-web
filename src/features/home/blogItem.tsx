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
                <p className="post-meta">Posted by&nbsp;&nbsp;
                    <Link to={`/profile`}>{blog.author}</Link>&nbsp;&nbsp;on&nbsp;
                    {new Date(blog.date).toLocaleDateString()}</p>
            </div>
            <strong>Topics:</strong>
            {blog.topics.map((topic, topicIndex) => (
                <span key={topicIndex}>
                    {topicIndex > 0 && ", "} {/* Add a comma if not the first topic */}
                    <a href={`#${topic.name}`}>{topic.name}</a>
                </span>
            ))}

            <hr></hr>
        </>
    );
}
export default BlogItem;