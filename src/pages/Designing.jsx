import React from "react";
import { HashLink } from "react-router-hash-link";
import designingPhoto1 from "../assets/designing1.png";
import designingPhoto2 from "../assets/designing2.png";
import { NavLink } from "react-router-dom";

function Designing() {
  return (
    <div className="bg-[#f3f4f6] dark:bg-[#14081e] p-8 text-[#4c4c4c] dark:text-slate-400">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl h-20 text-center text-transparent bg-gradient-to-r from-[#c31b5f] to-[#fad02c] bg-clip-text font-bold mb-6">
          Designing
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl  dark:text-white font-semibold mb-4">
            What We Do?
          </h2>
          <p className="text-lg mb-4">
            We offer a wide range of designing services to create visually
            stunning and effective designs. Our team of experienced designers
            works closely with you to bring your vision to life through creative
            and innovative design solutions.
          </p>
          <div className="flex justify-center items-center">
            <img
              src={designingPhoto1}
              alt="Designing"
              className="h-96 w-auto rounded-lg shadow-lg mb-4 image-shadow"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:text-white font-semibold mb-4">
            Our Services
          </h2>
          <p className="text-lg mb-4">Our designing services include:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Graphic Design</li>
            <li className="mb-2">Logo Design</li>
            <li className="mb-2">UI/UX Design</li>
            <li className="mb-2">Print Design</li>
            <li className="mb-2">Packaging Design</li>
            <li className="mb-2">Illustration</li>
          </ul>
          <div className="flex justify-center items-center">
            <img
              src={designingPhoto2}
              alt="Designing Service"
              className="h-96 w-auto rounded-lg shadow-lg mb-4 image-shadow"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:text-white font-semibold mb-4">
            How We Provide Service?
          </h2>
          <p className="text-lg mb-4">
            Our designing process ensures your project is completed with
            creativity and precision. Here’s how we do it:
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
              <strong>Designing:</strong> Our designers work meticulously to
              create visually appealing and effective designs.
            </li>
            <li className="mb-2">
              <strong>Review:</strong> We share the draft designs with you for
              feedback and make necessary revisions.
            </li>
            <li className="mb-2">
              <strong>Finalization:</strong> We finalize the designs and deliver
              them in the desired format.
            </li>
            <li className="mb-2">
              <strong>Support:</strong> We offer ongoing support to ensure you
              are satisfied with the final product.
            </li>
          </ol>
        </section>

        <section>
          <NavLink
            smooth
            to="/#contact"
            className="text-lg text-[#FAD02C] dark:text-white hover:underline"
          >
            Contact us for more information or to get started on your designing
            project.
          </NavLink>
        </section>
      </div>
    </div>
  );
}

export default Designing;
