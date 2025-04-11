import React from 'react';
import logo2 from '../assets/logo2.png';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
return (
    <footer className="bg-white border-t border-gray-300 w-full bottom-0 left-0 right-0">
        <div className="w-full px-6 py-8 flex flex-col md:flex-row justify-between items-start">
                    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 w-full md:w-1/3">
                        <img src={logo2} alt="Logo" className="h-24 object-contain mb-4" />
                        <div className="flex space-x-4 text-gray-700">
                            <FaFacebookF className="hover:text-black cursor-pointer" />
                            <FaLinkedinIn className="hover:text-black cursor-pointer" />
                            <FaYoutube className="hover:text-black cursor-pointer" />
                            <FaInstagram className="hover:text-black cursor-pointer" />
                        </div>
                    </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-gray-700 w-full md:w-2/3">
                <div>
                    <h4 className="font-semibold mb-2">Helpful Links</h4>
                    <ul className="space-y-1">
                        <li>Submit Product Ideas</li>
                        <li>Product Registration</li>
                        <li>Recall & Safety</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">About Us</h4>
                    <ul className="space-y-1">
                        <li>Mattel Corporate</li>
                        <li>Careers</li>
                        <li>Investor Relations</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Legal</h4>
                    <ul className="space-y-1">
                        <li>Terms & Conditions</li>
                        <li>Privacy Statement</li>
                        <li>Cookies & Technology</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);
};

export default Footer;
