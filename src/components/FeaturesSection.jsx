import React from "react";
import { Zap, Shield, Award } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Tại sao chọn Toyota Fortuner?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fortuner không chỉ là một chiếc SUV, mà là người bạn đồng hành tin
            cậy trong mọi cuộc phiêu lưu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Sức mạnh vượt trội
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Động cơ diesel 2.4L và xăng 2.7L mạnh mẽ, đáp ứng mọi nhu cầu di
              chuyển từ thành phố đến địa hình khó khăn
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              An toàn tuyệt đối
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Trang bị Toyota Safety Sense 2.0 với hệ thống an toàn chủ động
              tiên tiến nhất hiện nay
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Chất lượng Toyota
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Độ bền bỉ và tin cậy đã được kiểm chứng qua thời gian, cùng dịch
              vụ hậu mãi tốt nhất
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
