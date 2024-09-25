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
                  <span>Production Services</span>
                    
                </h1>
                <h2>
                Elevating Your Brand’s Story
In today’s digital age

                </h2>
                <p>
                Our Production Services have helped brands craft narratives that captivate and convert. For example, a client in the fashion industry sought to rebrand themselves to appeal to a younger demographic. Through our Design and Art Direction services, we created a fresh, modern visual identity that led to a 50% increase in online engagement.
                </p>
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
                    src="images/advisory3.jpg"
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
                Design
              </h2>
              <h2 data-text-animation="scrub" data-split="char">
                Art<span> Direction </span>
              </h2>
              <h2 data-text-animation="scrub" data-split="char">
                Copy <span>Writing</span>
              </h2>
              <h2 data-text-animation="scrub" data-split="char">
              Video<span>graphy</span>
              </h2>
              <h2 data-text-animation="scrub" data-split="char">
              AR/<span>VR/MR</span>
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
                    Production Services: Elevating Your Brand’s Story
                    In today’s digital age
                    </h5>
                <p>
                It’s not enough to have a product—you need a compelling story that resonates with your audience. Our Production Services have helped brands craft narratives that captivate and convert. For example, a client in the fashion industry sought to rebrand themselves to appeal to a younger demographic. Through our Design and Art Direction services, we created a fresh, modern visual identity that led to a 50% increase in online engagement.


                </p>
                <p>
                Our Videography services have produced content that not only tells a story but also drives action. One of our clients in the tech sector saw a significant increase in product sign-ups after we launched a series of engaging, informative videos that highlighted the benefits of their platform.

                </p>
                <p>
                Moreover, our AR/VR/MR solutions have pushed the boundaries of what’s possible in marketing, creating immersive experiences that leave lasting impressions. We have the tools and the expertise to bring your brand’s story to life in ways that are both innovative and impactful.
                </p>
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
                      src="images/design.jpg"
                      alt="service"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="word">
                  Design
                  </h3>
                  <p>
                  Design begins with understanding your brand vision, translating it into a visually striking and cohesive identity. Our team develops design concepts that align with your business goals, employing an iterative process where client feedback is continuously integrated to refine visuals. We ensure consistency across all platforms, from digital to print, and pay meticulous attention to detail in the final delivery, making sure all design elements are ready for deployment.

                  </p>
                  
                </div>
              </div>
            </div>
            <div className="row mt_120 xs_mt_70 item_2">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="char">
                  Art Direction: Guiding Creative Vision with Precision


                  </h3>
                  <p>
                  Art Direction guides the creative vision with precision, starting from collaborative conceptualization to define a clear direction aligned with your goals. We create mood boards and storyboards to guide the project’s visual direction and coordinate with designers, photographers, and videographers to ensure a cohesive execution. Quality assurance maintains the integrity of the creative vision throughout production, culminating in a final approval process that ensures the highest standards of creativity and execution.

                  </p>
                  <ul>
                    <li>Defining Research Objectives:</li>
                    <li>Data Collection Techniques</li>
                    <li>Trend Analysis</li>
                    <li>Customer Insights</li>
                    <li>Actionable Insights</li>
    
                  </ul>
                  
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/ART.jpg"
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
                      src="images/copywriting.jpg"
                      alt="service"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="">
                  Copywriting

                  </h3>
                  <p>
                  In Copywriting, we first understand your target audience and objectives to develop strategic messaging that resonates with your brand values. Our process includes creating various content types, from web copy to advertising slogans, ensuring consistency in tone and style. Rigorous editing and refinement ensure clarity and impact, with a final review to prepare the copy for deployment across different platforms.

                  </p>
                  <ul>
                    <li>Data Collection and Management</li>
                    <li>Analytical Techniques</li>
                    <li>Insight Generation</li>
                    <li>Visualization and Reporting</li>
                    <li>Continuous Monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt_120 xs_mt_70 item_2">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="char">
                  Videography: Telling Stories Through Visual Media


                  </h3>
                  <p>
                  For Videography, we emphasize thorough pre-production planning, including script development and location scouting. Our team captures high-quality footage using state-of-the-art equipment, and the post-production process—encompassing editing, color correction, sound design, and visual effects—ensures the final product aligns with your vision. We collaborate closely with you throughout post-production to deliver a final cut optimized for various platforms and ready for distribution.

                  </p>
                  
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_img">
                  <div data-animation="img-blur">
                    <img
                      src="images/video.jpg"
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
                      src="images/vr.jpg"
                      alt="service"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="">
                  AR/VR/MR: Creating Immersive Digital Experiences


                  </h3>
                  <p>
                  Our AR/VR/MR services start with understanding your objectives and exploring how immersive technologies can enhance your brand experience. We design intuitive and engaging user experiences, develop them using advanced AR/VR/MR technologies, and refine them through user testing to ensure impact and usability. The deployment process includes ongoing support to maximize the value of the immersive experience.
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
                  Stay informed on all things👍
                </h2>
                <p />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="home_2_contact_text">

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

                </p>

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
                  Let's<span> Talk</span>
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
