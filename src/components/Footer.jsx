import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Fleet', href: '#fleet' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    const services = [
        'Local Car Rentals',
        'Outstation Trips',
        'Airport Transfers',
        'Group Rentals',
        'Corporate Services',
        'Wedding Packages'
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <img
                                src="/images/uploaded_image_1_1765795170484.png"
                                alt="Purna Car Travels"
                                className="h-12 w-auto"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text">
                            PURNA CAR TRAVELS
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Your trusted partner for premium car and bus rentals. Available 24/7 for all your transportation needs.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://wa.me/919030664487" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-300">
                                <FaWhatsapp size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors duration-300">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-orange-400">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="mr-2 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-orange-400">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index} className="text-gray-300 text-sm flex items-start">
                                    <span className="text-orange-400 mr-2">•</span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-orange-400">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <FaPhone className="text-orange-400 mt-1 flex-shrink-0" />
                                <div>
                                    <a href="tel:9030664487" className="text-gray-300 hover:text-orange-400 transition-colors block">
                                        90306 64487
                                    </a>
                                    <a href="tel:9052904949" className="text-gray-300 hover:text-orange-400 transition-colors block">
                                        90529 04949
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <FaEnvelope className="text-orange-400 mt-1 flex-shrink-0" />
                                <a href="mailto:venkatachowdary9030@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors text-sm break-all">
                                    venkatachowdary9030@gmail.com
                                </a>
                            </div>
                            <div className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-orange-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-300 text-sm">
                                    Mangalagiri, Guntur District
                                </p>
                            </div>
                            <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-lg p-4 border border-orange-400/30">
                                <p className="text-orange-300 font-bold text-sm">24/7 Available</p>
                                <p className="text-gray-300 text-xs">Open All Days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} Purna Car Travels. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm mt-2 md:mt-0">
                            Crafted with <span className="text-orange-400">❤</span> for premium travel experiences
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
