
import React, { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const bgImage =
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80";

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0]">
      <div
        className="relative h-screen flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <h1 className="relative text-5xl md:text-7xl font-extrabold text-[#05dac0] drop-shadow-lg z-10">
          Unity Verse
        </h1>
        <p className="relative mt-4 max-w-3xl text-gray-300 z-10 text-lg md:text-xl">
          Immerse yourself in the ultimate FiveM roleplay experience.
        </p>
        <div className="relative mt-8 flex space-x-6 z-10">
          <a
            href="fivem://connect/ip-of-your-server"
            className="inline-block bg-[#05dac0] text-[#121212] font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#30e0c3] transition-colors duration-300"
          >
            Connect
          </a>
          <button
            onClick={scrollToAbout}
            className="inline-block border-2 border-[#05dac0] text-[#05dac0] font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#05dac0] hover:text-[#121212] transition-colors duration-300"
          >
            Read More
          </button>
        </div>
      </div>

      <section ref={aboutRef} className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-[#05dac0] mb-6">About Unity Verse</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-6 animate-fade-in">
          Unity Verse is a cutting-edge FiveM Roleplay server dedicated to
          delivering a seamless, immersive, and highly interactive gaming
          environment. Join a community of passionate players, supported by
          custom scripts, active staff, and an evolving RP narrative.
        </p>
        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="https://discord.gg/link-to-your-discord"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#05dac0] rounded hover:bg-[#30e0c3] transition-colors duration-300 font-semibold"
          >
            Join Discord
          </a>
          <a
            href="https://forum-link-or-another"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-[#05dac0] text-[#05dac0] rounded hover:bg-[#05dac0] hover:text-[#121212] transition-colors duration-300 font-semibold"
          >
            Visit Forums
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
