import { app } from "./firebase";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Firebase App Initialized:", app);
  }, []);

  return <h1 className=" bg-red-500">Check the console for Firebase connection status!</h1>;
}

export default App;
