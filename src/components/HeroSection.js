import React from "react";
import {Link} from 'react-router-dom'
import backImg from "../images/Hero-img.png";

export default function HeroSection() {
  return (
    <>
      <div className="container-fluid hero-section">
        <div className="row">
          <div className="col-lg-6 p-5 order-2 order-sm-1 order-md-1">
            <button className="px-3 header-btn mb-5">
              Top Exercise Tracker
            </button>
            <h1 className="fw-bold display-4 title">
              <span>
                Best way
                <br />{" "}
              </span>{" "}
              to your Fitness <br />
              Activity Track
            </h1>
            <p>
              Easiest way to Track your fitness activity
              <br /> with exercise tracker, get your accurate
              <br /> data to achieve next level of yours
            </p>
            <Link to={'/activities'} className="btn btn-light mt-5">
              {" "}
              Start Now!
            </Link>
          </div>
          <div
            className="col-lg-6 p-5 order-1 order-sm-2 order-md-2"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src={backImg} className="img-fluid hero-img" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
