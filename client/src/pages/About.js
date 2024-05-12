import React from "react";
import Layout from "./../components/layout/Layout";

const About = () => {
  return (
    <Layout title='About our website '>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <b>Welcome to XYZ, where shopping meets convenience and quality! Founded by Shivansh Bahl, XYZ is a passion project born out of a desire to redefine the online shopping experience. <br/>
          At XYZ, we believe that shopping should be more than just a transaction; it should be an enjoyable journey filled with discovery and satisfaction. Our platform is designed to bring you a curated selection of products that are not only stylish and functional but also reflect our commitment to excellence.<br/>
          Driven by a dedication to customer satisfaction, we strive to make your shopping experience seamless and memorable. Whether you're searching for the latest fashion trends, high-quality electronics, or unique home decor items, XYZ has you covered.<br/>
          But XYZ is more than just an ecommerce website. We're a community of like-minded individuals who share a passion for innovation, creativity, and exceptional customer service. Our team works tirelessly to source the best products, ensure speedy deliveries, and provide unparalleled customer support every step of the way.<br/>
          Join us on this journey as we continue to grow and evolve, bringing you the best of what the world has to offer, one click at a time. Thank you for choosing XYZ - where shopping is not just a task, but a delightful experience.</b>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
