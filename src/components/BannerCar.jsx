import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Container, Row, Col } from 'react-bootstrap';

export default function App() {

	// const [img, setimg] = useState(0);
	// document.getElementsByClassName("smallimg").addEventListener("click", function() {
	// 	});

	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	};

	return (
		<div className='car-top'>
		<Container>
			<div className="text-center center-text">
				<h1>지금 구매 가능한</h1>
				<h4>인기차량 TOP 10</h4>
			</div>


			<Row>
				<Col md={6}>
					<Swiper
						pagination={pagination}
						modules={[Pagination]}
						className="mySwiper"
					>
						<SwiperSlide><img src="../img/banner/1.jpeg" alt="img" /></SwiperSlide>
						<SwiperSlide><img src="../img/banner/2.jpeg" alt="img" /></SwiperSlide>
						<SwiperSlide><img src="../img/banner/3.jpeg" alt="img" /></SwiperSlide>
						<SwiperSlide><img src="../img/banner/4.jpeg" alt="img" /></SwiperSlide>
						<SwiperSlide><img src="../img/banner/5.jpeg" alt="img" /></SwiperSlide>
						<SwiperSlide><img src="../img/banner/6.jpeg" alt="img" /></SwiperSlide>
						<SwiperSlide><img src="../img/banner/7.jpeg" alt="img" /></SwiperSlide>
						<SwiperSlide><img src="../img/banner/8.jpeg" alt="img" /></SwiperSlide>
						<SwiperSlide><img src="../img/banner/9.jpeg" alt="img" /></SwiperSlide>
						<SwiperSlide><img src="../img/banner/10.jpeg" alt="img" /></SwiperSlide>

					</Swiper>
				</Col>

				<Col md={6}>
					<div className="samllbannertext">
					<h2>펠리세이드 디젤2.2 7인승AWD프레스티지</h2>
					<h2>3,960만원</h2>
					</div>
					<div className='smallBanner'>
						<Swiper
							slidesPerView={1}
							centeredSlides={false}
							slidesPerGroupSkip={0}
							grabCursor={true}
							keyboard={{
								enabled: true,
							}}
							breakpoints={{
								769: {
									slidesPerView: 4,
									slidesPerGroup: 4,
								},
							}}
							scrollbar={false}
							navigation={false}
							pagination={{
								clickable: true,
							}}
							modules={[Keyboard, Scrollbar, Navigation, Pagination]}
							className="smallBanner"
						>
							<div className='d-flex flex-wrap gap-2'>
							<SwiperSlide>
								<img src="../img/banner/1.jpeg" className='smallimg'/>
							</SwiperSlide>
							<SwiperSlide>
								<img src="../img/banner/2.jpeg" className='smallimg'alt="img" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="../img/banner/3.jpeg" className='smallimg'alt="img" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="../img/banner/4.jpeg" className='smallimg'alt="img" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="../img/banner/5.jpeg" className='smallimg'alt="img" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="../img/banner/6.jpeg" className='smallimg'alt="img" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="../img/banner/7.jpeg" className='smallimg'alt="img" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="../img/banner/8.jpeg" className='smallimg'alt="img" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="../img/banner/9.jpeg" className='smallimg'alt="img" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="../img/banner/10.jpeg" className='smallimg'alt="img" />
							</SwiperSlide>
							</div>
						</Swiper>
					</div>
				</Col>
			</Row>

		</Container>
		</div>
	);
}