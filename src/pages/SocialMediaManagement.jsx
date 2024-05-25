import React from "react";
import { HashLink } from "react-router-hash-link";
import socialMediaPhoto1 from "../assets/social2.png";
import socialMediaPhoto2 from "../assets/social1.png";

function SocialMediaManagement() {
  return (
    <div className="bg-[#f3f4f6] dark:bg-[#14081e] p-8 text-[#4c4c4c] dark:text-slate-400">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center text-transparent bg-gradient-to-r from-[#c31b5f] to-[#fad02c] bg-clip-text h-20 font-bold mb-6">
          Social Media Management
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 dark:text-white">
            What We Do?
          </h2>
          <p className="text-lg mb-4">
            We provide comprehensive social media management services to help
            you establish a strong online presence. Our team of experts develops
            and executes effective social media strategies tailored to your
            brand's needs.
          </p>
          <div className="flex justify-center items-center ">
            <img
              src={socialMediaPhoto1}
              alt="Social Media Management"
              className="h-96 w-auto rounded-lg shadow-lg mb-4 image-shadow"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:text-white font-semibold mb-4">
            Our Services
          </h2>
          <p className="text-lg mb-4">
            Our social media management services include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Content Creation</li>
            <li className="mb-2">Account Management</li>
            <li className="mb-2">Social Media Strategy</li>
            <li className="mb-2">Community Engagement</li>
            <li className="mb-2">Analytics and Reporting</li>
            <li className="mb-2">Paid Advertising</li>
          </ul>
          <div className="flex justify-center items-center">
            <img
              src={socialMediaPhoto2}
              alt="Social Media Services"
              className="h-96 w-auto rounded-lg shadow-lg mb-4 image-shadow"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:text-white font-semibold mb-4">
            How We Provide Service?
          </h2>
          <p className="text-lg mb-4">
            Our social media management process ensures your brand gets noticed.
            Here’s how we do it:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              <strong>Consultation:</strong> We start with a detailed
              consultation to understand your requirements and goals.
            </li>
            <li className="mb-2">
              <strong>Planning:</strong> We create a detailed social media
              strategy tailored to your brand.
            </li>
            <li className="mb-2">
              <strong>Content Creation:</strong> Our team creates engaging and
              high-quality content for your social media channels.
            </li>
            <li className="mb-2">
              <strong>Execution:</strong> We manage and monitor your social
              media accounts, ensuring timely and effective posts.
            </li>
            <li className="mb-2">
              <strong>Engagement:</strong> We interact with your audience,
              responding to comments and messages to build a community.
            </li>
            <li className="mb-2">
              <strong>Analysis:</strong> We provide regular reports and
              analytics to track the performance of your social media efforts.
            </li>
            <li className="mb-2">
              <strong>Optimization:</strong> We continuously optimize our
              strategies based on performance data to achieve better results.
            </li>
          </ol>
        </section>

        <section>
          <HashLink
            smooth
            to="/#contact"
            className="text-lg text-[#FAD02C] dark:text-white hover:underline"
          >
            Contact us for more information or to get started on your social
            media management project.
          </HashLink>
        </section>
      </div>
    </div>
  );
}

export default SocialMediaManagement;
