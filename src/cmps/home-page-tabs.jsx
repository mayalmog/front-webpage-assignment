import React, { useState } from "react";

export const HomePageTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };

  return (
    <section className="home-page-tabs px-2">
      <div className="tabs-list">
        <ul className="is-flex pl-4">
          <li
            className={activeTab === "tab1" ? "activeTab" : ""}
            onClick={handleTab1}
          >
            <p className="is-size-4">Stay hungry</p>
          </li>
          <li
            className={activeTab === "tab2" ? "activeTab" : ""}
            onClick={handleTab2}
          >
            <p className="is-size-4">Stay foolish</p>
          </li>
        </ul>
      </div>
      <div className="tabs-content py-6 px-4">
        {activeTab === "tab1" && (
          <div className="tab1-content">
            <p>
              Be a yardstick of quality. Some people aren&#39;t used to an
              environment where excellence is expected.
            </p>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="tab2-content">
            <p>
              Optimism doesn’t mean that you are blind to the reality of the
              situation. It means that you remain motivated to seek a solution
              to whatever problems arise.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
