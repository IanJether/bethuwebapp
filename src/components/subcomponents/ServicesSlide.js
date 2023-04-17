import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesList from "../../data/Services";

const Serviceslist = () => {


  return (
    <div className="serviceslist">

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
          {ServicesList.map((items) => {

            const address = "/Services/" + items.title;

            return (
              <SwiperSlide className="flex mx-auto justify-center items-center pt-[] pb-[60px]" key={items.key}>
                <div className="otherservice mx-auto flex flex-col items-center">
                  <div className="w-[100%] h-[250px] overflow-hidden">
                    <img className="h-full w-full object-cover " src={items.image} alt="" />
                  </div>
                  <div className="relative bg-white mt-[-50px] flex flex-col gap-[23px] items-center justify-center w-[90%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-primary">
                    <div className="text-primary text-[30px]">
                      <FontAwesomeIcon icon={items.icon} />
                    </div>
                    <div className="text-[17px] font-semibold">
                      <h3>{items.title}</h3>
                    </div>
                    <div className="text-[13px] text-neutral-500">
                      <p>{items.text}</p>
                    </div>
                    <div className="absolute bottom-[-23px]">
                      <Link onClick={()=>window.scrollTo(0,0)} to={address}><button className="bbs"><FontAwesomeIcon icon={items.bottomicon} /></button></Link>
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
          {ServicesList.map((items) => {

            const address = "/Services/" + items.title;

            return (
              <SwiperSlide className="flex mx-auto justify-center items-center pb-[50px]" key={items.key}>
                <div className="otherservice mx-auto flex flex-col items-center">
                  <div className="w-[100%] h-[250px] overflow-hidden">
                    <img className="h-full w-full object-cover " src={items.image} alt="" />
                  </div>
                  <div className="relative bg-white mt-[-50px] flex flex-col gap-[23px] items-center justify-center w-[90%] h-[250px] text-center shadow-xl px-[5%] border-b-4 border-primary">
                    <div className="text-primary text-[30px]">
                      <FontAwesomeIcon icon={items.icon} />
                    </div>
                    <div className="text-[17px] font-semibold">
                      <h3>{items.title}</h3>
                    </div>
                    <div className="text-[13px] text-neutral-500">
                      <p>{items.text}</p>
                    </div>
                    <div className="absolute bottom-[-23px]">
                      <Link onClick={()=>window.scrollTo(0,0)} to={address}><button className="bbs"><FontAwesomeIcon icon={items.bottomicon} /></button></Link>
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

export default Serviceslist;