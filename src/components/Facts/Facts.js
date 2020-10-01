import React from "react";
import SlideFacts from "./SlideFacts";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "./Facts.scss";

SwiperCore.use([Navigation, Pagination]);

const Facts = ({ title, slides }) => {
  const factsSlides = slides.map((slideInfo) => (
    <SwiperSlide key={slideInfo.id}>
      <SlideFacts item={slideInfo} />
    </SwiperSlide>
  ));

  return (
    <section className="facts container">
      <h2 className="facts-title">{title}</h2>
      <div className="swiper-button-prev" />
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".facts-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="facts-pagination-bullet ${className}"></span>`;
          },
        //   breakpoints: {
        //     640: {
        //       slidesPerView: 1,
        //       spaceBetween: 0,
        //     },
        //     768: {
        //       slidesPerView: 2,
        //       spaceBetween: 40,
        //     },
        //     1024: {
        //       slidesPerGroup: 3,
        //       slidesPerView: 3,
        //       spaceBetween: 40,
        //     },
        //   },
		}}
		breakpoints={{
			// when window width is >= 640px
			640: {
			  width: 640,
			  slidesPerView: 1,
			},
			// when window width is >= 768px
			768: {
			  width: 768,
			  slidesPerView: 2,
			},
		  }}
        spaceBetween={40}
        // slidesPerView={3}
        // slidesPerGroup={3}
        // centeredSlides={true},
      >
        {factsSlides}
      </Swiper>
      <div className="swiper-button-next" />
      <div className="facts-pagination" />
    </section>
  );
};

export default Facts;
