import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../img/banner_Hero1.jpg';
import banner2 from '../../img/banner_Hero2.jpg';
import banner3 from '../../img/banner_Hero3.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


function HeroSlider() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Microsoft Xbox <br /> 360 Controller</h3>
                                <p>windows Xp/10/7/8 ps3, Tv Box</p>
                                <Link to="/" className="btn">Shop Now</Link>
                            </div>
                            <img src={banner1} alt="slider hero 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Microsoft Xbox <br /> 360 Controller</h3>
                                <p>windows Xp/10/7/8 ps3, Tv Box</p>
                                <Link to="/" className="btn">Shop Now</Link>
                            </div>
                            <img src={banner2} alt="slider hero 2" />
                        </SwiperSlide> <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Microsoft Xbox <br /> 360 Controller</h3>
                                <p>windows Xp/10/7/8 ps3, Tv Box</p>
                                <Link to="/" className="btn">Shop Now</Link>
                            </div>
                            <img src={banner3} alt="slider hero 3" />
                        </SwiperSlide>

                    </Swiper>
                </div>

            </div>

        </>

    )
}
export default HeroSlider;