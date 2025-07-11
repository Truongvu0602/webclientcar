import React from "react";
import { Star } from "lucide-react";

const ModelSection = ({ models, selectedModel, setSelectedModel }) => {
  return (
    <section id="models" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Dòng xe Toyota Fortuner
          </h2>
          <p className="text-xl text-gray-600">
            Khám phá các phiên bản Fortuner phù hợp với nhu cầu của bạn
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            {Object.keys(models).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedModel(year)}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  selectedModel === year
                    ? "bg-red-600 text-white"
                    : "text-gray-600 hover:text-red-600"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={models[selectedModel].image}
                alt={models[selectedModel].name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {models[selectedModel].name}
              </h3>
              <p className="text-2xl text-red-600 font-bold mb-6">
                {models[selectedModel].price}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Động cơ:</strong> {models[selectedModel].engine}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Công suất:</strong> {models[selectedModel].power}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Hộp số:</strong>{" "}
                    {models[selectedModel].transmission}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Tính năng nổi bật:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {models[selectedModel].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Đặt lịch lái thử
                </button>
                <button className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                  Tải brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
