
import React from "react";
import ExchangeListings from "./ExchangeListings";

const OverviewSection = () => {
  return (
    <div id="overview-section" className="relative bg-white py-16 sm:py-20">
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-buckazoid-navy mb-3">
            Trade Buckazoids
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Live markets where $BUCKAZOIDS is trading right now
          </p>
        </div>
        <ExchangeListings />
      </div>
    </div>
  );
};

export default OverviewSection;
