
const FooterForm = () => {
    return (
        <section className="contact-sec-wrapper fix section-bg section-padding">
            <div className="container">
                <div className="row align-items-end d-flex">
                    <div className="col-lg-6 col-xl-5">
                        <div className="section-title-3">
                            <h2>Power Your Industry with Quality Gears.</h2>
                            <p>Maximize your industrial operations with JM Gears & Engineering. We are committed to providing you with customized high-quality industrial gears, heavy equipment, and precision-machined components for dependable, long-lasting performance. Trust JM Gears & Engineering to deliver the customized solutions you need,whether your industry is cement, steel, sugar, or chemicals, we are ready to serve you! Contact us today to have a consultation and work with trusted industrial gear professionals to improve your manufacturing efficiency. Your success starts here!</p>
                          
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 mt-5 mt-lg-0 offset-xl-1">
                        <div className="homepage-contact-from ms-xl-5">
                            <form  method="POST" className="row" id="contact-form">
                                <div className="col-md-6 col-12">
                                    <div className="single-personal-info">
                                        <input type="text" name="name" placeholder="Name" />                                         
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="single-personal-info">
                                        <input type="email" name="email" placeholder="Email" />                                         
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="single-personal-info">
                                        <input type="text" name="phone" placeholder="Number" />                                         
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="single-personal-info">
                                        <input type="text" name="subject" placeholder="Subject" />                                         
                                    </div>
                                </div>
                                <div className="col-md-12 col-12">
                                    <div className="single-personal-info">
                                        <textarea name="message" placeholder="message" defaultValue={""} />                                        
                                    </div>
                                </div>
                                <div className="col-md-12 col-12">
                                    <input className="submit-btn" type="submit" defaultValue="Submit Now" />
                                </div>
                            </form>
                            <span className="form-message" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterForm;