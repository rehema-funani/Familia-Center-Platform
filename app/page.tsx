"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ dark, toggleDark }: { dark: boolean; toggleDark: () => void }) {
  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 flex items-center justify-center">
            {/* SVG leaf/family icon */}
            <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
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
            <p className="font-bold text-sm leading-none" style={{ color: "var(--text)" }}>
              Family Center
            </p>
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
              Together, We Grow
            </p>
          </div>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {["Home", "Programs", "Counseling", "Resources", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="transition-colors hover:text-emerald-600"
              style={
                item === "Home"
                  ? {
                      color: "#198754",
                      borderBottom: "2px solid #198754",
                      paddingBottom: "2px",
                    }
                  : { color: "var(--text)" }
              }
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-lg border flex items-center justify-center text-base transition-colors"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            aria-label="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            className="hidden sm:block px-4 py-2 rounded-lg border text-sm font-medium transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            Login
          </button>
          <button className="px-4 py-2 rounded-lg bg-emerald-700 text-white text-sm font-medium hover:bg-emerald-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -left-24 top-10 w-64 h-64 rounded-full opacity-20"
        style={{ backgroundColor: "#d1fae5" }}
      />
      <div
        className="absolute left-10 bottom-10 w-32 h-32 rounded-full opacity-10"
        style={{ backgroundColor: "#a7f3d0" }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <div>
          <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-medium mb-5">
            Professional Guidance. Stronger Families.
          </span>

          <h1
            className="text-5xl xl:text-6xl font-extrabold leading-tight mb-5"
            style={{ color: "var(--text)" }}
          >
            Empowering Families.
            <br />
            <span className="text-emerald-600">Enriching Lives.</span>
          </h1>

          <p className="text-base mb-8 max-w-md" style={{ color: "var(--text-muted)" }}>
            Join our structured programs, live sessions, and private counseling designed to
            help you build healthier relationships and a better future.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition-colors">
              Explore Programs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-semibold transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Book Counseling
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["bg-orange-400", "bg-blue-400", "bg-pink-400"].map((c, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-white ${c} flex items-center justify-center text-white text-xs font-bold`}
                >
                  {["S", "J", "M"][i]}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                5000+ Families Trust Us
              </p>
              <div className="flex items-center gap-1">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-yellow-400 text-xs">
                    {s}
                  </span>
                ))}
                <span className="text-xs ml-1" style={{ color: "var(--text-muted)" }}>
                  4.9 (320+ Reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Hero image */}
        <div className="relative">
          <div className="rounded-[40px] overflow-hidden h-[460px] w-full bg-gray-200 relative">
            {/* Replace src with your local image path e.g. "/hero-family.jpg" */}
            <img
              src="/Images/premium_photo-1661660247608-236c8bafd3cb.avif"
              alt="Happy family"
              className="w-full h-full object-cover"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
                if (t.parentElement) {
                  t.parentElement.style.background =
                    "linear-gradient(135deg,#d1fae5 0%,#a7f3d0 50%,#6ee7b7 100%)";
                }
              }}
            />
            
          </div>

          {/* Live Sessions card */}
          <div
            className="absolute right-4 bottom-6 p-4 rounded-2xl shadow-xl w-44"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center mb-2">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.277A1 1 0 0121 8.677V15.32a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
            </div>
            <p className="font-bold text-sm" style={{ color: "var(--text)" }}>
              Live Sessions
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              Join expert-led live sessions from anywhere.
            </p>
            <button className="mt-2 w-7 h-7 rounded-full bg-emerald-700 flex items-center justify-center ml-auto">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
          className="rounded-[32px] p-8 md:p-10 -mt-16"
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
function BottomSections() {
  const steps: Step[] = [
    { icon: "📝", label: "Sign Up", desc: "Create your account in minutes." },
    { icon: "📚", label: "Choose Program", desc: "Select a program or book a session." },
    { icon: "🎥", label: "Join Sessions", desc: "Attend live sessions and participate." },
    { icon: "🌱", label: "Grow & Heal", desc: "Apply learnings and transform your life." },
  ];

  const [active, setActive] = useState(0);

  const testimonials = [
    {
      quote:
        "Family Center has been a blessing for our family. The sessions are life-changing!",
      name: "Sarah Johnson",
      role: "Program Participant",
      avatar: "S",
      avatarBg: "bg-orange-400",
    },
    {
      quote:
        "The counselors are incredibly professional and empathetic. Highly recommend!",
      name: "David Kimani",
      role: "Marriage Program",
      avatar: "D",
      avatarBg: "bg-blue-500",
    },
    {
      quote:
        "I finally found the support I needed. The anonymous sessions gave me confidence.",
      name: "Amina Wanjiru",
      role: "Anonymous Support User",
      avatar: "A",
      avatarBg: "bg-pink-500",
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1fr_340px] gap-8">
        {/* How It Works */}
        <div>
          <h2 className="text-2xl font-extrabold mb-8" style={{ color: "var(--text)" }}>
            How It Works
          </h2>
          <div className="flex items-start gap-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex-1 flex flex-col items-center text-center relative">
                {/* connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute top-5 left-[60%] w-[80%] h-px border-t-2 border-dashed border-emerald-300" />
                )}
                <div className="w-10 h-10 rounded-full bg-emerald-50 border-2 border-emerald-300 flex items-center justify-center text-lg z-10 relative">
                  {step.icon}
                </div>
                <p className="font-semibold text-xs mt-2" style={{ color: "var(--text)" }}>
                  {step.label}
                </p>
                <p className="text-[10px] mt-1 px-1" style={{ color: "var(--text-muted)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-2xl font-extrabold mb-6" style={{ color: "var(--text)" }}>
            What Families Say
          </h2>
          <div
            className="p-5 rounded-2xl border"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
          >
            <div className="text-4xl text-emerald-300 leading-none mb-3">"</div>
            <p className="text-sm" style={{ color: "var(--text)" }}>
              {testimonials[active].quote}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div
                className={`w-10 h-10 rounded-full ${testimonials[active].avatarBg} flex items-center justify-center text-white font-bold`}
              >
                {testimonials[active].avatar}
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                  {testimonials[active].name}
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {testimonials[active].role}
                </p>
              </div>
            </div>
          </div>
          {/* Dots */}
          <div className="flex gap-2 mt-3 justify-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === active ? "bg-emerald-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stay Connected */}
        <div
          className="rounded-2xl p-5 relative overflow-hidden"
          style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
        >
          {/* Decorative plant */}
          <div className="absolute right-4 top-4 text-5xl opacity-40 select-none">🌿</div>
          <h3 className="font-extrabold text-lg mb-2" style={{ color: "var(--text)" }}>
            Stay Connected
          </h3>
          <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
            Subscribe to get updates on new programs, resources and special offers.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-0 px-3 py-2 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg)",
                color: "var(--text)",
              }}
            />
            <button className="px-4 py-2 rounded-lg bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition-colors whitespace-nowrap">
              Subscribe
            </button>
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