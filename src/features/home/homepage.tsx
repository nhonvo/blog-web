import Post from "./post";

function HomePage() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <Post />
                        <hr></hr>
                        <Post />
                        <hr></hr>
                        <Post />
                        <hr></hr>
                        <Post />
                        <hr></hr>
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
export default HomePage;