
import { app } from './firebase/firebase';
import { useEffect } from 'react';
import Buttons from './components/Buttons/Buttons';
import { CardProvider } from './context/SnapshotContext';
import SnapshotInfoPage from './pages/SnapshotInfoPage/SnapshotInfoPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CreateSnapshotPage from './pages/CreateSnapshotPage/CreateSnapshotPage';
import SnapshotPage from './pages/SnapshotPage/SnapshotPage';
import { SkillsProvider } from './context/AllSkillsContext';
import { CardsProvider } from './context/AllSnapshotsContext';
import { CategoriesProvider } from './context/AllCategoriesContext';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <h1 className="bg-red-500">
        Check the console for Firebase connection status!
      </h1>
      <Buttons />
    </div>
    <BrowserRouter>
      <Header />
      <CategoriesProvider>
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
      </CategoriesProvider>
    </BrowserRouter>
  );
}

export default App;
