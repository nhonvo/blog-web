import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useStore } from "../../app/stores/store";
import HomeHeader from "../../app/layout/header";
import BlogItem from "../home/blogItem";

function Blog() {
    const { blogStore } = useStore();
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10; // Number of posts per page (you can adjust this)

    useEffect(() => {
        blogStore.loadBlogs();
    }, [blogStore]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogStore.blogs.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <HomeHeader title="" description="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {currentPosts.map((item, index) => (
                            <BlogItem key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <ul className="pagination">
                            {Array.from({ length: Math.ceil(blogStore.blogs.length / postsPerPage) }, (_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                    <button className="page-link" onClick={() => paginate(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default observer(Blog);
