import React from "react";

const TabNavigation = ({ activeTab, setActiveTab }) => (
  <div className="mb-4">
    <ul className="flex border-b">
      {["book", "modify", "cancel", "all"].map((tab) => (
        <li key={tab} className={tab === "book" ? "-mb-px mr-1" : "mr-1"}>
          <button
            className={`bg-white inline-block py-2 px-4 font-semibold ${
              activeTab === tab
                ? "border-l border-t border-r rounded-t text-gray-700"
                : "text-gray-500 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "all"
              ? "All Appointments"
              : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default TabNavigation;
