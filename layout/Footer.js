import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt_120 xs_pt_80">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-sm-8 col-md-6 col-lg-4">
            <div className="footer_content">
              <Link className="footer_logo" href="/">
                <img
                  src="images/footer_logo.png"
                  alt="Fxotary"
                  className="img-fluid w-100"
                />
              </Link>
              <p>
              At MountCyber, we’re passionate about fueling your success through innovative digital marketing, web development, and IT solutions. We don’t just deliver results – we ignite your brand's growth with heart and strategy. 
              Together, let’s unlock the full potential of your brand.
              </p>
              <ul className="d-flex flex-wrap">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-3 col-md-6 col-lg-2">
            <ul className="footer_menu">
              <li>
                <Link
                  href="/"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="services"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="contact"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="blog_grid"
                  className="text_hover_animaiton text_hover_type_2"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="footer_address">
              <h3>Address</h3>
              <p>128 City Rd, London EC1V 2NX, United Kingdom</p>
              <p>Major road 3. D-12, Islamabad</p>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="footer_address">
              <h3>Contact</h3>
              <p>
                <a href="mailto:seo@mountcyber.net">seo@mountcyber.net</a>
                <a href="callto:+44753714437">+44 7537 14437</a>
              </p>
              <p>
                <a href="mailto:seo@mountcyber.net">admin@mountcyber.net</a>
                <a href="callto:+447441340199">+44 7441 340199</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer_copyright">
              <p>Copyright © 2024 MountCyber. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
