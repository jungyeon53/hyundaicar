
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




function Modal() {

    return(
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
      className='swiper'>
        <SwiperSlide> 

        <div className='textcontent'>GRANDEUR</div>
        <p>2,955 ~ 5,450만원</p>

          <img className='box2' src="../img/mdlgrp_96.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className='textcontent'>GRANDEUR</div>
        <p>2,955 ~ 5,450만원</p>
          <img className='box2' src="../img/mdlgrp_111.png" alt="" /></SwiperSlide>
        <SwiperSlide>
        <div className='textcontent'>GRANDEUR</div>
        <p>2,955 ~ 5,450만원</p>
          <img className='box2' src="../img/mdlgrp_112.png" alt="" /></SwiperSlide>
        <SwiperSlide>
        <div className='textcontent'>GRANDEUR</div>
        <p>2,955 ~ 5,450만원</p>
          <img className='box2' src="../img/mdlgrp_1167.png" alt="" /></SwiperSlide>
        <SwiperSlide>
        <div className='textcontent'>GRANDEUR</div>
        <p>2,955 ~ 5,450만원</p>
          <img className='box2' src="../img/mdlgrp_1207.png" alt="" /></SwiperSlide>
      </Swiper>
      
      
    )
  }



  export default Modal;