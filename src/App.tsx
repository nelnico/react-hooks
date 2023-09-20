import LocalStorageHook from "./LocalStorageHook/LocalStorageHook";
import UpdateLoggerHook from "./UpdateLoggerHook/UpdateLoggerHook";
import UseToggleHook from "./UseToggleHook/UseToggleHook";

function App() {
  return (
    <div>
      <h2>Local Storage Hook</h2>
      <LocalStorageHook />
      <hr />
      <h2>Update Logger Hook</h2>
      <UpdateLoggerHook />
      <hr />
      <h2>Toggle Hook</h2>
      <UseToggleHook />
    </div>
  );
}

export default App;
