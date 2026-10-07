import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const highlights = [
  {
    title: "24/7 Gated Security",
    text: "Live in luxury with round-the-clock protection.",
  },
  {
    title: "Temples & Lake",
    text: "Enhance your stay with scenic waters and worship.",
  },
  {
    title: "Green Play Areas",
    text: "Turn joyful moments into memories you’ll cherish.",
  },
  {
    title: "Hill Station",
    text: "Let the mountain air refresh your senses.",
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
      <section className="relative min-h-screen w-full overflow-hidden bg-[#18352b]">

        {/* Hero Background */}
        <img
          src="/hero-image.png"
          alt="Ekeshwar Retreat Uttarakhand"
          className="
      absolute inset-0
      h-full w-full
      object-cover
      object-[65%_center]
      sm:object-[65%_center]
      lg:object-center
    "
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        {/* Bottom soft overlay */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen items-center">

          <div className="mx-auto w-full max-w-[1450px] px-6 pt-24 sm:px-10 lg:px-16">

            <div className="max-w-[760px]">

              {/* =================================================
            MOUNTAIN BRAND ICON + BRAND NAME
        ================================================== */}
              <div className="mb-4 flex items-center gap-4">

                {/* Mountain Icon */}
                <div className="flex h-12 w-12 items-center justify-center">
                  <svg
                    viewBox="0 0 80 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                  >
                    <path
                      d="M4 48L28 16L39 30L49 17L76 48"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M19 48L38 25L55 48"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M28 16L33 22L38 16L43 22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Brand */}
                <div className="h-9 w-px bg-white/50" />

                <div>
                  <p className="text-xs font-medium uppercase tracking-[4px] text-white/90 sm:text-sm">
                    Ekeshwar Retreat
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[3px] text-[#e2b35a] sm:text-[10px]">
                    Uttarakhand
                  </p>
                </div>

              </div>


              {/* =================================================
            SMALL INTRO
        ================================================== */}
              <p className="mb-2 text-xs font-medium uppercase tracking-[4px] text-[#e2b35a] sm:text-sm">
                Your Himalayan Escape
              </p>


              {/* =================================================
            MAIN HEADING
        ================================================== */}
              <h1
                className="
            max-w-[760px]
            font-serif
            text-2xl
            font-semibold
            leading-[1.08]
            text-white
            sm:text-4xl
            md:text-4xl
            lg:text-[40px]
            xl:text-[50px]
          "
              >
                Your Retreat Into
                <br />

                <span className="text-[#e2b35a]">
                  A Serene Life
                </span>
              </h1>


              {/* Decorative Line */}
              <div className="mt-1 flex items-center gap-3">

                <span className="h-px w-16 bg-[#e2b35a]" />

                <span className="h-1.5 w-1.5 rounded-full bg-[#e2b35a]" />

                <span className="h-px w-8 bg-white/50" />

              </div>


              {/* =================================================
            DESCRIPTION
        ================================================== */}
              <p
                className="
            mt-1
            max-w-[650px]
            text-base
            leading-7
            text-white/90
            sm:text-lg
            sm:leading-8
          "
              >
                Discover a peaceful retreat immersed in Himalayan serenity,
                where nature, tranquillity and thoughtfully planned cottage
                living come together.
              </p>


              {/* =================================================
            CTA BUTTONS
        ================================================== */}
              <div className="mt-2 flex flex-wrap gap-4">

                {/* Explore Cottages */}
                <a
                  href="#cottages"
                  className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#d99a35]
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-black/20
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-[#bd8124]
            "
                >
                  Explore Cottages

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>


                {/* Plan Your Visit */}
                <a
                  href="/contact"
                  className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/70
              bg-white/10
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              backdrop-blur-md
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-white
              hover:text-[#244c3b]
            "
                >
                  Plan Your Visit
                </a>

              </div>


              {/* =================================================
            TRUST / EXPERIENCE LINE
        ================================================== */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[2px] text-white/70">

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e2b35a]" />
                  Himalayan Serenity
                </span>

                <span className="hidden h-4 w-px bg-white/30 sm:block" />

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e2b35a]" />
                  Nature &amp; Wellbeing
                </span>

              </div>

            </div>

          </div>
        </div>


        {/* =====================================================
      EXPLORE SCROLL INDICATOR
  ====================================================== */}
        <a
          href="#introduction"
          className="
      absolute
      bottom-7
      left-1/2
      z-20
      -translate-x-1/2
      text-center
      text-white
      transition
      hover:opacity-70
    "
        >

          <span className="mb-3 block text-[9px] uppercase tracking-[4px] text-white/80">
            Explore
          </span>

          <span className="mx-auto flex h-12 w-7 items-start justify-center rounded-full border border-white/50 p-1">

            <span className="h-2 w-1 rounded-full bg-[#e2b35a] animate-bounce" />

          </span>

        </a>


        {/* Bottom decorative gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e2b35a]/70 to-transparent" />

      </section>
      {/* =====================================================
    SECTION 2 — INTRODUCTION
====================================================== */}
      <section
        id="introduction"
        className="relative overflow-hidden bg-[#f8f6f1] py-16 sm:py-20 lg:py-24"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/introduction.jpg"
            alt="Ekeshwar Retreat"
            className="h-full w-full object-cover"
          />

          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-[#244c3b]/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

          {/* Section Heading */}
          <div className="mb-10 text-center sm:mb-14">
            <p className="font-serif text-2xl font-semibold tracking-wide text-[#7a3827] sm:text-5xl lg:text-5xl">
              INTRODUCTION
            </p>
          </div>

          {/* Glass Content Box */}
          <div className="mx-auto max-w-[1050px] rounded-[28px] border border-white/60 bg-white/10 px-6 py-10 shadow-xl backdrop-blur-[4px] sm:px-10 sm:py-12 lg:px-16 lg:py-14">

            {/* Main Title */}
            <div className="text-center">
              <p className="font-serif text-2xl font-semibold text-[#7a3827] sm:text-3xl lg:text-[34px]">
                Premium Cottage Retreat
              </p>

              <div className="mx-auto mt-4 h-0.5 w-16 bg-[#d99a35]" />
            </div>

            {/* Introduction Points */}
            <div className="mt-10 grid gap-7 sm:mt-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8">

              {/* Point 1 */}
              <div className="rounded-2xl bg-white/60 p-5 transition duration-300 hover:bg-white/80">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#244c3b] text-sm text-white">
                    ✦
                  </span>

                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#7a3827] sm:text-2xl">
                      Immersed in Himalayan Serenity
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#5f6863] sm:text-base">
                      A peaceful retreat surrounded by the calming beauty and
                      natural character of the Himalayan landscape.
                    </p>
                  </div>
                </div>
              </div>

              {/* Point 2 */}
              <div className="rounded-2xl bg-white/60 p-5 transition duration-300 hover:bg-white/80">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#244c3b] text-sm text-white">
                    ✦
                  </span>

                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#7a3827] sm:text-2xl">
                      Luxury Rooted in Tranquillity
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#5f6863] sm:text-base">
                      Thoughtful cottage living where comfort and luxury are
                      beautifully connected with peace and tranquillity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Point 3 */}
              <div className="rounded-2xl bg-white/60 p-5 transition duration-300 hover:bg-white/80">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#244c3b] text-sm text-white">
                    ✦
                  </span>

                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#7a3827] sm:text-2xl">
                      Designed for Rejuvenating Experiences
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#5f6863] sm:text-base">
                      Created as a space to slow down, relax and reconnect with
                      yourself amidst nature.
                    </p>
                  </div>
                </div>
              </div>

              {/* Point 4 */}
              <div className="rounded-2xl bg-white/60 p-5 transition duration-300 hover:bg-white/80">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#244c3b] text-sm text-white">
                    ✦
                  </span>

                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#7a3827] sm:text-2xl">
                      Where Nature Nurtures Wellbeing
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#5f6863] sm:text-base">
                      An environment that brings you closer to nature and creates
                      a sense of calm, balance and wellbeing.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — WHY EKESHWAR RETREAT / KEY HIGHLIGHTS
      ====================================================== */}
      {/* <section className="bg-[#f4f0e8] py-20 sm:py-24 lg:py-28">
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
      </section> */}

      {/* =====================================================
    SECTION 3 — EXPERIENCE EKESHWAR / VIDEO
====================================================== */}
<section className="relative overflow-hidden bg-[#fffaf5] py-20 sm:py-24 lg:py-28">

  {/* Soft background decoration */}
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#d99a35]/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#244c3b]/10 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

    {/* =================================================
        TOP HEADING
    ================================================== */}
    <div className="mx-auto max-w-[800px] text-center">

      <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
        Experience Ekeshwar
      </p>

      <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#244c3b] sm:text-4xl lg:text-5xl">
        A Glimpse Into Your
        <span className="block text-[#7a3827]">
          Serene Escape
        </span>
      </h2>

      <div className="mx-auto mt-5 h-0.5 w-20 bg-[#d99a35]" />

      <p className="mx-auto mt-5 max-w-[700px] text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
        Take a moment to experience the natural beauty, peaceful
        surroundings and Himalayan serenity that define Ekeshwar Retreat.
      </p>

    </div>


    {/* =================================================
        VIDEO + CONTENT
    ================================================== */}
    <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

      {/* =================================================
          VIDEO
      ================================================== */}
      <div className="flex justify-center">

        <div
          className="
            group
            relative
            w-full
            max-w-[390px]
            overflow-hidden
            rounded-[30px]
            bg-[#18352b]
            shadow-[0_25px_70px_rgba(36,76,59,0.20)]
          "
        >

          {/* Video */}
          <video
            className="
              block
              h-auto
              max-h-[720px]
              min-h-[580px]
              w-full
              object-cover
              sm:min-h-[650px]
            "
            src="/videos/ekeshwar-retreat.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

          {/* Dark cinematic gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

          {/* =================================================
              VIDEO TOP LABEL
          ================================================== */}
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 backdrop-blur-md">

            <span className="h-2 w-2 animate-pulse rounded-full bg-[#e2b35a]" />

            <span className="text-[10px] font-medium uppercase tracking-[2px] text-white">
              Ekeshwar Retreat
            </span>

          </div>


          {/* =================================================
              BOTTOM VIDEO TEXT
          ================================================== */}
          <div className="absolute bottom-6 left-6 right-6">

            <p className="text-xs uppercase tracking-[3px] text-[#e2b35a]">
              Himalayan Serenity
            </p>

            <h3 className="mt-2 font-serif text-2xl font-semibold text-white sm:text-3xl">
              Where Nature
              <br />
              Nurtures Wellbeing
            </h3>

          </div>

        </div>

      </div>


      {/* =================================================
          RIGHT CONTENT
      ================================================== */}
      <div>

        <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
          Discover The Experience
        </p>

        <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#244c3b] sm:text-4xl lg:text-[46px]">
          More Than a Stay,
          <span className="block text-[#7a3827]">
            It’s a Way of Life.
          </span>
        </h3>

        <div className="mt-5 h-0.5 w-20 bg-[#d99a35]" />

        <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
          Ekeshwar Retreat is designed around the simple beauty of
          slowing down, breathing fresh mountain air and reconnecting
          with nature.
        </p>

        <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
          From peaceful Himalayan surroundings to thoughtfully planned
          cottage spaces, every element is created to bring comfort,
          tranquillity and a sense of wellbeing.
        </p>


        {/* =================================================
            EXPERIENCE POINTS
        ================================================== */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          {/* Point 1 */}
          <div className="rounded-2xl border border-[#e7dfd3] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-center gap-3">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#244c3b] text-white">
                ✦
              </span>

              <div>
                <h4 className="font-serif text-lg font-semibold text-[#244c3b]">
                  Himalayan Serenity
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Peaceful mountain surroundings
                </p>
              </div>

            </div>

          </div>


          {/* Point 2 */}
          <div className="rounded-2xl border border-[#e7dfd3] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-center gap-3">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#244c3b] text-white">
                ✦
              </span>

              <div>
                <h4 className="font-serif text-lg font-semibold text-[#244c3b]">
                  Natural Wellbeing
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Reconnect with nature
                </p>
              </div>

            </div>

          </div>


          {/* Point 3 */}
          <div className="rounded-2xl border border-[#e7dfd3] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-center gap-3">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#244c3b] text-white">
                ✦
              </span>

              <div>
                <h4 className="font-serif text-lg font-semibold text-[#244c3b]">
                  Peaceful Living
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  A slower way of life
                </p>
              </div>

            </div>

          </div>


          {/* Point 4 */}
          <div className="rounded-2xl border border-[#e7dfd3] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-center gap-3">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#244c3b] text-white">
                ✦
              </span>

              <div>
                <h4 className="font-serif text-lg font-semibold text-[#244c3b]">
                  Rejuvenating Escape
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Relax, refresh & reconnect
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            CTA
        ================================================== */}
        <div className="mt-9">

          <a
            href="/about"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#244c3b]
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-[#183a2c]
            "
          >
            Discover Ekeshwar

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
    SECTION 4 — KEY FEATURES
====================================================== */}
      <section className="relative overflow-hidden bg-[#f4f0e8] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">

          {/* Section Heading */}
          <div className="mx-auto max-w-[800px] text-center">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
              Experience Ekeshwar
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl lg:text-5xl">
              Key Features
            </h2>

            <div className="mx-auto mt-5 h-0.5 w-20 bg-[#d99a35]" />

            <p className="mx-auto mt-5 max-w-[680px] leading-8 text-gray-600">
              Thoughtfully planned features that bring together comfort,
              nature, security and memorable experiences.
            </p>

          </div>


          {/* Feature Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item, index) => (

              <div
                key={item.title}
                className="
            group
            relative
            overflow-hidden
            rounded-[28px]
            bg-white
            p-7
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
          "
              >

                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-[#d99a35] opacity-80" />


                {/* Number */}
                <div
                  className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-[#244c3b]
              font-serif
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              group-hover:bg-[#d99a35]
            "
                >
                  0{index + 1}
                </div>


                {/* Title */}
                <h3 className="mt-7 font-serif text-xl font-semibold leading-tight text-[#244c3b] sm:text-2xl">
                  {item.title}
                </h3>


                {/* Small Line */}
                <div className="mt-4 h-0.5 w-12 bg-[#d99a35] transition-all duration-300 group-hover:w-20" />


                {/* Description */}
                <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                  {item.text}
                </p>

              </div>

            ))}

          </div>


          {/* Bottom Text */}
          <div className="mx-auto mt-12 max-w-[760px] text-center">

            <p className="font-serif text-xl italic leading-8 text-[#244c3b] sm:text-2xl">
              "A place where comfort meets nature,
              and every moment becomes a memory."
            </p>

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