import React from "react";
import { HashLink } from "react-router-hash-link";
import personalBrandingPhoto1 from "../assets/personal1.png";
import personalBrandingPhoto2 from "../assets/personal2.png";

function PersonalBranding() {
  return (
    <div className="bg-[#f3f4f6] dark:bg-[#14081e] p-8 text-[#4c4c4c] dark:text-slate-400">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center text-transparent bg-gradient-to-r from-[#c31b5f] to-[#fad02c] bg-clip-text h-20 font-bold mb-6">
          Personal Branding
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white mb-4">
            What We Do?
          </h2>
          <p className="text-lg mb-4">
            We offer personalized branding services to help you stand out in
            your industry. Our team works with you to develop a unique and
            compelling brand identity that resonates with your target audience.
          </p>
          <div className="flex justify-center items-center">
            <img
              src={personalBrandingPhoto1}
              alt="Personal Branding"
              className="h-96 w-auto rounded-lg shadow-lg mb-4 image-shadow"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:text-white font-semibold mb-4">
            Our Services
          </h2>
          <p className="text-lg mb-4">
            Our personal branding services include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Brand Identity Development</li>
            <li className="mb-2">Social Media Branding</li>
            <li className="mb-2">Content Strategy</li>
            <li className="mb-2">Reputation Management</li>
            <li className="mb-2">Personal Website Design</li>
            <li className="mb-2">Public Relations</li>
          </ul>
          <div className="flex justify-center items-center">
            <img
              src={personalBrandingPhoto2}
              alt="Personal Branding"
              className="h-96 w-auto  rounded-lg shadow-lg mb-4 image-shadow"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:text-white font-semibold mb-4">
            How We Provide Service?
          </h2>
          <p className="text-lg mb-4">
            Our personal branding process ensures you build a strong and
            memorable brand. Here’s how we do it:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              <strong>Consultation:</strong> We start with a detailed
              consultation to understand your goals and vision.
            </li>
            <li className="mb-2">
              <strong>Research:</strong> We conduct thorough research to
              identify your target audience and industry trends.
            </li>
            <li className="mb-2">
              <strong>Strategy Development:</strong> We develop a comprehensive
              branding strategy tailored to your needs.
            </li>
            <li className="mb-2">
              <strong>Implementation:</strong> We create and implement your
              brand identity across various platforms.
            </li>
            <li className="mb-2">
              <strong>Monitoring:</strong> We continuously monitor your brand’s
              performance and make necessary adjustments.
            </li>
            <li className="mb-2">
              <strong>Support:</strong> We offer ongoing support to ensure your
              brand remains relevant and impactful.
            </li>
          </ol>
        </section>

        <section>
          <HashLink
            smooth
            to="/#contact"
            className="text-lg text-[#FAD02C] dark:text-white hover:underline"
          >
            Contact us for more information or to get started on your personal
            branding project.
          </HashLink>
        </section>
      </div>
    </div>
  );
}

export default PersonalBranding;
