"use client";
import Question from "@/components/Question";
import Counter from "@/components/Counter";
import TestimonialSlider from "@/components/TestimonialSlider";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const page = () => {
  return (
    <FxotaryLayout>
  {/*===============================
  BANNER START
    ===============================*/}
<section className="banner" style={{ background: "url(images/banner_bg.png)" }}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="banner_text">
          <h4>We are Digital Marketing Agency</h4>
          <h1 className="banner_title">
            Helping Brands to <span>Grow <b>Business.</b></span>
          </h1>

        </div>

      </div>

    </div>
     
  </div>
  <ul className="d-flex flex-wrap">
    <li>
      <span>Follow Us</span>
    </li>
    <li>
      <a href="#">Fb. /</a>
    </li>
    <li>
      <a href="#">Be. </a>
    </li>
    <li>
      <a href="#">Be.</a>
    </li>
  </ul>

</section>
{/*===============================
  BANNER END
    ===============================*/}

      {/*===============================
  ABOUT START
    ===============================*/}
      <section className="about_us pt_120 xs_pt_70 pb_120 xs_pb_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-7">
              <div className="about_text">
                <div className="section_heading">
                  <h5 data-text-animation="">ABOUT COMPANY</h5>
                  <h2
                    data-text-animation=""
                    data-split="word"
                    data-duration={1}
                    style={{ fontSize: '50px' }}
                  >
Will you shape the future, or will the future shape you  ?                </h2>
                </div>
                <Link className="circle_btn" href="about_us">
                  Learn More <i className="fx-icon-next-arrow" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-7">
              <div className="about_img_1">
                <div className="img">
                  <div data-animation="img-blur">
                    <img
                      src="images/about.png"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <p>
                At MountCyber, we’re more than a marketing agency – we’re the catalyst for your brand’s digital transformation. Driven by creativity and passion, we craft strategies that amplify your online presence and build lasting connections. From digital campaigns to cutting-edge SEO, we turn your ideas into reality. With MountCyber, your brand doesn’t just grow – it thrives. Let’s build something extraordinary together.                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div className="about_img_2">
                <div data-animation="img-blur">
                  <img
                    src="images/about_img_2.png"
                    alt="about"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  ABOUT END
    ===============================*/}
      {/*============================
  BRAND START
    =============================*/}
      <section className="tf__brand pt_100 xs_pt_60 pb_100 xs_pb_60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Marquee className="marquee_animi">
                <ul className="tf__brand_logo_area d-flex flex-wrap justify-content-between">
                  <li>
                    <a href="#">
                      <img
                        src="images/brand_1.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/brand_5.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/brand_4.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/brand_2.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/brand_3.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/brand_6.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/brand_7.jpg"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                </ul>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  BRAND END
    =============================*/}





{/*=============================== 
    WHAT WE DO START
================================*/}
<section className="what_we_do pt_120 xs_pt_70 pb_120 xs_pb_70">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-xl-5 col-md-5">
        <div className="section_heading">
          <h5 data-text-animation="">WHAT WE DO</h5>
          <h2 data-text-animation="" data-split="word">
            Our Expertise.
          </h2>
        </div>
      </div>
      <div className="col-xl-5 col-md-7">
        <div className="what_we_do_text">
          <p>
            At MountCyber, we provide an all-in-one solution to boost your business. Our digital marketing that positions your brand in front of the right audience, to custom websites that make a lasting impression – we’re here to help you grow. Our IT consultancy and BPO services ensure your operations run smoothly, giving you more time to focus on success. Let’s take your brand to the next level, together.
          </p>
          <a className="view_btn" href="/services">
            View All Services <i className="fx-icon-next-arrow" />
          </a>
        </div>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="service-card">
          <div className="icon">
            <img
              src="icons/megaphone.svg"
              alt="Digital Marketing"
              className="img-fluid"
            />
          </div>
          <h3>Digital Marketing</h3>
          <p>
            Our targeted digital marketing strategies position your brand in front of the right customers. From social media campaigns to SEO, we’re dedicated to driving engagement, traffic, and sales.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="service-card">
          <div className="icon">
            <img
              src="icons/web-programming.svg"
              alt="Web Development"
              className="img-fluid"
            />
          </div>
          <h3>Web Development</h3>
          <p>
            We build custom websites that are not only visually appealing but also optimized for performance. From e-commerce to corporate sites, our development team crafts experiences that convert.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="service-card">
          <div className="icon">
            <img
              src="icons/bpo-icon.svg"
              alt="BPO"
              className="img-fluid"
            />
          </div>
          <h3>BPO</h3>
          <p>
            Streamline your operations with our expert BPO services. We handle your back-office tasks so you can focus on scaling your business and increasing efficiency.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="service-card">
          <div className="icon">
            <img
              src="icons/ui-ux.svg"
              alt="UI/UX Design"
              className="img-fluid"
            />
          </div>
          <h3>UI/UX Design</h3>
          <p>
            Our UI/UX design experts create intuitive, beautiful interfaces that enhance the user experience, ensuring your digital products are easy to use and visually stunning.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*===============================
    WHAT WE DO END
