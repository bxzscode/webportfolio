'use client';

import { useState } from 'react';

import { profile } from '@/data/profile';
import { cx } from '@/lib/cx';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
};

export function ContactForm() {
  const { form } = profile.contact;
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const hasErrors = Object.keys(errors).length > 0;

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name.trim()) {
      nextErrors.name = form.errors.nameRequired;
    }
    if (!values.email.trim()) {
      nextErrors.email = form.errors.emailRequired;
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = form.errors.emailInvalid;
    }
    if (!values.message.trim()) {
      nextErrors.message = form.errors.messageRequired;
    } else if (values.message.trim().length < 10) {
      nextErrors.message = form.errors.messageMin;
    }

    return nextErrors;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    if (status === 'success') {
      setStatus('idle');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus('sending');
    window.setTimeout(() => {
      setStatus('success');
      setValues(initialState);
    }, 900);
  };

  return (
    <form className="card space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="name">
          {form.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder={form.namePlaceholder}
          className={cx(
            'w-full rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-slate-800/70 dark:bg-slate-900/80',
            errors.name && 'border-rose-400 focus:border-rose-400',
          )}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? (
          <p className="text-xs text-rose-400">{errors.name}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="email">
          {form.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder={form.emailPlaceholder}
          className={cx(
            'w-full rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-slate-800/70 dark:bg-slate-900/80',
            errors.email && 'border-rose-400 focus:border-rose-400',
          )}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? (
          <p className="text-xs text-rose-400">{errors.email}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="message">
          {form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder={form.messagePlaceholder}
          className={cx(
            'w-full resize-none rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-slate-800/70 dark:bg-slate-900/80',
            errors.message && 'border-rose-400 focus:border-rose-400',
          )}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p className="text-xs text-rose-400">{errors.message}</p>
        ) : null}
      </div>
      {status === 'success' ? (
        <div
          className="rounded-2xl border border-emerald-200/70 bg-emerald-50/80 p-4 text-sm text-emerald-900 dark:border-emerald-700/70 dark:bg-emerald-900/30 dark:text-emerald-100"
          role="status"
        >
          <p className="font-medium">{form.successTitle}</p>
          <p className="mt-1">{form.successText}</p>
        </div>
      ) : null}
      {hasErrors && status !== 'success' ? (
        <p className="text-xs text-rose-400">{form.errorTitle}</p>
      ) : null}
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? form.sendingLabel : form.submitLabel}
      </button>
    </form>
  );
}
