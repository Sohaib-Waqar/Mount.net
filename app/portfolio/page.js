import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
const page = () => {
  return (
    <FxotaryLayout>
      <section className="tf__portfolio_page mt_190 xs_mt_150">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-5">
              <div className="section_heading">
                <h5>OUR PORTFOLIO</h5>
                <h2 className="banner_title">Some of our Clients</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-7">
              <div className="tf__portfolio_page_text">
                <p>
  
                </p>
              </div>
            </div>
          </div>
          <div className="row mt_60 justify-content-between">
            <div className="col-xl-5 col-md-6">
              <div className="tf__featured_work_item">
              <Link
            href="https://www.lifelofts.co.uk"
            className="cursor-arrow tf__featured_work_item_img"
          >
                  <div data-animation="img-blur">
                    <img
                      src="images/lifelofts.png"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <Link href="https://www.lifelofts.co.uk">
                  <h3 data-text-animation="" data-split="word">
                    Digital Marketing
                  </h3>
                </Link>
                <p data-text-animation="slide-from-right" data-split="char">
                  SEO / GMB
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="tf__featured_work_item item_2">
                <Link
                  href="https://www.lifelofts.co.uk"
                  className="cursor-arrow tf__featured_work_item_img"
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/futured_work_img_4.jpg"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <Link href="portfolio_details">
                  <h3 data-text-animation="" data-split="word">
                    Cartoon Animation
                  </h3>
                </Link>
                <p data-text-animation="slide-from-right" data-split="char">
                  Website Design / Brand
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="tf__featured_work_item tf__featured_work_item_small">
                <Link
                  href="portfolio_details"
                  className="cursor-arrow tf__featured_work_item_img"
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/futured_work_img_5.jpg"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <Link href="portfolio_details">
                  <h3 data-text-animation="" data-split="word">
                    Corporate Website
                  </h3>
                </Link>
                <p data-text-animation="slide-from-right" data-split="char">
                  Website Design / Brand
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="tf__featured_work_item item_2">
                <Link
                  href="portfolio_details"
                  className="cursor-arrow tf__featured_work_item_img"
                >
                  <div data-animation="img-blur">
                    <img
                      src="images/futured_work_img_6.jpg"
                      alt="futured"
                      className="img-fluid w-100"
                    />
                  </div>
                </Link>
                <Link href="portfolio_details">
                  <h3 data-text-animation="" data-split="word">
                    Digital Analysis
                  </h3>
                </Link>
                <p data-text-animation="slide-from-right" data-split="char">
                  Website Design / Brand
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Question />
    </FxotaryLayout>
  );
};
export default page;
