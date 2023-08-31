function HomePage() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Udacity’s School of Cloud Computing</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Post</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

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
                        <div className="post-preview">
                            <a href="post.html">
                                <h2 className="post-title">
                                    The Most Popular Destinations for Solo Travelers
                                </h2>
                                <h3 className="post-subtitle">
                                    Here are the spots where you're most likely to meet other people who are traveling alone.
                                </h3>
                            </a>
                            <p className="post-meta">Posted by
                                <a href="#">Jane Doe</a>
                                on September 24, 2019</p>
                        </div>
                        <hr></hr>
                        <div className="post-preview">
                            <a href="post.html">
                                <h2 className="post-title">
                                    This Site Connects Solo Travelers Who Are Looking for Someone to Travel and Split Expenses With.
                                </h2>
                            </a>
                            <p className="post-meta">Posted by
                                <a href="#">Jane Doe</a>
                                on September 18, 2019</p>
                        </div>
                        <hr></hr>
                        <div className="post-preview">
                            <a href="post.html">
                                <h2 className="post-title">
                                    A Guide to Kings Canyon National Park
                                </h2>
                                <h3 className="post-subtitle">
                                    Best known for its groves of Sequoia trees, Kings Canyon National Park spans a significant portion of the Sierra Nevada mountain range in California.
                                </h3>
                            </a>
                            <p className="post-meta">Posted by
                                <a href="#">Jane Doe</a>
                                on August 24, 2019</p>
                        </div>
                        <hr></hr>
                        <div className="post-preview">
                            <a href="post.html">
                                <h2 className="post-title">
                                    This Breathtaking New Hike in Yosemite Isn't for the Faint of Heart
                                </h2>
                                <h3 className="post-subtitle">
                                    Yosemite National Park may be nearing 130 years old, but that doesn’t mean there’s nothing left to explore.
                                </h3>
                            </a>
                            <p className="post-meta">Posted by
                                <a href="#">Jane Doe</a>
                                on July 8, 2019</p>
                        </div>
                        <hr></hr>
                        <div className="clearfix">
                            <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>

            <hr></hr>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <p className="copyright text-muted">Copyright &copy; www.mytrips.com</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}
export default HomePage;