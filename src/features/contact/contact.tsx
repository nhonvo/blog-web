import HomeHeader from "../../app/layout/header";

function Contact() {
    return (
        <>
            <HomeHeader
                title="Contact Us"
                description="Get in touch with us." />

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p>
                            Have a question or feedback? We'd love to hear from you!
                        </p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows={5}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Contact;