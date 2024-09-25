"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

const TestimonialSlider = () => {
  return (
    <Slider {...sliderProps.testimonial} className="row testi_slider">
      <div className="col-xl-12">
        <div className="testimonial_item">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="testimonial_text">
                <p className="description">
                  "MountCyber transformed our website into a sleek, high-performing platform that significantly improved user engagement. Their web development team is nothing short of exceptional, delivering on time and exceeding expectations."
                </p>
                <p className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </p>
                <h4>
                  Emily Johnson <span>Marketing Director, Tech Innovators</span>
                </h4>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="testimonial_img">
                <img
                  src="images/testimonial_img_1.png"
                  alt="testimonial"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="testimonial_item">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="testimonial_text">
                <p className="description">
                  "Thanks to MountCyber's SEO expertise, we saw a dramatic increase in organic traffic within just a few months. Their deep understanding of search engine algorithms helped us rank higher for key industry terms."
                </p>
                <p className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </p>
                <h4>
                  David Brown <span>CEO, FinTech Solutions</span>
                </h4>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="testimonial_img">
                <img
                  src="images/testimonial_img_2.png"
                  alt="testimonial"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="testimonial_item">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="testimonial_text">
                <p className="description">
                  "The graphic design work from MountCyber has been a game-changer for our branding. Their creativity and attention to detail brought our vision to life in a way that truly resonates with our audience."
                </p>
                <p className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </p>
                <h4>
                  Sarah Williams <span>Creative Director, BrightSpark Media</span>
                </h4>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="testimonial_img">
                <img
                  src="images/testimonial_img_3.png"
                  alt="testimonial"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="testimonial_item">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="testimonial_text">
                <p className="description">
                  "Working with MountCyber on our website redesign was a fantastic experience. They took the time to understand our needs and delivered a responsive, visually appealing website that helped increase our conversions by 30%."
                </p>
                <p className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </p>
                <h4>
                  John Doe <span>Owner, RetailPro</span>
                </h4>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="testimonial_img">
                <img
                  src="images/testimonial_img_4.png"
                  alt="testimonial"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
