import { app } from './firebase/firebase';
import { useEffect } from 'react';
import Snapshot from './components/Snapshot/Snapshot';

function App() {
  useEffect(() => {
    console.log('Firebase App Initialized:', app);
  }, []);

  return (
    <>
      <h1 className=" bg-red-500">
        Check the console for Firebase connection status!
      </h1>
      <Snapshot />
    </>
  );
}

export default App;
