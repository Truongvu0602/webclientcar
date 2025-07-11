import React, { useState } from "react";
import {
  Car,
  Calendar,
  User,
  Eye,
  ArrowRight,
  Search,
  Filter,
  Clock,
  Heart,
  Share2,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import Header from "../components/Menu";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [likedPosts, setLikedPosts] = useState(new Set());

  const newsArticles = [
    {
      id: 1,
      title: "Toyota Fortuner 2024 - Những nâng cấp đáng chú ý",
      category: "models",
      excerpt:
        "Khám phá những thay đổi mới nhất trên Toyota Fortuner 2024 với công nghệ hiện đại và thiết kế được cải tiến.",
      image: "/api/placeholder/600/400",
      author: "Nguyễn Văn An",
      date: "2024-07-10",
      readTime: "5 phút đọc",
      views: 2150,
      likes: 89,
      comments: 23,
      featured: true,
      tags: ["Toyota", "Fortuner", "2024", "Nâng cấp"],
    },
    {
      id: 2,
      title: "Bảo dưỡng xe Toyota Fortuner - Hướng dẫn chi tiết",
      category: "maintenance",
      excerpt:
        "Tất cả những gì bạn cần biết về việc bảo dưỡng Toyota Fortuner để đảm bảo hiệu suất tối ưu.",
      image: "/api/placeholder/600/400",
      author: "Trần Thị Lan",
      date: "2024-07-08",
      readTime: "8 phút đọc",
      views: 1890,
      likes: 67,
      comments: 15,
      featured: false,
      tags: ["Bảo dưỡng", "Tips", "Hướng dẫn"],
    },
    {
      id: 3,
      title: "So sánh Toyota Fortuner với các đối thủ cùng phân khúc",
      category: "comparison",
      excerpt:
        "Phân tích chi tiết ưu nhược điểm của Toyota Fortuner so với Ford Everest, Mitsubishi Pajero Sport.",
      image: "/api/placeholder/600/400",
      author: "Lê Minh Hoàng",
      date: "2024-07-05",
      readTime: "12 phút đọc",
      views: 3420,
      likes: 156,
      comments: 45,
      featured: true,
      tags: ["So sánh", "SUV", "Phân khúc"],
    },
    {
      id: 4,
      title: "Xu hướng thị trường ô tô SUV 7 chỗ tại Việt Nam",
      category: "market",
      excerpt:
        "Báo cáo về tình hình thị trường SUV 7 chỗ và vị thế của Toyota Fortuner trong phân khúc.",
      image: "/api/placeholder/600/400",
      author: "Phạm Đức Minh",
      date: "2024-07-03",
      readTime: "6 phút đọc",
      views: 2760,
      likes: 94,
      comments: 28,
      featured: false,
      tags: ["Thị trường", "SUV", "Báo cáo"],
    },
    {
      id: 5,
      title: "Trải nghiệm off-road cùng Toyota Fortuner",
      category: "experience",
      excerpt:
        "Hành trình khám phá địa hình khó khăn cùng Toyota Fortuner và những điều bất ngờ.",
      image: "/api/placeholder/600/400",
      author: "Võ Thanh Tùng",
      date: "2024-07-01",
      readTime: "10 phút đọc",
      views: 1650,
      likes: 78,
      comments: 19,
      featured: false,
      tags: ["Off-road", "Trải nghiệm", "Phiêu lưu"],
    },
    {
      id: 6,
      title: "Công nghệ an toàn trên Toyota Fortuner",
      category: "technology",
      excerpt:
        "Tìm hiểu về các hệ thống an toàn tiên tiến được trang bị trên Toyota Fortuner.",
      image: "/api/placeholder/600/400",
      author: "Ngô Thị Mai",
      date: "2024-06-28",
      readTime: "7 phút đọc",
      views: 2100,
      likes: 112,
      comments: 31,
      featured: false,
      tags: ["Công nghệ", "An toàn", "Tính năng"],
    },
  ];

  const categories = [
    { id: "all", name: "Tất cả", icon: TrendingUp },
    { id: "models", name: "Mẫu xe", icon: Car },
    { id: "maintenance", name: "Bảo dưỡng", icon: Filter },
    { id: "comparison", name: "So sánh", icon: Eye },
    { id: "market", name: "Thị trường", icon: TrendingUp },
    { id: "experience", name: "Trải nghiệm", icon: Heart },
    { id: "technology", name: "Công nghệ", icon: Filter },
  ];

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(
    (article) => article.featured
  );
  const regularArticles = filteredArticles.filter(
    (article) => !article.featured
  );

  const handleLike = (articleId) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(articleId)) {
      newLikedPosts.delete(articleId);
    } else {
      newLikedPosts.add(articleId);
    }
    setLikedPosts(newLikedPosts);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tin tức & Cập nhật
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Cập nhật những tin tức mới nhất về Toyota Fortuner và thị trường ô
              tô
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm tin tức..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-red-600 text-white shadow-lg transform scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Tin nổi bật
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Nổi bật
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(article.date)}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views.toLocaleString()}
                        </div>
                        <button
                          onClick={() => handleLike(article.id)}
                          className={`flex items-center ${
                            likedPosts.has(article.id)
                              ? "text-red-600"
                              : "text-gray-500"
                          }`}
                        >
                          <Heart
                            className={`w-4 h-4 mr-1 ${
                              likedPosts.has(article.id) ? "fill-current" : ""
                            }`}
                          />
                          {article.likes + (likedPosts.has(article.id) ? 1 : 0)}
                        </button>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {article.comments}
                        </div>
                      </div>

                      <button className="flex items-center text-red-600 hover:text-red-700 font-medium">
                        Đọc thêm
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Tin tức mới nhất
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <div
                key={article.id}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-4 right-4 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all duration-200">
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(article.date)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {article.views.toLocaleString()}
                      </div>
                      <button
                        onClick={() => handleLike(article.id)}
                        className={`flex items-center ${
                          likedPosts.has(article.id)
                            ? "text-red-600"
                            : "text-gray-500"
                        }`}
                      >
                        <Heart
                          className={`w-3 h-3 mr-1 ${
                            likedPosts.has(article.id) ? "fill-current" : ""
                          }`}
                        />
                        {article.likes + (likedPosts.has(article.id) ? 1 : 0)}
                      </button>
                    </div>

                    <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                      Đọc thêm
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Đăng ký nhận tin tức</h2>
          <p className="text-xl mb-8 opacity-90">
            Cập nhật những tin tức mới nhất về Toyota Fortuner và ưu đãi đặc
            biệt
          </p>

          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-medium transition-colors duration-300">
              Đăng ký
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
