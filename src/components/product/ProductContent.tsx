"use client";

import { useEffect } from "react";

const SECTIONS = [
  "General Info",
  "Meeting Point",
  "You will see",
  "You will learn",
];

interface ProductContentProps {
  setActiveTab: (tab: string) => void;
}

export default function ProductContent({ setActiveTab }: ProductContentProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        console.log(visible);
        if (visible) setActiveTab(visible.target.id);
      },
      {
        rootMargin: "-50% 0px -50% 0px", // trigger when center is in view
        threshold: 0.1,
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white rounded-2xl my-2">
      <div className="space-y-10 pt-4">
        {SECTIONS.map((id) => (
          <section id={id} key={id} className="min-h-96 p-4">
            <h2 className="text-xl font-bold capitalize">{id}</h2>
            <p>Content for {id}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
