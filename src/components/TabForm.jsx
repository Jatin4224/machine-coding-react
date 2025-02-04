import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            className={`heading ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
            key={index}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent />
      </div>
    </div>
  );
};

export default TabForm;
