import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setValidationError('ALL PROTOCOL PAYLOAD FIELDS MUST BE COMPLETED.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setValidationError('INVALID ENDPOINT (EMAIL) FORMAT ENCOUNTERED.');
      return;
    }

    setStatus('submitting');

    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 md:p-8 rounded-xl bg-brand-bg-card border border-brand-border/60 flex flex-col gap-6"
    >
      {validationError && (
        <div className="flex items-center gap-2 p-3 rounded bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs">
          <AlertCircle size={14} className="shrink-0" />
          {validationError}
        </div>
      )}

      {status === 'success' && (
        <div className="flex items-center gap-2 p-3 rounded bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald font-mono text-xs">
          <CheckCircle size={14} className="shrink-0" />
          TRANSMISSION SUCCESSFUL. MESSAGE DELIVERED.
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs">
          <AlertCircle size={14} className="shrink-0" />
          TRANSMISSION FAILED. CORE NETWORK EXCEPTION.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-xs font-semibold tracking-wider text-brand-text-secondary">
            IDENTIFIER (NAME)
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            disabled={status === 'submitting'}
            className="w-full bg-brand-bg-card-hover border border-brand-border hover:border-brand-text-secondary/50 focus:border-brand-cyan focus:outline-none focus:neon-glow-cyan rounded-lg px-4 py-3 text-sm text-white font-mono placeholder-brand-text-secondary/30 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-xs font-semibold tracking-wider text-brand-text-secondary">
            ENDPOINT (EMAIL)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@domain.com"
            disabled={status === 'submitting'}
            className="w-full bg-brand-bg-card-hover border border-brand-border hover:border-brand-text-secondary/50 focus:border-brand-cyan focus:outline-none focus:neon-glow-cyan rounded-lg px-4 py-3 text-sm text-white font-mono placeholder-brand-text-secondary/30 transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="font-mono text-xs font-semibold tracking-wider text-brand-text-secondary">
          HEADER (SUBJECT)
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Proposal"
          disabled={status === 'submitting'}
          className="w-full bg-brand-bg-card-hover border border-brand-border hover:border-brand-text-secondary/50 focus:border-brand-cyan focus:outline-none focus:neon-glow-cyan rounded-lg px-4 py-3 text-sm text-white font-mono placeholder-brand-text-secondary/30 transition-all"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-xs font-semibold tracking-wider text-brand-text-secondary">
          PAYLOAD (MESSAGE)
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe the technical challenge..."
          disabled={status === 'submitting'}
          className="w-full bg-brand-bg-card-hover border border-brand-border hover:border-brand-text-secondary/50 focus:border-brand-cyan focus:outline-none focus:neon-glow-cyan rounded-lg px-4 py-3 text-sm text-white font-mono placeholder-brand-text-secondary/30 resize-none transition-all"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-border/30">
        <div className="flex items-center gap-2 text-xs font-mono text-brand-emerald">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse text-glow-emerald" />
          AI Engine Active
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-blue hover:bg-brand-cyan text-white hover:text-brand-bg transition-all font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] disabled:opacity-50"
        >
          {status === 'submitting' ? (
            <>
              Transmitting...
              <RefreshCw size={16} className="animate-spin animate-spin-slow" />
            </>
          ) : (
            <>
              Transmit Message
              <Send size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
