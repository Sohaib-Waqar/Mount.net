"use client";
import Counter from "@/components/Counter";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
const page = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("home_2");
  }, []);

  return (
    <FxotaryLayout>
      {/*===============================
  BANNER 2 START
    ===============================*/}
      <section className="banner_2" id="banner_2">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 m-auto">
              <div className="banner_text_2">
                <h1 className="banner_title">
                Strategic Market <span>Connections</span>
                    
                </h1>
                <h2>
                Expanding Your Reach


                </h2>

                </div>
            </div>
          </div>
          <div className="row mt_20">
            <div className="col-xl-4 col-md-4">
              <div className="banner_2_img_1">
                <div data-animation="img-blur" data-scroll={0}>
                  <img
                    src="images/advisory_!.jpg"
                    alt="banner"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="banner_2_img_2">
                <div data-animation="img-blur" data-scroll={0}>
                  <img
                    src="images/advisory_2.jpg"
                    alt="banner"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="banner_2_img_3">
                <div data-animation="img-blur" data-scroll={0}>
                  <img
                    src="images/advisory3.png"
                    alt="banner"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="banner_2_button">
          <li>
            <a href="#banner_2">
              <i className="fa-regular fa-arrow-up" />
            </a>
          </li>
          <li>
            <a href="#counter_2">
              <i className="fa-regular fa-arrow-down" />
            </a>
          </li>
        </ul>
      </section>
      {/*===============================
  BANNER 2 END
    ===============================*/}
      {/*============================
  BRAND 2 START
    =============================*/}
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
      {/*============================
  BRAND 2 END
    =============================*/}
      {/*============================
  SERVICE 2 START
    =============================*/}
      <section className="tf__service_2 mt_60">
        <div className="row justify-content-between">
          <div className="col-xl-5">
            <div className="tf__service_2_img">
              <div data-animation="img-blur">
                <img
                  src="images/element.png"
                  alt="service"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="tf__service_2_text">
              <h2 data-text-animation="scrub" data-split="char">
              Industry Networking<span> Events </span>
              </h2>
              <h2 data-text-animation="scrub" data-split="char">
                Partnership Development<span> Service </span>
              </h2>
              <h2 data-text-animation="scrub" data-split="char">
              Market <span>Intelligence Reports</span>
              </h2>
              <h2 data-text-animation="scrub" data-split="char">
              Custom <span>Advisory Project</span>
              </h2>
              <h2 data-text-animation="scrub" data-split="char">
              Thought <span>Leadership Platform</span>
              </h2>
              <h2 data-text-animation="scrub" data-split="char">
                <span>    </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
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
      {/*============================Make 
  SERVICE 2 END
    =============================*/}
      {/*===============================
  COUNTER 2 START
    ===============================*/}
      {/*===============================
  COUNTER 2 START

===============================*/}

{/*===============================
  COUNTER 2 END

        <section className="counter_2 pt_110 xs_pt_60 pb_70 xs_pb_20" id="counter_2">
        <div className="container">
            <div className="row justify-content-between">
            <div className="col-xl-6 col-md-8 col-lg-6">
                <div className="counter_2_heading">
                <div className="section_heading section_heading_2">
                    <h2
                    className="advisory_services_title"
                    data-text-animation="rotate-in"
                    data-split="char"
                    data-duration={1}
                    >
                    Advisory Services: Transforming Strategy into Action
                    </h2>
                    <div className="advisory_services_paragraph">
                    <p>
                        Businesses have faced complex challenges and market uncertainties, 
                        but with our Advisory Services, they don't just survive—they thrive. 
                        We’ve worked with companies that were on the brink of major strategic shifts, 
                        helping them not only clarify their vision but also execute it with precision.
                        For instance, a client in the technology sector was struggling to expand 
                        into new international markets. Through our Feasibility Workshops, 
                        we evaluated the risks and opportunities, providing them with a clear path forward. 
                        Our Market Research revealed untapped segments, and our Data Analysis turned raw 
                        information into strategic insights that guided their expansion efforts. 
                        The result? A 40% increase in market share within just two years.
                    </p>
                    <p>
                        Our advisory services are not theoretical—they are practical, results-driven, 
                        and tailored to meet the specific needs of your business. We ensure that every audit 
                        and every piece of advice we provide is actionable, measurable, and aligned with 
                        your long-term goals.
                    </p>
                    
                    </div>
                    <div className="advisory_services_button">
                    <Link className="circle_btn circle_btn_2 learn_more_2" href="about_us">
                        <i className="fx-icon-long-next-arrow" /> Learn More
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>




===============================*/}
        <div className="container">
            <div className="row">
            <div className="col-12">
              <div className="about_text_2_details section_heading">
                <h5
                    className="advisory_services_title"
                    data-text-animation="rotate-in"
                    data-split="char"
                    data-duration={1}
                    >
Strategic Market Connections:Expanding Your Reach
                    </h5>
                <p>
                Expanding Your Reach
                Breaking into new markets is no small feat, but with our Strategic Market Connections, it becomes a calculated and achievable goal. We have helped companies establish and grow their presence in international markets by connecting them with the right partners and opportunities. One client, a SaaS provider, was looking to expand into Asia. Through our Industry Networking Events and Partnership Development Services, they formed key alliances that facilitated their entry into the market, resulting in a 35% increase in revenue from the region

                </p>
                <p>
                Our Market Intelligence Reports provide the insights needed to stay ahead of the competition, helping clients anticipate market shifts and adapt their strategies accordingly. For businesses facing unique challenges, our Custom Advisory Projects offer tailored solutions that address specific needs, ensuring that every move is strategic and every decision is data-driven.

                </p>
                <p>
                Our Thought Leadership Platform has positioned numerous clients as authorities in their industries, boosting their credibility and expanding their influence. By working with us, businesses don’t just grow—they lead.                </p>
              </div>
            </div>
          </div>
        </div>
  
  
  
  
          <div className="tf__services_page_item" id="service_list">
            <div className="row mt_120 xs_mt_70 item_1">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/service_pages_img_1.jpg"
                      alt="service"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="word">
                  Industry Networking Events: 
                  </h3>
                  <p>
                  Strategic Market Connections to help businesses expand their reach and establish a strong presence in new markets. Our approach includes Industry Networking Events, where we identify strategic opportunities that align with your goals, ensuring meticulous preparation and planning for effective engagement. We provide on-the-ground support during events, facilitating introductions and managing follow-ups, followed by post-event analysis to assess the value of connections and strategize next steps for long-term relationship building.
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="row mt_120 xs_mt_70 item_2">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="char">
                  Partnership Development Services: 


                  </h3>
                  <p>
                  Our Partnership Development Services focus on expanding your horizons by conducting market research to identify potential partners that fit your business objectives. We develop a tailored outreach strategy, handle negotiations to craft mutually beneficial agreements, and oversee a seamless onboarding process. Ongoing management ensures that partnerships continue to deliver value and align with your strategic goals.

                  </p>

                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/service_pages_img_2.jpg"
                      alt="service"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt_120 xs_mt_70 item_1">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/service_pages_img_3.jpg"
                      alt="service"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="">
                  Market Intelligence Reports

                  </h3>
                  <p>

                  With our Market Intelligence Reports, we help you stay ahead of the competition by defining research objectives tailored to your needs. Our comprehensive data collection and analysis uncover emerging trends, which are translated into strategic recommendations to guide your business decisions. Customized reporting ensures that the insights are relevant and actionable, tailored to your specific requirements.

                  </p>

                </div>
              </div>
            </div>
            <div className="row mt_120 xs_mt_70 item_2">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="char">
                  Custom Advisory Project


                  </h3>
                  <p>
                  For businesses with unique challenges, our Custom Advisory Projects offer tailored solutions. We start by deeply understanding your specific challenges and collaborate with you to develop a customized strategy. Our team supports the implementation of this strategy and provides continuous monitoring and adjustment to ensure its ongoing relevance and effectiveness, driving long-term impact and sustained success.
                  </p>
                  
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/service_pages_img_2.jpg"
                      alt="service"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt_120 xs_mt_70 item_1">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/service_pages_img_3.jpg"
                      alt="service"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="">
                  Thought Leadership Platform


                  </h3>
                  <p>
                  Thought Leadership Platform positions you as an industry leader through a well-developed content strategy. We create high-quality, insightful content that showcases your expertise, distribute it across relevant channels, and foster community engagement. We measure the impact of these efforts and refine the strategy as needed to ensure your thought leadership resonates and drives influence in your industry.            
                  </p>

                </div>
              </div>
            </div>



          </div>
          

      {/*===============================
  COUNTER 2 END
    ===============================*/}

      {/*===============================

      <section className="tf__featured_work pt_90 xs_pt_40">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-8">
              <div className="section_heading section_heading_2">
                <h2 data-text-animation="" data-split="char" data-duration={1}>
                  We elevate your brand's Daring dedication.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit eros
                  nullam inceptos placerat aliquet taciti conubia himenaeos
                  elementum mattis per velit eleifend ridiculus time of human
                  beign.
                </p>
              </div>
            </div>
          </div>
          <Link
            className="circle_btn circle_btn_2 learn_more_2"
            href="portfolio"
          >
            <i className="fx-icon-long-next-arrow" /> Learn More
          </Link>
          <div className="row justify-content-between">
            <div className="col-xl-5 col-md-6">
              <div className="tf__featured_work_item mb-5">
                <Link
                  href="service_details"
                  className="tf__featured_work_item_img cursor-arrow"
                  data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/futured_work_img_1.jpg"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <h3>Brand Design</h3>
                <p>Website Design / Brand</p>
              </div>
            </div>
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
          </div>
        </div>
      </section>

    ===============================*/}
      {/*============================
  BRAND 3 START
    =============================*/}
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
      {/*============================
  BRAND 3 END
    =============================*/}
    
      {/*============================
  HOME 2 CONTACT START
    =============================*/}
      <section className="home_2_contact mt_60 pt_105 xs_pt_70 pb_110 xs_pb_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6">
              <div className="section_heading section_heading_2">
                <h2 data-text-animation="" data-split="char" data-duration={1}>
                  Stay informed on all things Fxotary👍
                </h2>
                <p />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="home_2_contact_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit viverra
                  purus senectus sapien habitant rutrum himena curabitur
                  posuerecongue ac non eu odio
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
      {/*============================
  HOME 2 CONTACT END
    =============================*/}
      {/*===============================
  BLOG 2 START
    ===============================*/}
      <section className="blog blog_2 pt_120 xs_pt_80">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4">
              <div className="section_heading">
                <h2 data-text-animation="" data-split="char" data-duration={1}>
                  Latest News &amp; Updates.
                </h2>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="blog_right_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur inceptos placerat
                  aliquet taciti conubia.
                </p>
                <Link
                  className="circle_btn circle_btn_2 learn_more_2"
                  href="blog_list"
                >
                  <i className="fx-icon-long-next-arrow" /> View All Our <br />
                  News
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt_20">
            <div className="col-lg-4 col-md-6" data-animation="fade-left">
              <div className="single_blog first_blog">
                <div className="single_blog_text">
                  <Link className="title" href="blog_details">
                    Creative advertising our life became noise.
                  </Link>
                </div>
                <div className="single_blog_img">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <i className="far fa-calendar-check" /> September 25, 2022
                    </li>
                    <li>
                      <i className="far fa-comment-dots" /> No Comments
                    </li>
                  </ul>
                  <Link
                    href="blog_details"
                    data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                    className="img"
                  >
                    <img
                      src="images/blog_1.jpg"
                      alt="blog"
                      className="img-fluid w-100"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-animation="fade-left"
              data-delay=".75"
            >
              <div className="single_blog">
                <div className="single_blog_text">
                  <Link className="title" href="blog_details">
                    Creative advertising our life became noise.
                  </Link>
                </div>
                <div className="single_blog_img">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <i className="far fa-calendar-check" /> September 25, 2022
                    </li>
                    <li>
                      <i className="far fa-comment-dots" /> No Comments
                    </li>
                  </ul>
                  <Link
                    href="blog_details"
                    data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                    className="img"
                  >
                    <img
                      src="images/blog_2.jpg"
                      alt="blog"
                      className="img-fluid w-100"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-animation="fade-left"
              data-delay=".75"
            >
              <div className="single_blog last_blog">
                <div className="single_blog_text">
                  <Link className="title" href="blog_details">
                    Creative advertising our life became noise.
                  </Link>
                </div>
                <div className="single_blog_img">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <i className="far fa-calendar-check" /> September 25, 2022
                    </li>
                    <li>
                      <i className="far fa-comment-dots" /> No Comments
                    </li>
                  </ul>
                  <Link
                    href="blog_details"
                    data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                    className="img"
                  >
                    <img
                      src="images/blog_3.jpg"
                      alt="blog"
                      className="img-fluid w-100"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  BLOG 2 END
    ===============================*/}
      {/*===============================
  QUESTION START
    ===============================*/}
      <section
        className="tf__question pt_100 xs_pt_70 pb_100 xs_pb_70"
        data-animation="fade-bottom"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link
                href="contact"
                data-cursor='<i class="fa-light fa-envelope"></i>'
                className="tf__question_text"
              >
                <h2>
                  Have any <span>project?</span>
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  QUESTION END
    ===============================*/}
    </FxotaryLayout>
  );
};
export default page;
