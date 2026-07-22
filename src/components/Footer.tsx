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
  logoText = 'DevEngine AI',
  socialLinks = {
    github: 'https://github.com/soressa-alemayehu',
    linkedin: 'https://linkedin.com/in/soressa-alemayehu',
    twitter: 'https://twitter.com/soressa-alemayehu',
  },
}: FooterProps) {
  return (
    <footer className="w-full border-t border-brand-border/40 bg-brand-bg py-16 text-sm text-brand-text-secondary mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left Column - Branding */}
        <div className="md:col-span-8 flex flex-col gap-4">
          <Link to="/" className="text-lg font-black tracking-tight text-white hover:opacity-90">
            {logoText}
          </Link>
          <p className="max-w-md text-brand-text-secondary leading-relaxed">
            Building the intelligent infrastructure of the next digital era. Engineering precision meets AI innovation to create robust, scalable applications.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <p className="text-xs text-brand-text-secondary/70">
              © {new Date().getFullYear()} {logoText}. Built for the future.
            </p>
            <div className="flex items-center gap-3 text-brand-text-secondary/50">
              <Terminal size={14} className="hover:text-brand-cyan transition-colors cursor-pointer" />
              <Box size={14} className="hover:text-brand-cyan transition-colors cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Column - Socials */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="font-mono text-xs uppercase tracking-wider text-white">Navigation</h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-cyan transition-colors flex items-center gap-2 w-fit"
              >
                <GithubIcon size={16} /> GitHub
              </a>
            </li>
            <li>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-cyan transition-colors flex items-center gap-2 w-fit"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-cyan transition-colors flex items-center gap-2 w-fit"
              >
                <TwitterIcon size={16} /> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
