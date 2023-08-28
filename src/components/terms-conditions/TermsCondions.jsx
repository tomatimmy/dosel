import Link from "next/link";

const TermsCondions = () => {
  const termsContent = [
    {
      id: 1,
      title: "Privacy Policy",
      text1: `Last Updated: [Date]

      Welcome to Dosel.cr ("us", "we", or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [www.yourrealestatewebsite.com], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully.`,
      text2: `If you do not agree with the terms of this Privacy Policy, please do not access the site.`,
    },
    {
      id: 2,
      title: "Information We Collect",
      text1: `We collect information that you provide directly to us. For example, we collect information when you fill out a contact form, subscribe to our newsletter, or interact with our website's features and functionalities. The types of information we may collect include your name, email address, phone number, and any other information you choose to provide.`,
      text2: `We will never share your information with third parties.`,
    },
    {
      id: 3,
      title: "Your Choices",
      text1: `You can update your personal information or unsubscribe from our communications at any time by contacting us at [email address]. You may also have rights under applicable data protection laws to access, correct, or delete your personal information.`,
    },
    {
      id: 4,
      title: "Security",
      text1: `We are committed to ensuring the security of your personal information. However, please note that no transmission of data over the internet or any other public network can be guaranteed to be 100% secure.`,
    },
    {
      id: 5,
      title: "Changes to this Privacy Policy",
      text1: `We may update our Privacy Policy from time to time. The updated version will be posted on this page with the "Last Updated" date revised accordingly.`,
    },
    {
      id: 6,
      title: "Terms & Conditions",
      text1: `These terms and conditions outline the rules and regulations for the use of our website [www.dosel.cr], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). By accessing or using the Site, you agree to these terms and conditions. If you do not agree with all of these terms, please do not access or use the Site.`,
    },
    {
    id: 7,
      title: "Intellectual Property",
      text1: `All content on this website, including but not limited to text, graphics, images, videos, logos, and other materials, is the property of www.dosel.cr or its content suppliers and protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.`,
    },
    {
      id: 8,
        title: "Limitation of Liability",
        text1: `To the fullest extent permitted by applicable law, [Your Real Estate Website] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from (i) your use or inability to use the Site; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein.`,
      },
      {
        id: 8,
          title: "Changes to These Terms and Conditions",
          text1: `We may update our Terms and Conditions from time to time. The updated version will be posted on this page with the "Last Updated" date revised accordingly.`,
        },
        {
          id: 9,
            title: "Contact us",
            text1: `If you have any questions about these Privacy Policies or Terms & Conditions, please contact us at info@dosel.cr`,
          },
    
  ];

  const navigationList = [
    { id: 1, routeLink: "#", name: "Welcome Text" },
    { id: 2, routeLink: "#", name: "Our Terms" },
    { id: 3, routeLink: "#", name: "Conditions" },
    { id: 4, routeLink: "#", name: "Your Privacy" },
    { id: 5, routeLink: "#", name: "Informations We Collect" },
  ];

  return (
    <div className="row">
      <div className="col-lg-8 col-xl-8">
        <div className="terms_condition_grid">
          {termsContent.map((item) => (
            <div className="grids mb30" key={item.id}>
              <h4>{item.title}</h4>
              <p className="mb20">{item.text1}</p>
              <p>{item.text2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsCondions;
