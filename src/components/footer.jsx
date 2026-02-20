import React from 'react'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#00b4d8] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <div className=' flex flex-col items-center'>
              <a href='/'>
                <img alt='logo' src={Logo} height={'100%'} width={150} className='bg-[#fff] p-2 rounded-xl'/>
              </a>
            </div>
          <p className="py-2 text-sm text-white/80">
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
            <li className="hover:text-[#ffb700] cursor-pointer"><a>Products</a></li>
            <li className="hover:text-[#ffb700] cursor-pointer"><a>Contact</a></li>
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