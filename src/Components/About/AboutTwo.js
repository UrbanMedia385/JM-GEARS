import React from 'react'
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/img/home2/about-cover.jpg';
import { EnquiryForm } from '../../pages/EnquiryForm';
import "../../assets/css/about.scss";
const AboutTwo = () => {
  return (
    <section className="about-section section-padding" style={{paddingTop:'0px'}}>
            <div className="about-jm">
      <div className="cover-section">
        <div className="container">
          

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
                            <span>JM Gears And Engineering</span>
                            <h3>Building a Legacy of Precision Engineering</h3>
                        </div>
                        <blockquote>Having laid our first footprints in 1965, we are proud to be a leading heavy-duty industrial gears manufacturer. Our journey began with a small manufacturing shop with one lathe machine, and it has only grown stronger to date. Jogendar Singh Kanda & Sons saw inspiration in building industrial machines, turning every raw material into a finished cement, chemical, sugar, or steel substance with great precision.</blockquote>
                        <blockquote>With over 60 years of experience in making industrial gears like rotary kilns Horizontal Grinding Mills, Cement Plant Spare Parts, and Crushers, we understand the machine-running challenges in cement, mining, and chemical industries. With our keen attention to detail and quality control processes, our gears are the reason behind productive operations. </blockquote>
                    </div>
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