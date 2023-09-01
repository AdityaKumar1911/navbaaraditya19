import React, { useEffect } from "react";
import docSlider from "./docSlider";

import "docslider/docSlider.css";
import "./styles.css";
import Navbaar from "./components/navbaar";
import HeroTwo from "./components/heroTwo";

const debounce = (fn, t) => {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
};

const en = debounce(() => {
  docSlider.enable(true);
}, 500);
export default (props) => {
  useEffect(() => {
    docSlider.init({
      scrollReset: true,
      beforeChange(...f) {
        docSlider.enable(false);
        en();
      }
    });
  }, []);
  return (
    <div className="keen-slider keen-slider--vertical docSlider">
      <Navbaar/>
      <HeroTwo/>
      {/* <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3"></div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div> */}
    </div>
  );
};
