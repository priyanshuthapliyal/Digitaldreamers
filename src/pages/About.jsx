import React from "react";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-[#f73002] mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold">MyDigitalDreamers</span>, we
          specialize in creating impactful brand stories through photography,
          design, and digital marketing. Our team is passionate about helping
          businesses connect with their audience in meaningful ways.
        </p>
      </div>
    </section>
  );
}
