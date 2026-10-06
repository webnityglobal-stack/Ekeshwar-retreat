import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [vistaIndex, setVistaIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const vistas = [
    "/images/vistas/vista-1.jpg",
    "/images/vistas/vista-2.jpg",
    "/images/vistas/vista-3.jpg",
  ];

  const testimonials = [
    {
      name: "Ritika Sharma",
      city: "Delhi",
      image: "/images/testimonials/guest-1.jpg",
      review:
        "A beautiful escape surrounded by nature. The views, peaceful atmosphere and overall experience were wonderful.",
    },
    {
      name: "Amit Verma",
      city: "Lucknow",
      image: "/images/testimonials/guest-2.jpg",
      review:
        "The perfect place to slow down and enjoy the mountains. Everything felt thoughtfully planned and comfortable.",
    },
    {
      name: "Sneha Iyer",
      city: "Bengaluru",
      image: "/images/testimonials/guest-3.jpg",
      review:
        "Loved the peaceful setting and Himalayan views. A lovely experience for anyone looking for a quiet retreat.",
    },
  ];

  const faqs = [
    {
      question: "Where is Ekeshwar Retreat located?",
      answer:
        "Ekeshwar Retreat is located in the serene hills of Uttarakhand, surrounded by beautiful Himalayan landscapes and peaceful natural surroundings.",
    },
    {
      question: "What types of cottages are available?",
      answer:
        "The retreat offers thoughtfully planned 1BHK and 2BHK cottages along with larger family-oriented villa options.",
    },
    {
      question: "What makes Ekeshwar Retreat different?",
      answer:
        "The project combines hillside living, valley-facing views, nature-sensitive planning and modern craftsmanship in a peaceful Himalayan setting.",
    },
    {
      question: "Can I visit the property?",
      answer:
        "Yes. You can contact the team to plan a visit and explore the cottages, layouts and surrounding property.",
    },
    {
      question: "How can I get the detailed layout plan?",
      answer:
        "You can request the complete plan from the team through the enquiry or WhatsApp options available on the website.",
    },
  ];

  const nextVista = () => {
    setVistaIndex((prev) => (prev + 1) % vistas.length);
  };

  const prevVista = () => {
    setVistaIndex((prev) => (prev - 1 + vistas.length) % vistas.length);
  };

  const nextTestimonial = () => {
    setTestimonialIndex(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setTestimonialIndex(
      (prev) =>
        (prev - 1 + testimonials.length) % testimonials.length
    );
  };

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

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-[1450px] px-6 pt-24 sm:px-10 lg:px-16">
            <div className="max-w-[680px]">
              <p className="mb-4 text-sm font-medium uppercase tracking-[4px] text-white/90">
                Ekeshwar Retreat
              </p>

              <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                Tranquil Hillside Living
              </h1>

              <p className="mt-6 max-w-[610px] text-base leading-7 text-white sm:text-lg sm:leading-8">
                Immerse yourself in the peaceful rhythm of the Himalayas,
                where each cottage opens to breathtaking views and nature’s
                calm.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#cottages"
                  className="rounded-full bg-[#d99a35] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#bd8124]"
                >
                  Explore Cottages
                </a>

                <a
                  href="#contact"
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
                className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[560px]"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
                Welcome to Ekeshwar Retreat
              </p>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#244c3b] sm:text-4xl lg:text-[48px]">
                About Ekeshwar Retreat
              </h2>

              <div className="mt-5 h-0.5 w-20 bg-[#d99a35]" />

              <p className="mt-7 text-base leading-8 text-[#68736d] sm:text-lg">
                Ekeshwar Retreat is a thoughtfully designed resort set across terraced hills near Lansdowne, Pauri Garhwal, Uttarakhand. The resort blends contemporary comforts with local craftsmanship. Our cottages, pathways, and communal spaces are placed to maximize views, privacy, and a sense of calm.
              </p>

              <p className="mt-5 text-base leading-8 text-[#68736d] sm:text-lg">
                Our property includes a central clubhouse, yoga deck, and dining pavilion. The carefully designed pathways connect a collection of 1BHK and 2BHK independent cottages, each with a private veranda overlooking the valley.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#cottages"
                  className="rounded-full bg-[#244c3b] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#183a2c]"
                >
                  Read More
                </a>

                <a
                  href="#layouts"
                  className="rounded-full border border-[#d99a35] px-7 py-3.5 text-sm font-semibold text-[#244c3b] transition hover:bg-[#d99a35] hover:text-white"
                >
                  Cottages & Layout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — EXPERIENCE NATURE & LUXURY
      ====================================================== */}
      <section className="bg-[#f4f0e8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/experience-1.png"
                  alt="Himalayan nature"
                  className="h-[260px] w-full rounded-[24px] object-cover sm:h-[330px]"
                />

                <img
                  src="/images/experience-2.png"
                  alt="Luxury cottage"
                  className="mt-10 h-[260px] w-full rounded-[24px] object-cover sm:h-[330px]"
                />
              </div>

              <div className="absolute bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-lg">
                <p className="text-3xl font-bold text-[#244c3b]">
                  10+
                </p>
                <p className="text-sm text-gray-500">
                  Years of Experience
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
                Experience
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#244c3b] sm:text-4xl lg:text-[48px]">
                Experience the Harmony of Nature and Luxury
              </h2>

              <p className="mt-6 text-base leading-8 text-[#68736d] sm:text-lg">
                Wake up to mountain views, breathe in fresh Himalayan air
                and experience a lifestyle designed around nature and
                comfort.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-white p-5">
                  <h3 className="font-semibold text-[#244c3b]">
                    Himalayan Views
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Panoramic views and peaceful surroundings.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <h3 className="font-semibold text-[#244c3b]">
                    Nature Living
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Thoughtful planning in harmony with nature.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-200 pt-7">
                <div>
                  <p className="text-2xl font-bold text-[#244c3b]">
                    30+
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Cottages
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[#244c3b]">
                    2.8
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Acres
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[#244c3b]">
                    360°
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Views
                  </p>
                </div>
              </div>
            </div>
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
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
              Stay With Us
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl lg:text-5xl">
              Our Cottages
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Thoughtfully designed cottages created for peaceful,
              comfortable and memorable hillside living.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            <div className="overflow-hidden rounded-[26px] bg-white shadow-sm">
              <img
                src="/images/cottages/1bhk.jpg"
                alt="1BHK Cottage"
                className="h-[330px] w-full object-cover"
              />

              <div className="p-7">
                <h3 className="font-serif text-2xl font-semibold text-[#244c3b]">
                  1BHK Cottage
                </h3>

                <div className="mt-3 h-0.5 w-14 bg-[#d99a35]" />

                <p className="mt-4 leading-7 text-gray-600">
                  A cosy and elegant cottage designed for intimate
                  hillside living with beautiful natural surroundings.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[26px] bg-white shadow-sm">
              <img
                src="/images/cottages/2bhk.jpg"
                alt="2BHK Cottage"
                className="h-[330px] w-full object-cover"
              />

              <div className="p-7">
                <h3 className="font-serif text-2xl font-semibold text-[#244c3b]">
                  2BHK Cottage
                </h3>

                <div className="mt-3 h-0.5 w-14 bg-[#d99a35]" />

                <p className="mt-4 leading-7 text-gray-600">
                  Spacious cottage living with thoughtfully planned
                  interiors and spaces designed around mountain views.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5 — TERRACED LAYOUT
      ====================================================== */}
      <section className="bg-[#244c3b] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#e2b35a]">
              Thoughtful Planning
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Terraced Layout with Guarded Access & Parking
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                image: "/images/terraced-units.png",
                title: "Total Units",
                highlight: "30+ Cottages",
                text: "A thoughtfully planned collection of hillside cottages.",
              },
              {
                image: "/images/terraced/clubhouse.jpg",
                title: "Club House",
                highlight: "Central Pavilion",
                text: "A central gathering space designed for community and leisure.",
              },
              {
                image: "/images/terraced/site-area.jpg",
                title: "Site Area",
                highlight: "~2.8 Acres",
                text: "A spacious natural setting planned around the terrain.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[24px] bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[260px] w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#c89132]">
                    {item.title}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#244c3b]">
                    {item.highlight}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 6 — MASTER PLAN & SITE LAYOUT
      ====================================================== */}
      <section className="bg-[#fffaf5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src="/images/master-plan/master-plan.jpg"
                alt="Master Plan and Site Layout"
                className="h-[450px] w-full object-cover sm:h-[560px]"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
                Planning
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl lg:text-5xl">
                Master Plan & Site Layout
              </h2>

              <h3 className="mt-7 text-xl font-semibold text-[#244c3b]">
                View-first Planning
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Every part of the site is planned to preserve the
                natural character of the hillside while opening spaces
                towards the surrounding Himalayan views.
              </p>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li>✓ Natural terrain-sensitive planning</li>
                <li>✓ Valley-facing cottage placement</li>
                <li>✓ Landscaped common spaces</li>
                <li>✓ Guarded access and parking</li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-[#244c3b] px-7 py-3.5 text-sm font-semibold text-white"
                >
                  Book Now
                </a>

                <a
                  href="/downloads/master-plan.pdf"
                  className="rounded-full border border-[#d99a35] px-7 py-3.5 text-sm font-semibold text-[#244c3b]"
                  download
                >
                  Download Full Plan (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 7 — COTTAGE LAYOUTS & INTERIORS
      ====================================================== */}
      <section
        id="layouts"
        className="bg-[#f4f0e8] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
              Spaces Designed For Living
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl lg:text-5xl">
              Cottage Layouts & Interiors
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Explore thoughtfully planned layouts created to combine
              comfort, functionality and the beauty of the surrounding
              landscape.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "1BHK Cottage",
                image: "/images/layouts/1bhk-layout.jpg",
                text: "An intimate cottage layout designed for peaceful hillside living.",
              },
              {
                title: "2BHK Cottage",
                image: "/images/layouts/2bhk-layout.jpg",
                text: "A spacious layout offering greater flexibility for families.",
              },
              {
                title: "Family Villa",
                image: "/images/layouts/family-villa.jpg",
                text: "Generous spaces planned for comfortable family stays and gatherings.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[24px] bg-white shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[300px] w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-[#244c3b]">
                    {item.title}
                  </h3>

                  <div className="mt-3 h-0.5 w-14 bg-[#d99a35]" />

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 8 — ARCHITECTURAL LAYOUT
      ====================================================== */}
      <section className="bg-[#fffaf5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
              Architecture
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl lg:text-5xl">
              Architectural Layout & Design
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
              <img
                src="/images/architecture/site-layout.jpg"
                alt="Site Layout Plan"
                className="h-[420px] w-full object-cover"
              />

              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-[#244c3b]">
                  Site Layout Plan
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  A detailed view of the planned cottage placement,
                  access, landscape and common spaces.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
              <img
                src="/images/architecture/3d-view.jpg"
                alt="3D Architectural View"
                className="h-[420px] w-full object-cover"
              />

              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-[#244c3b]">
                  3D Architectural View
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Visualize the architectural character and hillside
                  integration of the retreat.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#244c3b] px-7 py-3.5 text-sm font-semibold text-white"
            >
              Book Now
            </a>

            <a
              href="/downloads/architectural-plan.pdf"
              download
              className="rounded-full border border-[#d99a35] px-7 py-3.5 text-sm font-semibold text-[#244c3b]"
            >
              Download Full Plan (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 9 — DESIGN VISTAS
      ====================================================== */}
      <section className="bg-[#244c3b] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#e2b35a]">
              Design Vistas
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Views That Stretch Across the Himalayas
            </h2>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[30px]">
            <img
              src={vistas[vistaIndex]}
              alt="Himalayan design vista"
              className="h-[420px] w-full object-cover sm:h-[580px]"
            />

            <button
              onClick={prevVista}
              className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-[#244c3b]"
            >
              ‹
            </button>

            <button
              onClick={nextVista}
              className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-[#244c3b]"
            >
              ›
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#d99a35] px-7 py-3.5 text-sm font-semibold text-white"
            >
              Book Now
            </a>

            <a
              href="/downloads/design-vistas.pdf"
              download
              className="rounded-full border border-white px-7 py-3.5 text-sm font-semibold text-white"
            >
              Download Full Plan (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 10 — FIND WONDER
      ====================================================== */}
      <section className="bg-[#fffaf5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="overflow-hidden rounded-[30px]">
              <img
                src="/images/wonder/wonder.jpg"
                alt="Ekeshwar Retreat experience"
                className="h-[450px] w-full object-cover sm:h-[560px]"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
                Discover
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl lg:text-5xl">
                Find Wonder in Every Moment at Ekeshwar Retreat
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                Discover a slower, more meaningful way of living where
                every morning begins with mountain views and every
                evening brings the calm of nature.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#cottages"
                  className="rounded-full bg-[#244c3b] px-7 py-3.5 text-sm font-semibold text-white"
                >
                  Explore Cottages
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-[#d99a35] px-7 py-3.5 text-sm font-semibold text-[#244c3b]"
                >
                  Plan Your Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 11 — FOLLOW ON WHATSAPP
      ====================================================== */}
      <section className="bg-[#f4f0e8] py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
              Stay Connected
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl lg:text-5xl">
              Follow on WhatsApp
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] leading-8 text-gray-600">
              Stay connected with Ekeshwar Retreat for the latest
              updates, property views and availability.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {[
              "whatsapp-1.jpg",
              "whatsapp-2.jpg",
              "whatsapp-3.jpg",
              "whatsapp-4.jpg",
              "whatsapp-5.jpg",
            ].map((image) => (
              <div
                key={image}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={`/images/whatsapp/${image}`}
                  alt="Ekeshwar Retreat"
                  className="h-[220px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/918882607879"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#25d366] px-8 py-3.5 text-sm font-semibold text-white"
            >
              Follow on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 12 — TESTIMONIALS
      ====================================================== */}
      <section className="bg-[#fffaf5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
              Guest Experiences
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl lg:text-5xl">
              Check Our Latest Feedback
            </h2>
          </div>

          <div className="relative mx-auto mt-12 max-w-[850px]">
            <div className="rounded-[28px] bg-white p-8 text-center shadow-sm sm:p-12">
              <img
                src={testimonials[testimonialIndex].image}
                alt={testimonials[testimonialIndex].name}
                className="mx-auto h-20 w-20 rounded-full object-cover"
              />

              <div className="mt-5 text-[#d99a35]">
                ★★★★★
              </div>

              <p className="mx-auto mt-5 max-w-[650px] text-lg leading-8 text-gray-600">
                “{testimonials[testimonialIndex].review}”
              </p>

              <h3 className="mt-6 font-semibold text-[#244c3b]">
                {testimonials[testimonialIndex].name}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {testimonials[testimonialIndex].city}
              </p>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border bg-white text-xl shadow"
            >
              ‹
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border bg-white text-xl shadow"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 13 — FAQ
      ====================================================== */}
      <section
        id="contact"
        className="bg-[#f4f0e8] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1000px] px-6 sm:px-10 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
              FAQ
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl bg-white"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-[#244c3b]">
                      {faq.question}
                    </span>

                    <span className="text-2xl text-[#c89132]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 px-6 pb-6 pt-4 leading-7 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600">
              More Questions?
            </p>

            <a
              href="https://wa.me/918882607879"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-[#244c3b] px-8 py-3.5 text-sm font-semibold text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER — SEPARATE COMPONENT
      ====================================================== */}
      <Footer />
    </div>
  );
};

export default Home;