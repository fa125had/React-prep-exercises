import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleWindowResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="App">
      <main className="App-main">
        <div className="window-width">
          <p>{windowSize.width}px</p>
        </div>
        <div className="window-height">
          <p>{windowSize.height}px</p>
        </div>
      </main>
    </div>
  );
}

export default App;
