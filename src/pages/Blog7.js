import React from "react";
import { Link } from "react-router-dom";
import HeaderThree from "../Components/Header/HeaderThree";
import PageBanner from "../Components/PageBanner/index";
import bannerBg from "../assets/img/page-banner.jpg";
import FooterThree from "../Components/Footer/FooterThree";
import FooterForm from "../Components/Contact/FooterForm";
import "./Blog7.css";
import rollCrusherImg from "../assets/img/home4/about.jpg";
import cementPlantImg from "../assets/img/home4/about.jpg";
import crusherMaintenanceImg from "../assets/img/home4/about.jpg";


// Add blogs here
const blogPosts = [
  {
    id: 1,
    title: "JM Gears Roll Crushers",
    summary: "Roll crushers ka short summary...",
    content: (
      <>
        <p>Roll crushers ek type ka crusher hai jo raw material ko efficiently crush karta hai.</p>
        <ul>
          <li>High efficiency</li>
          <li>Low maintenance</li>
          <li>Consistent output</li>
        </ul>
       
      </>
    ),
    imageUrl: rollCrusherImg,
  },
  {
    id: 2,
    title: "Cement Plant Design",
    summary: "Cement plant ke liye basic summary...",
    content: (
      <>
        <p>Cement plant design me modern techniques aur automation ka use hota hai.</p>
        <ol>
          <li>Energy efficiency</li>
          <li>Optimal layout</li>
          <li>Safety measures</li>
        </ol>
       
      </>
    ),
    imageUrl: cementPlantImg,
  },
  {
    id: 3,
    title: "Crusher Maintenance Tips",
    summary: "Crusher maintenance ka short summary...",
    content: (
      <>
        <p>Crusher ki proper maintenance se machine life aur performance improve hoti hai.</p>
        <ul>
          <li>Regular lubrication</li>
          <li>Check wear parts</li>
          <li>Clean dust and debris</li>
        </ul>
  
      </>
    ),
    imageUrl: crusherMaintenanceImg,
  },


  {
    id: 4,
    title: "new blog 04",
    summary: "new blog 04 summary ",
    content: (
      <>
        <p>Crusher ki proper maintenance se machine life aur performance improve hoti hai.</p>
        <ul>
          <li>Regular lubrication</li>
          <li>Check wear parts</li>
          <li>Clean dust and debris</li>
        </ul>
  
      </>
    ),
    imageUrl: crusherMaintenanceImg,
  },

  // Add more blogs here
];

const Blog7 = () => {
  return (
    <>
      <HeaderThree />
      <PageBanner title="Blogs" bannerBg={bannerBg} currentPage="Blog" />

      <div className="blog7-container">
        <h1>Latest Blogs</h1>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <img src={post.imageUrl} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <Link to={`/blog/${post.id}`} className="read-more-btn">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>

      <FooterForm />
      <FooterThree />
    </>
  );
};

export default Blog7;
export { blogPosts };
