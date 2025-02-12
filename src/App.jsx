import { CardProvider } from './context/SnapshotContext';
import SnapshotInfoPage from './pages/SnapshotInfoPage/SnapshotInfoPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CreateSnapshotPage from './pages/CreateSnapshotPage/CreateSnapshotPage';
import SnapshotPage from './pages/SnapshotPage/SnapshotPage';
import { SkillsProvider } from './context/AllSkillsContext';
import { CardsProvider } from './context/AllSnapshotsContext';

function App() {
  return (
    <BrowserRouter>
      <SkillsProvider>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={'/users/:userid/Profile'} replace />}
          />
          <Route
            path="/users/:userId/Profile"
            element={
              <CardsProvider>
                <ProfilePage />
              </CardsProvider>
            }
          />
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
      </SkillsProvider>
    </BrowserRouter>
  );
}

export default App;
