import { Link } from "react-router-dom";
import productsFourData from "./servicesFourData";

const productsFour = () => {
    return (
        <section className="our-service-wrapper bg-black section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 col-lg-4 mt-30">
                        <div className="block-contents pe-0 text-white">
                            <div className="section-title-4">
                                <h2>WHAT SERVICE <br/>WE OFFER</h2>
                                <p>We pay you best business products to reach  channels to reach target audience</p>
                            </div>
                        </div>
                    </div>
                    {
                        productsFourData.map((data, i=1) => (
                            <div className="col-md-6 col-12 col-lg-4 mt-30" key={data.id}>
                                <div className="service-item-card">
                                    <div className="service-number">0{i+1}</div>
                                    <div className="icon">
                                        <i className={`icon-${data.icon}`} />
                                    </div>
                                    <div className="contents">
                                        <h4><Link to="/productsDetails">{data.title}</Link></h4>
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

export default productsFour;