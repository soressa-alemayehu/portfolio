import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 gap-6">
      <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple animate-pulse shadow-[0_0_20px_rgba(139,92,246,0.15)]">
        <ShieldAlert size={28} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white font-display">
          404: Node Missing
        </h1>
        <p className="text-brand-text-secondary text-sm max-w-sm leading-relaxed">
          The requested system node or route directory could not be resolved by the network cluster.
        </p>
      </div>
      <Link
        to="/"
        className="mt-4 px-5 py-3 rounded-lg bg-brand-blue hover:bg-brand-cyan text-white hover:text-brand-bg transition-all font-semibold text-sm flex items-center gap-2 cursor-pointer duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
      >
        <ArrowLeft size={16} /> Return to Home Sector
      </Link>
    </div>
  );
}
