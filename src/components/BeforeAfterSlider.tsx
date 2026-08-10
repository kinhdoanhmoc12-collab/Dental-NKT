"use client";

import React, { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";

interface BeforeAfterSliderProps {
  image: string;
  alt: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  image,
  alt,
  beforeLabel = "Before",
  afterLabel = "After"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const updateWidth = () => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl shadow-xl select-none cursor-ew-resize border border-slate-200/80 bg-slate-100"
      onMouseDown={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Right Half, scaled to 200% width, aligned right) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={image}
          alt={`After treatment - ${alt}`}
          className="absolute top-0 right-0 w-[200%] h-full max-w-none object-cover origin-top scale-[1.12]"
          style={{ right: 0 }}
          draggable={false}
        />
      </div>
      
      {/* After Label (Top Right) */}
      <span className="absolute top-3 right-3 bg-teal-brand text-[#0b1e2c] text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase shadow-sm z-30">
        {afterLabel}
      </span>

      {/* Before Image (Left Half, scaled to 200% width, aligned left, inside clipped container) */}
      <div 
        className="absolute inset-y-0 left-0 overflow-hidden z-10"
        style={{ width: `${sliderPosition}%` }}
      >
        <div style={{ width: containerWidth || "100%", height: "100%", position: "relative" }}>
          <img 
            src={image}
            alt={`Before treatment - ${alt}`}
            className="absolute top-0 left-0 w-[200%] h-full max-w-none object-cover origin-top scale-[1.12]"
            style={{ left: 0 }}
            draggable={false}
          />
        </div>
      </div>

      {/* Before Label (Top Left) */}
      <span className="absolute top-3 left-3 bg-[#0b1e2c]/85 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase shadow-sm z-30">
        {beforeLabel}
      </span>

      {/* Slider Bar & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-200">
          <div className="flex gap-1">
            <span className="w-0.5 h-3.5 bg-slate-400 rounded-full" />
            <span className="w-0.5 h-3.5 bg-slate-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
