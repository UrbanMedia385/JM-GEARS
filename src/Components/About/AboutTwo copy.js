import React from 'react'
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/img/home2/about-cover.jpg';
import { EnquiryForm } from '../../pages/EnquiryForm';
import "../../assets/css/about.scss";
const AboutTwo = () => {
  return (
    <section className="about-section section-padding">
            <div className="about-jm">
      <div className="cover-section">
        <div className="container">
          <h2></h2>
          <EnquiryForm data='ALL'/>
        <div className="container about-container ">
            <div className="row align-items-center">
                <div className="col-xl-6 col-12 pe-xl-0">
                    <div className="about-cover-bg bg-cover me-xl-5" style={{backgroundImage: `url(${aboutImg})`}}>
                        <div className="our-experience-years">
                            <div className="year-outline">
                                <h2>30</h2>
                            </div>
                            <p>Years <span>Experience</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 mt-5 mt-lg-0 col-12">
                    <div className="block-contents">
                        <div className="section-title">
                            <span>About Company</span>
                            <h2>We Always Think On Your Dream</h2>
                        </div>
                        <blockquote>Construction actually recommends for content specifically the people for the house keywords is popular.</blockquote>
                    </div>

                    <p>You should only pick the keywords that are both popular with people and ones that you’re also able to rank for. Brian Dean actually recommends creating content specifically for the people for the house. </p>

                    <Link to="/about" className="theme-btn mt-35">read more</Link>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default AboutTwo