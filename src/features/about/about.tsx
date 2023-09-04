import HomeHeader from "../home/homeHeader";

function About() {
    return (
        <>
            <HomeHeader
                title="About Us"
                description="Learn more about our team and mission." />

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p>
                            Welcome to our About page! We are a passionate team dedicated to providing
                            valuable content to our readers.
                        </p>
                        <p>
                            Our mission is to share knowledge, insights, and inspiration through our blog
                            posts and articles. We believe that information has the power to transform
                            lives, and we strive to make a positive impact in the online community.
                        </p>
                        <p>
                            Whether you're looking for technical tutorials, lifestyle tips, or thought-provoking
                            discussions, you'll find it all here. Join us on this journey of exploration
                            and learning.
                        </p>
                        <p>
                            Thank you for being a part of our community!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;