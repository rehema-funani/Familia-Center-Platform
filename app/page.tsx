"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
// ─── TYPES ────────────────────────────────────────────────────────────────────
interface Program {
  icon: string;
  iconBg: string;
  title: string;
  desc: string;
  color: string;
}

interface CounselingService {
  icon: string;
  iconBg: string;
  title: string;
  desc: string;
  cta: string;
}

interface Step {
  icon: string;
  label: string;
  desc: string;
}

function Navbar({
  dark,
  toggleDark,
}: {
  dark: boolean;
  toggleDark: () => void;
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks = [
    "Home",
    "Programs",
    "Counseling",
    "Resources",
    "About",
    "Contact",
  ];

  return (
    <nav
  className="sticky top-0 z-50 backdrop-blur-md"
  style={{ backgroundColor: "var(--bg)" }}
>
  <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-2.5">
      <div className="w-10 h-10 flex items-center justify-center">
        <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
          <circle cx="20" cy="20" r="20" fill="#198754" opacity="0.12" />
          <path
            d="M20 8c-3 4-7 6-7 11a7 7 0 0014 0c0-5-4-7-7-11z"
            fill="#198754"
          />
          <circle cx="14" cy="17" r="3" fill="#198754" opacity="0.6" />
          <circle cx="26" cy="17" r="3" fill="#198754" opacity="0.6" />
        </svg>
      </div>

      <div>
        <p
          className="font-bold text-lg leading-none"
          style={{ color: "var(--text)" }}
        >
          Family Center
        </p>

        <p
          className="text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          Together, We Grow
        </p>
      </div>
    </div>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
      {navLinks.map((item) => (
        <a
          key={item}
          href="#"
          className={`transition-all duration-200 hover:text-emerald-600 ${
            item === "Home"
              ? "text-emerald-700 border-b-2 border-emerald-700 pb-1"
              : ""
          }`}
          style={
            item === "Home"
              ? {}
              : { color: "var(--text)" }
          }
        >
          {item}
        </a>
      ))}
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-3">

      {/* Theme Toggle */}
      <button
        onClick={toggleDark}
        className="w-10 h-10 rounded-xl border flex items-center justify-center"
        style={{
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
      >
        {dark ? "☀️" : "🌙"}
      </button>

      {/* Desktop Buttons */}
      <button
        className="hidden sm:block px-5 py-2.5 rounded-xl border text-sm font-medium"
        style={{
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
      >
        Login
      </button>

      <button className="hidden sm:block px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-sm font-medium hover:bg-emerald-800 transition-colors">
        Get Started
      </button>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden w-10 h-10 flex items-center justify-center"
      >
        {menuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            style={{ color: "var(--text)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            style={{ color: "var(--text)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div
      className="md:hidden shadow-lg"
      style={{ backgroundColor: "var(--card)" }}
    >
      <div className="px-6 py-5 flex flex-col gap-4">

        {navLinks.map((item) => (
          <a
            key={item}
            href="#"
            className="font-medium"
            style={{ color: "var(--text)" }}
          >
            {item}
          </a>
        ))}

        <button
          className="mt-2 px-5 py-3 rounded-xl border"
          style={{
            borderColor: "var(--border)",
            color: "var(--text)",
          }}
        >
          Login
        </button>

        <button className="px-5 py-3 rounded-xl bg-emerald-700 text-white">
          Get Started
        </button>

      </div>
    </div>
  )}
</nav>
  );
}
// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
   <section
  className="relative overflow-hidden"
  style={{ backgroundColor: "#F6F6F4" }}
>
  {/* Background Decorations */}
  <div
    className="absolute -left-20 top-0 w-72 h-72 rounded-full opacity-20"
    style={{ backgroundColor: "#d1fae5" }}
  />

  <div
    className="absolute left-5 bottom-10 w-24 h-24 opacity-20"
    style={{
      backgroundImage:
        "radial-gradient(#10b981 1px, transparent 1px)",
      backgroundSize: "12px 12px",
    }}
  />

  <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-[42%_58%] items-stretch">

    {/* LEFT CONTENT */}
    <div className="flex flex-col justify-center px-8 lg:px-16 py-10 relative z-10">

      <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-medium mb-5 w-fit">
        Professional Guidance. Stronger Families.
      </span>

      <h1
        className="text-4xl xl:text-5xl font-extrabold leading-tight mb-4"
        style={{ color: "#111827" }}
      >
        Empowering Families.
        <br />
        <span className="text-emerald-600">
          Enriching Lives.
        </span>
      </h1>

      <p
        className="text-sm max-w-md mb-6"
        style={{
          color: "#6b7280",
          lineHeight: "1.8",
        }}
      >
        Join our structured programs, live sessions,
        and private counseling designed to help
        you build healthier relationships and
        a better future.
      </p>

      <div className="flex flex-wrap gap-3 mb-6">

        <button className="bg-emerald-700 hover:bg-emerald-800 transition text-white px-5 py-3 rounded-xl flex items-center gap-2 font-semibold text-sm">
          Explore Programs
          <span>→</span>
        </button>

        <button className="border border-gray-300 px-5 py-3 rounded-xl flex items-center gap-2 font-semibold text-gray-800 hover:bg-white text-sm">
          📅 Book Counseling
        </button>

      </div>

      {/* Trust Section */}
      <div className="flex items-center gap-3">

        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-white"></div>
        </div>

        <div>
          <p className="font-semibold text-sm text-gray-900">
            5000+ Families Trust Us
          </p>

          <p className="text-xs text-gray-500">
            ⭐⭐⭐⭐⭐ 4.9 (320+ Reviews)
          </p>
        </div>

      </div>

    </div>

    {/* RIGHT IMAGE SECTION */}
    <div className="relative">

      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderTopLeftRadius: "450px",
          borderBottomLeftRadius: "450px",
        }}
      >
        <img
          src="/Images/premium_photo-1661660247608-236c8bafd3cb.avif"
          alt="Happy Family"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Invisible spacer so image gets same height as content */}
      <div className="h-full min-h-[460px]"></div>

      {/* Floating Card */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-5 w-52 z-20">

      <div className="w-12 h-12 rounded-xl bg-emerald-700 flex items-center justify-center mb-4">
  <svg
    className="w-6 h-6 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10l4.553-2.277A1 1 0 0121 8.677V15.32a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
    />
  </svg>
</div>

        <h3 className="font-bold text-gray-900 text-2xl">
          Live Sessions
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Join expert-led live sessions from anywhere.
        </p>

        <button className="mt-5 ml-auto w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center">
          →
        </button>

      </div>

    </div>

  </div>
</section>
  );
}
function StatsBar() {
  const stats = [
    {
      icon: "👨‍👩‍👧‍👦",
      iconBg: "#d1fae5",
      value: "10,000+",
      label: "Families Helped",
    },
    {
      icon: "🎓",
      iconBg: "#fef3c7",
      value: "50+",
      label: "Expert Counselors",
    },
    {
      icon: "🎥",
      iconBg: "#ede9fe",
      value: "1,200+",
      label: "Live Sessions Held",
    },
    {
      icon: "📋",
      iconBg: "#fee2e2",
      value: "95%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section
      className="relative z-20"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        <div
          className="rounded-[32px] p-8 md:p-10 -mt-1"
          style={{
            backgroundColor: "var(--card)",
            boxShadow:
              "0 25px 80px rgba(0,0,0,0.18)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {stats.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    backgroundColor: item.iconBg,
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      color: "var(--text)",
                    }}
                  >
                    {item.value}
                  </h3>

                  <p
                    className="text-sm"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
// ─── PROGRAMS + COUNSELING ────────────────────────────────────────────────────
function ProgramsAndCounseling() {
  const programs: Program[] = [
    {
      icon: "👨‍👩‍👧",
      iconBg: "#d1fae5",
      title: "Parenting Program",
      desc: "Build stronger bonds and raise confident children.",
      color: "#198754",
    },
    {
      icon: "❤️",
      iconBg: "#fff7ed",
      title: "Marriage & Relationships",
      desc: "Strengthen your relationship and grow together.",
      color: "#ea580c",
    },
    {
      icon: "🧍",
      iconBg: "#ede9fe",
      title: "Addiction Recovery",
      desc: "Find support, recovery and a new beginning.",
      color: "#7c3aed",
    },
  ];

  const counseling: CounselingService[] = [
    {
      icon: "👤",
      iconBg: "#d1fae5",
      title: "One-on-One Counseling",
      desc: "Book a private session with our expert counselors.",
      cta: "Book Now",
    },
    {
      icon: "🎭",
      iconBg: "#fee2e2",
      title: "Anonymous Support",
      desc: "Get help anonymously and confidentially.",
      cta: "Learn More",
    },
  ];

  return (
    <section className="py-10" style={{ backgroundColor: "var(--bg)" }}>
  <div className="max-w-7xl mx-auto px-6">

    {/* Headers */}
    <div className="mb-4" style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "16px" }}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold" style={{ color: "var(--text)" }}>Our Programs</h2>
        <a href="#" className="text-xs font-semibold text-emerald-600 flex items-center gap-1 hover:underline">
          View All Programs
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </a>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold" style={{ color: "var(--text)" }}>Counseling Services</h2>
        <a href="#" className="text-xs font-semibold text-emerald-600 flex items-center gap-1 hover:underline">
          View All Services
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>

    {/* Cards */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr) repeat(2, 1fr)", gap: "12px" }}>

      {programs.map((p) => (
        <div
          key={p.title}
          className="flex flex-col p-4 rounded-2xl"
          style={{
            backgroundColor: "var(--card)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
            border: "none",
          }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 mb-3" style={{ backgroundColor: p.iconBg }}>
            {p.icon}
          </div>
          <p className="font-bold text-xs leading-snug" style={{ color: "var(--text)" }}>{p.title}</p>
          <p className="text-xs mt-1 flex-1 leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs font-semibold" style={{ color: p.color }}>6 Weeks Program</span>
            <button className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "white", boxShadow: "0 1px 4px rgba(0,0,0,0.10)", border: "none" }}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      ))}

      {counseling.map((c) => (
        <div
          key={c.title}
          className="flex flex-col p-4 rounded-2xl"
          style={{
            backgroundColor: "var(--card)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
            border: "none",
          }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 mb-3" style={{ backgroundColor: c.iconBg }}>
            {c.icon}
          </div>
          <p className="font-bold text-xs leading-snug" style={{ color: "var(--text)" }}>{c.title}</p>
          <p className="text-xs mt-1 flex-1 leading-relaxed" style={{ color: "var(--text-muted)" }}>{c.desc}</p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs font-semibold text-emerald-600">{c.cta}</span>
            <button className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "white", boxShadow: "0 1px 4px rgba(0,0,0,0.10)", border: "none" }}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
  );
}

// ─── HOW IT WORKS + TESTIMONIAL + STAY CONNECTED ─────────────────────────────
// ─── HOW IT WORKS + TESTIMONIAL + STAY CONNECTED ─────────────────────────────
function BottomSections() {
  const steps = [
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0121 9.414V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: "Sign Up",
      desc: "Create your account in minutes.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      label: "Choose Program",
      desc: "Select a program or book a session.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.277A1 1 0 0121 8.677V15.32a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
        </svg>
      ),
      label: "Join Sessions",
      desc: "Attend live sessions and participate.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ),
      label: "Grow & Heal",
      desc: "Apply learnings and transform your life.",
    },
  ];

  const [active, setActive] = useState(0);

  const testimonials = [
    {
      quote: "Family Center has been a blessing for our family. The sessions are life-changing!",
      name: "Sarah Johnson",
      role: "Program Participant",
      image: "/testimonial-sarah.jpg",
    },
    {
      quote: "The counselors are incredibly professional and empathetic. Highly recommend!",
      name: "David Kimani",
      role: "Marriage Program",
      image: "/testimonial-david.jpg",
    },
    {
      quote: "I finally found the support I needed. The anonymous sessions gave me confidence.",
      name: "Amina Wanjiru",
      role: "Anonymous Support User",
      image: "/testimonial-amina.jpg",
    },
  ];

  return (
    <section className="py-10 overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1fr_320px] gap-6 items-stretch">

        {/* ── HOW IT WORKS ── */}
        <div
          className="-ml-6 pl-6 pr-6 py-6 shadow-[0_4px_24px_0_rgba(0,0,0,0.08)] flex flex-col justify-center"
          style={{ backgroundColor: "var(--card)" }}
        >
          <h2 className="text-base font-extrabold mb-1" style={{ color: "var(--text)" }}>
            How It Works
          </h2>

          <div className="flex items-start">
            {steps.map((step, i) => (
              <div key={step.label} className="flex-1 flex flex-col items-center text-center relative">
                {i < steps.length - 1 && (
                  <div
                    className="absolute top-5 left-[56%] w-[88%] border-t-2 border-dashed border-emerald-300"
                    style={{ zIndex: 0 }}
                  />
                )}
                <div
                  className="relative z-10 w-10 h-10 rounded-full border-2 border-emerald-300 flex items-center justify-center"
                  style={{ backgroundColor: "var(--bg)" }}
                >
                  {step.icon}
                </div>
                <p className="font-semibold text-[11px] mt-2 leading-tight" style={{ color: "var(--text)" }}>
                  {step.label}
                </p>
                <p className="text-[10px] mt-1 px-1 leading-tight" style={{ color: "var(--text-muted)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHAT FAMILIES SAY ── */}
        <div className="flex flex-col justify-center">
          {/* <h2 className="text-base font-extrabold mb-4" style={{ color: "var(--text)" }}>
            What Families Say
          </h2> */}

          <div
            className="p-5 rounded-2xl shadow-lg"
            style={{ backgroundColor: "var(--card)" }}
          >
            <h2 className="text-base font-extrabold mb-4" style={{ color: "var(--text)" }}>
            What Families Say
          </h2>
            {/* Quote mark + text side by side */}
            <div className="flex items-start gap-2">
              <div
                className="text-4xl font-serif leading-none select-none flex-shrink-0 mt-[-4px]"
                style={{ color: "#198754" }}
              >
                ❝
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                {testimonials[active].quote}
              </p>
            </div>

            <div className="flex items-center gap-3 mt-4">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden bg-emerald-100 flex-shrink-0 relative">
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector(".fallback-initial")) {
                      const div = document.createElement("div");
                      div.className =
                        "fallback-initial absolute inset-0 flex items-center justify-center text-emerald-700 font-bold text-sm";
                      div.textContent = testimonials[active].name.charAt(0);
                      parent.appendChild(div);
                    }
                  }}
                />
              </div>

              {/* Name + role */}
              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                  {testimonials[active].name}
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {testimonials[active].role}
                </p>
              </div>

              {/* 4 dots — right of profile */}
              <div className="flex gap-1.5 items-center">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i % testimonials.length)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? "20px" : "8px",
                      height: "8px",
                      backgroundColor: i === active ? "#198754" : "#d1d5db",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── STAY CONNECTED ── */}
        <div className="flex flex-col justify-center mt-4">
          <div
            className="rounded-2xl p-5 relative overflow-hidden flex gap-3 items-start"
            style={{ backgroundColor: "#E8F2EA" }}
          >
            {/* Left content */}
            <div className="flex-1 min-w-0 relative z-10">
              <h3 className="font-extrabold text-sm mb-1.5" style={{ color: "#111827" }}>
                Stay Connected
              </h3>
              <p className="text-xs leading-relaxed mb-3" style={{ color: "#4b5563" }}>
                Subscribe to get updates on new programs, resources and special offers.
              </p>

              {/* Joined email + button */}
              <div className="flex rounded-lg overflow-hidden border border-emerald-300 bg-white">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 px-3 py-2 text-xs outline-none bg-transparent text-gray-800 placeholder-gray-400"
                />
                <button className="px-3 py-2 bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors whitespace-nowrap flex-shrink-0">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Right — plant image placeholder */}
            <div className="flex-shrink-0 w-14 relative self-stretch">
              <img
                src="/Images/plant-decor.jpg"
                alt="Decorative plant"
                className="absolute bottom-0 right-0 h-20 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML =
                      '<div class="absolute bottom-0 right-0 text-4xl select-none" style="opacity:0.55">🌿</div>';
                  }
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#063020] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="grid md:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center text-white text-sm">
                🌿
              </div>
              <div>
                <p className="font-bold text-sm">Family Center</p>
                <p className="text-[10px] text-gray-400">Together, We Grow</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              We are committed to supporting individuals and families through professional
              counseling and educational programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              {["Home", "Programs", "Counseling", "Resources", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Programs</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              {["Parenting Program", "Marriage & Relationships", "Addiction Recovery"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Support</h4>
            <ul className="space-y-2 text-gray-400 text-xs">
              {["FAQs", "Privacy Policy", "Terms of Service"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            {/* Social */}
            <div className="mt-5">
              <p className="font-semibold text-sm mb-2">Connect With Us</p>
              <div className="flex gap-2">
                {[
                  { label: "f", title: "Facebook" },
                  { label: "ig", title: "Instagram" },
                  { label: "yt", title: "YouTube" },
                  { label: "in", title: "LinkedIn" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    title={s.title}
                    className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-emerald-500 hover:text-emerald-400 transition-colors text-[10px] font-bold uppercase"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-5 text-center text-gray-500 text-xs">
          © 2024 Family Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT PAGE ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  return (
    <>
      <Navbar dark={dark} toggleDark={toggleDark} />
      <Hero />
      <StatsBar />
      <ProgramsAndCounseling />
      <BottomSections />
      <Footer />
    </>
  );
}