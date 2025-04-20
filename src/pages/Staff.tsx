
import React from "react";

interface StaffMember {
  name: string;
  role: string;
  avatarUrl: string;
}

const staff: StaffMember[] = [
  {
    name: "Alex Johnson",
    role: "Server Admin",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Maria Gonzales",
    role: "Community Manager",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "David Lee",
    role: "Lead Developer",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Sophia Chen",
    role: "Event Coordinator",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
  },
];

const Staff = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] px-6 py-12 md:py-24 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-[#05dac0] text-center">Meet Our Staff</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {staff.map((member) => (
          <div
            key={member.name}
            className="bg-[#1e1e1e] rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:ring-4 hover:ring-[#05dac0]"
          >
            <img
              src={member.avatarUrl}
              alt={`${member.name} avatar`}
              className="w-24 h-24 rounded-full mb-4 ring-2 ring-[#05dac0]"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
