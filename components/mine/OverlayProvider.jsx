'use client';

import { createContext, useContext, useRef, useState, useEffect } from 'react';

const OverlayContext = createContext(null);

export function OverlayProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [text, setText] = useState('');
  const timers = useRef([]);

  function clearTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  function showOverlay({ text = '', scrollTo = null }) {
    clearTimers();

    // scroll first
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      setTimeout(() => {
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        
      }, 1000);
    }

    setText(text);
    setVisible(true);

    // fade in
    timers.current.push(
      setTimeout(() => setActive(true), 20)
    );

    // stay visible 1s, then fade out
    timers.current.push(
      setTimeout(() => setActive(false), 2020)
    );

    // remove overlay
    timers.current.push(
      setTimeout(() => {
        setVisible(false);
        setText('');
      }, 3020)
    );
  }

  useEffect(() => {
    return clearTimers;
  }, []);

  return (
    <OverlayContext.Provider value={{ showOverlay }}>
      {children}

      {visible && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'black',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 1000ms ease',
            opacity: active ? 1 : 0,
            pointerEvents: active ? 'auto' : 'none'
          }}
        >
          <h2 className='gradient-text'
            style={{
              color: 'white',
              fontSize: '2rem',
              fontWeight: 300,
              textAlign: 'center'
            }}
          >
            {text}
          </h2>
        </div>
      )}
    </OverlayContext.Provider>
  );
}

export function useOverlay() {
  const ctx = useContext(OverlayContext);
  if (!ctx) {
    throw new Error('useOverlay must be used inside OverlayProvider');
  }
  return ctx;
}
