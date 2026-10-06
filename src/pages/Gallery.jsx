import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const galleryImages = [
  {
    id: 1,
    title: "Himalayan Views",
    category: "Nature",
    image: "/images/gallery/himalayan-view.jpg",
  },
  {
    id: 2,
    title: "Mountain Living",
    category: "Living",
    image: "/images/gallery/mountain-living.jpg",
  },
  {
    id: 3,
    title: "Peaceful Mornings",
    category: "Nature",
    image: "/images/gallery/morning.jpg",
  },
  {
    id: 4,
    title: "The Retreat",
    category: "Architecture",
    image: "/images/gallery/retreat.jpg",
  },
  {
    id: 5,
    title: "Forest Surroundings",
    category: "Nature",
    image: "/images/gallery/forest.jpg",
  },
  {
    id: 6,
    title: "Cottage Living",
    category: "Cottages",
    image: "/images/gallery/cottage.jpg",
  },
  {
    id: 7,
    title: "Mountain Evenings",
    category: "Nature",
    image: "/images/gallery/sunset.jpg",
  },
  {
    id: 8,
    title: "Thoughtful Architecture",
    category: "Architecture",
    image: "/images/gallery/architecture.jpg",
  },
  {
    id: 9,
    title: "Terraced Landscape",
    category: "Landscape",
    image: "/images/gallery/terraced.jpg",
  },
  {
    id: 10,
    title: "A Quiet Corner",
    category: "Living",
    image: "/images/gallery/quiet-corner.jpg",
  },
  {
    id: 11,
    title: "Hillside Cottage",
    category: "Cottages",
    image: "/images/gallery/hillside-cottage.jpg",
  },
  {
    id: 12,
    title: "Golden Hour",
    category: "Nature",
    image: "/images/gallery/golden-hour.jpg",
  },
];

const categories = [
  "All",
  "Nature",
  "Cottages",
  "Architecture",
  "Living",
  "Landscape",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="min-h-screen overflow-hidden bg-[#fffaf5] text-[#244c3b]">

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <Navbar />


      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden">

        <img
          src="/images/gallery/gallery-hero.jpg"
          alt="Uttarakhand mountains"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#102c22]/55" />

        <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[4px] text-[#e1b15b]">
            Explore Ekeshwar
          </p>

          <h1 className="font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-[76px]">
            Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-[650px] text-base leading-8 text-white/85 sm:text-lg">
            A glimpse into the landscapes, architecture, cottages and
            quiet moments that make life at Ekeshwar Retreat special.
          </p>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-[#fffaf5] py-20 sm:py-24">

        <div className="mx-auto max-w-[900px] px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
            Life in the Hills
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#244c3b] sm:text-4xl lg:text-5xl">
            See the Beauty of Uttarakhand Through Our Eyes
          </h2>

          <div className="mx-auto mt-6 h-0.5 w-16 bg-[#d99a35]" />

          <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
            From misty mountain mornings to golden Himalayan sunsets,
            every frame tells a story of peaceful living, natural beauty
            and thoughtful design.
          </p>

        </div>
      </section>


      {/* =====================================================
          CATEGORY FILTER
      ====================================================== */}
      <section className="bg-[#f4f0e8] pb-10">

        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">

          <div className="flex flex-wrap justify-center gap-3">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    activeCategory === category
                      ? "border-[#244c3b] bg-[#244c3b] text-white"
                      : "border-[#c9c1b3] bg-transparent text-[#526258] hover:border-[#244c3b] hover:text-[#244c3b]"
                  }
                `}
              >
                {category}
              </button>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          GALLERY GRID
      ====================================================== */}
      <section className="bg-[#f4f0e8] pb-24 sm:pb-28">

        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">

            {filteredImages.map((item) => (
              <div
                key={item.id}
                className="group mb-5 break-inside-avoid cursor-pointer overflow-hidden rounded-[22px] bg-white"
                onClick={() => setSelectedImage(item)}
              >

                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="
                      block
                      h-auto
                      w-full
                      object-cover
                      transition
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-end
                      bg-gradient-to-t
                      from-[#102c22]/80
                      via-transparent
                      to-transparent
                      opacity-0
                      transition
                      duration-500
                      group-hover:opacity-100
                    "
                  >

                    <div className="w-full p-6">

                      <p className="text-xs font-semibold uppercase tracking-[2px] text-[#e1b15b]">
                        {item.category}
                      </p>

                      <h3 className="mt-1 font-serif text-2xl text-white">
                        {item.title}
                      </h3>

                    </div>

                  </div>

                  {/* View icon */}
                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-white/90
                      text-[#244c3b]
                      opacity-0
                      shadow-lg
                      transition
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <span className="text-lg">↗</span>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          QUOTE / CTA
      ====================================================== */}
      <section className="bg-[#244c3b] py-20 sm:py-24">

        <div className="mx-auto max-w-[900px] px-6 text-center">

          <div className="text-4xl text-[#d9a04a]">
            “
          </div>

          <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Some places are not just visited.
            <br className="hidden sm:block" />
            They are felt.
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] leading-8 text-white/65">
            Come discover the quiet beauty of mountain living and
            create your own memories at Ekeshwar Retreat.
          </p>

          <a
            href="https://wa.me/918882607879"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8
              inline-flex
              rounded-full
              bg-[#d99a35]
              px-8
              py-3.5
              text-sm
              font-semibold
              text-white
              transition
              duration-300
              hover:bg-[#bd8124]
            "
          >
            Plan Your Visit
          </a>

        </div>
      </section>


      {/* =====================================================
          LIGHTBOX
      ====================================================== */}
      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/90
            p-5
            sm:p-10
          "
          onClick={() => setSelectedImage(null)}
        >

          {/* Close */}
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-2xl
              text-white
              transition
              hover:bg-white/20
            "
          >
            ×
          </button>


          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[1200px]"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="
                max-h-[80vh]
                max-w-full
                rounded-[16px]
                object-contain
                shadow-2xl
              "
            />

            <div className="mt-4 text-center">

              <p className="text-xs font-semibold uppercase tracking-[2px] text-[#e1b15b]">
                {selectedImage.category}
              </p>

              <h3 className="mt-1 font-serif text-2xl text-white">
                {selectedImage.title}
              </h3>

            </div>

          </div>

        </div>
      )}


      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />

    </div>
  );
};

export default Gallery;