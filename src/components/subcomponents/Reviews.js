import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reviews from "../../data/Reviews";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {


    return (
        <div className="Reviews">
            <div className="slider lg:hidden">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className=" swipe flex justify-center items-center"
                    data
                >
                    {reviews.map((items) => {



                        return (
                            <SwiperSlide className="flex mx-auto justify-center items-center pt-[] pb-[60px]" key={items.key}>
                                <div className="flex mx-auto flex-col justify-between h-[200px] w-[100%] bg-white py-[20px] px-[5%]">
                                    <div className="text-neutral-500 text-[13px]">
                                        <p>{items.review} </p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex gap-[10px]">
                                            <div className="bg-gray-600 h-[50px] w-[50px] rounded-full">
                                                {/* picture */}
                                            </div>
                                            <div>
                                                <div className="text-[15px] font-semibold"><p>{items.name}</p></div>
                                                <div className="text-[13px] text-neutral-500"><p>{items.position}, {items.company}</p></div>
                                            </div>
                                        </div>
                                        <div className="text-primary text-[30px]">
                                            <FontAwesomeIcon icon={faQuoteRight} />
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            <div className="slider hidden lg:block">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={3}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className=" swipe flex justify-center items-center"
                    data
                >
                    {reviews.map((items) => {



                        return (
                            <SwiperSlide className="flex mx-auto justify-center items-center pb-[50px]" key={items.key}>
                                <div className="flex mx-auto flex-col justify-between h-[200px] w-[100%] bg-white py-[10px] px-[5%]">
                                    <div className="text-neutral-500 text-[13px]">
                                        <p>{items.review} </p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex gap-[10px]">
                                            <div className="bg-gray-600 h-[50px] w-[50px] rounded-full">
                                                {/* picture */}
                                            </div>
                                            <div>
                                                <div className="text-[15px] font-semibold"><p>{items.name}</p></div>
                                                <div className="text-[13px] text-neutral-500"><p>{items.position}, {items.company}</p></div>
                                            </div>
                                        </div>
                                        <div className="text-primary text-[30px]">
                                            <FontAwesomeIcon icon={faQuoteRight} />
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>





        </div>
    )
}

export default Reviews;




{/* <div  className="flex mx-auto flex-col justify-between h-[200px] w-[100%] bg-white py-[10px] px-[5%]">
<div className="text-neutral-500 text-[13px]">
    <p>{items.review} </p>
</div>
<div className="flex justify-between">
    <div className="flex gap-[10px]">
        <div className="bg-gray-600 h-[50px] w-[50px] rounded-full">
            picture 
        </div>
        <div>
            <div className="text-[15px] font-semibold"><p>{items.name}</p></div>
            <div className="text-[13px] text-neutral-500"><p>{items.position}, {items.company}</p></div>
        </div>
    </div>
    <div className="text-primary text-[30px]">
        <FontAwesomeIcon icon={faQuoteRight} />
    </div>

</div>
</div> */}