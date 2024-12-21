import React, { useState } from "react";
import Swal from "sweetalert2";
import "./contact.css";
import CountriesTiles from "../OurCompany/CountriesTile/CountriesTiles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,}$/; 
    return phoneRegex.test(phone);
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name) newErrors.name = "This field cannot be empty!";
    if (!formData.email) {
      newErrors.email = "This field cannot be empty!";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please write a valid email!";
    }
    if (!formData.phone) {
      newErrors.phone = "This field cannot be empty!";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please write a valid phone number!";
    }
    if (!formData.message) newErrors.message = "This field cannot be empty!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="pb-32">
      <div className="w-[100%] lg:w-[1000px] mx-auto px-8 py-10 bg-[#e88069] rounded-none lg:rounded-2xl flex flex-col lg:flex-row justify-between items-center contactBg gap-6 lg:gap-0">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-[50px] font-medium text-white leading-[40px]">
            Contact Us
          </h2>
          <p className="mt-8 text-white text-[16px]">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>

        <div className="flex-1 px-8 w-full">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className={`w-full pl-6 py-4 bg-transparent text-white border-b ${
                  errors.name ? "border-red-500" : "border-white"
                } focus:border-b-4 focus:outline-none placeholder:text-gray-300 placeholder:font-medium`}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                className={`w-full mt-4 pl-6 py-4 bg-transparent text-white border-b ${
                  errors.email ? "border-red-500" : "border-white"
                } focus:border-b-4 focus:outline-none placeholder:text-gray-300 placeholder:font-medium`}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                className={`w-full mt-4 pl-6 py-4 bg-transparent text-white border-b ${
                  errors.phone ? "border-red-500" : "border-white"
                } focus:border-b-4 focus:outline-none placeholder:text-gray-300 placeholder:font-medium`}
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <textarea
                className={`w-full mt-4 pl-6 py-4 bg-transparent text-white border-b ${
                  errors.message ? "border-red-500" : "border-white"
                } focus:border-b-4 focus:outline-none placeholder:text-gray-300 placeholder:font-medium`}
                name="message"
                placeholder="Message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div className="flex justify-center lg:justify-end">
              <button
                type="submit"
                className="uppercase font-medium mt-8 px-8 py-4 rounded-xl bg-white text-[#1c1b1d] hover:bg-[#ffac99] hover:text-white transition duration-500 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <CountriesTiles></CountriesTiles>
    </div>
  );
};

export default Contact;
