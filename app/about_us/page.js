import Question from "@/components/Question";
import TestimonialSlider from "@/components/TestimonialSlider";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
import Counter from "@/components/Counter";
const page = () => {
  return (
    <FxotaryLayout>
      {/*===============================
  ABOUT US 2 START
    ===============================*/}
      <section className="tf__about_us_2 mt_190 xs_mt_150">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_heading">
                <h5>ABOUT US</h5>
                <h2 className="banner_title" data-text-animation="slide-up">
                  We Help Brands Thrive with Innovative Marketing Solutions
                </h2>
              </div>
              <div className="about_text_2">
                <p style={{ textAlign: 'justify' }}>
                At Mount, our mission is to empower businesses worldwide by offering high-quality outsourcing solutions, providing significant cost savings without compromising on excellence. Founded in 2024, our team brings together over 100 years of combined expertise across various industries.

We currently specialize in digital marketing, consultancy, web/app/software development, and AI. Our consultancy services are unmatched, as we focus on creating, streamlining, and optimizing business and economic systems to help our clients thrive. We pride ourselves on delivering white glove services, ensuring personalized attention and meticulous care in everything we do.

</p>
                <Link
                  className="circle_btn circle_btn_2 learn_more_2"
                  href="services"
                >
                  <i className="fx-icon-long-next-arrow" /> Explore Our <br />
                  Services
                </Link>
 
              </div>

              
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="about_us_2_img">
                <div data-animation="img-blur" data-scroll={0} data-delay={0}>
                  <img
                    src="images/about_img_3.png"
                    alt="about us"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="about_text_2_details section_heading">
                <h5>OUR STORY</h5>
                <p>
                Inspired by the rapid development of Pakistan, particularly in the tourism sector, we also offer VVIP client acquisition tours for those seeking a blend of business and rejuvenation. From serene luxury resorts and wellness retreats in the lush valleys of Swat and Hunza to private yacht cruises along the stunning coastline of the Arabian Sea, Pakistan offers unparalleled opportunities for relaxation. For the adventure seekers, we organize exclusive trekking experiences in the Himalayas, paragliding over the breathtaking northern landscapes, and guided expeditions to explore the ancient Silk Road.


                </p>
                <p>
   
Our core values—flexibility, exclusivity, and world-class business consultancy—set us apart. We cater to businesses looking to leverage the economic advantages of outsourcing to Pakistan, with a focus on delivering exceptional quality and results.

                </p>
              </div>
              <div className="about_text_2_details section_heading">
                <h5>CORE VALUES</h5>

                <h6>Excellence
                </h6>
                <p>
                We provide high-quality, personalized outsourcing solutions with a "white glove" approach that ensures attention to detail and superior results.
                </p>

                <h6>Innovation
                </h6>
                <p>
                We leverage cutting-edge technologies and global expertise to deliver forward-thinking strategies in digital marketing, AI, and software development.
                </p>

                <h6>Integrity
                </h6>
                <p>
                Transparency, trust, and ethical practices are at the heart of everything we do, building lasting partnerships with clients and driving mutual success.                </p>

                <h6>Exclusivity
                </h6>
                <p>
                Our VVIP client acquisition tours offer a unique blend of luxury, adventure, and business opportunities, creating exclusive experiences for growth and relaxation.                </p>

              </div>


            </div>
          </div>
        </div>
      </section>
      {/*===============================
  ABOUT US 2 END
    ===============================*/}
      {/*===============================
  COUNTER 3 START
    ===============================*/}
      <section className="counter pt_120 xs_pt_70 pb_140 xs_pb_90">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-md-6">
              <div className="counter_img">
                <img
                  src="images/counter_img.png"
                  alt="counter"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="row">
                <div className="col-xl-6 col-sm-6" data-animation="fade-right">
                  <div className="counter_item counter_item_icon">
                    <h2 className="count">
                      <Counter end={100} />+
                    </h2>
                    <p>Project completed</p>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-sm-6"
                  data-animation="fade-right"
                  data-delay=".5"
                >
                  <div className="counter_item">
                    <h2 className="count">
                      <Counter end={23} />
                    </h2>
                    <p>Skilled Professional</p>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-sm-6"
                  data-animation="fade-right"
                  data-delay=".75"
                >
                  <div className="counter_item">
                    <h2 className="count">
                      <Counter end={500} />
                    </h2>
                    <p>Visited Conference</p>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-sm-6"
                  data-animation="fade-right"
                  data-delay={1}
                >
                  <div className="counter_item counter_item_icon">
                    <h2 className="count">
                      <Counter end={95.6} />%
                    </h2>
                    <p>Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*===============================
  COUNTER 3 END
    ===============================*/}

      <Question />
    </FxotaryLayout>
  );
};
export default page;
