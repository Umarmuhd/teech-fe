function Footer() {
  return (
    <footer className="bg-footerBg text-white px-4 py-20 md:px-16 md:py-24 font-head">
      <div className="w-full mx-auto">
        <div className="content flex flex-col md:flex-row">
          <div className="md:flex justify-between md:w-full">
            <div className="teech mb-4 md:mb-0">
              <h2 className="text-white text-xl font-semibold mb-2 md:mb-0">
                Teech
              </h2>
              <ul>
                <li>
                  <a href="#" className="text-white font-normal">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Terms of use
                  </a>
                </li>
              </ul>
            </div>
            <div className="careers mb-4 md:mb-0">
              <h2 className="text-white text-xl font-semibold mb-2 md:mb-0">
                Careers
              </h2>
              <ul>
                <li>
                  <a href="#" className="text-white">
                    Become a Tutor
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Vacant Positions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Hire Experts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Tutors Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact mb-4 md:mb-0">
              <h2 className="text-white text-xl font-semibold mb-2 md:mb-0">
                Contact Us
              </h2>
              <ul>
                <li>
                  <a href="#" className="text-white">
                    +234 812 345 6789
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    hello@teech.com
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    123 Buhari Way Abuja
                  </a>
                </li>
              </ul>
            </div>
            <div className="social_links">
              <h2 className="text-white text-xl font-semibold mb-2 md:mb-0">
                Social Media
              </h2>
              <ul>
                <li>
                  <a href="#" className="text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content down text-center mt-7 md:flex md:justify-between">
          <div className="md:w-3/12"></div>
          <div className="md:w-3/12">
            Copyright © {new Date().getFullYear()}
          </div>
          <div className="md:w-3/12">Nigeria - English</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
