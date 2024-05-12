import React from "react";
import Layout from "./../components/layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title="Contact Us">
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            <b>
              For any query about the info or our product
              <br />
              You can reach us out via:
            </b>
          </p>
          <p className="mt-3">
            <BiMailSend /> : shivbahl2003@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 9417330840
          </p>
          <p className="mt-3">
            <BiSupport /> : Toll Free Number
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
