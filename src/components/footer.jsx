import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#184e77] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">YourBrand</h2>
          <p className="text-sm text-white/80">
            Quality products made with passion and care.  
            Bringing style and confidence everywhere.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="hover:text-[#ffb700] cursor-pointer"><a href='/'>Home</a></li>
            {/* <li className="hover:text-[#ffb700] cursor-pointer">Categories</li> */}
            <li className="hover:text-[#ffb700] cursor-pointer">Products</li>
            <li className="hover:text-[#ffb700] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Email: info@yourbrand.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Location: Worldwide</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-white/70">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer