'use client'

import { useRef, useEffect, useState } from 'react';

export default function CurvedLoop({
  items = [], // [{ label: "Next.js", icon: "/path.svg" }, ...]
  speed = 1.5,
  curveAmount = 20, // small vertical curve
  direction = 'left',
  interactive = true,
  className = ''
}) {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const velRef = useRef(0);
  const dirRef = useRef(direction);
  const [offset, setOffset] = useState(0);

  const itemSpacing = 200; // space between items

  const update = () => {
    if (!containerRef.current) return;
    let delta = dirRef.current === 'right' ? speed : -speed;

    if (!dragRef.current) {
      velRef.current = delta;
    }

    let newOffset = offset + velRef.current;
    const totalWidth = items.length * itemSpacing;
    if (newOffset < -totalWidth) newOffset += totalWidth;
    if (newOffset > 0) newOffset -= totalWidth;

    setOffset(newOffset);

    frameRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    frameRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameRef.current);
  }, [offset]);

  const onPointerDown = (e) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    e.target.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!interactive || !dragRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;
    dirRef.current = dx > 0 ? 'right' : 'left';
  };

  const onPointerUp = () => {
    if (!interactive) return;
    dragRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-40 overflow-hidden flex items-center justify-center ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {items.map((item, i) => {
        const baseX = i * itemSpacing + offset;
        const y = Math.sin((baseX / (items.length * itemSpacing)) * Math.PI) * curveAmount;

        return (
          <div
            key={i}
            className="absolute flex items-center gap-4 select-none"
            style={{
              transform: `translate(${baseX}px, ${y}px)`,
              transition: dragRef.current ? 'none' : 'transform 0.1s alternate',
              fontSize: '1.5rem', // bigger text
            }}
          >
            {item.icon && <img src={item.icon} alt={item.label} className="w-8 h-8" />}
            <span className="text-white font-thin">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
