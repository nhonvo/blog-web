import HomeItemPost from "./homeItemPost";

function HomePage() {
    return (
        <>
            <header className="masthead" style={{ backgroundImage: `url('img/van-336606_1280.jpg'` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>Travel Blog</h1>
                                <span className="subheading">Search destinations and book your hotel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <HomeItemPost />
                        <hr></hr>
                        <HomeItemPost />
                        <hr></hr>
                        <HomeItemPost />
                        <hr></hr>
                        <HomeItemPost />
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