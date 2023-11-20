
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <>
      <Container>
        <h4>모델로 검색하세요</h4>
        <Swiper className='CarBanner'
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={0}
          grabCursor={false}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation, Pagination]}
        >


          <SwiperSlide className='row'>
            <img className='imgcar box3' src="../img/1.png" alt='1' />
            <span>아반테</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/2.png" alt='2' />
            <span>소나타</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/3.png" alt='3' />
            <span>그랜저</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/4.png" alt='4' />
            <span>베뉴</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/5.png" alt='5' />
            <span>산타페</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/6.png" alt='6' />
            <span>코나</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/7.png" alt='7' />
            <span>투싼</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/8.png" alt='8' />
            <span>펠리세이드</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/9.png" alt='9' />
            <span>스타리아</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/10.png" alt='10' />
            <span>아이오닉</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/6.png" alt='6' />
            <span>코나</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/7.png" alt='7' />
            <span>투싼</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/8.png" alt='8' />
            <span>펠리세이드</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/9.png" alt='9' />
            <span>스타리아</span>
          </SwiperSlide>
          <SwiperSlide>
            <img className='imgcar box3' src="../img/10.png" alt='10' />
            <span>아이오닉</span>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
