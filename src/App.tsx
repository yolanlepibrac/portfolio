
import './App.css';
import * as React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./lib/theme";
import ThreeCanvas from './components/Three/Three';

function App() {
  return (
    <div className="App" style={{background:"linear-gradient(45deg, #FF7979, #7B86FF)"}}>
      <ThemeProvider theme={theme}>
      <ThreeCanvas/>
      </ThemeProvider>
    </div>
  );
}

export default App;
