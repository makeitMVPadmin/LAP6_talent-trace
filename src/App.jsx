import { app } from './firebase/firebase';
import { useEffect } from 'react';
import Buttons from './components/Buttons/Buttons';

function App() {
  useEffect(() => {
    console.log('Firebase App Initialized:', app);
  }, []);

  return (
    <div>
      <h1 className="bg-red-500">
        Check the console for Firebase connection status!
      </h1>
      <Buttons />
    </div>
  );
}

export default App;
