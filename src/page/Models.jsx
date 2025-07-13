import React, { useEffect, useState } from "react";
import {
  Car,
  Fuel,
  Users,
  Settings,
  Eye,
  Calendar,
  Star,
  ArrowRight,
} from "lucide-react";
import Header from "../components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarModel } from "../thunk/carModelThunk";

const Models = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const dispatch = useDispatch();
  const carModel = useSelector((state) => state.carModel.carModel || []);

  useEffect(() => {
    dispatch(fetchCarModel());
  }, [dispatch]);

  const categories = [
    { id: "all", name: "Tất cả", count: carModel.length },
    {
      id: "manual",
      name: "Số sàn",
      count: carModel.filter((car) => car.category === "manual").length,
    },
    {
      id: "automatic",
      name: "Số tự động",
      count: carModel.filter((car) => car.category === "automatic").length,
    },
    {
      id: "premium",
      name: "Cao cấp",
      count: carModel.filter((car) => car.category === "premium").length,
    },
  ];

  const filteredModels =
    selectedCategory === "all"
      ? carModel
      : carModel.filter((car) => car.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Dòng xe <span className="text-yellow-400">Fortuner</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Khám phá sức mạnh và đẳng cấp của Toyota Fortuner
          </p>
          <div className="flex justify-center space-x-8 text-sm md:text-base">
            <div className="flex items-center">
              <Car className="w-5 h-5 mr-2" />
              <span>{carModel.length} Phiên bản</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              <span>4.7/5 Đánh giá</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>7 Chỗ ngồi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 mb-2 ${
                  selectedCategory === category.id
                    ? "bg-red-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModels.map((car) => (
              <div
                key={car.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 ${
                  hoveredCard === car.id
                    ? "scale-105 shadow-2xl"
                    : "hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredCard(car.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=250&fit=crop&crop=center";
                    }}
                  />
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {car.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {car.name}
                    </h3>
                  </div>

                  <div className="text-2xl font-bold text-red-600 mb-4">
                    {car.price}
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Fuel className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-600">
                        {car.engine || "N/A"}
                      </p>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-600">7 chỗ</p>
                    </div>
                    <div className="text-center">
                      <Settings className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-600">{car.gear}</p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-red-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-red-700 transition-colors duration-300 flex items-center justify-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Xem chi tiết
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Đặt lịch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn sàng trải nghiệm Fortuner?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Đặt lịch lái thử ngay hôm nay và cảm nhận sức mạnh thực sự
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-medium transition-colors duration-300 flex items-center justify-center">
              Đặt lịch lái thử
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Tư vấn miễn phí
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Models;
