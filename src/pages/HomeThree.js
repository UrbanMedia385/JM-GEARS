import HeaderThree from "../Components/Header/HeaderThree";
import FooterThree from "../Components/Footer/FooterThree";
import HeroThree from "../Components/Hero/HeroThree";
import ProductsThree from "../Components/Services/ServicesThree";
import BrandCarouselFour from "../Components/Brands/BrandCarouselFour";
import CtaTwo from "../Components/Cta/CtaTwo";
import TeamFour from "../Components/Team/TeamFour";
import TestimonialTwo from "../Components/Testimonial/TestimonialTwo";
import BlogThree from "../Components/Blog/BlogThree";
import FooterForm from "../Components/Contact/FooterForm";
import HeroSocials from "../Components/Hero/HeroSocials";
import FeaturesOne from "../Components/Features/FeaturesOne";
import FaqOne from "../Components/Faq/FaqOne";
import PortfolioOne from "../Components/Portfolio/PortfolioOne";
import AboutOne from "../Components/About/AboutOne";
import ProductsOne from "../Components/Services/ServicesOne";
const HomeThree = () => {
    return (
        <>
            <HeaderThree/>
            <HeroThree/>
            <HeroSocials/>
            <ProductsOne />
            <ProductsThree />
            <FeaturesOne/>
            <CtaTwo/>
            <BrandCarouselFour/>

            <TeamFour/>
            <TestimonialTwo/>
            {/* <BlogThree/> */}
            <PortfolioOne/>
            <FaqOne/>
            <FooterForm/>
            <FooterThree/>
        </>
    )
}

export default HomeThree;