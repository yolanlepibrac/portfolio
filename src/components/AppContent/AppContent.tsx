import * as React from "react";
import { PROJECTS } from "../../constants/projects";
import { Card } from "../Card/Card";

export const AppContent = () => {
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
