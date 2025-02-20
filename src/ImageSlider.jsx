// ImageSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './main-imager.jpg';
const ImageSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
    >
      <SwiperSlide>
      <div className='swiper_slide'>
        <img src={require('./night_board.jpg')} alt='night board'/>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='swiper_slide'>
        <img src={require('./main-imager.jpg')} alt='Banner'/>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='swiper_slide'>
        <img src={require('./night-Car.jpg')} alt='night car'/>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='swiper_slide'>
      <img src={require('./peramid.jpg')} alt='peramid'/>
      </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
