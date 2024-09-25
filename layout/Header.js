"use client";
import TextHoverAnimation from "@/components/TextHoverAnimation";
import Link from "next/link";
import { Fragment, useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // For mobile menu
  const [submenuOpen, setSubmenuOpen] = useState({
    services: false,
    blog: false,
  }); // State for submenu in mobile menu

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSubmenuToggle = (menu, event) => {
    event.preventDefault();  // Prevent default anchor action
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <Fragment>
      <header>
        {/* Main Desktop Menu */}
        <div className="main_menu navbar d-none d-xl-flex">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              <img
                src="images/logo.png"
                alt="MountCyber"
                className="img-fluid w-100"
              />
            </Link>
            <div className="main-menu">
              <nav className="navbar-nav m-auto" id="navbarNav">
                <ul>
                  {/* Services Dropdown */}
                  <li className="dropdown-nav">
                    <a href="#" onClick={(e) => handleSubmenuToggle('services', e)} className="text_hover_animaiton">
                      <TextHoverAnimation text={"Services"} />
                    </a>
                    <div className={`services-submenu ${submenuOpen.services ? 'show' : ''}`}>
                      {/* Columns */}
                      <div className="services-column">
                        <h4>Advisory</h4>
                        <ul>
                          <li>
                            <Link href="/advisory">
                              Feasibility Workshop
                            </Link>
                          </li>
                          <li>
                            <Link href="/advisory">Market Research</Link>
                          </li>
                          <li>
                            <Link href="/advisory">Data Analysis</Link>
                          </li>
                          <li>
                            <Link href="/advisory">Audits</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="services-column">
                        <h4>Enterprise Facilities</h4>
                        <ul>
                          <li>
                            <Link href="/enterprise">
                              Cost Optimization
                            </Link>
                          </li>
                          <li>
                            <Link href="/enterprise">
                              Worldwide CX Outsourcing
                            </Link>
                          </li>
                          <li>
                            <Link href="/enterprise">
                              Digital Marketing & Branding
                            </Link>
                          </li>
                          <li>
                            <Link href="/enterprise">
                              HR and Recruitment
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="services-column">
                        <h4>Engineering</h4>
                        <ul>
                          <li>
                            <Link href="/engineering">
                              Product Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/engineering">Web Development</Link>
                          </li>
                          <li>
                            <Link href="/engineering">
                              Application Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/engineering">
                              Application Reengineering
                            </Link>
                          </li>
                          <li>
                            <Link href="/engineering">
                              Software Development
                            </Link>
                          </li>
                          <li>
                            <Link href="//engineering">
                              Cloud Engineering & Migration
                            </Link>
                          </li>
                          <li>
                            <Link href="/engineering">Game Development</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="services-column">
                        <h4>Production</h4>
                        <ul>
                          <li>
                            <Link href="/production">Design</Link>
                          </li>
                          <li>
                            <Link href="/production">Art Direction</Link>
                          </li>
                          <li>
                            <Link href="/production">Copy Writing</Link>
                          </li>
                          <li>
                            <Link href="/production">Videography</Link>
                          </li>
                          <li>
                          <Link href="/production">AR/VR/MR</Link>

                          </li>
                        </ul>
                      </div>

                      <div className="services-column">
                        <h4>Strategic Market Connections</h4>
                        <ul>
                          <li>
                            <Link href="/market">
                              Industry Networking Events
                            </Link>
                          </li>
                          <li>
                            <Link href="/market">
                              Partnership Development Services
                            </Link>
                          </li>
                          <li>
                            <Link href="/market">
                              Market Intelligence Reports
                            </Link>
                          </li>
                          <li>
                            <Link href="/market">
                              Custom Advisory Project
                            </Link>
                          </li>
                          <li>
                            <Link href="/market">
                              Thought Leadership Platform
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href="/about_us" className="text_hover_animaiton">
                      <TextHoverAnimation text={"Company"} />
                    </Link>
                  </li>

                  <li className="dropdown-nav">
                    <a href="#" onClick={(e) => handleSubmenuToggle('blog', e)} className="text_hover_animaiton">
                      <TextHoverAnimation text={"Blog"} />
                    </a>
                    <ul className={`submenu ${submenuOpen.blog ? 'show' : ''}`}>
                      <li>
                        <Link href="/blog_grid">Blog Grid</Link>
                      </li>
                      <li>
                        <Link href="/blog_details">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/events" className="text_hover_animaiton">
                      <TextHoverAnimation text={"Events"} />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="right_menu">
              <Link href="/contact" className="common_btn">
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu d-xl-none main_menu d-flex">
          <div className="container-fluid d-flex justify-content-between">
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="navbar-brand ms-3">
                <Link href="/">
                  <img
                    src="images/logo.png"
                    alt="MountCyber"
                    className="img-fluid w-100"
                  />
                </Link>
              </div>
              <div className="text-end me-3">
                <button
                  className="menu-bar navbar-toggler"
                  onClick={handleMobileMenuToggle}
                >
                  <i className="fa-solid fa-bars" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div className={`mobile_menu_content ${mobileMenuOpen ? "opened" : ""}`}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="navbar-brand">
              <Link href="/">
                <img
                  src="images/logo.png"
                  alt="MountCyber"
                  className="img-fluid w-100"
                />
              </Link>
            </div>
            <div className="close_btn">
              <button onClick={handleMobileMenuToggle}>
                <i className="fal fa-times" />
              </button>
            </div>
          </div>
          <nav className="main-menu-mobile">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>

              <li>
                <Link href="/about_us">About</Link>
              </li>


              <li>
                <Link href="/blog_grid">Blogs</Link>
              </li>


              
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Overlay for Mobile Menu */}
        <div
          className={`body-overlay ${mobileMenuOpen ? "show" : ""}`}
          onClick={handleMobileMenuToggle}
        />
      </header>
    </Fragment>
  );
};

export default Header;
