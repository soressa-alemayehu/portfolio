import { Link } from 'react-router-dom';
import { Terminal, Box } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

interface FooterProps {
  logoText?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export function Footer({
  logoText = 'SoreAlex',
  socialLinks = {
    github: 'https://github.com/soressa-alemayehu',
    linkedin: 'https://linkedin.com/in/soressa-alemayehu',
    twitter: 'https://twitter.com/soressa-alemayehu',
  },
}: FooterProps) {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="w-full border-t border-brand-border/40 bg-brand-bg py-14 text-sm text-brand-text-secondary mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left Column - Branding */}
        <div className="md:col-span-6 flex flex-col gap-4 text-left">
          <Link to="/" className="text-lg font-black tracking-tight text-white hover:opacity-90 font-display">
            {logoText}
          </Link>
          <p className="max-w-md text-brand-text-secondary leading-relaxed text-xs sm:text-sm">
            Building reliable web applications, clean architecture, and modern digital experiences.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <p className="text-xs text-brand-text-secondary/70">
              © {new Date().getFullYear()} {logoText}. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-brand-text-secondary/50">
              <Terminal size={14} className="hover:text-brand-cyan transition-colors cursor-pointer" />
              <Box size={14} className="hover:text-brand-cyan transition-colors cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Middle Column - Navigation Pages */}
        <div className="md:col-span-3 flex flex-col gap-3 text-left">
          <h4 className="font-mono text-xs uppercase tracking-wider text-white">Pages</h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="hover:text-brand-cyan transition-colors text-xs font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Social Links */}
        <div className="md:col-span-3 flex flex-col gap-3 text-left">
          <h4 className="font-mono text-xs uppercase tracking-wider text-white">Connect</h4>
          <ul className="flex flex-col gap-2.5 text-xs font-medium">
            {socialLinks.github && (
              <li>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-2 w-fit"
                >
                  <GithubIcon size={14} /> GitHub
                </a>
              </li>
            )}
            {socialLinks.linkedin && (
              <li>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-2 w-fit"
                >
                  <LinkedinIcon size={14} /> LinkedIn
                </a>
              </li>
            )}
            {socialLinks.twitter && (
              <li>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors flex items-center gap-2 w-fit"
                >
                  <TwitterIcon size={14} /> Twitter
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
