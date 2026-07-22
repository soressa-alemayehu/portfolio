import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  logoText?: string;
}

export function Navbar({ logoText = 'SoreAlex' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 w-full z-40 bg-brand-bg/85 backdrop-blur-md border-b border-brand-border/40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-black tracking-tight text-white flex items-center gap-2 hover:opacity-90">
          {logoText}
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors hover:text-white py-2 ${
                  isActive ? 'text-white font-semibold' : 'text-brand-text-secondary'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-cyan"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Status Pill & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/contact"
            className="px-5 py-2 rounded-lg bg-brand-blue hover:bg-brand-cyan text-white hover:text-brand-bg transition-all font-semibold text-sm duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] cursor-pointer"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-text-secondary hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-brand-border bg-brand-bg-card px-6 py-6 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-semibold py-1 transition-colors ${
                      isActive ? 'text-brand-cyan' : 'text-brand-text-secondary hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="flex flex-col gap-4 pt-4 border-t border-brand-border">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-lg bg-brand-blue text-white hover:bg-brand-cyan hover:text-brand-bg transition-all font-semibold text-sm cursor-pointer shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
