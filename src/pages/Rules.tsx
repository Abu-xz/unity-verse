
import React, { useState } from "react";
import { Search } from "lucide-react";

const rulesList = [
  { id: 1, text: "Respect all players and staff." },
  { id: 2, text: "No cheating or exploiting." },
  { id: 3, text: "Stay in character during RP scenarios." },
  { id: 4, text: "Do not abuse bugs, report them instead." },
  { id: 5, text: "Follow the instructions of staff members." },
  { id: 6, text: "No harassment or hate speech." },
  { id: 7, text: "Use appropriate language; no excessive cursing." },
  { id: 8, text: "No random deathmatch (RDM) or vehicle deathmatch (VDM)." },
];

const Rules = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRules = rulesList.filter((rule) =>
    rule.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] px-6 py-12 md:py-24 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-[#05dac0] mb-8 text-center">Server Rules</h1>
      <div className="mb-8 max-w-md mx-auto relative">
        <Search className="absolute top-3 left-3 text-[#05dac0]" size={20} />
        <input
          type="text"
          placeholder="Search rules..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-md bg-[#1e1e1e] border border-[#05dac0] text-[#e0e0e0] placeholder-[#05dac0] focus:outline-none focus:ring-2 focus:ring-[#05dac0]"
        />
      </div>
      <ol className="list-decimal list-inside space-y-4 text-lg leading-relaxed max-w-3xl mx-auto">
        {filteredRules.length > 0 ? (
          filteredRules.map((rule) => (
            <li key={rule.id} className="flex items-center space-x-3">
              <span className="text-[#05dac0]">•</span>
              <span>{rule.text}</span>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-400">No rules matched your search.</p>
        )}
      </ol>
    </div>
  );
};

export default Rules;
