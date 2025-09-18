import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./ProductSlider.css";

interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  bgImage: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    id: "img4",
    title: "Flowrap Machine ",
    subtitle: "(Horizontal Form Fill Seal)",
    image:
      "/Home-Page/Product-Slider/Flowrap machine.png",
    bgImage:
      "/Home-Page/Product-Slider/Flowrap machines.jpg",
    description:
      "Flowrap Machine, also known as a Horizontal Form-Fill-Seal (HFFS) wrapper. Designed to package individual solid products with speed and precision, this machine creates a clean, sealed, pillow-pack style bag from a flat roll of film.",
    features: [
      "High-Speed Operation",
      "Versatile & Adjustable",
      "User-Friendly PLC Control",
      "Hygienic Design",
      "Cost-Effective",
    ],
  },
  {
    id: "img1",
    title: " Snacks Processing Lines",
    subtitle: "",
    image:
      "/Home-Page/Product-Slider/Snacks Processing Lines.png",
    bgImage:
      "/Home-Page/Product-Slider/Snacks Processing Lines.jpg",
    description:
      "We offer a complete Snacks Processing Line designed to streamline your entire production from start to finish. Our solutions are built to integrate every stage of snack manufacturing, ensuring a smooth, efficient workflow for a wide variety of snack products.",
    features: [
      "Mixing and Extrusion",
      "Frying and Baking",
      "Seasoning and Coating",
      "Cooling and Conveying",
      "Applications",
    ],
  },
  {
    id: "img2",
    title: "Screw Conveyor and System",
    subtitle: "",
    image:
      "/Home-Page/Product-Slider/Screw Conveyor and System.png",
    bgImage:
      "/Home-Page/Product-Slider/Screw Conveyor and System.jpg",
    description:
      "Move your bulk materials efficiently and gently with our Screw Conveyor Systems. An essential component in any processing plant, the screw conveyor (or auger conveyor) provides a dust-free and contained method for transferring powders, granules, and other free-flowing materials.",
    features: [
      "Gentle Product Handling",
      "Dust-Free Operation",
      "Customizable Design",
      "Low Maintenance",
    ],
  },
  {
    id: "img3",
    title: "Band Sealer",
    subtitle: "",
    image:
      "/Home-Page/Product-Slider/Band Sealer.png",
    bgImage:
      "/Home-Page/Product-Slider/Band Sealer.jpg",
    description:
      "Create strong, clean, and professional-looking seals on all your pre-made pouches with our dependable Band Sealer. This continuous sealing machine is the perfect solution for medium-to-high volume operations, offering a fast and reliable way to seal a wide variety of bag materials. It's the workhorse of any packaging line, ensuring your products are tamper-proof and protected from moisture and contaminants.",
    features: [
      "Consistent, High-Quality Seals",
      "Adjustable Speed & Temperature",
      "Versatile Orientation",
      "Optional Printing",
    ],
  },
];

const ProductSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className="bg-shape">
          <img src="/logo.png" alt="" className="logo-image" />
        </div>

        <div className="product-img">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-img__item ${
                activeIndex === index ? "active" : ""
              }`}
              id={product.id}
            >
              <img
                src={product.image}
                alt="star wars"
                className="product-img__img"
              />
            </div>
          ))}
        </div>

        <div className="product-slider">
          <button
            className={`prev ${swiper?.isBeginning ? "disabled" : ""}`}
            onClick={() => swiper?.slidePrev()}
          >
            <span className="icon">
              <svg className="icon icon-arrow-right" viewBox="0 0 32 32">
                <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z" />
              </svg>
            </span>
          </button>
          <button
            className={`next ${swiper?.isEnd ? "disabled" : ""}`}
            onClick={() => swiper?.slideNext()}
          >
            <span className="icon">
              <svg className="icon icon-arrow-right" viewBox="0 0 32 32">
                <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z" />
              </svg>
            </span>
          </button>

          <Swiper
            spaceBetween={30}
            effect="fade"
            loop={false}
            modules={[Navigation, EffectFade]}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiper}
            className="product-slider__wrp"
          >
            {products.map((product, index) => (
              <SwiperSlide
                key={index}
                className="product-slider__item"
                data-target={product.id}
              >
                <div className="product-slider__card">
                  <img
                    src={product.bgImage}
                    alt="star wars"
                    className="product-slider__cover"
                  />
                  <div className="product-slider__content">
                    <h1 className="product-slider__title">
                      {product.title} <br />
                      {product.subtitle}
                    </h1>

                    <div className="product-description">
                      <p>{product.description}</p>
                    </div>

                    <div className="product-features">
                      <h3 className="product-features__title">KEY FEATURES</h3>
                      <ul className="product-features__list">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="product-features__item">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
