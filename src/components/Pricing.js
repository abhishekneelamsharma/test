import React from 'react'

export default function Pricing() {
  return (
    <>
      <div className="page-title" data-aos="fade">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li><a href="/index.html">Home</a></li>
              <li className="current">Pricing</li>
            </ol>
          </nav>
          <h1>Pricing</h1>
        </div>
      </div>

      <section id="pricing" className="pricing section">

      <div className="container" data-aos="zoom-in" data-aos-delay="100">

        <div className="row g-4">

          <div className="col-lg-4">
            <div className="pricing-item">
              <h3>Free Plan</h3>
              <div className="icon">
                <i className="bi bi-box"></i>
              </div>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
                <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
              </ul>
              <div className="text-center"><a href="/#" className="buy-btn">Buy Now</a></div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="pricing-item featured">
              <h3>Business Plan</h3>
              <div className="icon">
                <i className="bi bi-rocket"></i>
              </div>

              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
                <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
                <li><i className="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>
                <li><i className="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>
              </ul>
              <div className="text-center"><a href="/#" className="buy-btn">Buy Now</a></div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="pricing-item">
              <h3>Developer Plan</h3>
              <div className="icon">
                <i className="bi bi-send"></i>
              </div>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
                <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
                <li><i className="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>
                <li><i className="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span></li>
              </ul>
              <div className="text-center"><a href="/#" className="buy-btn">Buy Now</a></div>
            </div>
          </div>

        </div>

      </div>

    </section>
    </>
  )
}
