import React from 'react';
import { FaClock, FaCar, FaShieldAlt, FaDollarSign } from 'react-icons/fa';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaClock size={40} />,
            title: '24/7 Availability',
            description: 'Round-the-clock service for your convenience. Book anytime, anywhere.',
            color: 'from-orange-500 to-orange-600',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200'
        },
        {
            icon: <FaCar size={40} />,
            title: 'All Vehicle Types',
            description: 'Wide range of cars and buses to match your needs and budget.',
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200'
        },
        {
            icon: <FaShieldAlt size={40} />,
            title: 'Professional Service',
            description: 'Experienced drivers and well-maintained vehicles for a safe journey.',
            color: 'from-orange-600 to-orange-700',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200'
        }
    ];

    return (
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Why Choose
                        <span className="text-gradient-orange"> Purna Car Travels</span>?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Your trusted partner for comfortable and reliable transportation
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.bgColor} ${feature.borderColor} border-2 rounded-2xl p-8 card-hover group cursor-pointer`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
