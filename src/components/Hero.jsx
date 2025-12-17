import React from 'react';
import { FaWhatsapp, FaPhone, FaClock } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-orange-600/80 z-10"></div>
                <img
                    src="/images/hero-background.png"
                    alt="Luxury Cars"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
                <div className="animate-slide-up">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20">
                        <FaClock className="text-orange-400" />
                        <span className="text-white font-semibold">24/7 Service Available</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Premium Car & Bus
                        <span className="block text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text">
                            Rentals
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-gray-100 mb-4 max-w-3xl mx-auto font-light">
                        All Types of Vehicles for Your Journey
                    </p>
                    <p className="text-lg md:text-xl text-orange-300 mb-12 font-semibold">
                        Innova • Swift • Etios • Tempo Traveller & More
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a
                            href="https://wa.me/919030664487?text=Hello%2C%20I%20would%20like%20to%20book%20a%20vehicle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
                        >
                            <FaWhatsapp size={24} className="group-hover:animate-bounce" />
                            <span>Book on WhatsApp</span>
                        </a>

                        <a
                            href="tel:9030664487"
                            className="group flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center border-2 border-white/30"
                        >
                            <FaPhone size={20} className="group-hover:animate-pulse" />
                            <span>Call Now</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
