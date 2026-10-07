import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Slow Living in Uttarakhand",
    category: "Lifestyle",
    date: "October 05, 2026",
    image: "/blog/slow-living.jpg",
    excerpt:
      "Discover why the mountains invite us to slow down, reconnect with nature and appreciate the simple moments of everyday life.",
  },
  {
    id: 2,
    title: "Why Uttarakhand Is Perfect for a Mountain Retreat",
    category: "Travel",
    date: "September 28, 2026",
    image: "/blog/uttarakhand-retreat.jpg",
    excerpt:
      "From peaceful forests to breathtaking Himalayan views, explore what makes Uttarakhand one of India's most beautiful retreat destinations.",
  },
  {
    id: 3,
    title: "Living Close to Nature",
    category: "Nature",
    date: "September 18, 2026",
    image: "/blog/living-nature.jpg",
    excerpt:
      "There is something deeply refreshing about waking up surrounded by trees, fresh mountain air and open skies.",
  },
  {
    id: 4,
    title: "The Beauty of Himalayan Mornings",
    category: "Experiences",
    date: "September 10, 2026",
    image: "/blog/himalayan-morning.jpg",
    excerpt:
      "Experience the peaceful rhythm of mountain mornings, where misty landscapes and golden sunlight create unforgettable moments.",
  },
  {
    id: 5,
    title: "Designing Homes That Belong to the Hills",
    category: "Architecture",
    date: "August 30, 2026",
    image: "/blog/hill-architecture.jpg",
    excerpt:
      "Explore how thoughtful architecture can work with the natural terrain rather than overpowering it.",
  },
  {
    id: 6,
    title: "A Weekend Escape to the Mountains",
    category: "Travel",
    date: "August 22, 2026",
    image: "/blog/weekend-escape.jpg",
    excerpt:
      "Sometimes all you need is a quiet weekend away from the city. Here's how to make your mountain escape meaningful.",
  },
  {
    id: 7,
    title: "Forest Walks & Quiet Afternoons",
    category: "Nature",
    date: "August 15, 2026",
    image: "/blog/forest-walk.jpg",
    excerpt:
      "Walk beneath the pine trees, listen to the wind and discover the calming effect of being surrounded by nature.",
  },
  {
    id: 8,
    title: "Finding Your Own Rhythm in the Hills",
    category: "Lifestyle",
    date: "August 08, 2026",
    image: "/blog/mountain-life.jpg",
    excerpt:
      "Mountain living teaches us that life does not always have to move fast. Sometimes the best moments happen when we pause.",
  },
];

const categories = [
  "All",
  "Travel",
  "Lifestyle",
  "Nature",
  "Architecture",
  "Experiences",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter(
          (post) => post.category === activeCategory
        );

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen overflow-hidden bg-[#fffaf5] text-[#244c3b]">

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden">

        <img
          src="/blog/blog-hero.jpg"
          alt="Uttarakhand mountains"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#102c22]/60" />

        <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[4px] text-[#e1b15b]">
            Stories From The Hills
          </p>

          <h1 className="font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-[76px]">
            Journal
          </h1>

          <p className="mx-auto mt-6 max-w-[680px] text-base leading-8 text-white/85 sm:text-lg">
            Stories, ideas and inspiration from Uttarakhand, mountain
            living, thoughtful architecture and the art of slowing down.
          </p>

        </div>
      </section>

      {/* =====================================================
          FEATURED ARTICLE
      ====================================================== */}
      <section className="bg-[#fffaf5] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">

          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#c89132]">
              Featured Story
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#244c3b] sm:text-4xl">
              From Our Journal
            </h2>

          </div>

          <article className="grid overflow-hidden rounded-[30px] bg-[#244c3b] lg:grid-cols-2">

            {/* Image */}
            <div className="relative min-h-[360px] overflow-hidden sm:min-h-[480px]">

              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />

            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#e1b15b]">
                {featuredPost.category}
              </span>

              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {featuredPost.title}
              </h2>

              <p className="mt-3 text-sm text-white/45">
                {featuredPost.date}
              </p>

              <p className="mt-6 text-base leading-8 text-white/70">
                {featuredPost.excerpt}
              </p>

              <button
                type="button"
                className="
                  mt-8
                  w-fit
                  rounded-full
                  border
                  border-[#d99a35]
                  px-7
                  py-3
                  text-sm
                  font-semibold
                  text-[#e1b15b]
                  transition
                  duration-300
                  hover:bg-[#d99a35]
                  hover:text-white
                "
              >
                Read Story →
              </button>

            </div>

          </article>

        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}
      <section className="bg-[#f4f0e8] pb-12">

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
                      : "border-[#c9c1b3] text-[#526258] hover:border-[#244c3b] hover:text-[#244c3b]"
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
          BLOG GRID
      ====================================================== */}
      <section className="bg-[#f4f0e8] pb-24 sm:pb-28">

        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {filteredPosts.map((post) => (

              <article
                key={post.id}
                className="
                  group
                  overflow-hidden
                  rounded-[24px]
                  bg-white
                  shadow-[0_8px_30px_rgba(35,55,45,0.06)]
                  transition
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_15px_40px_rgba(35,55,45,0.12)]
                "
              >

                {/* Image */}
                <div className="relative h-[270px] overflow-hidden">

                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Category */}
                  <span className="
                    absolute
                    left-5
                    top-5
                    rounded-full
                    bg-white/95
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#244c3b]
                  ">
                    {post.category}
                  </span>

                </div>

                {/* Content */}
                <div className="p-7">

                  <p className="text-xs text-gray-400">
                    {post.date}
                  </p>

                  <h3 className="
                    mt-3
                    font-serif
                    text-2xl
                    font-semibold
                    leading-tight
                    text-[#244c3b]
                    transition
                    duration-300
                    group-hover:text-[#c89132]
                  ">
                    {post.title}
                  </h3>

                  <p className="
                    mt-4
                    text-sm
                    leading-7
                    text-gray-600
                  ">
                    {post.excerpt}
                  </p>

                  <button
                    type="button"
                    className="
                      mt-6
                      text-sm
                      font-semibold
                      text-[#244c3b]
                      transition
                      hover:text-[#c89132]
                    "
                  >
                    Read More →
                  </button>

                </div>

              </article>

            ))}

          </div>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">

              <p className="font-serif text-2xl text-[#244c3b]">
                No stories found.
              </p>

              <p className="mt-2 text-gray-500">
                Please select another category.
              </p>

            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          NEWSLETTER / CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#244c3b]">

        <div className="mx-auto max-w-[900px] px-6 py-20 text-center sm:px-10 sm:py-24">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#e1b15b]">
            Stay Connected
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            More Stories From The Mountains
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-base leading-8 text-white/65">
            Follow our journey as we explore mountain living, nature,
            architecture and everything that makes Uttarakhand special.
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
            Connect With Us
          </a>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />

    </div>
  );
};

export default Blog;