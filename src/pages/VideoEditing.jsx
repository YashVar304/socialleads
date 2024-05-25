import React from "react";
import { HashLink } from "react-router-hash-link";
import videoEditingPhoto1 from "../assets/video1.png";
import videoEditingPhoto2 from "../assets/video2.png";

function VideoEditing() {
  return (
    <div className="bg-[#f3f4f6] dark:bg-[#14081e] p-8 text-[#4c4c4c] dark:text-slate-400">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl h-20 text-center text-transparent bg-gradient-to-r from-[#c31b5f] to-[#fad02c] bg-clip-text font-bold mb-6">
          Video Editing
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white mb-4">
            What We Do?
          </h2>
          <p className="text-lg mb-4">
            We provide professional video editing services to help you create
            engaging and high-quality videos. Our team of skilled editors uses
            advanced software and techniques to bring your vision to life.
          </p>
          <div className="flex justify-center items-center">
            <img
              src={videoEditingPhoto1}
              alt="Video Editing"
              className="h-96 w-auto rounded-lg shadow-lg mb-4 image-shadow"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg mb-4">Our video editing services include:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Corporate Video Editing</li>
            <li className="mb-2">Event Video Editing</li>
            <li className="mb-2">Social Media Video Editing</li>
            <li className="mb-2">Promotional Video Editing</li>
            <li className="mb-2">Documentary Editing</li>
            <li className="mb-2">Music Video Editing</li>
          </ul>
          <div className="flex justify-center items-center">
            <img
              src={videoEditingPhoto2}
              alt="Video Editing"
              className="h-96 w-auto rounded-lg shadow-lg mb-4 image-shadow"
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:text-white font-semibold mb-4">
            How We Provide Service?
          </h2>
          <p className="text-lg mb-4">
            Our video editing process ensures your project is completed to the
            highest standard. Here’s how we do it:
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
              <strong>Editing:</strong> Our editors work meticulously to craft a
              compelling and high-quality video.
            </li>
            <li className="mb-2">
              <strong>Review:</strong> We share the draft video with you for
              feedback and make necessary revisions.
            </li>
            <li className="mb-2">
              <strong>Finalization:</strong> We finalize the video and deliver
              it in the desired format.
            </li>
            <li className="mb-2">
              <strong>Support:</strong> We offer ongoing support to ensure you
              are satisfied with the final product.
            </li>
          </ol>
        </section>

        <section>
          <HashLink
            smooth
            to="/#contact"
            className="text-lg text-[#FAD02C] dark:text-white hover:underline"
          >
            Contact us for more information or to get started on your video
            editing project.
          </HashLink>
        </section>
      </div>
    </div>
  );
}

export default VideoEditing;
