import { AlertTriangle, Database, RefreshCw } from 'lucide-react';

export function PageLoader() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-brand-border" />
        <div className="absolute inset-0 rounded-full border-2 border-t-brand-cyan animate-spin text-glow-cyan" />
      </div>
      <p className="font-mono text-xs text-brand-cyan tracking-widest uppercase animate-pulse">
        Initializing System...
      </p>
    </div>
  );
}

export function LoadingSkeleton() {
  return (
    <div className="w-full py-12 flex flex-col gap-6 animate-pulse">
      <div className="h-10 bg-brand-bg-card-hover border border-brand-border/40 rounded-lg w-1/4" />
      <div className="h-4 bg-brand-bg-card-hover border border-brand-border/40 rounded-lg w-1/2" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-brand-bg-card border border-brand-border/40 rounded-xl p-6 flex flex-col gap-4">
            <div className="h-6 bg-brand-bg-card-hover rounded-lg w-2/3" />
            <div className="h-4 bg-brand-bg-card-hover rounded-lg w-full" />
            <div className="h-4 bg-brand-bg-card-hover rounded-lg w-5/6" />
            <div className="flex gap-2 mt-4">
              <div className="h-6 bg-brand-bg-card-hover rounded w-16" />
              <div className="h-6 bg-brand-bg-card-hover rounded w-16" />
            </div>
            <div className="h-8 bg-brand-bg-card-hover rounded-lg w-1/3 mt-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

interface EmptyStateProps {
  message?: string;
  title?: string;
}

export function EmptyState({ title = 'No Records Found', message = 'The requested directory is empty.' }: EmptyStateProps) {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center text-center border border-dashed border-brand-border rounded-2xl bg-brand-bg-card/30">
      <Database size={40} className="text-brand-text-secondary/50 mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-brand-text-secondary max-w-sm text-sm">{message}</p>
    </div>
  );
}

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = 'System Error',
  message = 'Failed to establish connection to database nodes.',
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center text-center border border-brand-purple/30 rounded-2xl bg-brand-bg-card/40 neon-glow-purple">
      <AlertTriangle size={40} className="text-brand-purple mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-brand-text-secondary max-w-sm text-sm mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-bg-card border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all font-semibold text-sm cursor-pointer"
        >
          <RefreshCw size={16} /> Re-Initialize Protocol
        </button>
      )}
    </div>
  );
}
