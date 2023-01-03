import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <footer>
            <div className="footer-top mt-5">
                <div className="container">
                    <div className="footer-day-time">
                        <div className="row">
                            <div className="col-md-8">
                                <ul>
                                    <li>Customer Support - (24/7days)</li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <div className="phone-no">
                                    <a href="tel:+12 34 56 78 90"><i className="fa fa-mobile" aria-hidden="true"></i>Call +12 34 56 78 90</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            
                            <h4>About us</h4>
                            <p>Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum war der Standard der Branche Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum war der Standard der Branche  </p>

                        </div>

                        <div className="col-md-4">
                            <h4>Information</h4>
                            <ul className="address1">
                                <li><i className="fa fa-map-marker"></i>Lahore, Pakistan</li>
                                <li><i className="fa fa-envelope"></i><a href="mailto:#">info@test.com</a></li>
                                <li><i className="fa fa-mobile" aria-hidden="true"></i> <a href="tel:12 34 56 78 90">12 34 56 78 90</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h4>Follow us</h4>
                            <ul className="social-icon">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <p className="copyright text-uppercase">Copyright © 2022
                            </p>
                        </div>
                        <div className="col-sm-7">
                            <ul>
                                <li><Link to={'/home'}>Home</Link></li>
                                <li><Link to={'/activities'}>Activities</Link></li>
                                <li><Link to={'/Features'}>Features</Link></li>
                                <li><Link to={'/AboutUs'}>Vision</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </>
  )
}
