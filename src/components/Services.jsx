import React from 'react';
import { FaMapMarkedAlt, FaBuilding, FaUserTie, FaRoute, FaPlane, FaUsers } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaMapMarkedAlt size={40} />,
            title: 'Local Car Rentals',
            description: 'Hourly and daily rentals for city travel. Perfect for shopping, meetings, and local trips.',
            gradient: 'from-orange-500 to-orange-600',
            shadowColor: 'shadow-orange-500/50'
        },
        {
            icon: <FaRoute size={40} />,
            title: 'Outstation Trips',
            description: 'Comfortable long-distance travel to nearby cities and tourist destinations.',
            gradient: 'from-blue-500 to-blue-600',
            shadowColor: 'shadow-blue-500/50'
        },
        {
            icon: <FaPlane size={40} />,
            title: 'Airport Transfers',
            description: 'Reliable pickup and drop services to all major airports. Never miss your flight!',
            gradient: 'from-orange-600 to-orange-700',
            shadowColor: 'shadow-orange-600/50'
        },
        {
            icon: <FaUsers size={40} />,
            title: 'Group & Bus Rentals',
            description: 'Tempo travellers and buses for family trips, corporate outings, and events.',
            gradient: 'from-blue-600 to-blue-700',
            shadowColor: 'shadow-blue-600/50'
        },
        {
            icon: <FaBuilding size={40} />,
            title: 'Corporate Rentals',
            description: 'Premium vehicles for business meetings, conferences, and executive transport.',
            gradient: 'from-orange-500 to-blue-500',
            shadowColor: 'shadow-orange-500/50'
        },
        {
            icon: <FaUserTie size={40} />,
            title: 'Wedding Services',
            description: 'Special packages for weddings with decorated vehicles and professional chauffeurs.',
            gradient: 'from-blue-500 to-orange-500',
            shadowColor: 'shadow-blue-500/50'
        }
    ];

    return (
        <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our
                        <span className="text-gradient-orange"> Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive transportation solutions for all your needs
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-2xl p-8 shadow-xl card-hover border border-gray-100 overflow-hidden group"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 ${service.shadowColor} shadow-lg`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-500 group-hover:to-blue-600 transition-all duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <a
                                    href={`https://wa.me/919030664487?text=I need information about ${service.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:underline`}
                                >
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Services;
