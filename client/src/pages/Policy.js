import React from "react";
import Layout from "./../components/layout/Layout";

const Policy = () => {
  return (
    <Layout title="Our Privacy Policies">
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpg"
            alt="contactus"
            style={{ width: "69%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            <b>
              1. Data Collection and Usage: We collect personal information such
              as name, email address, and payment details solely for the purpose
              of processing orders and providing customer support on our
              website. We do not share this information with third parties
              unless required by law.
            </b>
          </p>
          <p>
            <b>
              2. Cookies and Tracking: We use cookies and similar tracking
              technologies to enhance your browsing experience and personalize
              content on our website. These technologies may collect information
              about your device, browsing activities, and preferences. You can
              opt out of cookie tracking through your browser settings.
            </b>
          </p>
          <p>
            <b>
              3. Security Measures: We implement industry-standard security
              measures to protect your personal information from unauthorized
              access, disclosure, alteration, or destruction on our website.
              However, please be aware that no method of transmission over the
              internet or electronic storage is 100% secure.
            </b>
          </p>
          <p>
            <b>
              4. Third-Party Services: Our website may contain links to
              third-party websites or services that are not owned or controlled
              by us. We are not responsible for the privacy practices or content
              of these third-party sites. We encourage you to review the privacy
              policies of any third-party services before providing them with
              your personal information.
            </b>
          </p>
          <p>
            <b>
              5. Children's Privacy: Our website is not intended for use by
              children under the age of 13. We do not knowingly collect personal
              information from children. If you are a parent or guardian and
              believe that your child has provided us with personal information,
              please contact us immediately, and we will take steps to remove
              such information from our systems.
            </b>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
