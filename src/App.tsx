
import JokeGeneratorComponent from "./CustomHooks/JokeGeneratorHook/JokeGeneratorComponent";
import LocalStorageComponent from "./CustomHooks/LocalStorageHook/LocalStorageComponent";
import { UseTimeoutComponent } from "./CustomHooks/TimeoutHook/UseTimeoutComponent";
import UpdateLoggerComponent from "./CustomHooks/UpdateLoggerHook/UpdateLoggerComponent";
import UseToggleComponent from "./CustomHooks/UseToggleHook/UseToggleComponent";

function App() {
  return (
    <div>
      {/* <div><strong>Local Storage Hook</strong></div>
      <LocalStorageComponent /> */}
      
      {/* <div><strong>Update Logger Hook</strong></div>
      <UpdateLoggerComponent /> */}
      
      {/* <div><strong>Toggle Hook</strong></div>
      <UseToggleComponent /> */}

      {/* <div><strong>Timeout Hook</strong></div>
      <span>Does not work....need read up more on useRef, useCallback to figure it out</span>
      <UseTimeoutComponent /> */}

      <div><strong>Joke Generator Hook</strong></div>
      <JokeGeneratorComponent />


    </div>
  );
}

export default App;
