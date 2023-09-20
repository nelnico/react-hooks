import { useState } from "react";
import useUpdateLogger from "./useUpdateLogger";

const UpdateLoggerHook = () => {
    const [name, setName] = useState('');
    useUpdateLogger(name);
    return (
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    );
}

export default UpdateLoggerHook