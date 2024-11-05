// src/pages/About.js
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-md mt-12">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">About TextLink</h1>
          <p className="mt-2 text-gray-600">Your go-to tool for editing and transforming text with ease.</p>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-2 text-gray-600">
            At TextLink, we believe that text transformation should be simple, efficient, and accessible. Our mission is to provide a user-friendly tool that helps you edit, format, and transform your text quickly, saving you time and effort.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">What We Offer</h2>
          <ul className="mt-2 space-y-4 text-gray-600 list-disc list-inside">
            <li>Seamless uppercase and lowercase text conversions with one click.</li>
            <li>Customizable text transformation options to suit various needs.</li>
            <li>A streamlined interface that lets you focus on your work.</li>
            <li>Consistent support for frequent updates and new features.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">Meet the Creator</h2>
          <p className="mt-2 text-gray-600">
            TextLink was created by <strong>@harshitj183</strong>, a passionate developer and tech enthusiast committed to making simple yet powerful tools. With a focus on UI/UX and ease of use, this app reflects a dedication to efficient web solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">Why Choose TextLink?</h2>
          <p className="mt-2 text-gray-600">
            TextLink offers a reliable, no-fuss text editing experience designed to enhance productivity. Whether you're a developer, writer, or everyday user, TextLink brings essential text tools at your fingertips.
          </p>
        </section>

        <footer className="text-center mt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TextLink. All rights reserved. Built with passion by @harshitj183.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;
