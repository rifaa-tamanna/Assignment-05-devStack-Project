import React from "react";
import footerLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div>
      <footer className="">
        <div className="footer sm:footer-horizontal bg-base-200 text-base-content py-20 px-35">
          <aside>
            <img src={footerLogo} alt="" />
            <p>
              Curated tools, technologies, and resources for developers building{" "}
              <br /> modern software.
            </p>

            {/* Social Media Link  */}
            <div className="flex justify-between items-center gap-4 pt-[12px] font-semibold text-[16px]">
              <h2>
                <a href="https://github.com/rifaa-tamanna">GitHub</a>
              </h2>
              <h2>
                <a href="#">Twitter</a>
              </h2>
              <h2>
                <a href="https://www.linkedin.com/in/rifaa-tamanna/">
                  Linkedin
                </a>
              </h2>
            </div>
          </aside>

          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>

      {/* Copyright Section */}

      <footer className="flex justify-between footer sm:footer-horizontal footer-start bg-base-300 text-base-content px-35 py-5 text-[#94A3B8] text-[16px]">
        <aside className="flex justify-between items-center">
          <p>© 2026 Dev Stack. All rights reserved.</p>
        </aside>

        <div className="flex justify-between items-center gap-4">
            <nav>
              <a className="link link-hover">Privacy</a>
            </nav>
            <nav>
              <a className="link link-hover">Terms</a>
            </nav>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
