import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In
                        <span className="text-gradient-blue"> Touch</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We're here to serve you 24/7. Reach out anytime!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Phone */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg card-hover border-2 border-orange-100 group">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                                        <FaPhone size={24} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Numbers</h3>
                                    <a href="tel:9030664487" className="block text-lg text-gray-700 hover:text-orange-500 font-semibold mb-1">
                                        90306 64487
                                    </a>
                                    <a href="tel:9052904949" className="block text-lg text-gray-700 hover:text-orange-500 font-semibold">
                                        90529 04949
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg card-hover border-2 border-blue-100 group">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                                        <FaEnvelope size={24} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                                    <a href="mailto:venkatachowdary9030@gmail.com" className="text-lg text-gray-700 hover:text-blue-500 break-all">
                                        venkatachowdary9030@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg card-hover border-2 border-orange-100 group">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                                        <FaMapMarkerAlt size={24} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                                    <p className="text-gray-700 mb-3">Mangalagiri, Guntur District</p>
                                    <a
                                        href="https://www.google.com/maps?q=16.4283979,80.5782993"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-semibold"
                                    >
                                        <span>Get Directions</span>
                                        <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl p-6 shadow-xl text-white">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                                        <FaClock size={24} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                                    <p className="text-lg font-semibold">24 Hours - Open All Days</p>
                                    <p className="text-sm text-blue-100 mt-2">Monday to Sunday: Always Available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map & WhatsApp */}
                    <div className="space-y-6">
                        {/* Google Map */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 h-80">
                            <iframe
                                src="https://www.google.com/maps?q=16.4283979,80.5782993&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Purna Car Travels Location"
                            ></iframe>
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-xl text-white text-center">
                            <FaWhatsapp size={64} className="mx-auto mb-4 animate-bounce" />
                            <h3 className="text-2xl font-bold mb-3">Quick Booking via WhatsApp</h3>
                            <p className="text-green-100 mb-6">Get instant quotes and book your ride in seconds!</p>
                            <a
                                href="https://wa.me/919030664487?text=Hello%2C%20I%20would%20like%20to%20book%20a%20vehicle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-3 bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                <FaWhatsapp size={24} />
                                <span>Chat on WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
