import useLocalStorage from "./useLocalStorage";

const LocalStorageHook = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};

export default LocalStorageHook;
