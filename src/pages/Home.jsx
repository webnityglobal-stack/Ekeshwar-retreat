import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const highlights = [
    {
      title: "Himalayan Serenity",
      text: "Wake up to peaceful mountain surroundings and the calming rhythm of nature.",
    },
    {
      title: "24/7 Gated Security",
      text: "Enjoy your retreat with round-the-clock gated security and a peaceful environment.",
    },
    {
      title: "Green Play Areas",
      text: "Open green spaces designed for joyful moments, relaxation and outdoor experiences.",
    },
    {
      title: "Temples & Lake",
      text: "Experience the beauty of the hills along with nearby temples and the upcoming lake.",
    },
  ];

  const cottages = [
    {
      title: "1BHK Cottage",
      image: "/cottages/1bhk.png",
      text: "A cosy cottage concept designed for peaceful and comfortable hillside living.",
    },
    {
      title: "2BHK Cottage",
      image: "/cottages/2bhk.jpg",
      text: "A spacious cottage designed for comfortable stays, family time and mountain living.",
    },
  ];

  const galleryImages = [
    {
      image: "/vistas/vista-1.jpg",
      title: "Mountain Views",
    },
    {
      image: "/vistas/vista-2.jpg",
      title: "Natural Surroundings",
    },
    {
      image: "/vistas/vista-3.jpg",
      title: "Himalayan Serenity",
    },
    {
      image: "/images/Himalya.png",
      title: "Himalayan Landscape",
    },
    {
      image: "/images/cottage.png",
      title: "Cottage Living",
    },
    {
      image: "/images/about-Ekeshwar.jpg",
      title: "Ekeshwar Retreat",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#fffaf5] text-[#263c32]">
      <Navbar />

      {/* =====================================================
          SECTION 1 — HERO
      ====================================================== */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src="/images/hero-1.jpg"
          alt="Ekeshwar Retreat Uttarakhand"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-[1450px] px-6 pt-24 sm:px-10 lg:px-16">
            <div className="max-w-[720px]">
              <p className="mb-4 text-sm font-medium uppercase tracking-[4px] text-white/90">
                Ekeshwar Retreat
              </p>

              <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                Your Retreat Into A Serene Life
              </h1>

              <p className="mt-6 max-w-[650px] text-base leading-7 text-white sm:text-lg sm:leading-8">
                Discover a peaceful retreat immersed in Himalayan serenity,
                where nature, tranquillity and thoughtfully planned cottage
                living come together.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#cottages"
                  className="rounded-full bg-[#d99a35] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#bd8124]"
                >
                  Explore Cottages
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-white bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#244c3b]"
                >
                  Plan Your Visit
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center text-white"
        >
          <span className="mb-2 block text-[10px] uppercase tracking-[3px]">
            Explore
          </span>

          <span className="mx-auto block h-9 w-px bg-white/70" />
        </a>
      </section>

      {/* =====================================================
          SECTION 2 — ABOUT EKESHWAR RETREAT
      ====================================================== */}
      <section
        id="about"
        className="bg-[#fffaf5] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src="/images/about-Ekeshwar.jpg"
                alt="Ekeshwar Retreat"
                className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[560px]"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
                Welcome to Ekeshwar Retreat
              </p>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#244c3b] sm:text-4xl lg:text-[48px]">
                A Premium Cottage Retreat in the Hills
              </h2>

              <div className="mt-5 h-0.5 w-20 bg-[#d99a35]" />

              <p className="mt-7 text-base leading-8 text-[#68736d] sm:text-lg">
                Ekeshwar Retreat is envisioned as a peaceful escape immersed
                in Himalayan serenity, where nature and tranquillity create a
                rejuvenating experience.
              </p>

              <p className="mt-5 text-base leading-8 text-[#68736d] sm:text-lg">
                Designed around a calm hillside lifestyle, the retreat brings
                together comfortable cottage living, beautiful surroundings
                and spaces created for relaxation and wellbeing.
              </p>

              <div className="mt-8">
                <a
                  href="/about"
                  className="inline-flex rounded-full bg-[#244c3b] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#183a2c]"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — WHY EKESHWAR RETREAT / KEY HIGHLIGHTS
      ====================================================== */}
      <section className="bg-[#f4f0e8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
              Why Ekeshwar Retreat
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl lg:text-5xl">
              Designed for a Serene Life
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Experience the beauty of the hills with thoughtful features
              created around comfort, nature and peaceful living.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#244c3b] text-xl text-white">
                  ✦
                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold text-[#244c3b]">
                  {item.title}
                </h3>

                <div className="mt-3 h-0.5 w-12 bg-[#d99a35]" />

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/about"
              className="inline-flex rounded-full border border-[#244c3b] px-7 py-3.5 text-sm font-semibold text-[#244c3b] transition hover:bg-[#244c3b] hover:text-white"
            >
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4 — OUR COTTAGES
      ====================================================== */}
      <section
        id="cottages"
        className="bg-[#fffaf5] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
              Stay in Comfort
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl lg:text-5xl">
              Our Cottages
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Thoughtfully planned cottage spaces created for peaceful,
              comfortable and memorable hillside living.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {cottages.map((cottage) => (
              <div
                key={cottage.title}
                className="overflow-hidden rounded-[28px] bg-white shadow-sm"
              >
                <img
                  src={cottage.image}
                  alt={cottage.title}
                  className="h-[350px] w-full object-cover"
                />

                <div className="p-7 sm:p-8">
                  <h3 className="font-serif text-2xl font-semibold text-[#244c3b] sm:text-3xl">
                    {cottage.title}
                  </h3>

                  <div className="mt-3 h-0.5 w-14 bg-[#d99a35]" />

                  <p className="mt-4 leading-7 text-gray-600">
                    {cottage.text}
                  </p>

                  <a
                    href="/cottages"
                    className="mt-6 inline-flex rounded-full bg-[#244c3b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#183a2c]"
                  >
                    View Cottage
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/cottages"
              className="inline-flex rounded-full border border-[#d99a35] px-7 py-3.5 text-sm font-semibold text-[#244c3b] transition hover:bg-[#d99a35] hover:text-white"
            >
              View All Cottages →
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5 — TERRACED LAYOUT / MASTER PLAN
      ====================================================== */}
      <section className="bg-[#244c3b] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-[28px] bg-white">
              <img
                src="/master-plan/master-plan.avif"
                alt="Ekeshwar Retreat Master Plan"
                className="h-[380px] w-full object-cover sm:h-[500px] lg:h-[560px]"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-[#e2b35a]">
                Thoughtful Planning
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Terraced Layout & Master Plan
              </h2>

              <p className="mt-6 text-base leading-8 text-white/80 sm:text-lg">
                The retreat is thoughtfully planned around the natural
                character of the hillside, creating a peaceful setting where
                cottages and shared spaces come together harmoniously.
              </p>

              <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">
                Explore the master plan to understand the overall layout,
                cottage placement and planning of the retreat.
              </p>

              <div className="mt-8">
                <a
                  href="/project-details"
                  className="inline-flex rounded-full bg-[#d99a35] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#bd8124]"
                >
                  View Project Details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 6 — GALLERY / DESIGN VISTAS
      ====================================================== */}
      <section className="bg-[#fffaf5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
              Explore Ekeshwar
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl lg:text-5xl">
              Gallery
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              A glimpse into the natural beauty, cottage experience and
              peaceful surroundings of Ekeshwar Retreat.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((item) => (
              <div
                key={item.image}
                className="group overflow-hidden rounded-[22px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[280px] lg:h-[330px]"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/gallery"
              className="inline-flex rounded-full bg-[#244c3b] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#183a2c]"
            >
              View Gallery →
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 7 — LOCATION & CONNECTIVITY
      ====================================================== */}
      <section className="bg-[#f4f0e8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
                Location & Connectivity
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#244c3b] sm:text-4xl lg:text-5xl">
                Connected to the Places That Matter
              </h2>

              <div className="mt-5 h-0.5 w-20 bg-[#d99a35]" />

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                Ekeshwar Retreat brings you closer to the peaceful spiritual,
                wellness and natural experiences of the region.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-5">
                  <h3 className="font-semibold text-[#244c3b]">
                    Ekeshwar Temple
                  </h3>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <h3 className="font-semibold text-[#244c3b]">
                    Tadkeshwar Mandir
                  </h3>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <h3 className="font-semibold text-[#244c3b]">
                    Sidhbali Lansdowne Mandir
                  </h3>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <h3 className="font-semibold text-[#244c3b]">
                    Yoga & Wellness
                  </h3>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <h3 className="font-semibold text-[#244c3b]">
                    Upcoming Lake
                  </h3>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <h3 className="font-semibold text-[#244c3b]">
                    Delhi–Pauri Highway
                  </h3>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/location"
                  className="inline-flex rounded-full bg-[#244c3b] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#183a2c]"
                >
                  Explore Location →
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px]">
              <img
                src="/location/location.jpg"
                alt="Ekeshwar Retreat Location"
                className="h-[420px] w-full object-cover sm:h-[540px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 8 — FINAL CTA
      ====================================================== */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#244c3b] py-20 sm:py-24 lg:py-28"
      >
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/hero-1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#e2b35a]">
            Your Himalayan Escape Awaits
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-6xl">
            Plan Your Retreat at Ekeshwar
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-base leading-8 text-white/80 sm:text-lg">
            Step into a slower, more peaceful way of life surrounded by
            nature, serenity and the beauty of the hills.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#d99a35] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#bd8124]"
            >
              Plan Your Visit
            </a>

            <a
              href="https://wa.me/918882607879"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#244c3b]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 9 — FOOTER
      ====================================================== */}
      <Footer />
    </div>
  );
};

export default Home;