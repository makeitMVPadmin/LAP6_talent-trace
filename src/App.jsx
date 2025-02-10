import { CardProvider } from './context/SnapshotContext';
import SnapshotInfoPage from './pages/SnapshotInfoPage/SnapshotInfoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CreateSnapshotPage from './pages/CreateSnapshotPage/CreateSnapshotPage';
import SnapshotPage from './pages/SnapshotPage/SnapshotPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userid/Profile" element={<ProfilePage />} />
        <Route path="/SnapshotInfo" element={<SnapshotInfoPage />} />
        <Route
          path="/users/:userid/CreateSnapshot"
          element={<CreateSnapshotPage />}
        />
        <Route
          path="/users/:userId/cards/:cardId"
          element={
            <CardProvider>
              <SnapshotPage />
            </CardProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
