import { Link } from "react-router-dom";
import ProductsThreeData from "./servicesThreeData";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerBg from '../../assets/img/pricing-cta-bg.jpg';
import tabImg1 from '../../assets/img/home1/tab-img.jpg'
const ProductsThree = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay speed in milliseconds
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      };
    return (
        <section className="our-products-box-wrapper section-padding bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 mb-4 offset-xl-3 offset-lg-2 col-12 text-center">
                        <div className="section-title-3">
                            <h6>Our Products</h6>
                            <h2>What products we offer You</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                <Slider {...settings}>
                    {ProductsThreeData.map((data) => (
                        <div key={data.id}>
                        <div className="single-products-box sb1">
                            <div className="img-box flex justify-center align-center">
                                            <img src={tabImg1} alt=""/>
                            </div>
                            <div className="content">
                            <h3><Link to={`/productsDetails/id=${data.id}`}>{data.title}</Link></h3>
                            <p>{data.desc}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default ProductsThree;