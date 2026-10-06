import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    MessageCircle,
    CalendarDays,
    Send,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkIn: "",
        checkOut: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleWhatsApp = (e) => {
        e.preventDefault();

        const { name, email, checkIn, checkOut, message } = formData;

        const whatsappMessage = `
Hello Ekeshwar Retreat,

I would like to enquire about my stay.

Name: ${name}
Email: ${email}
Check-in: ${checkIn}
Check-out: ${checkOut}

Message:
${message}
    `;

        const whatsappURL = `https://wa.me/918882607879?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <div className="min-h-screen bg-[#fffafa] text-[#252525]">
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden pt-[135px] pb-[70px]">
                {/* Decorative circles */}
                <div className="absolute -left-24 top-32 h-64 w-64 rounded-full bg-[#e8f8dc] blur-3xl opacity-60" />
                <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-[#fff0d8] blur-3xl opacity-70" />

                <div className="relative mx-auto max-w-[1200px] px-5 text-center">
                    <div className="mb-4 flex items-center justify-center gap-4">
                        <span className="hidden h-[1px] w-20 bg-[#62d84e] sm:block" />

                        <p className="text-sm font-semibold uppercase tracking-[4px] text-[#54c943]">
                            Get In Touch
                        </p>

                        <span className="hidden h-[1px] w-20 bg-[#62d84e] sm:block" />
                    </div>

                    <h1 className="font-serif text-4xl font-bold leading-tight text-[#202020] sm:text-5xl md:text-6xl">
                        Let’s Plan Your
                        <span className="block text-[#54c943]">
                            Perfect Himalayan Escape
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#707070] sm:text-lg">
                        Have a question, planning a stay, or simply want to know more
                        about Ekeshwar Retreat? We’re here to help make your mountain
                        experience memorable.
                    </p>
                </div>
            </section>

            {/* ================= CONTACT CARD ================= */}
            <section className="px-4 pb-20 sm:px-6">
                <div className="mx-auto max-w-[1200px]">
                    <div className="overflow-hidden rounded-[28px] border border-[#e8c44c] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)]">

                        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                            {/* ================= LEFT INFO ================= */}
                            <div className="relative overflow-hidden bg-[#f9fff6] px-7 py-10 sm:px-10 lg:px-12 lg:py-12">

                                {/* Decorative background */}
                                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#dff7d7] opacity-70" />
                                <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#fff0d2] opacity-60" />

                                <div className="relative">
                                    <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-[#f0a328]">
                                        Contact Ekeshwar
                                    </p>

                                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#252525] sm:text-4xl">
                                        Get In Touch With
                                        <span className="block text-[#55d546]">
                                            Ekeshwar Retreat
                                        </span>
                                    </h2>

                                    <div className="mt-5 h-[3px] w-24 bg-[#f0a328]" />

                                    <p className="mt-6 max-w-md text-[15px] leading-7 text-[#747474]">
                                        Whether you're planning a peaceful weekend, a family
                                        getaway or a longer Himalayan escape, our team is ready
                                        to assist you.
                                    </p>

                                    {/* Address */}
                                    <div className="mt-9 flex gap-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#55d546] text-white shadow-md">
                                            <MapPin size={24} />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-[#f0a328]">
                                                Address
                                            </h3>

                                            <p className="mt-1 text-[15px] leading-6 text-[#666]">
                                                Pauri Garhwal, Near Lansdowne,
                                                <br />
                                                Uttarakhand, 246155
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="mt-7 flex gap-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#55d546] text-white shadow-md">
                                            <Phone size={23} />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-[#f0a328]">
                                                Contact No.
                                            </h3>

                                            <a
                                                href="tel:+918882607879"
                                                className="mt-1 block text-[15px] font-medium text-[#666] transition hover:text-[#55d546]"
                                            >
                                                +91 8882607879
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="mt-7 flex gap-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#55d546] text-white shadow-md">
                                            <Mail size={23} />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-[#f0a328]">
                                                Email
                                            </h3>

                                            <a
                                                href="mailto:ekeshwarretreat@gmail.com"
                                                className="mt-1 block break-all text-[15px] font-medium text-[#666] transition hover:text-[#55d546]"
                                            >
                                                ekeshwarretreat@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Social Media */}
                                    <div className="mt-9">
                                        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#777]">
                                            Follow Our Journey
                                        </p>

                                        <div className="flex gap-3">

                                            {/* Facebook */}
                                            <a
                                                href="#"
                                                aria-label="Facebook"
                                                className="
        flex h-11 w-11
        items-center justify-center
        rounded-full
        bg-[#4267B2]
        text-white
        text-xl
        font-bold
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
                                            >
                                                f
                                            </a>

                                            {/* WhatsApp */}
                                            <a
                                                href="https://wa.me/918882607879"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="WhatsApp"
                                                className="
        flex h-11 w-11
        items-center justify-center
        rounded-full
        bg-[#25D366]
        text-white
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
                                            >
                                                <MessageCircle size={21} />
                                            </a>

                                            {/* YouTube */}
                                            <a
                                                href="#"
                                                aria-label="YouTube"
                                                className="
        flex h-11 w-11
        items-center justify-center
        rounded-full
        bg-[#FF0000]
        text-white
        text-sm
        font-bold
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
                                            >
                                                ▶
                                            </a>

                                            {/* Instagram */}
                                            <a
                                                href="#"
                                                aria-label="Instagram"
                                                className="
        flex h-11 w-11
        items-center justify-center
        rounded-full
        bg-[#E1306C]
        text-white
        text-lg
        font-bold
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
                                            >
                                                ◎
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ================= RIGHT FORM ================= */}
                            <div className="px-7 py-10 sm:px-10 lg:px-12 lg:py-12">
                                <div className="mb-8">
                                    <p className="mb-2 text-sm font-bold uppercase tracking-[3px] text-[#54c943]">
                                        Plan Your Stay
                                    </p>

                                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#202020] sm:text-4xl">
                                        We’re Here to Make
                                        <span className="block">
                                            Your Stay Unforgettable
                                        </span>
                                    </h2>

                                    <p className="mt-3 text-sm leading-6 text-[#777]">
                                        Fill in your details and send us your enquiry directly on
                                        WhatsApp.
                                    </p>
                                </div>

                                <form onSubmit={handleWhatsApp}>

                                    {/* Name + Email */}
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-[#292929]">
                                                Name
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your Name"
                                                required
                                                className="
                          h-14
                          w-full
                          rounded-full
                          border
                          border-[#dedede]
                          bg-[#fff]
                          px-5
                          text-sm
                          outline-none
                          transition
                          focus:border-[#55d546]
                          focus:ring-2
                          focus:ring-[#55d546]/20
                        "
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-[#292929]">
                                                Email
                                            </label>

                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your Email"
                                                required
                                                className="
                          h-14
                          w-full
                          rounded-full
                          border
                          border-[#dedede]
                          bg-[#fff]
                          px-5
                          text-sm
                          outline-none
                          transition
                          focus:border-[#55d546]
                          focus:ring-2
                          focus:ring-[#55d546]/20
                        "
                                            />
                                        </div>
                                    </div>

                                    {/* Dates */}
                                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-[#292929]">
                                                Check-in
                                            </label>

                                            <div className="relative">
                                                <input
                                                    type="date"
                                                    name="checkIn"
                                                    value={formData.checkIn}
                                                    onChange={handleChange}
                                                    required
                                                    className="
                            h-14
                            w-full
                            rounded-full
                            border
                            border-[#dedede]
                            bg-white
                            px-5
                            text-sm
                            text-[#666]
                            outline-none
                            transition
                            focus:border-[#55d546]
                            focus:ring-2
                            focus:ring-[#55d546]/20
                          "
                                                />

                                                <CalendarDays
                                                    size={19}
                                                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#777]"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-[#292929]">
                                                Check-out
                                            </label>

                                            <div className="relative">
                                                <input
                                                    type="date"
                                                    name="checkOut"
                                                    value={formData.checkOut}
                                                    onChange={handleChange}
                                                    required
                                                    className="
                            h-14
                            w-full
                            rounded-full
                            border
                            border-[#dedede]
                            bg-white
                            px-5
                            text-sm
                            text-[#666]
                            outline-none
                            transition
                            focus:border-[#55d546]
                            focus:ring-2
                            focus:ring-[#55d546]/20
                          "
                                                />

                                                <CalendarDays
                                                    size={19}
                                                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#777]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="mt-5">
                                        <label className="mb-2 block text-sm font-semibold text-[#292929]">
                                            Message
                                        </label>

                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your stay..."
                                            rows="5"
                                            required
                                            className="
                        w-full
                        resize-none
                        rounded-[22px]
                        border
                        border-[#dedede]
                        bg-white
                        px-5
                        py-4
                        text-sm
                        outline-none
                        transition
                        focus:border-[#55d546]
                        focus:ring-2
                        focus:ring-[#55d546]/20
                      "
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="
                      mt-6
                      flex
                      h-14
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-[#55d546]
                      text-base
                      font-bold
                      text-white
                      shadow-[0_8px_25px_rgba(85,213,70,0.25)]
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#48c43b]
                      hover:shadow-[0_12px_30px_rgba(85,213,70,0.35)]
                    "
                                    >
                                        <MessageCircle size={20} />
                                        Send via WhatsApp
                                        <Send size={18} />
                                    </button>

                                    <p className="mt-3 text-center text-xs text-[#888]">
                                        Your enquiry will open directly in WhatsApp.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= BOTTOM CTA ================= */}
            <section className="px-5 pb-20">
                <div className="mx-auto max-w-[1000px] rounded-[25px] bg-[#1f2937] px-6 py-10 text-center shadow-xl sm:px-10">
                    <p className="text-sm font-semibold uppercase tracking-[3px] text-[#55d546]">
                        Your Himalayan Escape Awaits
                    </p>

                    <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
                        Ready to Experience Ekeshwar Retreat?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                        Leave the noise behind and discover peaceful mornings, beautiful
                        mountain views and unforgettable moments in Uttarakhand.
                    </p>

                    <a
                        href="https://wa.me/918882607879"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#55d546]
              px-7
              py-3.5
              font-semibold
              text-white
              transition
              hover:-translate-y-1
              hover:bg-[#48c43b]
            "
                    >
                        <MessageCircle size={19} />
                        Chat With Us
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ContactUs;