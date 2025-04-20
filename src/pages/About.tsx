
import React from "react";
import { Info, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] px-6 py-12 md:py-24 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#05dac0]">About Unity Verse</h1>
      <div className="space-y-8 text-lg leading-relaxed text-gray-300">

        <section className="flex items-start space-x-4">
          <Info className="text-[#05dac0] flex-shrink-0" size={32} />
          <p>
            Unity Verse is a FiveM Roleplay server that offers a unique and immersive
            experience with custom scripts and an active community.
          </p>
        </section>

        <section className="flex items-start space-x-4">
          <Star className="text-[#05dac0] flex-shrink-0" size={32} />
          <p>
            What makes us unique:
            <ul className="list-disc list-inside mt-2">
              <li>Custom scripts tailored for enhanced realism</li>
              <li>Dedicated, active staff ensuring smooth gameplay</li>
              <li>Ongoing storylines and player-driven narratives</li>
              <li>Friendly and respectful RP environment</li>
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
