import React from 'react'
import "./navbaar.css";

function YourNext() {
  return (
    <div className='your-next-part'>
         <div className="keen-slider__slide number-slide1">
        <div className=" herosection ">
          <div className="container   ">
            <div className="row">
              <div className="col-lg-6 hero-left">
                <h1 className="animate__animated wow animate__fadeInLeft ">
                  Your next
                </h1>
                <h1 className=" animate__animated wow animate__slideInRight">
                  creative digital
                </h1>
                <h1 className=" animate__animated wow animate__zoomIn">
                  experience
                </h1>
              </div>
              <div className="col-lg-6 hero-right">
                <div className="contactus ">
                  <a href="#" class="animated-button1">
                    CONTACT US
                  </a>
                </div>
                <div className="icons">
                  <ul id="liicon">
                    <li>
                      <a style={{ color: "#3b5998" }} href="#!" role="button">
                        <i class="fab fa-facebook-f fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: "#55acee" }} href="#!" role="button">
                        <i class="fab fa-twitter fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: "#dd4b39" }} href="#!" role="button">
                        <i class="fab fa-google fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: "#ac2bac" }} href="#!" role="button">
                        <i class="fab fa-instagram fa-lg"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourNext