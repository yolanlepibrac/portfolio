import "./App.css";
import * as React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./lib/theme";
import ThreeCanvas from "./components/Three/Three";
import { Header } from "./components/Header/Header";
import { Tabs } from "./components/Box/Box";
import { AppContent } from "./components/AppContent/AppContent";

function App() {
  const [currentTab, setCurrentTab] = React.useState(Tabs.Home);
  const [hoverTab, setHoverTab] = React.useState<Tabs | null>(null);

  const tabRef = React.useRef<Tabs>(Tabs.Home);
  // const handleCurrentTab = React.useCallback((tab) => {
  //   console.log(tab);
  //   tabRef.current = tab;
  // }, []);

  const handleCurrentTab = (tab: Tabs) => {
    setCurrentTab(tab);
  };

  const handleHoverTab = (tab: Tabs | null) => {
    setHoverTab(tab);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #1c4c9e, #174188, #133672, #0f2c5d, #0c2249)",
        height: "100vh",
      }}
    >
      <ThemeProvider theme={theme}>
        <Header
          setCurrentTab={handleCurrentTab}
          currentTab={currentTab}
          setHoverTab={handleHoverTab}
        />
        {/* <ThreeCanvas currentTab={hoverTab} /> */}
        <AppContent />
      </ThemeProvider>
    </div>
  );
}

export default App;
