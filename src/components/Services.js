import VisibilitySensor from "react-visibility-sensor";
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from "react";

export default function Services() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);

  const [isVisible, setVisible] = useState();

  const hadleVisibility = (visible) => {
    setVisible(visible);
  }
  useEffect(() => {

    if (isVisible) {
      setNumber1(100);
      setNumber2(90);
      setNumber3(75);
      setNumber4(55);
    }

  }, [isVisible]);



  return (
    <main className="main">

      <div className="page-title" data-aos="fade">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li><a href="/index.html">Home</a></li>
              <li className="current">Services</li>
            </ol>
          </nav>
          <h1>Services</h1>
        </div>
      </div>
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


      <section id="skills" className="skills section">

        <div className="container section-title" data-aos="fade-up">
          <h2>Our Skills</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row">

            <div className="col-lg-6 d-flex align-items-center">
              <img src="assets/img/skills.jpg" className="img-fluid" alt="" />
            </div>

            <div className="col-lg-6 pt-4 pt-lg-0 content">

              <h3>Voluptatem dignissimos provident quasi corporis voluptas</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="skills-content skills-animation">

                <div className="progress">
                  <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                  <VisibilitySensor onChange={hadleVisibility}>
                    <ProgressBar completed={number1} customLabel=" " height="10" bgColor="#e96b56" />
                  </VisibilitySensor>

                </div>

                <div className="progress">
                  <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                  <ProgressBar completed={number2} customLabel=" " height="10" bgColor="#e96b56" />
                </div>

                <div className="progress">
                  <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                  <ProgressBar completed={number3} customLabel=" " height="10" bgColor="#e96b56" />
                </div>

                <div className="progress">
                  <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
                  <ProgressBar completed={number4} customLabel=" " height="10" bgColor="#e96b56" />
                </div>

              </div>

            </div>
          </div>

        </div>

      </section>

    </main>
  )
}
