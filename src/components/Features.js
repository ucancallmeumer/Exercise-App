import React from 'react'

export default function Features() {
  return (
    <>
        <header className="header-design">
            <div className="footer-wave"></div>
            <div className='feature-text'>
                <p> Features </p>
            </div>
        </header>


        <div className="pset">
            <div className="container features-container">
                <div className="row listar-feature-items">
                    <div className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
                        <div className="listar-feature-item listar-feature-has-link">
                            <div className="listar-feature-item-inner">
                                <div className="listar-feature-right-border"></div>
                                <div className="listar-feature-block-content-wrapper">
                                    <div className="listar-feature-icon-wrapper">
                                        <div className="listar-feature-icon-inner">
                                            <div className='listar-image-icon'>
                                              <i class="fa-solid fa-briefcase"></i>    
                                            </div>
                                        </div>
                                    </div>

                                    <div className="listar-feature-content-wrapper">
                                        <div className="listar-feature-item-title listar-feature-counter-added">
                                            <span><span>01</span>
                                                Businesses </span>
                                        </div>
                                        <div className="listar-feature-item-excerpt">
                                          Start publish listings to show everyone the details and goodies of your establishment. 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
                        <div className="listar-feature-item listar-feature-has-link">
                            <div className="listar-feature-item-inner">
                                <div className="listar-feature-right-border"></div>
                                <div className="listar-feature-block-content-wrapper">
                                    <div className="listar-feature-icon-wrapper">
                                        <div className="listar-feature-icon-inner">
                                            <div className="listar-image-icon">
                                                <i class="fa-solid fa-user"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="listar-feature-content-wrapper">
                                        <div className="listar-feature-item-title listar-feature-counter-added">
                                            <span><span>02</span>
                                                Customers </span>
                                        </div>

                                        <div className="listar-feature-item-excerpt">
                                            Easily find interesting places by local experts, save time by checking listing features. 
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed" data-aos="fade-zoom-in" data-aos-group="features" data-line-height="25.2px">
                        <div className="listar-feature-item listar-feature-has-link">
                            <div className="listar-feature-item-inner">
                                <div className="listar-feature-right-border"></div>
                                <div className="listar-feature-block-content-wrapper">
                                    <div className="listar-feature-icon-wrapper">
                                        <div className="listar-feature-icon-inner">
                                            <div className="listar-image-icon">
                                                <i class="fa-solid fa-comments"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listar-feature-content-wrapper">
                                        <div className="listar-feature-item-title listar-feature-counter-added">
                                            <span><span>03</span>
                                                Feedback </span>
                                        </div>

                                        <div className="listar-feature-item-excerpt mb-5">
                                            Visitors discuss listings to share experiences, so businesses get reputation consolidated. 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
