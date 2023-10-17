import "@progress/kendo-theme-material/dist/all.css";
import { TileLayout } from "@progress/kendo-react-layout";
import { useState } from "react";
import "./App.css";
import ActiveJobs from "./ActiveJobs";
import TotalJobViews from "./TotalJobViews";
import MostPopularJob from "./MostPopularJob";
import JobCredits from "./JobCredits";

const initialPositions = [
  {
    col: 1,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    col: 3,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    col: 4,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    col: 3,
    colSpan: 2,
    rowSpan: 2,
  },
];

const getPositions = (initialPositions) => {
  // Try to get positions from local storage
  // If we have none in the storage then default to initial positions
  return (
    JSON.parse(localStorage.getItem("dashboard-positions")) || initialPositions
  );
};

function KendoDash() {
  const [positions, setPositions] = useState(getPositions(initialPositions));

  const widgets = [
    {
      header: "Total job views",
      body: <TotalJobViews />,
    },
    {
      header: "Active jobs",
      body: <ActiveJobs />,
    },
    {
      header: "Job Credits",
      body: <JobCredits />,
    },
    {
      header: "Most popular job",
      body: <MostPopularJob />,
    },
  ];

  const handleReposition = (e) => {
    setPositions(e.value);
    localStorage.setItem("dashboard-positions", JSON.stringify(e.value));
  };

  return (
    <div className="App">
      <TileLayout
        className="tileLayout"
        columns={4}
        rowHeight={255}
        positions={positions}
        gap={{ rows: 10, columns: 10 }}
        items={widgets}
        onReposition={handleReposition}
      />
    </div>
  );
}

export default KendoDash;
