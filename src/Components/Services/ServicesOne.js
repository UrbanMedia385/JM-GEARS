import { Link } from "react-router-dom";
import ProductsOneData from "./servicesOneData";

const ProductsOne = () => {
    return (
        <section className="our-service-wrapper section-padding bg-gray">
        <div className="container">
      
                        <div className="section-title text-center">
                            <h2>INDUSTRIES </h2>
                            <h4>WE SERVE </h4>
                        </div>
                      
            <div className="row mtm-30">
               
                {
                    ProductsOneData.map((data) => (
                        <div className="col-md-6 col-12 col-lg-4 mt-30" key={data.id}>
                            <div className="single-service-box style-1">
                                <div className="service-bg bg-cover" style={{backgroundImage: `url(${data.bg})`}}></div>
                                <div className="icon">
                                    <i className={`flaticon-${data.icon}`}></i>
                                </div>
                                <div className="contents">
                                    <h4>
                                        {data.title}</h4>
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    )
}

export default ProductsOne;