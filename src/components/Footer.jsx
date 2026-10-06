import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#566761] text-white">

      {/* =====================================================
          FOOTER MAIN
      ====================================================== */}
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr] lg:gap-10">

          {/* =================================================
              COLUMN 1 — LOGO / ABOUT
          ================================================== */}
          <div className="sm:col-span-2 lg:col-span-1">

            {/* Logo */}
            <a
              href="/"
              className="inline-flex items-center"
            >
              <img
                src="/images/Ekeshwar-Logo.png"
                alt="Ekeshwar Retreat"
                className="h-auto w-[175px] object-contain sm:w-[195px]"
              />
            </a>

            <p className="mt-6 max-w-[380px] text-sm leading-7 text-white/70 sm:text-[15px]">
              A peaceful hillside retreat in Uttarakhand, thoughtfully
              designed around nature, mountain views and contemporary
              comfort.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/20
                  text-sm text-white/80
                  transition duration-300
                  hover:border-[#d6a04a]
                  hover:bg-[#d6a04a]
                  hover:text-white
                "
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/20
                  text-sm text-white/80
                  transition duration-300
                  hover:border-[#d6a04a]
                  hover:bg-[#d6a04a]
                  hover:text-white
                "
              >
                FB
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/20
                  text-sm text-white/80
                  transition duration-300
                  hover:border-[#d6a04a]
                  hover:bg-[#d6a04a]
                  hover:text-white
                "
              >
                YT
              </a>

              <a
                href="https://wa.me/918882607879"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/20
                  text-sm text-white/80
                  transition duration-300
                  hover:border-[#d6a04a]
                  hover:bg-[#d6a04a]
                  hover:text-white
                "
              >
                WA
              </a>

            </div>
          </div>


          {/* =================================================
              COLUMN 2 — QUICK LINKS
          ================================================== */}
          <div>
            <h3 className="text-[15px] font-semibold uppercase tracking-[2px] text-white">
              Quick Links
            </h3>

            <div className="mt-6 h-[2px] w-10 bg-[#d6a04a]" />

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  href="#about"
                  className="text-sm text-white/65 transition hover:text-[#d6a04a]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#cottages"
                  className="text-sm text-white/65 transition hover:text-[#d6a04a]"
                >
                  Our Cottages
                </a>
              </li>

              <li>
                <a
                  href="#layouts"
                  className="text-sm text-white/65 transition hover:text-[#d6a04a]"
                >
                  Layouts
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-white/65 transition hover:text-[#d6a04a]"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-white/65 transition hover:text-[#d6a04a]"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>


          {/* =================================================
              COLUMN 3 — EXPLORE
          ================================================== */}
          <div>
            <h3 className="text-[15px] font-semibold uppercase tracking-[2px] text-white">
              Explore
            </h3>

            <div className="mt-6 h-[2px] w-10 bg-[#d6a04a]" />

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#d6a04a]"
                >
                  Master Plan
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#d6a04a]"
                >
                  Cottage Layouts
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#d6a04a]"
                >
                  Architectural Design
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#d6a04a]"
                >
                  Design Vistas
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 transition hover:text-[#d6a04a]"
                >
                  Testimonials
                </a>
              </li>

            </ul>
          </div>


          {/* =================================================
              COLUMN 4 — CONTACT
          ================================================== */}
          <div id="contact">

            <h3 className="text-[15px] font-semibold uppercase tracking-[2px] text-white">
              Get In Touch
            </h3>

            <div className="mt-6 h-[2px] w-10 bg-[#d6a04a]" />

            <div className="mt-6 space-y-5">

              {/* Location */}
              <div className="flex items-start gap-4">

                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm">
                  ●
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/70">
                    Uttarakhand, India
                  </p>
                </div>

              </div>


              {/* Phone */}
              <div className="flex items-start gap-4">

                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm">
                  ☎
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Phone
                  </p>

                  <a
                    href="tel:+918882607879"
                    className="mt-1 block text-sm text-white/70 transition hover:text-[#d6a04a]"
                  >
                    +91 88826 07879
                  </a>
                </div>

              </div>


              {/* Email */}
              <div className="flex items-start gap-4">

                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm">
                  @
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Email
                  </p>

                  <a
                    href="mailto:info@ekeshwarretreat.com"
                    className="mt-1 block break-all text-sm text-white/70 transition hover:text-[#d6a04a]"
                  >
                    info@ekeshwarretreat.com
                  </a>
                </div>

              </div>

            </div>


            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918882607879"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#d6a04a]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-[#bd8836]
                sm:w-auto
              "
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>
      </div>


      {/* =====================================================
          FOOTER BOTTOM
      ====================================================== */}
      <div className="border-t border-white/10">

        <div className="
          mx-auto
          flex
          max-w-[1280px]
          flex-col
          gap-4
          px-6
          py-6
          text-center
          sm:px-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-10
          lg:text-left
        ">

          <p className="text-xs leading-6 text-white/45 sm:text-sm">
            © {new Date().getFullYear()} Ekeshwar Retreat. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-end">

            <a
              href="#"
              className="text-xs text-white/45 transition hover:text-[#d6a04a] sm:text-sm"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-white/45 transition hover:text-[#d6a04a] sm:text-sm"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;