================================*/}
      <section className="tf__brand_3 mt_170 xs_mt_100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Marquee className="marquee_animi">
                <ul>
                  <li>Impaired With Creativity</li>
                  <li>Design &amp; Development Craft</li>
                  <li>Crafting Emotional</li>
                  <li>Product Design</li>
                  <li>laravel web development</li>
                </ul>
              </Marquee>
            </div>
          </div>
        </div>
      </section>





      <section className="tf__featured_work pt_90 xs_pt_40">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-8">
              <div className="section_heading section_heading_2">
                <h2 data-text-animation="" data-split="char" data-duration={1}>
                  Our Approach
                </h2>
                <p>
                At Mount, we give our clients options to choose the Most Effective Engagement Model Designed to maximize their budget and meet their unique business needs, our models focus on delivering both cost efficiency and reinvestment strategies to drive long-term success.
                </p>
              </div>
            </div>
          </div>






          {/*Card 1 */}
          <div className="row justify-content-between">
            <div className="col-xl-6 col-md-6">
              <div className="tf__featured_work_item mb-5">
                <div className="service-card2">
                  <div className="icon">
                    <img
                      src="images/cost-cutting.png"
                      alt="BPO"
                      className="img-fluid"
                    />
                  </div>
                <h3>Cost-Saving with Outsourcing</h3>
                <p >
                Build your own dedicated team and optimize your operations by leveraging our expertise in Business Process Outsourcing (BPO). We help you save money by streamlining workflows and handling back-office tasks efficiently, allowing your core team to focus on growth.                </p>
                
                <a className="view_btn" href="/contact">
                Start Saving Today <i className="fx-icon-next-arrow" />
          </a>
              </div>
      
              </div>
                    {/*===============================
  TESTIMONIAL END
    ===============================*/}
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="tf__featured_work_item mb-5">
              
        <div className="service-card2">
          <div className="icon">
            <img
              src="images/growth.png"
              alt="BPO"
              className="img-fluid"
            />
          </div>
          <h3>Reinvest for Greater ROI</h3>
          <p>
          We don't just save you money — we reinvest those savings into high-impact marketing strategies. By reinvesting cost savings, we ensure your brand continues to grow through smarter, data-driven campaigns that amplify your success.          </p>
          <a className="view_btn" href="/contact">
        Unlock Growth Potential <i className="fx-icon-next-arrow" />
          </a>
        </div>

              </div>
            </div>

          </div>
        </div>
      </section>





      {/*===============================
  COUNTER START
    ===============================*/}
        <section className="home_2_contact mt_60 pt_105 xs_pt_70 pb_110 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6">
              <div className="section_heading section_heading_2">
                <h2 data-text-animation="" data-split="char" data-duration={1}>
                  Stay informed on all things👍
                </h2>
                <p />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="home_2_contact_text">
                <p>

                </p>
              </div>
            </div>
          </div>
          <form className="tf__contact_form">
            <div className="row">
              <div className="col-md-6">
                <div className="tf__contact_form_imput">
                  <label>First Name:</label>
                  <input type="text" placeholder="e.g. Willy" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tf__contact_form_imput">
                  <label>Email:</label>
                  <input type="email" placeholder="e.g. youremail@gmail.com" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tf__contact_form_imput">
                  <label>Phone:</label>
                  <input type="text" placeholder="e.g. +8801" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tf__contact_form_imput">
                  <label>subject:</label>
                  <input type="text" placeholder="e.g. I need help" />
                </div>
              </div>
              <div className="col-xl-12">
                <div className="tf__contact_form_imput">
                  <label>Message:</label>
                  <textarea
                    rows={4}
                    placeholder="e.g. you need any help"
                    defaultValue={""}
                  />
                </div>
                <button
                  className="circle_btn circle_btn_2 learn_more_2"
                  type="submit"
                >
                  <i className="fx-icon-long-next-arrow" />
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/*===============================
  COUNTER END
    ===============================*/}
      {/*===============================
  ACHIVEMENT START

      <section className="achivement pt_100 xs_pt_50 pb_120 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="section_heading">
                <h5>ACHIVEMENTS</h5>
                <h2 data-text-animation="" data-split="word">
                  Company awards &amp; achievements
                </h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="achivement_right_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit viverra
                  purus senectus sapien habitant rutrum himenaeos curabitur
                  posuere congue ac non eu odio tempor placerat id.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mt_50">
            <div className="col-xxl-3 col-md-6 col-lg-4 col-xl-4">
              <div className="achivement_img">
                <div className="img_1">
                  <div data-animation="img-blur">
                    <img
                      src="images/achivement_img_1.jpg"
                      alt="achivement"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <div className="img_2">
                  <div data-animation="img-blur">
                    <img
                      src="images/achivement_img_2.jpg"
                      alt="achivement"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-lg-8 col-xl-8">
              <div className="achivement_list">
                <ul>
                  <li data-animation="">
                    <div className="icon">
                      <img
                        src="images/achivement_icon_1.png"
                        alt="icon"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="text">
                      <h4>Awwwards Interior excellence.</h4>
                      <span>2015</span>
                      <a href="#" className="achivement_link">
                        <i className="fx-icon-long-next-arrow" />
                      </a>
                    </div>
                  </li>
                  <li data-animation="">
                    <div className="icon">
                      <img
                        src="images/achivement_icon_2.png"
                        alt="icon"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="text">
                      <h4>Best Site of the Year Awards.</h4>
                      <span>2018</span>
                      <a href="#" className="achivement_link">
                        <i className="fx-icon-long-next-arrow" />
                      </a>
                    </div>
                  </li>
                  <li data-animation="">
                    <div className="icon">
                      <img
                        src="images/achivement_icon_3.png"
                        alt="icon"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="text">
                      <h4>Template of the seasons in this month.</h4>
                      <span>2020</span>
                      <a href="#" className="achivement_link">
                        <i className="fx-icon-long-next-arrow" />
                      </a>
                    </div>
                  </li>
                  <li data-animation="">
                    <div className="icon">
                      <img
                        src="images/achivement_icon_4.png"
                        alt="icon"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="text">
                      <h4>Best Selling of this week &amp; month.</h4>
                      <span>2023</span>
                      <a href="#" className="achivement_link">
                        <i className="fx-icon-long-next-arrow" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    ===============================*/}

  {/*===============================
  COUNTER 2 END
    ===============================
*/}






      {/*===============================
  TESTIMONIAL START
              <div className="col-xl-5 col-md-6">
              <div className="tf__featured_work_item">
                <Link
                  href="service_details"
                  className="tf__featured_work_item_img cursor-arrow"
                  data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/futured_work_img_2.jpg"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <h3>Website Design 2024</h3>
                <p>Website Design / Brand</p>
              </div>
            </div>
    ===============================*/}

<section className="tf__brand tf__brand_2 pt_110 xs_pt_70 pb_100 xs_pb_60">
        <div className="container">
          <div className="row">

            <div className="col-12">
              <Marquee className="marquee_animi">
                <ul className="tf__brand_logo_area d-flex flex-wrap justify-content-between">
                  <li data-animation="" data-delay="1.75">
                    <a href="#">
                      <img
                        src="images/brand1.png"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li data-animation="">
                    <a href="#">
                      <img
                        src="images/slack.png"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li data-animation="" data-delay=".75">
                    <a href="#">
                      <img
                        src="images/brand5.png"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li data-animation="" data-delay={1}>
                    <a href="#">
                      <img
                        src="images/paypal.png"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>
                  <li data-animation="" data-delay="1.25">
                    <a href="#">
                      <img
                        src="images/microsoft.png"
                        alt="brand"
                        className="img-fluid w-100"
                      />
                    </a>
                  </li>

                </ul>
              </Marquee>
            </div>
          </div>
        </div>
      </section>





    <Question />

    </FxotaryLayout>
  );
};
export default page;
