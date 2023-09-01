import "./navbaar.css";

function navbaar() {
  return (
    
      <div className="navSection">
        <div className="navall">
          <nav class="navbar navbar-dark  ">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img src="../img/logonav.png" alt="" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="offcanvas offcanvas-end text-bg-dark"
                tabindex="-1"
                id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                    Dark offcanvas
                  </h5>
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="inner-togle">
                  <div className="togel-left">
                    <ul>
                      <li>
                        <a href="#">
                          <h1>Home</h1>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h1>About</h1>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h1>Contect</h1>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h1>shop</h1>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="togel-right">
                    <ul>
                      <li>
                        <a href="#">
                          <h1>Social</h1>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h1>Instagram</h1>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h1>Facebook</h1>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h1>Linkdin</h1>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
{/*         
        <div className="keen-slider__slide number-slide1">
        <div className=" herosection">
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
      </div> */}
    </div>
  );
}
export default navbaar;
