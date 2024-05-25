import React, { useState } from "react";
import Button from "./Button";

function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for example, send the data to a server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  return (
    <div className="max-w-md mx-4 sm:mx-auto  p-6 bg-[#ffeeac] rounded-lg shadow-md my-16">
      <h2 className="text-2xl font-semibold  mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label htmlFor="name" className="block text-gray-700 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#C31B5F] transition duration-150 ease-in-out"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#C31B5F] transition duration-150 ease-in-out"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="contact"
            className="block text-gray-700 font-semibold "
          >
            Contact no.
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#C31B5F] transition duration-150 ease-in-out"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold "
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#C31B5F] transition duration-150 ease-in-out"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <Button
            text="Submit"
            className={
              "bg-[#C31B5F] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-150 ease-in-out"
            }
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default InquiryForm;
