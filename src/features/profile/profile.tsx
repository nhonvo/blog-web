import HomeHeader from "../../app/layout/header";

// Sample author data
const authorInfo = {
    name: 'Vo Thuong Truong Nhon',
    bio: 'Software Developer | Tech Enthusiast | Blogger',
    email: 'TruongNhon@example.com',
    website: 'https://www.truongnhon.com'
};

function Profile() {
    return (
        <>
            <HomeHeader
                title={authorInfo.name}
                description={authorInfo.bio} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <h2>Contact Information</h2>
                        <p>Email: <a href={`mailto:${authorInfo.email}`}>{authorInfo.email}</a></p>
                        <p>Website: <a href={authorInfo.website} target="_blank" rel="noopener noreferrer">{authorInfo.website}</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Profile;