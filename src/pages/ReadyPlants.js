import AboutOne from "../Components/About/AboutOne";
import FeaturesOne from "../Components/Features/FeaturesOne";
import FooterThree from "../Components/Footer/FooterThree";
import HeaderThree from "../Components/Header/HeaderThree";
import PageBanner from "../Components/PageBanner";

import bannerBg from '../assets/img/page-banner.jpg';
const ReadyPlants = () => {
    return (
        <>
        <HeaderThree/>
        {/* <PageBanner title='Ready Plants' bannerBg={bannerBg} currentPage='Ready Plants' /> */}
        <AboutOne pt={true} />
           <FooterThree />
        </>
    )
}

export default ReadyPlants;