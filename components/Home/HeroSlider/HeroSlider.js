import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HeroSlider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000,
                }}>
                <SwiperSlide>
                    <div
                        className={`grid bg-no-repeat bg-center min-h-[90vh] swiper-slide items-center bg-cover`}
                        style={{ backgroundImage: `url(/slide1c.jpg)` }}>
                        <div className="max-w-container m-auto w-screen">
                            <h3 className="caption-wd-1 text-Neutral-primary">
                                Multipurpose
                            </h3>
                            <h1 className="caption-wd-2 text-Neutral-black">
                                Premium <br />
                                NextJs Theme
                            </h1>
                            <p className="caption-wd-3 text-Neutral-black mt-8">
                                30 skins, powerful features, great support,
                                exclusive offer
                            </p>
                            <button className="bg-Neutral-primary text-Neutral-white button-xl mt-8">
                                SHOP NOW!
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSlider;
