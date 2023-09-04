interface HeaderProp{
    title: string,
    description: string
}
function Header(props: HeaderProp) {
    return (
        <>
            <header className="masthead" style={{ backgroundImage: `url('img/background.png'` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{props.title}</h1>
                                <span className="subheading">{props.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header></>
    );
}
export default Header;