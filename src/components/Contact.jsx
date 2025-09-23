'use client';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import AnchorHeading from '@/components/AnchorHeading';
import { Mail, Link2, Check, AlertCircle, Loader2 } from 'lucide-react';

const EMAIL = 'bhandarirajiv25@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/rajiv-bhandari25/';

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ID
    ? `https://formspree.io/${process.env.NEXT_PUBLIC_FORMSPREE_ID.startsWith('f/')
        ? process.env.NEXT_PUBLIC_FORMSPREE_ID
        : `f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`}`
    : null;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(null);
  const [msg, setMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', website: '' });

  const disabled = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email || '');
    return !form.name || !emailOk || !form.message || loading;
  }, [form, loading]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setMsg('');

    if (form.website) {
      setLoading(false);
      setOk(false);
      setMsg('Submission blocked (spam detected).');
      return;
    }

    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject || 'Portfolio contact',
            message: form.message,
          }),
        });
        if (!res.ok) throw new Error('Network error');
        setOk(true);
        setMsg('Thanks! Your message has been sent.');
        setForm({ name: '', email: '', subject: '', message: '', website: '' });
      } else {
        const subject = encodeURIComponent(form.subject || 'Portfolio contact');
        const body = encodeURIComponent(`Hi Rajiv,\n\n${form.message}\n\n— ${form.name}\n${form.email}`);
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
        setOk(true);
        setMsg('Opening your email app…');
      }
    } catch {
      setOk(false);
      setMsg('Sorry, something went wrong. Please try again or email me directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <AnchorHeading id="contact" level={2}>Contact</AnchorHeading>
      </motion.div>

      <div className="mt-6 grid lg:grid-cols-[1.1fr_.9fr] gap-6">
        <motion.form
          onSubmit={handleSubmit}
          className="card"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <label className="block">
              <span className="text-sm text-slate-600 dark:text-slate-300">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white/60 px-3 py-2 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-900/60"
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-600 dark:text-slate-300">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white/60 px-3 py-2 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-900/60"
              />
            </label>
          </div>

          <label className="block mt-3">
            <span className="text-sm text-slate-600 dark:text-slate-300">Subject (optional)</span>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white/60 px-3 py-2 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-900/60"
            />
          </label>

          <label className="block mt-3">
            <span className="text-sm text-slate-600 dark:text-slate-300">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              required
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white/60 px-3 py-2 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-900/60"
            />
          </label>

          {/* honeypot */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden"
            value={form.website} onChange={handleChange} />

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <motion.button
              type="submit"
              disabled={disabled}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary px-4 py-2 inline-flex items-center gap-2 disabled:opacity-60"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : null}
              {FORM_ENDPOINT ? 'Send message' : 'Send via email'}
            </motion.button>
            <span className="text-xs text-slate-500">
              {FORM_ENDPOINT ? 'Powered by Formspree.' : 'Tip: Set NEXT_PUBLIC_FORMSPREE_ID to enable direct form submission.'}
            </span>
          </div>

          {ok !== null && (
            <div
              role="status"
              className={`mt-3 flex items-center gap-2 rounded-md border px-3 py-2 text-sm ${
                ok
                  ? 'border-emerald-600/30 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300'
                  : 'border-rose-600/30 bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-300'
              }`}
            >
              {ok ? <Check size={16} /> : <AlertCircle size={16} />}
              <span>{msg}</span>
            </div>
          )}
        </motion.form>

        <motion.aside className="card" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="font-semibold text-brand-700">Prefer direct contact?</h3>

          <div className="mt-3 space-y-3">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 text-brand-700" size={18} />
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{EMAIL}</p>
                <div className="mt-1 flex gap-2">
                  <a className="btn btn-outline px-3 py-1.5 text-sm" href={`mailto:${EMAIL}`}>Email me</a>
                  <button onClick={copyEmail} className="btn btn-outline px-3 py-1.5 text-sm inline-flex items-center gap-1" type="button">
                    {copied ? <Check size={16} /> : <Link2 size={16} />} {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img src="/favicon.ico" alt="" className="mt-0.5 h-[18px] w-[18px] opacity-75 dark:opacity-90" />
              <div>
                <p className="text-sm">
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">
                    LinkedIn — Rajiv Bhandari
                  </a>
                </p>
                <p className="text-xs text-slate-500 mt-0.5">I usually reply within 24–48 hours.</p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-slate-200 dark:border-slate-800 p-3 text-sm text-slate-600 dark:text-slate-300">
            Open to <span className="font-semibold">Developer, Software Engineer</span>, <span className="font-semibold">IT Support</span>, and <span className="font-semibold">System Administration</span> roles.
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
