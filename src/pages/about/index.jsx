import React from "react";

const About = () => {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#184e77] mb-8">
          About Us
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          We create high-quality products designed for comfort, confidence, and
          everyday style. Our mission is to deliver pieces that feel as good as
          they look — crafted with care and attention to detail.
        </p>

        <p className="text-gray-600 leading-relaxed text-lg mb-10">
          From modern designs to timeless classics, we focus on bringing you
          collections that fit your lifestyle. Because fashion is more than
          clothing — it’s self-expression.
        </p>

        {/* CTA */}
        <button className="px-8 py-3 bg-[#184e77] text-white rounded-2xl hover:bg-[#ffb700] transition">
          Explore Our Products
        </button>

      </div>
    </section>
  );
};

export default About;
