import Question from "@/components/Question";
import FxotaryLayout from "@/layout/FxotaryLayout";
import Link from "next/link";
const page = () => {
  return (
    <FxotaryLayout>
      <section className="tf__blog_page mt_190 xs_mt_70">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-sm-5 col-md-6">
              <div className="section_heading">
                <h5>OUR BLOG</h5>
                <h2 className="banner_title">Latest Blogs</h2>
              </div>
            </div>
            <div className="col-xl-5 col-sm-7 col-md-6">
              <div className="tf__portfolio_page_text">
                <p>

                </p>
              </div>
            </div>
          </div>
          <div className="row mt_35">
            <div className="col-lg-4 col-md-6">
              <div className="single_blog first_blog">
                <div className="single_blog_text">
                  <ul className="d-flex flex-wrap">
                    <li>Digital Marketing</li>
                    <li>August 10, 2024</li>
                  </ul>
                  <Link className="title" href="blog_details">
                    Ultimate Guide to SEO in 2024
                  </Link>
                </div>
                <div className="single_blog_img">
                  <Link
                    href="blog_details"
                    data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                    className="img d-block"
                  >
                    <div data-animation="img-blur" data-delay={0}>
                      <img
                        src="images/futured_work_img_9.jpg"
                        alt="blog"
                        className="img-fluid w-100"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_blog">
                <div className="single_blog_text">
                  <ul className="d-flex flex-wrap">
                    <li>AR/VR/MR</li>
                    <li>September 1, 2024</li>
                  </ul>
                  <Link className="title" href="blog_details">
                  The Future of Social Interactions in Virtual Spaces
                  </Link>
                </div>
                <div className="single_blog_img">
                  <Link
                    href="blog_details"
                    data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                    className="img d-block"
                  >
                    <div data-animation="img-blur" data-delay={0}>
                      <img
                        src="images/vr2.jpg"
                        alt="blog"
                        className="img-fluid w-100"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_blog last_blog">
                <div className="single_blog_text">
                  <ul className="d-flex flex-wrap">
                    <li>User Experience</li>
                    <li>September 10, 2023</li>
                  </ul>
                  <Link className="title" href="blog_details">
                    Creative advertising our life became noise.
                  </Link>
                </div>
                <div className="single_blog_img">
                  <Link
                    href="blog_details"
                    data-cursor='<i class="fx-icon-long-next-arrow"></i>'
                    className="img d-block"
                  >
                    <div data-animation="img-blur" data-delay={0}>
                      <img
                        src="images/blog_3.jpg"
                        alt="blog"
                        className="img-fluid w-100"
                      />
                    </div>
                  </Link>
                </div>
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
