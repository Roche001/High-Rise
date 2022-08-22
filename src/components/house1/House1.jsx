import React from "react";
import "./House1.css";

const House1 = () => {
  $(".owl-carousel").owlCarousel({
    stagePadding: 200,
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    lazyLoad: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 60,
      },
      600: {
        items: 1,
        stagePadding: 100,
      },
      1000: {
        items: 1,
        stagePadding: 200,
      },
      1200: {
        items: 1,
        stagePadding: 250,
      },
      1400: {
        items: 1,
        stagePadding: 300,
      },
      1600: {
        items: 1,
        stagePadding: 350,
      },
      1800: {
        items: 1,
        stagePadding: 400,
      },
    },
  });
  return (
    <div>
      <div class="owl-carousel">
        <div class="item">
          <a href="#button">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_bags.jpg"
              alt=""
            />
            <div class="inner">
              <a href="#button">The Erling Bag</a>
            </div>
          </a>
        </div>
        <div class="item black">
          <a href="#button">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_book_cover.jpg"
              alt=""
            />
            <div class="inner">
              <a href="#button">Summer Book Series</a>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="#button">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_bags.jpg"
              alt=""
            />
            <div class="inner">
              <a href="#button">The Erling Bag</a>
            </div>
          </a>
        </div>
        <div class="item black">
          <a href="#button">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_book_cover.jpg"
              alt=""
            />
            <div class="inner">
              <a href="#button">Summer Book Series</a>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="#button">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_bags.jpg"
              alt=""
            />
            <div class="inner">
              <a href="#button">The Erling Bag</a>
            </div>
          </a>
        </div>
        <div class="item black">
          <a href="#button">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/slider_book_cover.jpg"
              alt=""
            />
            <div class="inner">
              <a href="#button">Summer Book Series</a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default House1;
