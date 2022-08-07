import React, { useState } from "react";

export const HomePageTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const getActiveTab = () => {
    switch (activeTab) {
      case "tab1":
        return "Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.";

      case "tab2":
        return "Optimism doesn’t mean that you are blind to the reality of the situation. It means that you remain motivated to seek a solution to whatever problems arise.";
      default:
        return "";
    }
  };

  return (
    <section className="home-page-tabs px-2 pt-6">
      <div className="tabs-list">
        <ul className="is-flex pl-4">
          <li
            className={activeTab === "tab1" ? "activeTab" : ""}
            onClick={handleTab1}
          >
            <p className="is-size-4 is-size-6-mobile">Stay hungry</p>
          </li>
          <li
            className={activeTab === "tab2" ? "activeTab" : ""}
            onClick={handleTab2}
          >
            <p className="is-size-4 is-size-6-mobile">Stay foolish</p>
          </li>
        </ul>
      </div>
      <div className="tabs-content py-6 px-4">
        <p>{getActiveTab()}</p>
      </div>
    </section>
  );
};
