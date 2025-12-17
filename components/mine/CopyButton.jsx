'use client'

import { useState } from "react";



export default function CopyButton() {
  const [text, setText] = useState("Copy");
  const email = "contact@yazdantech.com"; 

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setText("Copied");
      setTimeout(() => setText("Copy"), 2000);
    } catch (e) {
      console.error("Copy failed:", e);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="button p-2 text-(--theme) border border-(--theme) bg-[#000000] transition-all ease duration-500 hover:text-white hover:shadow-(--shadow-2) hover:bg-transparent w-20 text-center m-[0_auto] cursor-pointer rounded-2xl h-min"
    >
      {text}
    </div>
  );
}
