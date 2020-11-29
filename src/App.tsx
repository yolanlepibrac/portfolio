
import './App.css';
import * as React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./lib/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      REACT APP
      </ThemeProvider>
    </div>
  );
}

export default App;
