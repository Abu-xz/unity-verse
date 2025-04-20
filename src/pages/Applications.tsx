
import React from "react";

const departments = [
  {
    name: "Law Enforcement (LEO)",
    description: "Apply to join our dedicated police force and uphold justice in Unity Verse.",
    formLink: "https://forms.gle/leo-application",
  },
  {
    name: "Emergency Medical Services (EMS)",
    description: "Join EMS to provide critical medical support to the community.",
    formLink: "https://forms.gle/ems-application",
  },
  {
    name: "Civilian",
    description: "Become a valued member of the civilian population with diverse roles and opportunities.",
    formLink: "https://forms.gle/civilian-application",
  },
];

const Applications = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] px-6 py-12 md:py-24 max-w-5xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-[#05dac0] text-center mb-8">Applications</h1>

      {departments.map(({ name, description, formLink }) => (
        <section
          key={name}
          className="bg-[#1e1e1e] rounded-lg p-8 md:p-12 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">{name}</h2>
          <p className="text-gray-300 mb-6">{description}</p>
          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#05dac0] text-[#121212] font-semibold px-6 py-3 rounded hover:bg-[#30e0c3] transition-colors duration-300"
          >
            Apply Now
          </a>
        </section>
      ))}
    </div>
  );
};

export default Applications;
