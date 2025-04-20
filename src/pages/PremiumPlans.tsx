
import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic access to the server",
      "Standard RP features",
      "Access to community events",
    ],
  },
  {
    title: "Supporter",
    price: "$5 / month",
    features: [
      "Priority queue access",
      "Exclusive in-game items",
      "Special Discord role",
      "Monthly supporter-only events",
    ],
  },
  {
    title: "VIP",
    price: "$15 / month",
    features: [
      "All Supporter perks",
      "Custom vehicle license plates",
      "Access to VIP-only areas",
      "Early access to new content",
    ],
  },
];

const PremiumPlans = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] px-6 py-12 md:py-24 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-[#05dac0] mb-12 text-center">Premium Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map(({ title, price, features }) => (
          <div
            key={title}
            className="bg-[#1e1e1e] border border-[#05dac0] rounded-lg p-8 flex flex-col"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#05dac0]">{title}</h2>
            <p className="text-xl font-bold mb-6">{price}</p>
            <ul className="mb-8 space-y-3 flex-1">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center text-gray-300 hover:text-[#05dac0] transition-colors duration-300"
                >
                  <Check className="text-[#05dac0] mr-2" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-auto bg-[#05dac0] hover:bg-[#30e0c3] text-[#121212] font-semibold py-3 rounded transition-colors duration-300"
              onClick={() => alert("Payment integration coming soon!")}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumPlans;
