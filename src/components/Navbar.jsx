import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const isActive = (href) => {
    return location.pathname === href;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="
          relative
          mx-auto
          mt-0
          h-[100px]
          rounded-b-[20px]
          border
          border-t-0
          border-[#b9e67d]
          bg-white
          shadow-[0_8px_25px_rgba(0,0,0,0.08)]
        "
        style={{
          width: "min(1240px, calc(100vw - 40px))",
        }}
      >

        {/* =====================================================
            DESKTOP NAVBAR
        ====================================================== */}
        <div className="hidden h-full items-center lg:flex">

          {/* LOGO */}
          <Link
            to="/"
            className="
              absolute
              left-[90px]
              top-1/2
              -translate-y-1/2
            "
          >
            <img
              src="/images/Ekeshwar-Logo.png"
              alt="Ekeshwar Retreat"
              className="w-[185px] object-contain"
            />
          </Link>


          {/* NAVIGATION */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              -translate-x-1/2
              -translate-y-1/2
              items-center
              gap-[36px]
            "
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`
                    relative
                    whitespace-nowrap
                    text-[16px]
                    font-medium
                    transition-colors
                    duration-300
                    ${
                      active
                        ? "text-[#e59b22]"
                        : "text-[#666666] hover:text-[#0b4d32]"
                    }
                  `}
                >
                  {link.name}

                  {/* Active underline */}
                  {active && (
                    <span
                      className="
                        absolute
                        -bottom-[8px]
                        left-0
                        h-[2px]
                        w-full
                        bg-[#e59b22]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </div>


          {/* WHATSAPP */}
          <a
            href="https://wa.me/918882607879"
            target="_blank"
            rel="noopener noreferrer"
            className="
              absolute
              right-[76px]
              top-1/2
              flex
              -translate-y-1/2
              items-center
              gap-2
              rounded-full
              bg-[#4dcc3f]
              px-[18px]
              py-[9px]
              text-[15px]
              font-semibold
              text-white
              transition
              duration-300
              hover:bg-[#42b936]
            "
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>


        {/* =====================================================
            MOBILE HEADER
        ====================================================== */}
        <div className="flex h-full items-center justify-between px-5 lg:hidden">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
          >
            <img
              src="/images/Ekeshwar-Logo.png"
              alt="Ekeshwar Retreat"
              className="w-[160px]"
            />
          </Link>


          {/* MENU BUTTON */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#d9b55d]
              text-[#0b4d32]
              transition
              duration-300
              hover:bg-[#0b4d32]
              hover:text-white
            "
          >
            {isMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>


        {/* =====================================================
            MOBILE MENU
        ====================================================== */}
        {isMenuOpen && (
          <div
            className="
              absolute
              left-0
              right-0
              top-[100px]
              overflow-hidden
              rounded-b-[20px]
              border
              border-t-0
              border-gray-100
              bg-white
              shadow-[0_15px_30px_rgba(0,0,0,0.10)]
              lg:hidden
            "
          >

            {/* NAV LINKS */}
            <div className="px-5 pb-3 pt-2">

              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={closeMenu}
                    className={`
                      block
                      border-b
                      border-gray-100
                      py-4
                      text-[15px]
                      font-medium
                      transition-colors
                      ${
                        active
                          ? "text-[#e59b22]"
                          : "text-gray-600 hover:text-[#0b4d32]"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">

                      <span>{link.name}</span>

                      {active && (
                        <span className="h-2 w-2 rounded-full bg-[#e59b22]" />
                      )}

                    </div>
                  </Link>
                );
              })}

            </div>


            {/* WHATSAPP */}
            <div className="px-5 pb-5 pt-2">
              <a
                href="https://wa.me/918882607879"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#4dcc3f]
                  py-3
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-[#42b936]
                "
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;