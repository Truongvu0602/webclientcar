import React from "react";
import { Car, Users, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Fortuner Vietnam</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Trang web chuyên về Toyota Fortuner tại Việt Nam. Kết nối cộng
              đồng những người đam mê SUV hàng đầu.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Dòng xe</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fortuner 2024
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fortuner 2023
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fortuner 2022
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  So sánh phiên bản
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Đặt lịch lái thử
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tư vấn mua xe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bảo hành
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dịch vụ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Users className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Fortuner Vietnam. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
