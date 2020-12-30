import * as React from "react";
import { Card } from "../Card/Card";

export const AppContent = () => {
  const PROJECTS = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div
      style={{
        height: "100vh",
        marginTop: 56,
        backgroundColor: "rgba(255,255,255,1)",
        textAlign: "left",
      }}
    >
      {PROJECTS.map((project, index) => {
        return <Card project={project} key={index} />;
      })}
    </div>
  );
};
