'use client';

import { useState, useEffect, useRef } from 'react';

export default function ContactTabs({ initialMessage = "" }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSending, setIsSending] = useState(false);

  // overlay state
  const [overlayVisible, setOverlayVisible] = useState(false); // whether overlay is rendered
  const [overlayActive, setOverlayActive] = useState(false);   // controls opacity (true => opacity 1)
  const timersRef = useRef([]);

  useEffect(() => {
    // update textarea when parent sends a new initialMessage
    if (initialMessage && initialMessage !== message) {
      setMessage(initialMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialMessage]);

  useEffect(() => {
    // cleanup timers on unmount
    return () => {
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
    };
  }, []);

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

    // WhatsApp expects the number without '+' or non-digits
    const myNumber = "989384272106";
    const body = `Hi, my name is ${name} (${email}).\n\n${message}`;
    const url = `https://wa.me/${myNumber.replace(/\D/g, '')}?text=${encodeURIComponent(body)}`;

    window.open(url, "_blank");
  }

  // overlay sequence:
  // fade in (1s) -> stay visible (1s) -> fade out (1s)
  function triggerThankYouOverlay() {
    // clear any existing timers
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];

    setOverlayVisible(true);                   // render overlay (initially opacity 0)
    // small delay so browser registers initial state, then activate transition
    const startTimer = setTimeout(() => setOverlayActive(true), 20); // start fade-in -> opacity: 1 (1s)
    timersRef.current.push(startTimer);

    // after fade-in (1000ms) + hold (1000ms) => start fade-out
    const startFadeOut = setTimeout(() => setOverlayActive(false), 1020 + 1000); // ~2.02s
    timersRef.current.push(startFadeOut);

    // after fade-out (1000ms) hide overlay
    const hideTimer = setTimeout(() => {
      setOverlayVisible(false);
      setOverlayActive(false);
    }, 1020 + 1000 + 1000); // ~3.02s
    timersRef.current.push(hideTimer);
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

      // show the overlay instead of alert
      triggerThankYouOverlay();

      // optionally clear the local message field so textarea empties
      setMessage("");
    } catch (err) {
      setError("Failed to send email. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <div className="flex justify-center" id="contact">
        <div className="bg-black p-5 my-20 w-[90%] lg:w-[60%] shiny-border">
          <h1 className="gradient-text text-4xl my-10">Contact Me</h1>

          <div>
            <label>Name</label>
            <input placeholder="Yazdan Codes" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label>Email</label>
            <input placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
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

          <div className="flex gap-5 my-10 justify-center flex-wrap">
            <button type="button" id="btn" disabled={isSending} onClick={sendWhatsApp}>
              Send via WhatsApp
            </button>

            <button  className={`${isSending ? "sending": ''}`} type="button" id="btn" disabled={isSending} onClick={sendEmail}>
              {isSending ? "Sending Email..": 'Send Email'}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {overlayVisible && (
        <div
          // full-screen overlay
          aria-hidden={!overlayActive}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'black',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // transition for fade in/out
            transition: 'opacity 1000ms ease',
            opacity: overlayActive ? 1 : 0,
            pointerEvents: overlayActive ? 'auto' : 'none', // block interactions while visible
          }}
        >
          <div style={{ color: 'white', textAlign: 'center', padding: '1rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 300 }}>Thanks for contacting me!</h2>
          </div>
        </div>
      )}
    </>
  );
}
