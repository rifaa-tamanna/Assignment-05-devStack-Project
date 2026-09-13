import footerLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer sm:footer-horizontal bg-base-200 text-base-content py-10 md:py-16 lg:py-20 px-6 md:px-10 lg:px-35">
          <aside>
            <img src={footerLogo} alt="" />

            <p className="text-gray-600 text-[16px] pt-2">
              Curated tools, technologies, and resources for developers building{" "}
              <br className="hidden md:block" />
              modern software.
            </p>

            {/* Social Media Link */}
            <div className="flex items-center gap-4 pt-[12px] font-semibold text-[16px]">
              <h2 className="hover:text-[#D91B7E]">
                <a href="https://github.com/rifaa-tamanna">GitHub</a>
              </h2>

              <h2 className="hover:text-[#D91B7E]">
                <a href="#">Twitter</a>
              </h2>

              <h2 className="hover:text-[#D91B7E]">
                <a href="https://www.linkedin.com/in/rifaa-tamanna/">
                  Linkedin
                </a>
              </h2>
            </div>
          </aside>

          <nav>
            <h6 className="footer-title">PRODUCT</h6>

            <a className="link link-hover text-[#64748B] text-[16px]">Home</a>

            <a className="link link-hover text-[#64748B] text-[16px]">
              Technologies
            </a>

            <a className="link link-hover text-[#64748B] text-[16px]">
              Projects
            </a>
          </nav>

          <nav>
            <h6 className="footer-title">COMPANY</h6>

            <a className="link link-hover text-[#64748B] text-[16px]">About</a>

            <a className="link link-hover text-[#64748B] text-[16px]">
              Contact
            </a>

            <a className="link link-hover text-[#64748B] text-[16px]">
              Careers
            </a>
          </nav>

          <nav>
            <h6 className="footer-title">LEGAL</h6>

            <a className="link link-hover text-[#64748B] text-[16px]">
              Privacy Policy
            </a>

            <a className="link link-hover text-[#64748B] text-[16px]">
              Terms of Service
            </a>
          </nav>
        </div>
      </footer>

      {/* Copyright Section */}
      <footer className="flex flex-col md:flex-row justify-between items-center gap-4 footer sm:footer-horizontal footer-start bg-base-300 px-6 md:px-10 lg:px-35 py-5 text-[#94A3B8] text-[16px]">
        <aside className="flex justify-between items-center">
          <p>© 2026 Dev Stack. All rights reserved.</p>
        </aside>

        <div className="flex justify-between items-center gap-4">
          <nav>
            <a className="link link-hover text-[#94A3B8] text-[16px]">
              Privacy
            </a>
          </nav>

          <nav>
            <a className="link link-hover text-[#94A3B8] text-[16px]">Terms</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
