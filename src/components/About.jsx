import React from 'react';
import { FaCheckCircle, FaStar, FaUsers, FaAward } from 'react-icons/fa';

const About = () => {
    const stats = [
        { icon: <FaUsers size={32} />, number: '500+', label: 'Happy Customers' },
        { icon: <FaStar size={32} />, number: '4.9', label: 'Average Rating' },
        { icon: <FaCheckCircle size={32} />, number: '1000+', label: 'Trips Completed' },
        { icon: <FaAward size={32} />, number: '10+', label: 'Years Experience' }
    ];

    const features = [
        'Wide range of well-maintained vehicles',
        'Professional and experienced drivers',
        'Transparent pricing with no hidden costs',
        'Available 24/7 for your convenience',
        'Comprehensive insurance coverage',
        'Clean and sanitized vehicles',
        'GPS-enabled for safety',
        'Flexible booking and cancellation'
    ];

    return (
        <section id="about" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="animate-slide-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            About
                            <span className="text-gradient-orange"> Purna Car Travels</span>
                        </h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Welcome to <strong>Purna Car Travels</strong>, your premier choice for reliable and comfortable transportation services. With years of experience in the industry, we pride ourselves on delivering exceptional service to our valued customers.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Whether you need a car for a quick local trip, an outstation journey, airport transfer, or bus rental for your group, we have the perfect solution. Our diverse fleet includes everything from compact sedans to spacious tempo travellers and luxury buses.
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            <span>Contact Us Today</span>
                        </a>
                    </div>

                    {/* Stats & Image */}
                    <div>
                        {/* Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 group">
                            <img
                                src="/images/fleet-about.png"
                                alt="Purna Car Travels Fleet"
                                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Your Journey, Our Priority</h3>
                                <p className="text-gray-200">Serving with excellence since years</p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-6 text-center border-2 border-orange-100 card-hover"
                                >
                                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-orange-500 to-blue-600 text-white mb-3">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
