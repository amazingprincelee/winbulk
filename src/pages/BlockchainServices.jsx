import React, { useEffect } from "react";

function BlockchainServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container lottery-page">
      <div>
        <div className="status-container">
          <h1 className="text-center status">STATUS: Under Construction</h1>
        </div>

        

        <div className="content">
          <h1>ABOUT DAPP SERVICES</h1>
          <p>
            "Empowering Utilities. Unleashing Prosperity." Description: Our
            innovative server is dedicated to helping individuals and businesses
            create and enhance their own utilities, while also providing a
            platform for buying and selling utility services using our exclusive
            WBUK token. We enable you to harness the power of utility creation,
            empowering you to thrive and succeed in today's dynamic marketplace.
            With our server, you can unlock limitless possibilities and drive
            your own prosperity forward.
          </p>
          <p>
            Our Super Tech Blockchain development service Utility is dedicated
            to providing comprehensive utility development and maintenance
            services for other projects. We have a highly skilled team of
            blockchain developers who are experienced in creating and enhancing
            utilities on various blockchain platforms.
          </p>
          <p>
            Our utility development services encompass a wide range of features,
            including smart contract development, token creation, decentralized
            application (DApp) development, wallet integration, and
            blockchain-based solutions for specific business needs. We work
            closely with project teams to understand their requirements and
            tailor our services to meet their unique goals.
          </p>
         
          <p>
            Beyond initial development, we also offer ongoing utility
            maintenance services. This includes monitoring utility performance,
            implementing upgrades and enhancements, ensuring security measures
            are up to date, and providing technical support to address any
            issues that may arise.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default BlockchainServices;
