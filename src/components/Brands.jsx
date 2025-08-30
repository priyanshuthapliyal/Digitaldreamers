import React from "react";

export default function Brands() {
  return (
    <section className="relative py-24 px-6 z-10">
      <h2 className="text-4xl font-bold mb-12 text-center">Brands We’ve Worked With</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <img src="https://via.placeholder.com/120x60" alt="Brand 1" className="opacity-80 hover:opacity-100 transition"/>
        <img src="https://via.placeholder.com/120x60" alt="Brand 2" className="opacity-80 hover:opacity-100 transition"/>
        <img src="https://via.placeholder.com/120x60" alt="Brand 3" className="opacity-80 hover:opacity-100 transition"/>
        <img src="https://via.placeholder.com/120x60" alt="Brand 4" className="opacity-80 hover:opacity-100 transition"/>
        <img src="https://via.placeholder.com/120x60" alt="Brand 5" className="opacity-80 hover:opacity-100 transition"/>
      </div>
    </section>
  );
}
