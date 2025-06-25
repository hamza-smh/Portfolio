import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const blockchain = "/assets/certificates/UC-2dd8f7d4-3916-4e37-8491-7870f688ab3b.jpg"
const ieeePython = "/assets/certificates/ieeePython.png"
const pyhton = "/assets/certificates/python.png"
const AI_piaic = "/assets/certificates/AI_piaic.png"
const Clients = () => {
  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>My Certifications</h3>
        <Swiper
          {...salimovSlider.clients}
          className="swiper swiper-clients fadeInUp wow"
        >
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            < div style = {
              {
                backgroundImage: `url(${blockchain})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }
            }
            />
            < div style = {
              {
                backgroundImage: `url(${ieeePython})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }
            }
            />
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src = "/public/assets/certificates/Python.PNG"
                alt="client"
              />
            </div>
            <div>
              <img
                src="/public/assets/certificates/AI_piaic.PNG"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            {/* <div> */}
              <img
                src = "/public/assets/certificates/AI_piaic.PNG"
                alt="client"
                style={{width:"150px"}}
              />
            {/* </div> */}
            <div>
              <img
                src="assets/logos/activeden-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/3docean-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/themeforest-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/activeden-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/audiojungle-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/graphicriver-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/codecanyon-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Clients;
