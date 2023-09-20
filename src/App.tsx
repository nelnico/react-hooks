
import LocalStorageComponent from "./CustomHooks/LocalStorageHook/LocalStorageComponent";
import { UseTimeoutComponent } from "./CustomHooks/TimeoutHook/UseTimeoutComponent";
import UpdateLoggerComponent from "./CustomHooks/UpdateLoggerHook/UpdateLoggerComponent";
import UseToggleComponent from "./CustomHooks/UseToggleHook/UseToggleComponent";

function App() {
  return (
    <div>
      <h2>Local Storage Hook</h2>
      <LocalStorageComponent />
      <hr />
      <h2>Update Logger Hook</h2>
      <UpdateLoggerComponent />
      <hr />
      <h2>Toggle Hook</h2>
      <UseToggleComponent />
      <hr />
      <h2>Timeout Hook</h2>
      <span>Does not work....need read up more on useRef, useCallback to figure it out</span>
      <UseTimeoutComponent />
    </div>
  );
}

export default App;
