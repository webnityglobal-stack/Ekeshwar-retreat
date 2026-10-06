import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fffaf5] text-[#263c32]">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative h-[70vh] min-h-[520px] w-full">
        <img
          src="/images/about/about-hero.jpg"
          alt="Ekeshwar Retreat Uttarakhand"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center px-6 sm:px-10 lg:px-8">
          <div className="max-w-[720px]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-[#e1b15b]">
              Discover Ekeshwar
            </p>

            <h1 className="font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-[72px]">
              About Us
            </h1>

            <p className="mt-6 max-w-[620px] text-base leading-8 text-white/90 sm:text-lg">
              A peaceful hillside retreat where nature, thoughtful
              architecture and meaningful living come together.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-[#fffaf5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            <div className="overflow-hidden rounded-[30px]">
              <img
                src="/images/about/about-intro.jpg"
                alt="Uttarakhand hillside"
                className="h-[420px] w-full object-cover sm:h-[540px]"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
                Our Story
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#244c3b] sm:text-4xl lg:text-5xl">
                A New Way of Experiencing the Hills
              </h2>

              <div className="mt-5 h-0.5 w-20 bg-[#d99a35]" />

              <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
                Ekeshwar Retreat was envisioned for people who want to
                reconnect with nature without compromising on comfort,
                design and modern living.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                Set amidst the peaceful landscapes of Uttarakhand, the
                retreat brings together carefully planned cottages,
                natural surroundings and expansive Himalayan views.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                Our approach is simple — preserve the character of the
                hills while creating spaces where people can slow down,
                breathe deeply and create lasting memories.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          OUR VISION
      ====================================================== */}
      <section className="bg-[#244c3b] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1150px] px-6 text-center sm:px-10">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#e1b15b]">
            Our Vision
          </p>

          <h2 className="mx-auto mt-4 max-w-[850px] font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Creating Spaces That Belong to the Mountains
          </h2>

          <p className="mx-auto mt-7 max-w-[800px] text-base leading-8 text-white/70 sm:text-lg">
            We believe the best hillside experiences are created when
            architecture works with nature instead of against it.
            Every aspect of Ekeshwar Retreat is imagined around this
            philosophy.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-7">
              <div className="text-3xl">01</div>

              <h3 className="mt-5 font-serif text-xl font-semibold text-white">
                Nature First
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                Respecting the natural terrain and surrounding landscape.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-7">
              <div className="text-3xl">02</div>

              <h3 className="mt-5 font-serif text-xl font-semibold text-white">
                Thoughtful Design
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                Spaces designed for comfort, views and everyday living.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-7">
              <div className="text-3xl">03</div>

              <h3 className="mt-5 font-serif text-xl font-semibold text-white">
                Meaningful Living
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                Creating experiences that stay with you long after your visit.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          UTTARAKHAND LIVING
      ====================================================== */}
      <section className="bg-[#f4f0e8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">

          <div className="mb-12 max-w-[750px]">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
              The Experience
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl lg:text-5xl">
              The Beauty of Uttarakhand Living
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="group overflow-hidden rounded-[26px]">
              <img
                src="/images/about/mountain-living.jpg"
                alt="Mountain living"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="bg-[#244c3b] p-6">
                <h3 className="font-serif text-2xl text-white">
                  Mountain Mornings
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Begin each day surrounded by fresh air, quiet hills
                  and beautiful Himalayan views.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[26px]">
              <img
                src="/images/about/forest-life.jpg"
                alt="Forest surroundings"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="bg-[#244c3b] p-6">
                <h3 className="font-serif text-2xl text-white">
                  Life Among the Forests
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Experience the calm of pine-covered hills and
                  untouched natural surroundings.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[26px]">
              <img
                src="/images/about/sunset.jpg"
                alt="Himalayan sunset"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="bg-[#244c3b] p-6">
                <h3 className="font-serif text-2xl text-white">
                  Evenings to Remember
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Watch the mountains change colour as the day slowly
                  gives way to peaceful evenings.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          WHY EKESHWAR
      ====================================================== */}
      <section className="bg-[#fffaf5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
                Why Ekeshwar
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#244c3b] sm:text-4xl lg:text-5xl">
                Designed for Those Who Seek More
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                More space. More nature. More privacy. More time to
                appreciate the things that truly matter.
              </p>

              <div className="mt-8 space-y-5">

                {[
                  "Peaceful hillside location",
                  "Panoramic Himalayan surroundings",
                  "Thoughtfully planned cottages",
                  "Nature-sensitive architecture",
                  "Private and comfortable spaces",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#244c3b] text-sm text-white">
                      ✓
                    </span>

                    <span className="text-gray-600">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            <div className="overflow-hidden rounded-[30px]">
              <img
                src="/images/about/why-ekeshwar.jpg"
                alt="Ekeshwar Retreat"
                className="h-[480px] w-full object-cover sm:h-[580px]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative overflow-hidden">
        <img
          src="/images/about/about-cta.jpg"
          alt="Visit Ekeshwar Retreat"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#19352b]/75" />

        <div className="relative z-10 mx-auto max-w-[900px] px-6 py-24 text-center sm:px-10 sm:py-28">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#e1b15b]">
            Come Experience It
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Come Find Your Place in the Hills
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] leading-8 text-white/75">
            Discover Ekeshwar Retreat and experience a different
            rhythm of life surrounded by the beauty of Uttarakhand.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/#cottages"
              className="rounded-full bg-[#d99a35] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#bd8124]"
            >
              Explore Cottages
            </a>

            <a
              href="https://wa.me/918882607879"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#244c3b]"
            >
              Talk on WhatsApp
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;