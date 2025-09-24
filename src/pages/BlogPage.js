import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./Blog7";
import HeaderThree from "../Components/Header/HeaderThree";
import PageBanner from "../Components/PageBanner/index";
import bannerBg from "../assets/img/page-banner.jpg";
import FooterThree from "../Components/Footer/FooterThree";
import FooterForm from "../Components/Contact/FooterForm";
import "./Blog7.css";

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogPosts.find((b) => b.id === parseInt(id));

  if (!blog) return <p>Blog not found!</p>;

  return (
    <>
      <HeaderThree />
      <PageBanner
        title={blog.title}
        bannerBg={bannerBg}
        currentPage="Blog Details"
      />

      <div className="blog7-container">
        <h1>{blog.title}</h1>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          style={{ width: "100%", margin: "20px 0" }}
        />
        <div className="blog-content">{blog.content}</div>
      </div>

      <FooterForm />
      <FooterThree />
    </>
  );
};

export default BlogPage;
