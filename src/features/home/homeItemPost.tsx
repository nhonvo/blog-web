import { Link } from "react-router-dom";
import { Posts } from "../../app/models/Posts";

function HomeItemPost(props: Posts) {
    return (
        <>
            <div className="post-preview">
                <Link to={`/detail/${props.id}`}>
                    <h2 className="post-title">
                        {props.title}
                    </h2>
                    <p className="post-description">
                        {props.description}
                    </p>
                </Link>
                <p className="post-meta">Posted by
                    <a href="#">{props.author}</a>
                    on {props.date.toDateString()}</p>
            </div>
            <hr></hr>
        </>
    );
}
export default HomeItemPost;