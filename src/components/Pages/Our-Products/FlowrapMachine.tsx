import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CheckCircle,
  Zap,
  Settings,
  Shield,
  DollarSign,
  Package,
  ArrowRight,
  Star,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

const FlowrapMachine: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "High-Speed Operation",
      description: "Up to 200 packages per minute with precision control",
      highlight: "200 PPM",
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: "Versatile & Adjustable",
      description:
        "Handles products from 50mm to 500mm with automatic adjustment",
      highlight: "50-500mm",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Smart PLC Control",
      description: "Intuitive touchscreen interface with preset configurations",
      highlight: "Smart Control",
    },
    {
      icon: <CheckCircle className="w-7 h-7" />,
      title: "Hygienic Design",
      description: "FDA-approved stainless steel with IP65 protection rating",
      highlight: "FDA Approved",
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: "Cost-Effective",
      description: "Reduces operational costs by up to 40% and minimizes waste",
      highlight: "40% Savings",
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Quality Assurance",
      description: "Built-in quality control with automatic rejection system",
      highlight: "Quality First",
    },
  ];

  const products = [
    { name: "Biscuits & Cookies", category: "Food Industry" },
    { name: "Chocolate Bars", category: "Confectionery" },
    { name: "Soap & Cosmetics", category: "Personal Care" },
    { name: "Energy Bars", category: "Health Foods" },
    { name: "Hardware Items", category: "Industrial" },
    { name: "Pharmaceutical", category: "Medical" },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Happy Clients",
    },
    {
      icon: <Package className="w-8 h-8" />,
      value: "50M+",
      label: "Packages Sealed",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "99.9%",
      label: "Uptime Rate",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        style={{ y }}
        className="relative bg-red-600 text-white py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">
                Industry Leading Technology
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Flowrap Machine
              <span className="block text-3xl md:text-5xl font-normal mt-4 text-red-100">
                Horizontal Form-Fill-Seal (HFFS)
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-10 text-red-50"
            >
              Next-generation packaging technology that revolutionizes your
              production line with precision, speed, and reliability.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-lg font-semibold shadow-lg"
              >
                Get Quote Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 transition-all text-lg font-semibold"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={`stat-${index}`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-red-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-16 h-1 bg-red-600 rounded mb-6"></div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Advanced Packaging Technology
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our state-of-the-art Flowrap Machine represents the pinnacle of
              packaging technology. Engineered with precision and built for
              performance, it transforms your production line into a seamless,
              efficient operation.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Each machine is meticulously crafted to deliver consistent,
              high-quality packaging while maintaining the integrity and
              freshness of your products.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 font-semibold"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-red-600 hover:text-red-600 transition-colors font-semibold"
              >
                Technical Specs
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/2016.jpg"
                alt="Flowrap Machine"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-gray-800">200</div>
                <div className="text-sm text-gray-600">Packages/Min</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Key Features
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Flowrap Machine
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the innovative features that set our machine apart from
              the competition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={`feature-${index}`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-red-600 bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-black font-bold mb-4">
              Perfect For Every Industry
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Versatile packaging solutions for diverse industry requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={`product-${index}`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors"
              >
                <div className="text-red-500 mb-4 bg-gray-700 w-12 h-12 rounded-xl flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm bg-gray-700 px-3 py-1 rounded-full inline-block">
                  {product.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
};

export default FlowrapMachine;
