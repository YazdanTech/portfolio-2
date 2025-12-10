'use client';

import { useState } from 'react';

export default function ContactTabs() {
  const [error, setError] = useState("");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSending, setIsSending] = useState(false);

  const RECEIVER_EMAIL = 'your@email.com';

  function validate(fields) {
    setError("");

    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setError("All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fields.email)) {
      setError("Invalid email.");
      return false;
    }

    return true;
  }

  function handleSendWhatsApp(e) {
    e.preventDefault();
    const fields = { name, email, message };
    if (!validate(fields)) return;

    setIsSending(true);

    const body = `Hi, my name is ${name} (${email}).\n\n${message.trim()}`;
    const waUrl = "https://wa.me/?text=" + encodeURIComponent(body);

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsSending(false);
  }

  function handleSendEmail(e) {
    e.preventDefault();
    const fields = { name, email, message };
    if (!validate(fields)) return;

    setIsSending(true);

    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message.trim()}`;

    const mailto =
      `mailto:${encodeURIComponent(RECEIVER_EMAIL)}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(mailto, '_blank', 'noopener,noreferrer');
    setIsSending(false);
  }

  return (
    <div className="flex justify-center relative contact">
      <div className='relative bg-black p-5 my-20 pt-20 lg:w-[60%] w-[90%] shiny-border'>

        <h1 className='gradient-text text-4xl my-20'>
          Contact Me, let's talk.
        </h1>

        <form>

          <div>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label>Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>

          <div className="w-full my-10 flex flex-col gap-5 justify-center">

            <button
              type="button"
              id='btn'
              disabled={isSending}
              onClick={handleSendWhatsApp}
            >
              {isSending ? 'Sending…' : 'Send via WhatsApp'}
            </button>

            <button
              type="button"
              id='btn'
              disabled={isSending}
              onClick={handleSendEmail}
            >
              {isSending ? 'Sending…' : 'Send via Email'}
            </button>

          </div>

        </form>

        {error && <div className="error-box">{error}</div>}
      </div>
    </div>
  );
}
