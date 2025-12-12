import type { Route } from "./+types/home";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chintu Mohandas | Home" },
    { name: "description", content: "Welcome to Chintu Mohandas's portfolio - Full-stack developer passionate about building great web experiences." },
  ];
}

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/chintu-mohandas-2026.pdf';
    link.as = 'document';
    document.head.appendChild(link);


    return () => {
      link.remove();
    };
  }, []);

  return (
    <div className="home-page page-enter">
      <div className="home-content">
        <img 
          src="/chintu-vector.png" 
          alt="Chintu Mohandas"
          className="home-portrait"
          fetchPriority="high"
        />
        <div className="home-text">
          <h1>Hello,</h1>
          <h1>I'm Chintu Mohandas</h1>
          <p>
            A passionate web engineer who loves crafting beautiful, 
            performant and cost efficient applications. I specialize in React, TypeScript, Node.js
            and modern web technologies.
          </p>
        </div>
      </div>
      
      {/* Hidden preload for PDF */}
      <iframe 
        src="/chintu-mohandas-2026.pdf" 
        className="preload-hidden"
        title="Resume preload"
        tabIndex={-1}
        aria-hidden="true"
      />
    </div>
  );
}
