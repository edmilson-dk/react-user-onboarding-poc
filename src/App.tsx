import { useEffect, useState } from "react";

import reactLogo from "./assets/react.svg";
import "./App.css";

import { useOnboardingDriver } from "./onboarding-driver";

function App() {
  const [count, setCount] = useState(0);
  const { onboardingDriver } = useOnboardingDriver();

  useEffect(() => {
    onboardingDriver.defineSteps([
      {
        element: "#first-element-introduction",
        popover: {
          className: "first-step-popover-class",
          title: "Title on Popover",
          description: "Body of the popover",
        },
      },
      {
        element: "#second-element-introduction",
        popover: {
          title: "Title on Popover",
          description: "Body of the popover",
        },
      },
      {
        element: "#third-element-introduction",
        popover: {
          title: "Title on Popover",
          description: "Body of the popover",
        },
      },
    ]);

    onboardingDriver.start();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 id="first-element-introduction">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p id="second-element-introduction">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs" id="third-element-introduction">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
