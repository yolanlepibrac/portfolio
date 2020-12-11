import * as React from "react";
import { Box, LINE_LENGTH, COLUMN_LENGTH, Tabs } from "../Box/Box";

interface BoxGridProps {
  currentTab: Tabs | null;
  mouse: React.MutableRefObject<any>;
}

export const BoxGrid: React.FunctionComponent<BoxGridProps> = ({
  mouse,
  currentTab,
}) => {
  const GRID = React.useMemo(() => {
    return new Array(COLUMN_LENGTH).fill(undefined).map((value, indexLine) => {
      return new Array(LINE_LENGTH)
        .fill(undefined)
        .map((value, indexColumn) => {
          return {
            position: {
              x: -indexColumn,
              y: -indexLine,
              z: 0,
            },
            speed: Math.random(),
            duration: 0.9 + Math.random() * 0.2,
          };
        });
    });
  }, []);

  React.useEffect(() => {
    console.log(mouse);
  }, [mouse]);

  return (
    <>
      {GRID.map((line, index) => {
        return (
          <>
            {line.map((box) => {
              return (
                <Box
                  key={index}
                  position={box.position}
                  speed={box.speed}
                  duration={box.duration}
                  currentTab={currentTab}
                />
              );
            })}
          </>
        );
      })}
    </>
  );
};
