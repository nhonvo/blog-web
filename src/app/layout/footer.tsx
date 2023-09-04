// Sample social media data
const socialMediaLinks = [
    {
        name: 'Twitter',
        icon: 'fab fa-twitter',
        url: 'https://twitter.com/yourusername',
    },
    {
        name: 'Facebook',
        icon: 'fab fa-facebook-f',
        url: 'https://www.facebook.com/yourusername',
    },
    {
        name: 'GitHub',
        icon: 'fab fa-github',
        url: 'https://github.com/yourusername',
    },
    // Add more social media links as needed
];
const url = "www.truongnhon.com"
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <ul className="list-inline text-center">
                            {socialMediaLinks.map((link, index) => (
                                <li className="list-inline-item" key={index}>
                                    <a href={link.url}>
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className={link.icon + ' fa-stack-1x fa-inverse'}></i>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p className="copyright text-muted">&copy; {new Date().getFullYear()} {url}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
