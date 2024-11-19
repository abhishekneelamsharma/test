import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper/modules";
import 'swiper/css/bundle';
import Loader from './Loader';


export default function Home() {
  const swiperNextBtn = useRef(null);
  const swiperPrevBtn = useRef(null);

  const [isloading, setLoading] = useState(true);

  setInterval(() => {
    setLoading(false);
  }, 700);

  return (
    <>
      {
        isloading ? <Loader /> : (
          <>
            <section id="hero" className='hero' >
              <Swiper
                modules={[Navigation, EffectFade]}
                loop={true}
                effect='fade'
                navigation={{
                  prevEl: swiperPrevBtn.current,
                  nextEl: swiperNextBtn.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = swiperPrevBtn.current;
                  swiper.params.navigation.nextEl = swiperNextBtn.current;
                }}>

                <SwiperSlide className='carousel'>
                  <img src="assets/img/hero-carousel/hero-carousel-1.jpg" alt="error" />
                  <div className="carousel-container">
                    <h2>Welcome to <span>Eterna</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="/about.html" className="btn-get-started">Get Started</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='carousel'>
                  <img src="assets/img/hero-carousel/hero-carousel-2.jpg" alt="error" />
                  <div className="carousel-container">
                    <h2>At vero eos et accusamus</h2>
                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
                    <a href="/about.html" className="btn-get-started">Get Started</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='carousel'>
                  <img src="assets/img/hero-carousel/hero-carousel-3.jpg" alt="error" />
                  <div className="carousel-container">
                    <h2>Temporibus autem quibusdam</h2>
                    <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
                    <a href="/about.html" className="btn-get-started">Get Started</a>
                  </div>
                </SwiperSlide>

                <a className="carousel-control-prev" ref={swiperPrevBtn} href="/#hero-carousel" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>

                <a className="carousel-control-next" ref={swiperNextBtn} href="/#hero-carousel" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>
              </Swiper>

              <div className="featured container">

                <div className="row gy-4">

                  <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="100">
                    <div className="featured-item position-relative">
                      <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
                      <h4><a href="/#" className="stretched-link">Sed ut perspici</a></h4>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                  </div>

                  <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="200">
                    <div className="featured-item position-relative">
                      <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
                      <h4><a href="/#" className="stretched-link">Magni Dolores</a></h4>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    </div>
                  </div>

                  <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="300">
                    <div className="featured-item position-relative">
                      <div className="icon"><i className="bi bi-broadcast icon"></i></div>
                      <h4><a href="/#" className="stretched-link">Nemo Enim</a></h4>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                  </div>

                </div>

              </div>

            </section >

            <section id="about" className="section about">

              <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4">
                  <div className="col-lg-6 order-1 order-lg-2">
                    <img src="assets/img/about.jpg" className="img-fluid" alt="error" />
                  </div>
                  <div className="col-lg-6 order-2 order-lg-1 content">
                    <h3>Voluptatem dignissimos provident</h3>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                    </p>
                  </div>
                </div>

              </div>

            </section>

            <section id="services" className="section services">

              <div className="container">

                <div className="row gy-4">

                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="service-item  position-relative">
                      <div className="icon">
                        <i className="bi bi-activity"></i>
                      </div>
                      <a href="/#" className="stretched-link">
                        <h3>Nesciunt Mete</h3>
                      </a>
                      <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="service-item position-relative">
                      <div className="icon">
                        <i className="bi bi-broadcast"></i>
                      </div>
                      <a href="/#" className="stretched-link">
                        <h3>Eosle Commodi</h3>
                      </a>
                      <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-item position-relative">
                      <div className="icon">
                        <i className="bi bi-easel"></i>
                      </div>
                      <a href="/#" className="stretched-link">
                        <h3>Ledo Markt</h3>
                      </a>
                      <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="service-item position-relative">
                      <div className="icon">
                        <i className="bi bi-bounding-box-circles"></i>
                      </div>
                      <a href="/#" className="stretched-link">
                        <h3>Asperiores Commodit</h3>
                      </a>
                      <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                      <a href="/#" className="stretched-link">.</a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="service-item position-relative">
                      <div className="icon">
                        <i className="bi bi-calendar4-week"></i>
                      </div>
                      <a href="/#" className="stretched-link">
                        <h3>Velit Doloremque</h3>
                      </a>
                      <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                      <a href="/#" className="stretched-link">.</a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                    <div className="service-item position-relative">
                      <div className="icon">
                        <i className="bi bi-chat-square-text"></i>
                      </div>
                      <a href="/#" className="stretched-link">
                        <h3>Dolori Architecto</h3>
                      </a>
                      <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                      <a href="/#" className="stretched-link">.</a>
                    </div>
                  </div>

                </div>

              </div>

            </section>

            <section id="clients" className="section clients">
              <div className="container section-title" data-aos="fade-up">
                <h2>Clients</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas</p>
              </div>

              <div className="container " data-aos="fade-up" data-aos-delay="100">

                <Swiper
                  modules={[Autoplay, Pagination]}
                  slidesPerView={6}
                  spaceBetween={100}
                  loop={true}
                  autoplay={true}
                  pagination={{
                    clickable: true
                  }}
                >
                  <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-1.png" className="img-fluid " alt="error" /></SwiperSlide>
                  <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-2.png" className="img-fluid " alt="error" /></SwiperSlide>
                  <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-3.png" className="img-fluid " alt="error" /></SwiperSlide>
                  <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-4.png" className="img-fluid " alt="error" /></SwiperSlide>
                  <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-5.png" className="img-fluid " alt="error" /></SwiperSlide>
                  <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-6.png" className="img-fluid " alt="error" /></SwiperSlide>
                  <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-7.png " className="img-fluid " alt="error" /></SwiperSlide>
                  <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-8.png " className="img-fluid " alt="error" /></SwiperSlide>
                </Swiper>

              </div>
            </section >
          </>
        )
      }





    </>
  )
}
