'use client';

import { useState, useEffect } from 'react';

export default function ContactTabs({ initialMessage = "" }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSending, setIsSending] = useState(false);

  const RECEIVER_EMAIL = 'yazdanthedeveloper@email.com';

  useEffect(() => {
    // when parent passes a new initialMessage, update the textarea state
    if (initialMessage && initialMessage !== message) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  function validate() {
    setError('');
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email.");
      return false;
    }
    return true;
  }

  function sendWhatsApp() {
    if (!validate()) return;

    const myNumber = "+989384272106";
    const body = `Hi, my name is ${name} (${email}).\n\n${message}`;
    const url = `https://wa.me/${myNumber.replace(/\D/g, '')}?text=${encodeURIComponent(body)}`;

    window.open(url, "_blank");
  }

async function sendEmail() {
  if (!validate()) return;

  setIsSending(true);
  setError("");

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to send email");
    }

    alert("Email sent successfully!");
    setMessage("");
  } catch (err) {
    setError("Failed to send email. Please try again.");
  } finally {
    setIsSending(false);
  }
}

  return (
    <div className="flex justify-center" id="contact">
      <div className="bg-black p-5 my-20 w-[90%] lg:w-[60%] shiny-border">
        <h1 className="gradient-text text-4xl my-10">Contact Me</h1>

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
          <textarea
            type="text"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="main_message"
          />
        </div>

        {error && <div className="error-box">{error}</div>}

        <div className="flex gap-5 my-10 justify-center">
          <button type="button" id='btn' disabled={isSending} onClick={sendWhatsApp}>
            Send via WhatsApp
          </button>

          <button type="button" id='btn' disabled={isSending} onClick={sendEmail}>
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}
