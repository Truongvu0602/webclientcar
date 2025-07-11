import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewsSection = ({ newsData }) => {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Tin tức & Sự kiện
          </h2>
          <p className="text-xl text-gray-600">
            Cập nhật những thông tin mới nhất về Toyota Fortuner
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsData.map((article) => (
            <Link to={`/news`}>
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(article.date).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                  <button className="text-red-600 font-semibold hover:text-red-700 transition-colors flex items-center space-x-1">
                    <span>Đọc thêm</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
