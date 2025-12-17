import React from 'react';
import { FaCar, FaBus } from 'react-icons/fa';

const Fleet = () => {
    const vehicles = [
        {
            name: 'Toyota Innova Crysta',
            category: 'SUV',
            image: '/images/innova-crysta.png',
            features: ['7 Seater', 'AC', 'Comfortable'],
            type: 'car'
        },
        {
            name: 'Maruti Swift Dzire',
            category: 'Sedan',
            image: '/images/swift-dzire.png',
            features: ['4 Seater', 'AC', 'Fuel Efficient'],
            type: 'car'
        },
        {
            name: 'Toyota Etios',
            category: 'Sedan',
            image: '/images/toyota-etios.png',
            features: ['4 Seater', 'AC', 'Reliable'],
            type: 'car'
        },
        {
            name: 'Chevrolet Tavera',
            category: 'MUV',
            image: '/images/chevrolet-tavera.png',
            features: ['8 Seater', 'AC', 'Spacious'],
            type: 'car'
        },
        {
            name: 'Force Tempo Traveller',
            category: 'Mini Bus',
            image: '/images/tempo-traveller.png',
            features: ['12-17 Seater', 'AC', 'Group Travel'],
            type: 'bus'
        },
        {
            name: 'Tourist Buses',
            category: 'Bus',
            image: '/images/tourist-bus.png',
            features: ['20-40 Seater', 'AC', 'Long Distance'],
            type: 'bus'
        }
    ];

    return (
        <section id="fleet" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Premium
                        <span className="text-gradient-blue"> Fleet</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose from our wide range of well-maintained vehicles
                    </p>
                </div>

                {/* Vehicles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {vehicles.map((vehicle, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border-2 border-gray-100 group"
                        >
                            {/* Vehicle Image */}
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute top-4 right-4 z-10">
                                    <div className={`flex items-center space-x-2 ${vehicle.type === 'car' ? 'bg-orange-500' : 'bg-blue-600'} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                                        {vehicle.type === 'car' ? <FaCar /> : <FaBus />}
                                        <span>{vehicle.category}</span>
                                    </div>
                                </div>
                                <img
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>

                            {/* Vehicle Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {vehicle.name}
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {vehicle.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={`https://wa.me/919030664487?text=I'm interested in booking a ${vehicle.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block text-center ${vehicle.type === 'car' ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <p className="text-gray-600 mb-6 text-lg">
                        Don't see what you're looking for? We have more vehicles available!
                    </p>
                    <a
                        href="tel:9030664487"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        <span>Call for More Options</span>
                    </a>
                </div>
            </div>
        </section >
    );
};

export default Fleet;
