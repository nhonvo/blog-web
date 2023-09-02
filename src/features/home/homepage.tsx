import { Posts } from "../../app/models/Posts";
import HomeItemPost from "./homeItemPost";
const samplePosts: Posts[] = [
    {
        id: 1,
        title: 'Getting Started with JavaScript',
        author: 'John Doe',
        date: new Date('August 10, 2023'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',

    },
    {
        id: 2,
        title: 'Introduction to React.js',
        author: 'Jane Smith',
        date: new Date('August 15, 2023'),
        content: 'React.js is a popular JavaScript library for building user interfaces...',
        description: 'React.js is a popular JavaScript library for building user interfaces...',
    }
    // Add more sample posts as needed
];

function HomePage() {
    return (
        <>
            <header className="masthead" style={{ backgroundImage: `url('img/van-336606_1280.jpg'` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>Welcome to the Coding Blog</h1>
                                <span className="subheading">Explore the world of coding and programming.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {samplePosts.map((post) => (
                            <HomeItemPost
                                key={post.id}
                                title={post.title}
                                author={post.author}
                                date={post.date} id={post.id} description={post.description} content={""} />
                        ))}
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