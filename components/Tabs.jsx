'use client';

import { useState } from 'react';

export default function ContactTabs() {
  const [activeTab, setActiveTab] = useState('1');

  // WhatsApp form state
  const [waName, setWaName] = useState('');
  const [waEmail, setWaEmail] = useState('');
  const [waMessage, setWaMessage] = useState('');

  // Button active state

  const [btn, setBtn] = useState('1');

  // Email form state
  const [emName, setEmName] = useState('');
  const [emEmail, setEmEmail] = useState('');
  const [emMessage, setEmMessage] = useState('');

  // UI states for animation / disabled state
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Timing (milliseconds) — match these values to your CSS transition durations
  const transitionInMs = 300;
  const transitionOutMs = 250; // how long it takes to fade back

  // Replace this with your real target email address
  const RECEIVER_EMAIL = 'your@email.com';

  // Helper: show overlay, open link in new tab, hide overlay
  function performOpenWithFade(url) {
    if (isSending) return;
    setIsSending(true);
    setOverlayVisible(true);

    // Wait for overlay to finish fading in
    setTimeout(() => {
      // Open the link in new tab/window so current page remains to play fade-out
      window.open(url, '_blank', 'noopener,noreferrer');

      // Short delay so open happens, then fade out overlay and re-enable
      setTimeout(() => {
        setOverlayVisible(false);
        setIsSending(false);
      }, transitionOutMs);
    }, transitionInMs);
  }

  // WhatsApp handler
  function handleSendWhatsApp(e) {
    e?.preventDefault?.();

    // Basic validation
    if (!waMessage.trim()) {
      // handle error UI yourself; here we bail
      return;
    }

    // Build the message text
    const body = `Hi, my name is ${waName || 'Anonymous'} (${waEmail || 'no-email'}).\n\n${waMessage.trim()}`;

    // WhatsApp universal share link (opens chat selector)
    const waUrl = 'https://wa.me/?text=' + encodeURIComponent(body);

    performOpenWithFade(waUrl);
  }

  // Email handler (mailto)
  function handleSendEmail(e) {
    e?.preventDefault?.();

    if (!emMessage.trim() || !RECEIVER_EMAIL) {
      return;
    }

    const subject = `Contact from ${emName || 'Anonymous'}`;
    const body = `Name: ${emName || 'Anonymous'}\nEmail: ${emEmail || 'no-email'}\n\n${emMessage.trim()}`;

    // Build mailto link
    const mailto = `mailto:${encodeURIComponent(RECEIVER_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    performOpenWithFade(mailto);
  }

function switchTab(id) {
  if (activeTab === id) return; // no need to animate if same tab

  setOverlayVisible(true);

  setTimeout(() => {
    setActiveTab(id);
    setOverlayVisible(false);
  }, transitionInMs); // same fade timing
}


  return (
    <div className="flex justify-center relative">
      <div className='border relative border-blue-300 bg-black p-5 my-20 pt-20 lg:w-[60%] w-[90%] shiny-border '>
      {/* Tab buttons */}
      <div className='absolute top-0 left-0 right-0 flex text-center'>
        <button className="p-5 flex-1 border-t-0 border-l-0 border-r-black text-2xl text-(--theme) border border-(--subtle) cursor-pointer hover:bg-black hover:shadow-[0px_0px_100px] z-49 hover:z-50 ease duration-500" type="button" onClick={() => {
          switchTab('1');
          setButtonActive('1');
        }}>
          WhatsApp
        </button>
        <button className="p-5 flex-1 border-t-0 border-r-0 border-l-black text-2xl text-(--theme-2) border border-(--subtle) cursor-pointer hover:bg-black hover:shadow-[0px_0px_100px] z-49 hover:z-50 ease duration-500" type="button" onClick={() => {
          switchTab('2');
          setButtonActive('2');
        }}>
          Email
        </button>
      </div>

      <div className={`overlay ${overlayVisible ? 'visible' : ''}`}></div>

      {/* Content container */}
      <div className="tab-content">
        {/* WhatsApp form (shown only when activeTab === '1') */}
        {activeTab === '1' && (
          <form onSubmit={handleSendWhatsApp} aria-hidden={activeTab !== '1'}>

            <h1 className='gradient-text text-4xl my-20'>Contact Me, lets have a chat, maybe i can get you going a bit further..</h1>

            <div>
              <label>
                Name
              </label>
                <input value={waName} onChange={(e) => setWaName(e.target.value)} />
            </div>

            <div>
              <label>
                Email
              </label>
                <input value={waEmail} onChange={(e) => setWaEmail(e.target.value)} />
            </div>

            <div>
              <label>
                Message
              </label>
                <textarea value={waMessage} onChange={(e) => setWaMessage(e.target.value)} />
            </div>

            <div>
              <button id="whatsapp-btn" type="submit" disabled={isSending}>
                {isSending ? 'Sending…' : 'Send via WhatsApp'}
              </button>
            </div>
          </form>
        )}

        {/* Email form (shown only when activeTab === '2') */}
        {activeTab === '2' && (
          <form onSubmit={handleSendEmail} aria-hidden={activeTab !== '2'}>

            <h1 className='gradient-text text-4xl my-10'>Contact Me, lets have a chat, maybe i can get you going a bit further..</h1>

            <div>
              <label>
                Name
              </label>
                <input value={emName} onChange={(e) => setEmName(e.target.value)} />
            </div>

            <div>
              <label>
                Your email
              </label>
                <input value={emEmail} onChange={(e) => setEmEmail(e.target.value)} />
            </div>

            <div>
              <label>
                Message
              </label>
                <textarea value={emMessage} onChange={(e) => setEmMessage(e.target.value)} />
            </div>

            <div>
              <button type="submit" disabled={isSending}>
                {isSending ? 'Sending…' : 'Send Email'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  </div>


  );
}
