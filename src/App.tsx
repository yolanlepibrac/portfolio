import "./App.css";
import * as React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./lib/theme";
import ThreeCanvas from "./components/Three/Three";
import { Header } from "./components/Header/Header";
import { Tabs } from "./components/Box/Box";

function App() {
  const [currentTab, setCurrentTab] = React.useState(Tabs.Home);

  const tabRef = React.useRef<Tabs>(Tabs.Home);
  // const handleCurrentTab = React.useCallback((tab) => {
  //   console.log(tab);
  //   tabRef.current = tab;
  // }, []);

  const handleCurrentTab = (tab: Tabs) => {
    setCurrentTab(tab);
  };

  return (
    <div
      className="App"
      style={{ background: "linear-gradient(45deg, #FF7979, #7B86FF)" }}
    >
      <ThemeProvider theme={theme}>
        <Header setCurrentTab={handleCurrentTab} currentTab={currentTab} />
        {/* <ThreeCanvas currentTab={currentTab} /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
