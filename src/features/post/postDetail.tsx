
const samplePost = {
    title: 'Getting Started with C# Programming',
    content: `
      <p>If you're new to programming, C# is a great language to start with. It's widely used in software development for creating a variety of applications.</p>
      <p>In this post, we'll cover the basics of C# programming:</p>
      <ul>
        <li>Setting up a development environment</li>
        <li>Understanding C# syntax and data types</li>
        <li>Writing your first C# program</li>
        <li>Exploring control flow and loops</li>
      </ul>
      <p>By the end of this tutorial, you'll have a solid foundation to start building your own C# projects.</p>
    `,
    author: 'Jane Smith',
    date: 'September 15, 2023',
};

function PostDetail() {
    return (
        <>
            <header className="masthead">
                <div className="overlay"></div>
                <div className="page-heading">
                    <h1>{samplePost.title}</h1>
                    <span className="subheading">Written by {samplePost.author} on {samplePost.date}</span>
                </div>
            </header>
            <div className="container">

                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div dangerouslySetInnerHTML={{ __html: samplePost.content }} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default PostDetail;