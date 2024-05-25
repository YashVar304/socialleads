import React from "react";
import { HashLink } from "react-router-hash-link";
import webDevPhoto1 from "../assets/webdev1.png";
import webDevPhoto2 from "../assets/webdev2.png";

function WebDevelopment() {
  return (
    <div className="bg-[#f3f4f6] dark:bg-[#14081e] p-8 text-[#4c4c4c] dark:text-slate-400">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center  text-transparent bg-gradient-to-r from-[#c31b5f] to-[#fad02c] bg-clip-text font-bold mb-6">
          Web Development
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl dark:text-white font-semibold mb-4">
            What We Do?
          </h2>
          <p className="text-lg mb-4">
            We offer comprehensive web development services to create stunning,
            responsive, and user-friendly websites. Our team of experienced
            developers uses the latest technologies and best practices to ensure
            your website not only looks great but also performs flawlessly.
          </p>
          <div className="w-full  flex items-center justify-center">
            <img
              src={webDevPhoto1}
              alt="Web Development"
              className="w-auto h-96 rounded-lg shadow-lg mb-4 image-shadow"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:text-white font-semibold mb-4">
            Our Services
          </h2>
          <p className="text-lg mb-4">Our web development services include:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Custom Website Development</li>
            <li className="mb-2">E-commerce Solutions</li>
            <li className="mb-2">Content Management Systems (CMS)</li>
            <li className="mb-2">Responsive Web Design</li>
            <li className="mb-2">Web Application Development</li>
            <li className="mb-2">Maintenance and Support</li>
          </ul>
          <div className="w-full flex items-center justify-center">
            <img
              src={webDevPhoto2}
              alt="Web Development"
              className="h-96 w-auto rounded-lg shadow-lg mb-4 image-shadow"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:text-white font-semibold mb-4">
            How We Provide Service?
          </h2>
          <p className="text-lg mb-4">
            Our web development process is designed to ensure your project is
            completed on time and to your satisfaction. Here’s how we do it:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              <strong>Consultation:</strong> We start with a detailed
              consultation to understand your requirements and goals.
            </li>
            <li className="mb-2">
              <strong>Planning:</strong> We create a detailed project plan
              outlining the scope, timeline, and deliverables.
            </li>
            <li className="mb-2">
              <strong>Design:</strong> Our designers create a visually appealing
              and user-friendly design for your website.
            </li>
            <li className="mb-2">
              <strong>Development:</strong> Our developers bring the design to
              life using the latest technologies and best practices.
            </li>
            <li className="mb-2">
              <strong>Testing:</strong> We thoroughly test your website to
              ensure it’s bug-free and performs well.
            </li>
            <li className="mb-2">
              <strong>Launch:</strong> We launch your website and provide
              ongoing support to ensure its success.
            </li>
          </ol>
        </section>

        <section>
          <HashLink
            smooth
            to="/#contact"
            className="text-lg text-[#FAD02C] dark:text-white hover:underline"
          >
            Contact us for more information or to get started on your web
            development project.
          </HashLink>
        </section>
      </div>
    </div>
  );
}

export default WebDevelopment;
