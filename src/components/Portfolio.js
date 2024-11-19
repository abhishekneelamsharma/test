import React, { act, useState } from 'react'
import PortfolioImages from './PortfolioImages';

export default function Portfolio() {

  const [pImage, setPimage] = useState(PortfolioImages);
  const [activeCategory, setActiveCategory] = useState(false);



  const handleChanges = (category) => {
    const changes = PortfolioImages.filter((element) => {
      return element.category === category;
    })

    setActiveCategory(category);
    setPimage(changes);
  }


  return (
    <>
      <div className="page-title" data-aos="fade">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li><a href="/index.html">Home</a></li>
              <li className="current">Portfolio</li>
            </ol>
          </nav>
          <h1>Portfolio</h1>
        </div>
      </div>
      <section id="portfolio" className="portfolio section">

        <div className="container">
          <div className='isotope-layout' data-aos="fade-up" data-aos-delay="100">
            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li onClick={() => setPimage(PortfolioImages)} className='filter-active'>All</li>
              <li onClick={() => handleChanges("App")} className={activeCategory == "App" ? "filter-active" : " "}>App</li>
              <li onClick={() => handleChanges("Product")} className={activeCategory == "Product" ? "filter-active" : " "}>Product</li>
              <li onClick={() => handleChanges("Branding")} className={activeCategory == "Branding" ? "filter-active" : " "}>Branding</li>
              <li onClick={() => handleChanges("Books")} className={activeCategory == "Books" ? "filter-active" : " "}>Books</li>
              <li onClick={()=>handleChanges("okay")} className={activeCategory=="books" ? "filter-active":" "} ></li>
            </ul> 

            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {
                pImage.map((ele, ind) => (
                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                    <div className="portfolio-content h-100">
                      <img src={ele.src} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>{ele.title}</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a href="/assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="/portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
