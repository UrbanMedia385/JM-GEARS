import React, { useEffect, useState } from 'react'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import Details from '../Components/Services/Details';
import FooterThree from '../Components/Footer/FooterThree';
import FooterForm from '../Components/Contact/FooterForm';
import HeaderThree from '../Components/Header/HeaderThree';
import { useParams } from 'react-router-dom';
import ProductsThreeData from '../Components/Services/servicesThreeData';
import { EnquiryForm } from './EnquiryForm';
import MoveToAustralia from './CementPlantPage';
import GrindingUnit from './GrindingUnit';

const ServiceDetails = () => {
  const [ID, setExtractedId] = useState(0)
  const { id } = useParams();

  // Extract the value of 'id' from the URL parameter
  const extractedId = id.split('=')[1]; // Get the value after '='
    console.log(extractedId)
      // Find the object with the matching id
      const selectedProduct = ProductsThreeData.find((product) => product.id === Number(extractedId));

      if (selectedProduct) {
        // Extract the required information
        const { img, title, desc } = selectedProduct;

        // Use the img, title, and desc as needed
        console.log(img, title, desc);
      } else {
        console.log('No product found with the provided ID');
      }

  return (
    <>
        <HeaderThree/>
        {extractedId ===1?
        <MoveToAustralia />:
        <GrindingUnit />}
        {/* <PageBanner title={selectedProduct.title} bannerBg={bannerBg} currentPage={selectedProduct.title} />
        <EnquiryForm  />
        <Details selectedProduct={selectedProduct} />
        <FooterForm/> */}
        <FooterThree/>
    </>
  )
}

export default ServiceDetails;