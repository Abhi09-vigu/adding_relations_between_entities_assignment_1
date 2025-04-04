import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={destination.image} alt={destination.name} className="w-100px h-20px object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{destination.name}</h2>
        <p className="text-gray-600">{destination.location}</p>
        <p className="text-sm mt-2">{destination.description}</p>
        <p className="text-lg font-semibold mt-4">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
