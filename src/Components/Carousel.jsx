import React from 'react';
import '../styles/Carousel.css'
import { CCarousel, CCarouselItem } from '@coreui/react'


const Carousel = () => {

    return (
        <CCarousel controls dark>
            <CCarouselItem>
                <div className="first">
                    <div className="left">
                        <h6>17 YEARS EXPERIENCE</h6>
                        <h1>We Are a Car Rental <span>Agency</span></h1>
                        <div className="line"></div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</p>
                        <button>READ MORE</button>
                    </div>
                    <div className="right">
                        <div className="circul">
                            <img src="https://mllafnlfvfl1.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://carspot.e-plugins.com/wp-content/uploads/2024/04/audi-r8-v10-road-wallpaper-preview-367-630500-822x822.jpg" alt="car" />
                        </div>
                    </div>
                </div>
            </CCarouselItem>
            <CCarouselItem>
                <div className="first">
                    <div className="left">
                        <h6>17 YEARS EXPERIENCE</h6>
                        <h1>Make Your Car Last <span>Longer</span></h1>
                        <div className="line"></div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</p>
                        <button>READ MORE</button>
                    </div>
                    <div className="right">
                        <div className="circul">
                            <img src="https://mllafnlfvfl1.i.optimole.com/w:822/h:822/q:mauto/ig:avif/https://carspot.e-plugins.com/wp-content/uploads/2024/04/rolls-royce-phantom-ewb-platino-luxury-cars-expensive-cars-20482152048-8061-492.jpeg" alt="car" />
                        </div>
                    </div>
                </div>
            </CCarouselItem>
            <CCarouselItem>
                <div className="first">
                    <div className="left">
                        <h6>17 YEARS EXPERIENCE</h6>
                        <h1>Keep Your Car Looking <span>Clean</span></h1>
                        <div className="line"></div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove.</p>
                        <button>READ MORE</button>
                    </div>
                    <div className="right">
                        <div className="circul">
                            <img src="https://mllafnlfvfl1.i.optimole.com/w:auto/h:auto/q:mauto/ig:avif/https://carspot.e-plugins.com/wp-content/uploads/2024/04/carwash-494-350500-822x822.jpg" alt="car" />
                        </div>
                    </div>
                </div>
            </CCarouselItem>
        </CCarousel>
    )
}

export default Carousel;