import React, { useState } from "react";
import "./Flows.css";
import Flowchart from "../Flowchart/flowchart";
import History from "../History/History";
import Diamond from "../../../Assets/Gem.svg";
import ApexChartDailyGraph from "../Graph/DailyGraph";
import ApexChartMonthlyGraph from "../Graph/MonthlyGraph";
import ApexChartWeeklyGraph from "../Graph/WeeklyGraph";
import ApexChartYearlyGraph from "../Graph/YearlyGraph";

export default function MainFlow({  }) {
  const [activeFlow, setActiveFlow] = useState("graph"); // Default to "graph"
  // console.log("MainFlow =", viewCardIndex);

  const handleFlowClick = (flow) => {
    setActiveFlow(flow);
  };

  const [activeGraph, setActiveGraph] = useState("daily");

  return (
    <div className="main-flow">
      <div>
        <div
          onClick={() => handleFlowClick("graph")}
          className={`flow-graph ${activeFlow === "graph" ? "expanded" : ""}`}>
          <p className="flow-titles">Engagement Graph</p>
          {activeFlow === "graph" && (
            <div>
              <div className="graph-head-buttons">
                <div className="diamond-points">
                  <p>Total Points: </p>
                  <div className="total-points-box">
                    <img src={Diamond} className="diamond-img"></img>
                    <button className="total-points">
                      <p>500</p>
                    </button>
                  </div>
                </div>

                <div className="graph-buttons">
                  <button
                    onClick={() => setActiveGraph("daily")}
                    className={`graph-button ${
                      activeGraph === "daily" ? "active" : ""
                    }`}>
                    Daily
                  </button>
                  <button
                    onClick={() => setActiveGraph("weekly")}
                    className={`graph-button ${
                      activeGraph === "weekly" ? "active" : ""
                    }`}>
                    Week
                  </button>
                  <button
                    onClick={() => setActiveGraph("monthly")}
                    className={`graph-button ${
                      activeGraph === "monthly" ? "active" : ""
                    }`}>
                    Month
                  </button>
                  <button
                    onClick={() => setActiveGraph("yearly")}
                    className={`graph-button ${
                      activeGraph === "yearly" ? "active" : ""
                    }`}>
                    Yearly
                  </button>
                </div>
              </div>
              <div>
                {activeGraph === "daily" && <ApexChartDailyGraph />}
                {activeGraph === "weekly" && <ApexChartWeeklyGraph />}
                {activeGraph === "monthly" && <ApexChartMonthlyGraph />}
                {activeGraph === "yearly" && <ApexChartYearlyGraph />}
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => handleFlowClick("history")}
          className={`flow-history ${
            activeFlow === "history" ? "expanded" : ""
          }`}>
          <div className={`history-add ${activeFlow === "history" ? "expanded" : ""}`}>
            <p className="flow-titles">History</p>
            {/* <div className={`history-add-main ${activeFlow === "history" ? "expanded" : ""}`}> */}
            <button className="history-add-button">
              Add<i class="fa-solid fa-square-plus"></i>
            </button></div>
          {/* </div> */}
          {activeFlow === "history" && <History />}
        </div>
        <div
          onClick={() => handleFlowClick("chart")}
          className={`flow-chart ${activeFlow === "chart" ? "expanded" : ""}`}>
          <div className="flow-chart-head">
            <p className="flow-titles">Info Graphic Flow</p>
            {activeFlow === "chart" && (
              <div className="buttonContainer-flowchart-head">
                <button color="primary" className="discard-flowchart-head">
                  Discard
                </button>
                <button color="primary" className="saved-flowchart-head">
                  Save changes
                </button>
              </div>
            )}
          </div>
          {activeFlow === "chart" && <Flowchart />}
        </div>
      </div>
    </div>
  );
}
