import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
const page = () => {
  return (
    <FxotaryLayout>
      {" "}
      {/*===============================
  SERVICES PAGE START
    ===============================*/}
      <section className="tf__services_page tf__about_us_2 mt_190 xs_mt_150">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="section_heading">
                <h5>OUR SERVICES</h5>
                <h2 className="banner_title" data-text-animation="slide-up">
                  What would you like to get done?
                </h2>
              </div>
              <div className="about_text_2">

              </div>
            </div>
          </div>
        </div>
        <div className="tf__service_2 mt_60">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-6">
              <div className="tf__service_2_img">
                <div data-animation="img-blur" data-scroll={0}>
                  <img
                    src="images/service_2_img.jpg"
                    alt="service"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div className="tf__service_2_text">
                <h2 data-text-animation="scrub" data-split="char">
                  Advisory
                </h2>
                <h2 data-text-animation="scrub" data-split="char">
                  Enterprise<span> Facilitation</span>
                </h2>
                <h2 data-text-animation="scrub" data-split="char">
                <span>Engineering</span>
                </h2>
                <h2 data-text-animation="scrub" data-split="char">
                  <span>Production</span>
                </h2>
                <h2 data-text-animation="scrub" data-split="char">
                  Strategic Market<span>Connections</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="tf__services_page_item" id="service_list">
            <div className="row mt_120 xs_mt_70 item_1">
              <div className="col-xl-5 col-md-6">
               {/* 
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
                */}
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="word">
                  Advisory
                  </h3>
                  <p></p>
                  <ul>
                    <li>Feasibility Workshop</li>
                    <li>Market Research</li>
                    <li>Data Analysis</li>
                    <li>Audits</li>
                  </ul>

                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="advisory"
                  >
                    <i className="fx-icon-long-next-arrow" /> Advisory
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt_120 xs_mt_70 item_2">
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="" data-split="char">
                  Enterprise Facilities
                  </h3>
                  <p></p>
                  <ul>
                    <li>Cost Optimization</li>
                    <li>Worldwide CX Outsourcing</li>
                    <li>Digital Marketing & Branding</li>
                    <li>HR and Recruitment</li>
                  </ul>

                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="enterprise"
                  >
                    <i className="fx-icon-long-next-arrow" /> Enterprise
                  </Link>
                </div>
              </div>
               {/* 
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
                */}
            </div>
            <div className="row mt_120 xs_mt_70 item_1">
              <div className="col-xl-5 col-md-6">
                               {/* 
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
                */}
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="">
                    Engineering
                  </h3>
                  <p>

                  </p>
                  <ul>
                    <li>Product Development</li>
                    <li>Web Development</li>
                    <li>Application Development</li>
                    <li>Application Reengineering</li>
                    <li>Software Development</li>
                    <li>Cloud Engineering & Migration</li>
                    <li>Game Development</li>
                  </ul>

                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="engineering"
                  >
                    <i className="fx-icon-long-next-arrow" /> Engineering
                  </Link>
                </div>
              </div>



              <div className="col-xl-5 col-md-6">
                <div className="tf__services_2_text">
                  <h3 data-text-animation="">
                  Strategic Market Connections
                  </h3>
                  <p>

                  </p>
                  <ul>
                    <li>Industry Networking Events</li>
                    <li>Partnership Development Services</li>
                    <li>Market Intelligence Reports</li>
                    <li>Custom Advisory Project</li>
                    <li>Thought Leadership Platform</li>
                  </ul>
                  <Link
                    className="circle_btn circle_btn_2 learn_more_2"
                    href="market"
                  >
                    <i className="fx-icon-long-next-arrow" /> Enterprise
                  </Link>
                </div>
              </div>





            </div>
          </div>
        </div>
      </section>
      {/*===============================
  SERVICES PAGE END
    ===============================*/}
      <Question />
    </FxotaryLayout>
  );
};
export default page;
