"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const programLinks = [
  { label: "Undergraduate", href: "/programs/undergraduate" },
  { label: "Postgraduate", href: "/programs/postgraduate" },
];

const peopleLinks = [
  { label: "Faculty Members", href: "/people/faculty-members" },
  { label: "Office Staffs", href: "/people/office-staffs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isActive = (href: string) => href === "/" ? pathname === href : pathname.startsWith(href);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex min-h-[106px] w-[calc(100%-40px)] max-w-[1180px] items-center justify-between gap-6 max-[760px]:min-h-[90px] max-[430px]:w-[calc(100%-20px)] max-[430px]:gap-2">
        <Link className="flex items-center gap-4 max-[760px]:gap-2" href="/" aria-label="Department of Mathematics home">
          <Image src="/Kurigram_Government_College_logo.jpg" alt="Kurigram Government College logo" width={76} height={76} priority className="h-[76px] w-[76px] rounded-full object-contain max-[760px]:h-[58px] max-[760px]:w-[58px] max-[430px]:h-12 max-[430px]:w-12" />
          <span className="text-[clamp(1.45rem,3vw,2.25rem)] font-extrabold tracking-[-0.025em] text-[#164A7A] max-[760px]:text-[1.1rem] max-[430px]:text-[0.96rem] max-[430px]:leading-[1.15]">Department of Mathematics</span>
        </Link>
        <div className="flex shrink-0 items-center gap-3 whitespace-nowrap max-[760px]:gap-1 max-[430px]:gap-0.5">
          <Link className="site-auth-link rounded border border-transparent px-[17px] py-2 text-sm font-bold text-[#164A7A] transition hover:border-[#2E8B57] hover:text-[#2E8B57] max-[760px]:px-2 max-[760px]:py-1.5 max-[760px]:text-xs max-[430px]:px-1.5 max-[430px]:text-[0.68rem]" href="/login">Login</Link>
          <Link className="site-auth-button rounded bg-[#2E8B57] px-[17px] py-2 text-sm font-bold text-white transition hover:bg-[#164A7A] max-[760px]:px-2 max-[760px]:py-1.5 max-[760px]:text-xs max-[430px]:px-1.5 max-[430px]:text-[0.68rem]" href="/register">Register</Link>
        </div>
      </div>

      <nav className="site-navbar bg-[#164A7A] shadow-[0_3px_10px_rgb(22_74_122_/_15%)]" aria-label="Main navigation">
        <div className="mx-auto w-[calc(100%-40px)] max-w-[1180px] max-[760px]:w-[calc(100%-28px)] max-[430px]:w-[calc(100%-20px)]">
          <button className="site-mobile-menu hidden min-h-12 w-full items-center gap-2 border-0 bg-transparent p-0 text-left text-sm font-extrabold uppercase tracking-[0.04em] text-white max-[760px]:inline-flex" type="button" aria-expanded={mobileMenuOpen} aria-controls="main-navigation-links" onClick={() => setMobileMenuOpen((open) => !open)}>
            <span className="text-xl text-[#D9A441]" aria-hidden="true">☰</span> Menu
          </button>
          <div id="main-navigation-links" className={`hidden flex-col items-stretch pb-2 md:flex md:flex-row md:items-stretch md:justify-center md:pb-0 ${mobileMenuOpen ? "max-[760px]:flex" : "max-[760px]:hidden"}`}>
            <NavLink href="/" label="Home" active={isActive("/")} onNavigate={closeMobileMenu} />
            <NavLink href="/about-us" label="About Us" active={isActive("/about-us")} onNavigate={closeMobileMenu} />
            <DropdownMenu label="Programs" links={programLinks} active={isActive("/programs")} onNavigate={closeMobileMenu} />
            <DropdownMenu label="People" links={peopleLinks} active={isActive("/people")} onNavigate={closeMobileMenu} />
            <NavLink href="/notices" label="Notices" active={isActive("/notices")} onNavigate={closeMobileMenu} />
            <NavLink href="/alumni" label="Alumni" active={isActive("/alumni")} onNavigate={closeMobileMenu} />
            <NavLink href="/contact" label="Contact" active={isActive("/contact")} onNavigate={closeMobileMenu} />
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, label, active, onNavigate }: { href: string; label: string; active: boolean; onNavigate: () => void }) {
  return <Link className={`site-navbar-link relative inline-flex min-h-14 items-center px-5 text-sm font-extrabold uppercase tracking-[0.02em] text-white transition after:absolute after:bottom-0 after:left-5 after:right-5 after:h-[3px] after:bg-[#D9A441] after:transition-transform hover:bg-[#2E8B57] hover:text-white hover:after:scale-x-100 max-[760px]:min-h-[45px] max-[760px]:px-3 max-[760px]:after:left-3 max-[760px]:after:right-3 ${active ? "text-white after:scale-x-100" : "after:scale-x-0"}`} href={href} onClick={onNavigate}>{label}</Link>;
}

function DropdownMenu({ label, links, active, onNavigate }: { label: string; links: { label: string; href: string }[]; active: boolean; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);

  const handleNavigate = () => {
    setOpen(false);
    onNavigate();
  };

  return <div className="group relative">
    <button className={`site-navbar-dropdown-trigger relative inline-flex min-h-14 items-center gap-2 border-0 bg-transparent px-5 text-sm font-extrabold uppercase tracking-[0.02em] text-white transition after:absolute after:bottom-0 after:left-5 after:right-5 after:h-[3px] after:bg-[#D9A441] after:transition-transform hover:bg-[#2E8B57] hover:text-white hover:after:scale-x-100 max-[760px]:min-h-[45px] max-[760px]:w-full max-[760px]:justify-start max-[760px]:px-3 max-[760px]:after:left-3 max-[760px]:after:right-3 ${active ? "text-white after:scale-x-100" : "after:scale-x-0"}`} type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>{label} <span aria-hidden="true">▾</span></button>
    <div className={`site-navbar-dropdown-panel pointer-events-none absolute left-1/2 top-[calc(100%-1px)] z-50 min-w-[205px] -translate-x-1/2 translate-y-2 border-t-[3px] border-[#D9A441] bg-white p-2 text-[#263238] opacity-0 shadow-[0_10px_24px_rgb(38_50_56_/_18%)] transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 max-[760px]:static max-[760px]:min-w-0 max-[760px]:translate-x-0 max-[760px]:translate-y-0 max-[760px]:border-0 max-[760px]:bg-[#164A7A] max-[760px]:p-0 max-[760px]:pl-[18px] max-[760px]:shadow-none ${open ? "max-[760px]:block max-[760px]:pointer-events-auto max-[760px]:opacity-100" : "max-[760px]:hidden"}`}>
      {links.map((link) => <Link key={link.href} className="site-navbar-dropdown-link block px-[13px] py-[11px] text-sm font-bold normal-case text-[#263238] hover:bg-[#2E8B57] hover:text-white max-[760px]:text-white" href={link.href} onClick={handleNavigate}>{link.label}</Link>)}
    </div>
  </div>;
}
