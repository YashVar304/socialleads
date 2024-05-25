import React from "react";
import { HashLink } from "react-router-hash-link";
import leadGenerationPhoto1 from "../assets/lead1.png";
import leadGenerationPhoto2 from "../assets/lead2.png";

function LeadGeneration() {
  return (
    <div className="bg-[#f3f4f6] dark:bg-[#14081e] p-8 text-[#4c4c4c] dark:text-slate-400">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center text-transparent bg-gradient-to-r from-[#c31b5f] to-[#fad02c] bg-clip-text font-bold mb-6">
          Lead Generation
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl dark:text-white font-semibold mb-4">
            What We Do?
          </h2>
          <p className="text-lg mb-4">
            Our lead generation services help you identify and capture potential
            customers, converting them into valuable leads. We use innovative
            strategies and tools to attract and engage your target audience.
          </p>
          <div className="flex justify-center items-center">
            <img
              src={leadGenerationPhoto1}
              alt="Lead Generation"
              className="h-96 w-auto rounded-lg shadow-lg mb-4 image-shadow"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:text-white font-semibold mb-4">
            Our Services
          </h2>
          <p className="text-lg mb-4">Our lead generation services include:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Targeted Outreach</li>
            <li className="mb-2">Content Marketing</li>
            <li className="mb-2">Email Campaigns</li>
            <li className="mb-2">SEO and SEM</li>
            <li className="mb-2">Landing Page Optimization</li>
            <li className="mb-2">Social Media Advertising</li>
          </ul>
          <div className="flex justify-center items-center">
            <img
              src={leadGenerationPhoto2}
              alt="Lead Generation"
              className="h-96 w-auto rounded-lg shadow-lg mb-4 image-shadow"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:text-white font-semibold mb-4">
            How We Provide Service?
          </h2>
          <p className="text-lg mb-4">
            Our lead generation process ensures you get high-quality leads that
            can turn into loyal customers. Here’s how we do it:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              <strong>Consultation:</strong> We start with a detailed
              consultation to understand your business goals and target
              audience.
            </li>
            <li className="mb-2">
              <strong>Strategy Development:</strong> We develop a customized
              lead generation strategy tailored to your needs.
            </li>
            <li className="mb-2">
              <strong>Implementation:</strong> We execute the strategy using a
              mix of marketing techniques to attract potential leads.
            </li>
            <li className="mb-2">
              <strong>Lead Capture:</strong> We use optimized landing pages and
              forms to capture lead information.
            </li>
            <li className="mb-2">
              <strong>Nurturing:</strong> We engage and nurture leads through
              targeted email campaigns and content.
            </li>
            <li className="mb-2">
              <strong>Analysis:</strong> We provide regular reports and
              analytics to track the performance of your lead generation
              efforts.
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
            Contact us for more information or to get started on your lead
            generation project.
          </HashLink>
        </section>
      </div>
    </div>
  );
}

export default LeadGeneration;
