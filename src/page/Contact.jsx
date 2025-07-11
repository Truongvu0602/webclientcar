import React from "react";
import Header from "../components/Menu";

import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { Car, Star, Users } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Dòng xe <span className="text-yellow-400">Fortuner</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Khám phá sức mạnh và đẳng cấp của Toyota Fortuner
            </p>
            <div className="flex justify-center space-x-8 text-sm md:text-base">
              <div className="flex items-center">
                <Car className="w-5 h-5 mr-2" />
                <span>6 Phiên bản</span>
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
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
